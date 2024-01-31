import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props)=>{
    const{resData}=props;
    const {name, cuisines,avgRating, costForTwo,cloudinaryImageId,locality} = resData.info;
    const { loggedInUser } = useContext(UserContext);

    return (<div className="res-card bg-slate-200 m-2 flex flex-col w-64 h-80 p-4 rounded-lg shadow-md max-h-full">
    <img
      className="res-logo w-full h-1/2 mb-2 object-cover rounded-md "
      alt="res-logo"
      src={CDN_URL + cloudinaryImageId}
    />
    <h3 className="text-lg font-semibold mb-1 overflow-ellipsis overflow-hidden whitespace-nowrap">{name}</h3>
    <h4 className="text-sm text-gray-600 mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{cuisines.join(", ")}</h4>
    <h4 className="text-sm text-gray-600 mb-1">{locality}</h4>
    <h4 className="text-sm font-semibold mb-1">Rating: {avgRating}</h4>
    <h4 className="text-sm font-semibold">Cost for Two: {costForTwo}</h4>
    <h4>{loggedInUser}</h4>
  </div>)

};

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;