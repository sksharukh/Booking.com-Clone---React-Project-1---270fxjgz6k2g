import { NavLink, useNavigate } from "react-router-dom";
import "../nav/Nav.css";
import { useAuth } from "../../pages/provider/Authprovider";

const Nav = () => {
  const navigate = useNavigate();
  const { isloggedin, setIsLoggedin } = useAuth()
  const userName = JSON.parse(sessionStorage.getItem("userName"));

  const navigateHandler = (path) => {
    navigate(path);
  };

  const logOut = () => {
    sessionStorage.removeItem("userToken")
    sessionStorage.removeItem("userName")
    setIsLoggedin(false)
    navigate("/signin")

  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <NavLink to={"/"} className="logo"><h2 >Booking.com</h2></NavLink>
        <div className="navItems">
          {isloggedin ? (
            <>
              {" "}
              <button className="navButton" onClick={logOut}>
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                className="navButton"
                onClick={() => navigateHandler("/signup")}
              >
                Register
              </button>
              <button
                className="navButton"
                onClick={() => navigateHandler("/signin")}
              >
                Sign in
              </button>
            </>
          )}
          {isloggedin && <span className="userdetails">{userName}</span>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
