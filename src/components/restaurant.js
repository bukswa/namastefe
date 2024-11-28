import { useParams } from "react-router-dom";
import { Shimmer } from "./shimmer";
import { useRestaurantMenu } from "../utils/use-restaurant-menu";
import { get } from "../utils/get";
import { useDispatch } from "react-redux";
import { addItem } from "./store/cart-slice";

const Restaurant = () => {
  const { resId } = useParams();

  const dispatch = useDispatch();

  const handleAddItem = (card) => {
    dispatch(addItem(card));
  };

  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { cuisines, name, costForTwoMessage } = get(
    restaurantMenu,
    "data.cards.2.card.card.info"
  );

  console.log(restaurantMenu?.data?.cards);

  // [4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.categories[0].title

  const itemCards =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards ||
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      .card.card?.itemCards;

  return (
    <div>
      <h1>Welcome to Restaurant Page: {name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <hr></hr>
      <ul>
        {itemCards?.map((card) => {
          const { name, id, price } = card?.card?.info || null;
          return (
            <li key={id} className="p-4 flex">
              <div className="flex flex-1">
                {name} - {price}
              </div>
              <div className="flex flex-1">
                <button
                  className="border border-black rounded-md p-2  bg-lime-600 text-white"
                  onClick={() => {
                    handleAddItem(card);
                  }}
                >
                  Add to Cart
                </button>
              </div>
              {/* onClick={() => addToCart(id)} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
