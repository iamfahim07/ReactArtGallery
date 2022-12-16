import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import "../firebase";

export default function GetDownloadLink({ imgLink }) {
  const [error, setError] = useState(false);
  const [link, setLink] = useState("");

  async function getlink() {
    const storage = getStorage();

    const storageRef = ref(storage, imgLink);

    // getDownloadURL(storageRef).then((url) => {
    //   setLink(url);
    // });

    try {
      setError(false);
      const value = await getDownloadURL(storageRef);
      setLink(value);
    } catch (err) {
      console.log(err);
      setError("There is an Error");
    }
  }

  return (
    <>
      {error && <h1>{error}</h1>}
      <h1>{link}</h1>
      <button onClick={getlink}>Click</button>
    </>
  );
}
