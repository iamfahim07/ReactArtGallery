import classes from "../styles/SecondColumn.module.css";

export default function SecondColumn({ children }) {
  return (
    <div className={classes.secondColumn}>
      <h2>More...</h2>
      {children}
    </div>
  );
}
