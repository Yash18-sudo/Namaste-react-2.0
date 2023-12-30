import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from 'react';


const Body = ()=>{
    let [newList,setNewList] = useState(resList);
    return <div className="body">
        <div className="filter">
            <button className="filter-btn" 
                    onClick = {()=> {
                            let neList = resList.filter(
                                (res)=>(res.info.avgRating>=4.5)
                                );
                           setNewList(neList);
                           console.log(newList)   
                    }}
                    >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
        
            {newList.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}

        </div>
    </div>
}

export default Body;