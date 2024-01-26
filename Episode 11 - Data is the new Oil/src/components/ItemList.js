import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const dummyImage = "vfavpj2spxe2oodddojj";
  
    return (
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="border-t-4  mb-4 p-4 w-full">
            <div className="flex justify-between">

               <div className="flex flex-col justify-center gap-5"> 
                <div className="flex gap-2">
                  <span className="text-lg font-semibold">{item.card.info.name} -</span>
                  <span className="text-lg font-semibold">₹{item.card.info.price / 100}</span>
                </div>
                <p className="text-sm font-light text-left ">{item.card.info.description}</p>
               </div>
              <div className="relative">
                <button className="bg-white text-green-600  text-center absolute w-4/5 h-7 rounded-lg top-20 left-2.5 shadow-md ">
                  Add +
                </button>
                <img
                  className="max-w-24  rounded-md"
                  alt="item-img"
                  src={CDN_URL + (item.card.info.imageId ? item.card.info.imageId : dummyImage)}
                />
              </div>

            </div>
            
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
