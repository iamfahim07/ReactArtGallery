import { useEffect, useState } from "react";
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
  const [show, setShow] = useState(false);

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

  const { name, id, stringDate, edit, stringNewDate, userId } = obj;

  const date = new Date(stringDate);
  const newDate = new Date(stringNewDate);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const { uid } = currentUser;
      return uid === userId ? setShow(true) : setShow(false);
    } else {
      setShow(false);
    }
  }, [currentUser, userId]);

  return edit ? (
    <div className={classes.userContainer}>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.dateText}>{`${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`}</p>
      {stringNewDate && (
        <p className={classes.updatedDateText}>
          Last updated:{" "}
          {`${
            months[newDate.getMonth()]
          } ${newDate.getDate()}, ${newDate.getFullYear()}`}
        </p>
      )}
      <p className={classes.commentText}>{obj.value}</p>
      {show && (
        <span
          title="Edit comment"
          className={`material-icons-outlined ${classes.commentEdit}`}
          id={id}
          onClick={editComment}
        >
          edit
        </span>
      )}
      {show && (
        <span
          title="Delete comment"
          className={`material-icons-outlined ${classes.commentDelete}`}
          id={id}
          onClick={deleteComment}
        >
          delete
        </span>
      )}
    </div>
  ) : (
    show && (
      <div key={id} className={classes.userContainer}>
        <h3 className={classes.name}>{name}</h3>
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
    )
  );
}
