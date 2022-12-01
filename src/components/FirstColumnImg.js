import classes from "../styles/FirstColumnImg.module.css";

export default function FirstColumnImg({ img, alt }) {
  return (
    <div className={classes.subImage}>
      <img src={img} alt={alt} width="700" height="500" />
    </div>
  );
}
