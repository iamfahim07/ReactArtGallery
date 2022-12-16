import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function TheArcherAndTheMilkmaid() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Drawing%2FThe%20Archer%20and%20the%20Milkmaid.jpg?alt=media&token=ec20b25f-87f6-4a70-8c19-cc3a224259bb"
        }
        alt={"The Archer and the Milkmaid"}
        width={"750"}
        height={"900"}
        artName={"The Archer and the Milkmaid"}
        artist={"Jacob de Gheyn II"}
        year={"1610"}
        medium={"Engraving; first state of two (New Hollstein)"}
        dimensions={"16 5/16 x 12 15/16 in. (41.4 x 32.8 cm)"}
      />

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
