import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="food logo" />
      </div>
      <div className="navigation">
        <nav>
          <ul>
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
            <button
              onClick={() => {
                setAuthBtn((authBtn) =>
                  authBtn === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {authBtn}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};
