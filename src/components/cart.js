import { useDispatch } from "react-redux";
import { SWIGGY_CDN_URL } from "../utils/constants.js";
import useSubscribeStore from "./store/use-subscribe-store";
import { reset } from "./store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSubscribeStore("cart.items");

  const clearCart = () => {
    dispatch(reset());
  };

  return (
    <div className="m-auto w-lvw text-center">
      <button onClick={() => clearCart()}>Clear the Cart</button>
      <p className="text-3xl">Cart</p>
      <div className="m-auto w-6/12 border border-black min-h-12">
        {items?.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          items?.map((item) => (
            <div
              key={item.id}
              className="shadow-md gap-3 border border-cyan-300 flex justify-between p-3 bg-slate-400"
            >
              <div>{item?.card?.info?.name}</div>
              <div>
                <img
                  className="h-56"
                  src={`${SWIGGY_CDN_URL}${item?.card?.info?.imageId}`}
                ></img>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
