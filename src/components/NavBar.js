import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import classes from "../styles/Nav.module.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const { currentUser, signout } = useAuth();

  const { pathname } = useLocation();

  const slideBar = () => {
    setShow((prevShow) => !prevShow);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className={classes.navBar}>
      <div className={classes.menuIcon}>
        {" "}
        <span
          className="material-icons-outlined menu"
          title="Menu"
          onClick={slideBar}
        >
          menu
        </span>
        <NavLink to="/">
          <span
            className="material-icons-outlined home"
            title="Home"
            onClick={() => {
              setShow(true);
            }}
          >
            home
          </span>
        </NavLink>
      </div>{" "}
      {/*new code*/}
      <div
        className={`${classes.navOptions} ${
          show ? classes.navSlideClose : classes.navSlideOpen
        }`}
      >
        <NavLink to="/" className={(c) => (c.isActive ? classes.current : "")}>
          <h4 onClick={slideBar}>Home</h4>
        </NavLink>
        <NavLink
          to="/artists"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4 onClick={slideBar}>Artists</h4>
        </NavLink>
        <NavLink
          to="/arthistory"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4 onClick={slideBar}>Art History</h4>
        </NavLink>
        <NavLink
          to="/painting"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4 onClick={slideBar}>Painting</h4>
        </NavLink>
        <NavLink
          to="/drawing"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4 onClick={slideBar}>Drawing</h4>
        </NavLink>
      </div>
      <div className={classes.account}>
        {currentUser ? (
          <div className={classes.username}>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={signout}
            >
              {" "}
              logout{" "}
            </span>
          </div>
        ) : (
          <>
            <NavLink
              onClick={() => {
                setShow(true);
              }}
              to={pathname === "/signin" ? "/signup" : "/signin"}
              className={() =>
                pathname === "/signin" || pathname === "/signup"
                  ? classes.current
                  : ""
              }
            >
              {pathname === "/signin" ? "Sign up" : "Sign in"}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
