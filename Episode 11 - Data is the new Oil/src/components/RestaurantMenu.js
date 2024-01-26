import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // console.log(resId);

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // const fetchData = async () => {
  //     try {
  //         // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + resId );
  //         const data = menuList;
  //         // const json = await data.json();
  //         setResInfo(data)
  //         // console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
  //     }
  //     catch (error) {
  //         console.log(error.message);
  //     }
  // }

  if (resInfo === null) {
    const shimmerArray = [];
    for (let i = 0; i < 8; i++) {
      shimmerArray.push(<Shimmer key={i} />);
    }

    return <div className="shim-cont">{shimmerArray}</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[0].card.card.info;
  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);
  const categories =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  // console.log(itemCards[0].card.info)
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* <p className="font-bold text-lg"> {cuisines.join(',')} - {costForTwoMessage}</p> */}
      {/* Categories Accordion */}
      {/* This is a controlled componenet below */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index == showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <ul>
                {itemCards.map(
                    item => <li key={item.card.info.id} >{item.card.info.name} -- INR {(item.card.info.price) / 100}</li>
                )}
            </ul> */}
    </div>
  );
};

export default RestaurantMenu;
