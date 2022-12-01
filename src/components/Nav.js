import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import NavBar from "./NavBar";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} alt="Logo" />
          <h1>Art Gallery</h1>
        </Link>
      </header>
      <NavBar />
    </nav>
  );
}
