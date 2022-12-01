import { Link } from "react-router-dom";
import classes from "../styles/Image.module.css";

export default function ImageComponent({ to, img, alt, text }) {
  return (
    <div className={classes.image}>
      <Link to={to}>
        <div className={classes.imageContainer}>
          <img src={img} alt={alt} />
        </div>

        <div className={classes.textContainer}>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}
