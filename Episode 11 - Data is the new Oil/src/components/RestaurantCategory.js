// import { useState } from 'react';

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "▲" : "▼"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
