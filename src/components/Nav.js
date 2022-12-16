import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import NavBar from "./NavBar";

export default function Nav({ show, setShow }) {
  return (
    <nav className={classes.nav}>
      <header className={classes.header} onClick={() => setShow(true)}>
        <Link to="/">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/logo.png?alt=media&token=70891a12-117a-4869-b43a-c6c0d819f53b"
            }
            alt="Logo"
          />
          <h1>Art Gallery</h1>
        </Link>
      </header>
      <NavBar show={show} setShow={setShow} />
    </nav>
  );
}
