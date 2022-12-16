import { useState } from "react";
import classes from "../styles/MainLayout.module.css";
import overlayClasses from "../styles/Overlay.module.css";
import Nav from "./Nav";

export default function MainLayout({ children }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Nav show={show} setShow={setShow} />
      <div className={overlayClasses.overlay} onClick={() => setShow(true)}>
        <main className={classes.main}>
          <div className={classes.container}>{children}</div>
        </main>
      </div>
    </>
  );
}
