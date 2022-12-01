import img from "../../../assets/images/Vincent van Gogh/Nursery on Schenkweg.jpg";
import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function NurseryOnSchenkweg() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={img}
        alt={"Nursery on Schenkweg"}
        width={"750"}
        height={"900"}
        artName={"Nursery on Schenkweg"}
        artist={"Vincent van Gogh"}
        year={"1882"}
        medium={
          "Black chalk, graphite, pen, brush, and ink, heightened with white body color on laid paper watermarked ED & CIE (in a cartouche)"
        }
        dimensions={"11 5/8 x 23 1/16in. (29.6 x 58.5cm)"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
