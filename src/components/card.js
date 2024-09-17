import { useContext } from "react";
import { SWIGGY_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Card = (props) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla } =
    props?.resData?.info || {};
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="bg-slate-300">
      <img
        src={`${SWIGGY_CDN_URL}${cloudinaryImageId}`}
        alt="product image"
        className="p-1"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{sla?.deliveryTime} Mins</p>
      <p>{loggedInUser}</p>
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  const PromotedCard = (props) => {
    return (
      <div className="flex flex-col gap-4">
        <label>promoted</label>
        <Card {...props} />
      </div>
    );
  };
  return PromotedCard;
};

export default Card;
