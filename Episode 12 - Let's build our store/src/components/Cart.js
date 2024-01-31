import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearItem,removeItem} from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(" This is cart item" , cartItems);

  const dispatch = useDispatch();

   const handleClearCart = () => {
    dispatch(clearItem());
   };

   const handleRemoveItem = () =>{
    dispatch(removeItem());
   }


  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">This is cart</h1>
      <div>
        <div className="flex gap-5 justify-center ">
          <button onClick={handleClearCart} className=" bg-slate-400">
            Clear Cart
          </button>
          <button onClick={handleRemoveItem} className=" bg-slate-400">
            Remove Item
          </button>
        </div>
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
