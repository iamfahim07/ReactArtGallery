import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";

export default function Navbar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navOptions}>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/artists">
          <h4>Artists</h4>
        </Link>
        <Link to="/arthistory">
          <h4>Art History</h4>
        </Link>
        <Link to="/painting">
          <h4>Painting</h4>
        </Link>
        <Link to="/drawing">
          <h4>Drawing</h4>
        </Link>
      </div>

      <div className={classes.account}>
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
}
