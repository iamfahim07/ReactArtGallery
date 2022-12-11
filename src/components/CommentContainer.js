import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import classes from "../styles/Comments.module.css";

export default function CommentContainer({
  obj,
  editComment,
  updateComment,
  deleteComment,
  dynamicHeight,
}) {
  const [updatedData, setUpdatedData] = useState(obj.value);

  const { currentUser } = useAuth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { id, date, edit, newDate } = obj;

  return edit ? (
    <div className={classes.userContainer}>
      <h3 className={classes.name}>{currentUser.displayName}</h3>
      <p className={classes.dateText}>{`${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`}</p>
      {newDate && (
        <p className={classes.updatedDateText}>
          Last updated:{" "}
          {`${
            months[new Date().getMonth()]
          } ${new Date().getDate()}, ${new Date().getFullYear()}`}
        </p>
      )}
      <p className={classes.commentText}>{obj.value}</p>
      <span
        title="Edit comment"
        className={`material-icons-outlined ${classes.commentEdit}`}
        id={id}
        onClick={editComment}
      >
        edit
      </span>
      <span
        title="Delete comment"
        className={`material-icons-outlined ${classes.commentDelete}`}
        id={id}
        onClick={deleteComment}
      >
        delete
      </span>
    </div>
  ) : (
    <div key={id} className={classes.userContainer}>
      <h3 className={classes.name}>{currentUser.displayName}</h3>
      <p className={classes.dateText}>{`${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`}</p>
      <textarea
        className={classes.updateInput}
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
        onInput={dynamicHeight}
        onFocus={dynamicHeight}
        autoFocus
      />
      <button
        className={classes.updateButton}
        id={id}
        onClick={() => updateComment(id, updatedData)}
      >
        <span>Update</span>
      </button>
      <span
        title="Edit comment"
        className={`material-icons-outlined ${classes.commentEdit}`}
        id={id}
      >
        edit
      </span>
      <span
        title="Delete comment"
        className={`material-icons-outlined ${classes.commentDelete}`}
        id={id}
        onClick={deleteComment}
      >
        delete
      </span>
    </div>
  );
}
