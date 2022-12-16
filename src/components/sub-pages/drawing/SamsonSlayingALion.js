import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function SamsonSlayingALion() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Drawing%2FSamson%20Slaying%20a%20Lion.jpg?alt=media&token=ae420d69-c203-43aa-9217-cecb9ac128cf"
        }
        alt={"Samson Slaying a Lion"}
        width={"750"}
        height={"900"}
        artName={"Samson Slaying a Lion"}
        artist={"Gustave Dore"}
        year={"1866"}
        period={"Romanticism"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
