import classes from "../styles/MainLayout.module.css";
import Nav from "./Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
