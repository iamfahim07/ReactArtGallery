import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { useState } from "react";

export default function useDatabase(location) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const db = getDatabase();
  const commentRef = ref(db, `comments/${location}`);
  const commentQuery = query(commentRef, orderByKey());

  async function getFirebase() {
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

  async function setFirebase(receiveData) {
    await set(commentRef, { receiveData });
  }

  return {
    data,
    loading,
    error,
    getFirebase,
    setFirebase,
  };
}
