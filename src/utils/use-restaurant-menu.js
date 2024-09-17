import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    (async function () {
      fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    setResData(jsonData);
  };

  return resData;
};
