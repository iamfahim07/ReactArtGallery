import classes from "../styles/Images.module.css";

export default function ImagesComponent({ children }) {
  return <div className={classes.images}>{children}</div>;
}
