import { useSelector } from "react-redux";
import { get } from "../utils/get";

const useSubscribeStore = (path) => {
  const data = useSelector((store) => {
    return get(store, path);
  });

  return data;
};

export default useSubscribeStore;
