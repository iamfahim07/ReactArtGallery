import classes from "../styles/FirstColumnText.module.css";

export default function FirstColumnText({ children }) {
  return <div className={classes.text}>{children}</div>;
}
