import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.3164945&lng=78.03219179999999");
        const json = await data.json();
        setListOfRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    }

    //Conditional Rendering
    if (listOfRestaurant.length === 0) {
        const shimmerArray = [];
        for (let i = 0; i < 10; i++) {
            shimmerArray.push(<Shimmer key={i} />);
        }

        return <div className="shim-cont">{shimmerArray}</div>;
    }

    return <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="searchBox" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />

                <button onClick={() => { 
                    
                 const filteredRestaurant = listOfRestaurant.filter(
                    (res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                );
                setFilteredRestaurant(filteredRestaurant);    
                               
                    
                 }}>Search</button>
            </div>
            <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => (res.info.avgRating > 4.5)
                    );
                    setListOfRestaurant(filteredList);
                    //    console.log(filteredList)   
                }}
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">

            {filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}

        </div>
    </div>
}

export default Body;