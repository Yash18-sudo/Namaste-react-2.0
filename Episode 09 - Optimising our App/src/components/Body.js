import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([null]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.152063&lng=79.605286");
            // const json = await data.json();
            const json = resList;
            // console.log(json);
            setListOfRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        }
        catch(error){
            console.log(error.message);
        }
        
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
          <>
            <h1>"You are offline. Please check your internet connection."</h1>
          </>
        );
      }
      


    //Conditional Rendering
    if (listOfRestaurant == null) {
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
                <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link>
                
            ))}

        </div>
    </div>
}

export default Body;