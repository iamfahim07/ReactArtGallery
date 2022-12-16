import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function VitruvianMan() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Drawing%2FVitruvian%20Man.jfif?alt=media&token=be5004a9-4c45-4e14-8787-ced75db45227"
        }
        alt={"Vitruvian Man"}
        width={"750"}
        height={"900"}
        artName={"Vitruvian Man"}
        artist={"Leonardo da Vinci"}
        year={"1490"}
        medium={"Pen, brown ink and watercolor over metalpoint on paper"}
        dimensions={"34.4 cm × 24.5 cm (13.5 in × 9.6 in)"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
