import classes from "../../styles/SigninAndSignup.module.css";
import AuthContainer from "../AuthContainer";
import SubmitButton from "../SubmitButton";

export default function Signin() {
  return (
    <AuthContainer>
      <div className={classes.textInput}>
        <input type="email" placeholder="Email Address" />
      </div>

      <div className={classes.textInput}>
        <input type="password" placeholder="Password" />
      </div>

      <SubmitButton />
    </AuthContainer>
  );
}
