import classes from "../styles/AuthContainer.module.css";

export default function AuthContainer({ children }) {
  return (
    <div className={classes.column}>
      <div className={classes.form}>{children}</div>
    </div>
  );
}
