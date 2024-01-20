import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer.js";
import {useParams} from "react-router-dom";
import menuList from '../utils/mockMenuList.js';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);    
    const  {resId}  = useParams();
console.log(resId);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + resId );
            const data = menuList;
            // const json = await data.json();
            setResInfo(data)
            // console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    if (resInfo.length === 0) {
        const shimmerArray = [];
        for (let i = 0; i < 8; i++) {
            shimmerArray.push(<Shimmer key={i} />);
        }

        return <div className="shim-cont">{shimmerArray}</div>;
    }


    const {itemCards} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards[0].card.info)
    return (
        <div className="menu">
           <h1>Menu</h1>
            
            <ul>
                {itemCards.map(
                    item=> <li key={item.card.info.id} >{item.card.info.name} -- INR {(item.card.info.price)/100}</li> 
                )}
            </ul>
            
        </div>
    )


}

export default RestaurantMenu;
