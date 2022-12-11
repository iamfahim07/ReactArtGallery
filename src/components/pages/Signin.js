import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import classes from "../../styles/SigninAndSignup.module.css";
import AuthContainer from "../AuthContainer";
import SubmitButton from "../SubmitButton";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const { signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      navigate("/", {
        replace: true,
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to Sign in!");
    }
  }

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit}>
        <div className={classes.textInput}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={classes.textInput}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={classes.error}>{error}</p>}

        <SubmitButton type={"submit"} loading={loading} />
      </form>
    </AuthContainer>
  );
}
