import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineState } from "../utils/use-online-state";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  const onlineStatus = useOnlineState();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      <div className="logo">
        <img className="w-24" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="mr-8 flex items-center">
        <nav>
          <ul className="flex pl-8 gap-4">
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <button
                className="border border-black pl-3 pr-3 bg-red-200 rounded-md"
                onClick={() => {
                  setAuthBtn((authBtn) =>
                    authBtn === "Login" ? "Logout" : "Login"
                  );
                }}
              >
                {authBtn}
              </button>
            </li>
            <li>
              <h4 className="font-bold">
                {authBtn === "Logout" && loggedInUser}
              </h4>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
