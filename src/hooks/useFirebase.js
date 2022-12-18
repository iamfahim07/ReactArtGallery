import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { useState } from "react";

export default function useFirebase(data, setData, location) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        const data = snapshot.val().data;
        set(commentRef, { data });
        setData(data);
      } else {
        console.log("There is no data found!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  async function setFirebase(data) {
    await set(commentRef, { data });
  }

  return {
    loading,
    error,
    getFirebase,
    setFirebase,
  };
}
