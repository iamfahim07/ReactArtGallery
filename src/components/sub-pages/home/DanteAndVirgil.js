import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function DanteAndVirgil() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Home%2FDante%20and%20Virgil.jpg?alt=media&token=244c9769-ec4f-44b1-8a7a-542e536934a2"
        }
        alt={"Dante and Virgil"}
        width={"750"}
        height={"900"}
        artName={"Dante and Virgil"}
        artist={"William-Adolphe Bouguereau"}
        year={"1850"}
        medium={"Oil on canvas"}
        period={"Neoclassicism"}
        dimensions={"281 cm * 225 cm (111 in * 89 in)"}
        location={"Musée d'Orsay, Paris"}
      >
        <p>
          Dante and Virgil is an 1850 oil on canvas painting by the French
          academic painter William-Adolphe Bouguereau. It is on display at the
          Musée d'Orsay in Paris.
          <br />
          <br />
          The painting depicts a scene from Dante's Divine Comedy, which
          narrates a journey through Hell by Dante and his guide Virgil. In the
          scene the author and his guide are looking on as two damned souls are
          entwined in eternal combat. One of the souls is an alchemist and
          heretic named Capocchio. He is being bitten on the neck by the
          trickster Gianni Schicchi, who had used fraud to claim another man's
          inheritance.
          <br />
          <br />
          It was Bougereau's third and ultimately unsuccessful attempt to win
          the coveted Prix de Rome, even though he had submitted a work that he
          knew would appeal to the judges. He did however succeed in his efforts
          later in the year when Shepherds Find Zenobia on the Banks of the
          Araxes won the consolation second prize of the year.
          <br />
          <br />
          These two men were modeled on real persons who were sentenced to death
          for the aforementioned offenses. Dante was aware of those stories and
          chose to incorporate them, along with many more, in his epic poem.
          Dante and Virgil stand behind Schinni and Cappochio. Dante watches as
          he moves away from his companion Virgil. If you look attentively,
          you'll see Virgil is staring to the side, as if he's witnessed things
          much more horrifying than the vampire-like attack in front of him.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
