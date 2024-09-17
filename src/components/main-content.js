import { useContext, useEffect, useState } from "react";
// import { resList } from "../utils/mock-data";
import Card, { withPromotedLabel } from "./card";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import { SearchComponent } from "./search";

export const MainContent = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [listOfResToDisplay, setListOfResToDisplay] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const PromotedCard = withPromotedLabel(Card);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );
    const jsonData = await data.json();

    const parsedJSONData = JSON.parse(jsonData.contents);

    setListOfRes(
      parsedJSONData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfResToDisplay(
      parsedJSONData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setListOfResToDisplay(listOfRes);
  }, [listOfRes]);

  // conditional rendering
  return listOfRes?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-4 ml-3">
      <>
        <div className="flex gap-2">
          <input
            className="border border-black rounded-sm"
            type="text"
            placeholder="Enter product"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredResults = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue)
              );

              setListOfResToDisplay(filteredResults);
            }}
          >
            search
          </button>

          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setLoggedInUser(e.target.value)}
            className="border border-black pl-4 pr-4 rounded-sm"
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              const filteredRes = listOfRes.filter(
                (res) => res.info.avgRating >= 4.4
              );
              // eslint-disable-next-line react/prop-types
              setListOfResToDisplay(filteredRes);
            }}
          >
            Filter Top Restaurants{" "}
          </button>
        </div>
      </>
      <div className="flex gap-4">
        {listOfResToDisplay?.map((resta) => (
          <Link to={`/restaurants/${resta?.info?.id}`} key={resta?.info?.id}>
            {resta.info.promoted ? (
              <PromotedCard resData={resta} />
            ) : (
              <Card resData={resta} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
