import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import resList from '../utils/mockData';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([null]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUsername} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.152063&lng=79.605286");
      // const json = await data.json();
      const json = resList;
      // console.log(json);
      setListOfRestaurant(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      );
      // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>"You are offline. Please check your internet connection."</h1>;
  }

  // Conditional Rendering
  if (listOfRestaurant == null) {
    const shimmerArray = [];
    for (let i = 0; i < 10; i++) {
      shimmerArray.push(<Shimmer key={i} />);
    }

    return <div className="shim-cont">{shimmerArray}</div>;
  }

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter(
      (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurant(filteredList);
  };

  return (
    <div className="body flex flex-col items-center">
      <div className="filter flex items-center justify-center h-20 w-full">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="searchBox border border-black px-2 py-2 w-80 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
          />

          <button
            className="bg-blue-300 p-2 m-2 rounded-xl"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>

          <input
            type="text"
            className="searchBox border border-black px-2 py-2 w-50 rounded-lg focus:outline-none focus:border-blue-500"
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>

        <div>
          <button
            className="filter-btn bg-blue-300 p-2 m-8 rounded-xl flex items-center"
            onClick={() => {
              handleTopRatedFilter();
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex items-center justify-center flex-wrap w-4/5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
