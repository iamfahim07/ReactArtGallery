import classes from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return <div className={classes.layout}>{children}</div>;
}
