import { SWIGGY_CDN_URL } from "../utils/constants";

export const Card = (props) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla } =
    props?.resData?.info || {};
  return (
    <div className="card">
      <img src={`${SWIGGY_CDN_URL}${cloudinaryImageId}`} alt="product image" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{sla?.deliveryTime} Mins</p>
    </div>
  );
};
