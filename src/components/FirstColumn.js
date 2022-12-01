import classes from "../styles/FirstColumn.module.css";

export default function FirstColumn({ children }) {
  return <div className={classes.firstColumn}>{children}</div>;
}
