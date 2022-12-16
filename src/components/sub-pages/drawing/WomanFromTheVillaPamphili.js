import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function WomanFromTheVillaPamphili() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Drawing%2FWoman%20from%20the%20Villa%20Pamphili.jpg?alt=media&token=6a08468d-640e-4838-af3c-8d5fa9bfc30e"
        }
        alt={"Woman from the Villa Pamphili"}
        width={"750"}
        height={"900"}
        artName={"Woman from the Villa Pamphili"}
        artist={"Jacques-Louis David"}
        year={"1775/1780"}
        medium={"black ink with gray wash over graphite on laid paper"}
        dimensions={"21.2 x 15 cm (8 3/8 x 5 7/8 in.)"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
