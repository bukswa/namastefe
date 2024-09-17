import { useParams } from "react-router-dom";
import { Shimmer } from "./components/shimmer";
import { useRestaurantMenu } from "./utils/use-restaurant-menu";
import { get } from "./utils/get";

const Restaurant = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { cuisines, name, costForTwoMessage } = get(
    restaurantMenu,
    "data.cards.2.card.card.info"
  );

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
          const { name, id, price } = card?.card?.info;
          return (
            <li key={id}>
              {name} - {price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
