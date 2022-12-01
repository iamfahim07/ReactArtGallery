import { Link } from "react-router-dom";
import classes from "../../styles/SigninAndSignup.module.css";
import btnclasses from "../../styles/SubmitButton.module.css";
import AuthContainer from "../AuthContainer";

export default function Signup() {
  return (
    <AuthContainer>
      <div className={classes.textInput}>
        <div className={classes.nameWrapper}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className={classes.textInput}>
        <input type="email" placeholder="Email Address" />
      </div>

      <div className={classes.textInput}>
        <input type="password" placeholder="Password" />
      </div>

      <div className={btnclasses.buttonWraper}>
        <button className={btnclasses.button}>
          <span>Create an account</span>
        </button>

        <div className={btnclasses.txt}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </AuthContainer>
  );
}
