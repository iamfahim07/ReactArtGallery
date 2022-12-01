import { Link } from "react-router-dom";
import classes from "../styles/SubmitButton.module.css";

export default function SubmitButton() {
  return (
    <div className={classes.buttonWraper}>
      <button className={classes.button}>
        <span>Sign in</span>
      </button>

      <div className={classes.or}>or</div>

      <Link to="/signup">
        <button className={classes.button}>Create an account</button>
      </Link>
    </div>
  );
}
