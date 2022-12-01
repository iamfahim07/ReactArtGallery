import img from "../../../assets/images/Pablo Picasso/Dora Maar with cat.jfif";
import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function DoraMaarWithCat() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={img}
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
