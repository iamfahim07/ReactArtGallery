import { useCallback, useMemo, useRef, useState } from "react";
import classes from "../styles/Comments.module.css";

export default function Comments() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const months = useMemo(() => {
    return [
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
  }, []);

  function dynamicHeight(e) {
    e.target.style.height = "50px";
    const h = e.target.scrollHeight;
    e.target.style.height = `${h}px`;
  }

  const commentsContainer = useMemo(() => {
    return [];
  }, []);

  const commentTemplate = useCallback(() => {
    return (
      <div key={Math.random()} className={classes.userContainer}>
        <h3 className={classes.name}>Anonymous</h3>
        <p className={classes.dateText}>{`${
          months[new Date().getMonth()]
        } ${new Date().getDate()}, ${new Date().getFullYear()}`}</p>
        <p className={classes.commentText}>{inputValue}</p>
        <span
          title="Edit comment"
          className={`material-icons-outlined ${classes.commentEdit}`}
          onClick={editComment}
        >
          edit
        </span>
        <span
          title="Delete comment"
          className={`material-icons-outlined ${classes.commentDelete}`}
        >
          delete
        </span>
      </div>
    );
  }, [inputValue, months]);

  const addComment = useCallback(() => {
    if (/^\s/.test(inputValue) || inputValue === "") return setInputValue("");
    commentsContainer.push(commentTemplate());
    setData(commentsContainer);
    setInputValue("");
    inputRef.current.style.height = "50px";
    console.log(commentsContainer);
  }, [commentTemplate, commentsContainer, inputValue]);

  const editComment = () => {};

  return (
    <div className={classes.comments}>
      <textarea
        id={classes.input}
        value={inputValue}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        onInput={dynamicHeight}
        placeholder="Write a comment..."
      ></textarea>

      <button id={classes.button} onClick={addComment}>
        <span>Comment</span>
      </button>

      <div>{data}</div>
    </div>
  );
}
