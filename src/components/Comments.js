import classes from "../styles/Comments.module.css";

export default function Comments() {
  return (
    <div className={classes.comments}>
      <textarea id={classes.input} placeholder="Write a comment..."></textarea>
      <button id={classes.button}>
        <span>Comment</span>
      </button>
    </div>
  );
}
