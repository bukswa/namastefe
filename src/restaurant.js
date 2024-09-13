import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./utils/constants";
import { Shimmer } from "./components/shimmer";

export const Restaurant = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    setRestaurantMenu(jsonData);
  };

  if (restaurantMenu === null) return <Shimmer />;

  const { cuisines, name, costForTwoMessage } =
    restaurantMenu?.data?.cards[2].card.card.info;

  const itemCards =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards ||
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      .card.card?.itemCards;
  console.log(
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
      .card.card.itemCards
  );

  return (
    <div>
      <h1>Welcome to Restaurant Page: {name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <hr></hr>
      <ul>
        {itemCards?.map((card) => {
          console.log(card);
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
