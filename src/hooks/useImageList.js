import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useImageList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const db = getDatabase();
      const imageRef = ref(db, page);
      const imageQuery = query(imageRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(imageQuery);
        setLoading(false);
        setImages((prevImage) => {
          return [...prevImage, ...Object.values(snapshot.val())];
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchImages();
  }, [page]);

  return {
    loading,
    error,
    images,
  };
}
