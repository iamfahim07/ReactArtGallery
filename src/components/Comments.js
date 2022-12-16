import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import classes from "../styles/Comments.module.css";
import CommentContainer from "./CommentContainer";

export default function Comments() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function dynamicHeight(e) {
    e.target.style.height = "50px";
    const h = e.target.scrollHeight;
    e.target.style.height = `${h}px`;
  }

  //Fetching Comment From the firebase database
  useEffect(() => {
    async function fetchComment() {
      const db = getDatabase();
      const commentRef = ref(db, `comments/${pathname}`);
      const commentQuery = query(commentRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(commentQuery);
        setLoading(false);
        if (snapshot.exists()) {
          const newData = snapshot.val().data;
          set(commentRef, { newData });
          setData(newData);
        } else {
          console.log("There is no data found!");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchComment();
  }, [pathname]);

  //Updating Comment in the firebase database
  useEffect(() => {
    if (data.length > 0) {
      const db = getDatabase();
      const commentRef = ref(db, `comments/${pathname}`);
      set(commentRef, { data });
    }

    return () => {
      if (data.length === 0) {
        const db = getDatabase();
        const commentRef = ref(db, `comments/${pathname}`);
        set(commentRef, { data });
      }
    };
  }, [pathname, data]);

  //Adding Comment Function
  const addComment = () => {
    if (!currentUser)
      return navigate("/signin", {
        replace: true,
      });

    if (/^\s/.test(inputValue) || inputValue === "") return setInputValue("");

    const { uid } = currentUser;
    const { displayName } = currentUser;

    const uniqueId = nanoid();

    const comment = {
      userId: uid,
      name: displayName,
      id: uniqueId,
      value: inputValue,
      edit: true,
      stringDate: new Date().toString(),
      stringNewDate: "",
    };

    setData((prevState) => [comment, ...prevState]);

    setInputValue("");

    inputRef.current.style.height = "50px";
  };

  //Edit comment function
  const editComment = (e) => {
    const id = e.target.id;

    let current = data.find((obj) => obj.id === id);
    current.edit = false;

    setData((prevState) => [...prevState]);
  };

  //Update comment function
  const updateComment = (id, updatedData) => {
    let current = data.find((obj) => obj.id === id);
    current.value = updatedData;
    current.edit = true;
    current.stringNewDate = new Date().toString();

    setData((prevState) => [...prevState]);
  };

  //Delete comment function
  const deleteComment = (e) => {
    const id = e.target.id;

    const newData = data.filter((obj) => obj.id !== id);

    setData(newData);

    if (data) {
      const db = getDatabase();
      const commentRef = ref(db, `comments/${pathname}`);
      set(commentRef, { newData });
    }
  };

  return (
    <>
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

      {loading && <div>Loading...</div>}
      {error && <div>There is an error!</div>}
    </>
  );
}
