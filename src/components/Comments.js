import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import classes from "../styles/Comments.module.css";
import CommentContainer from "./CommentContainer";

export default function Comments() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const { currentUser } = useAuth();

  const navigate = useNavigate();

  function dynamicHeight(e) {
    e.target.style.height = "50px";
    const h = e.target.scrollHeight;
    e.target.style.height = `${h}px`;
  }

  //Adding Comment Function
  const addComment = () => {
    if (!currentUser)
      return navigate("/signin", {
        replace: true,
      });

    if (/^\s/.test(inputValue) || inputValue === "") return setInputValue("");

    const uid = nanoid();

    const comment = {
      id: uid,
      value: inputValue,
      edit: true,
      date: new Date(),
      newDate: false,
    };

    setData((prevState) => [comment, ...prevState]);

    setInputValue("");

    inputRef.current.style.height = "50px";
  };

  const editComment = (e) => {
    const id = e.target.id;

    let current = data.find((obj) => obj.id === id);
    current.edit = false;

    setData((prevState) => [...prevState]);
  };

  const updateComment = (id, updatedData) => {
    let current = data.find((obj) => obj.id === id);
    current.value = updatedData;
    current.edit = true;
    current.newDate = true;

    setData((prevState) => [...prevState]);
  };

  const deleteComment = (e) => {
    const id = e.target.id;

    const newData = data.filter((obj) => obj.id !== id);

    setData(newData);
  };

  return (
    <div className={classes.comments}>
      <textarea
        id={classes.input}
        value={inputValue}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        onInput={dynamicHeight}
        placeholder="Write a comment..."
      />

      <button id={classes.button} onClick={addComment}>
        <span>Comment</span>
      </button>

      {data &&
        data.map((obj) => (
          <CommentContainer
            key={obj.id}
            obj={obj}
            editComment={editComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            dynamicHeight={dynamicHeight}
          />
        ))}
    </div>
  );
}
