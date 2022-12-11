import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import classes from "../styles/Nav.module.css";

export default function Navbar() {
  const { currentUser, signout } = useAuth();

  return (
    <div className={classes.navBar}>
      <div className={classes.navOptions}>
        <NavLink to="/" className={(c) => (c.isActive ? classes.current : "")}>
          <h4>Home</h4>
        </NavLink>
        <NavLink
          to="/artists"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4>Artists</h4>
        </NavLink>
        <NavLink
          to="/arthistory"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4>Art History</h4>
        </NavLink>
        <NavLink
          to="/painting"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4>Painting</h4>
        </NavLink>
        <NavLink
          to="/drawing"
          className={(c) => (c.isActive ? classes.current : "")}
        >
          <h4>Drawing</h4>
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
              to="/signin"
              className={(c) => (c.isActive ? classes.current : "")}
            >
              Sign in
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
