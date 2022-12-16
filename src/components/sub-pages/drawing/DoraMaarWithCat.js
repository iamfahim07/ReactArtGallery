import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function DoraMaarWithCat() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Drawing%2FDora%20Maar%20with%20cat.jfif?alt=media&token=b7443a98-2e1e-4f74-a6f2-e6bf184bc1d6"
        }
        alt={"Dora Maar With Cat"}
        width={"750"}
        height={"900"}
        artName={"Dora Maar With Cat"}
        artist={"Pablo Picasso"}
        year={"1941"}
        period={"Cubism"}
        dimensions={"128.3 cm × 95.3 cm (50.5 in × 37.5 in)"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
