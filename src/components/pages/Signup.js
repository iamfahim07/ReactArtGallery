import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import classes from "../../styles/SigninAndSignup.module.css";
import btnclasses from "../../styles/SubmitButton.module.css";
import AuthContainer from "../AuthContainer";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password don't match");
    }

    const username = `${firstname} ${lastname}`;

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/", {
        replace: true,
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit}>
        <div className={classes.textInput}>
          <div className={classes.nameWrapper}>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
        </div>

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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={classes.textInput}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className={btnclasses.buttonWraper}>
          <button
            className={btnclasses.button}
            disabled={loading}
            type="submit"
          >
            <span>Create an account</span>
          </button>

          {error && (
            <p style={{ width: "100%" }} className={classes.error}>
              {error}
            </p>
          )}

          <div className={btnclasses.txt}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </form>
    </AuthContainer>
  );
}
