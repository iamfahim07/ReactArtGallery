import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function LeonardoDaVinci() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Artists%2FLeonardo%20da%20Vinci.jfif?alt=media&token=44ef5c1e-1d3b-49b8-bad4-2606837b2d2d"
        }
        alt={"Leonardo da Vinci"}
        width={"450"}
        height={"600"}
        artistName={"Leonardo da Vinci"}
        born={"15 April 1452 (Anchiano?) Vinci, Republic of Florence"}
        died={"2 May 1519 Clos Lucé, Amboise, Kingdom of France"}
      >
        <p>
          Leonardo da Vinci was an Italian polymath of the High Renaissance who
          is widely considered one of the greatest painters of all time. The
          Mona Lisa is the most famous of his works and the most famous portrait
          ever made. The Last Supper is the most reproduced religious painting
          of all time and his Vitruvian Man drawing is also regarded as a
          cultural icon. He is also known for his notebooks, in which he made
          drawings and notes on science and invention; these involve a variety
          of subjects including anatomy, cartography, painting, and
          palaeontology. Leonardo's collective works compose a contribution to
          later generations of artists rivalled only by that of his contemporary
          Michelangelo..
          <br />
          <br />
          Properly named Leonardo di ser Piero da Vinci, Leonardo was born out
          of wedlock to a notary, Piero da Vinci, and a peasant woman, Caterina,
          in Vinci, in the region of Florence, Italy. Leonardo was educated in
          the studio of the renowned Italian painter Andrea del Verrocchio. Much
          of his earlier working life was spent in the service of Ludovico il
          Moro in Milan, and he later worked in Rome, Bologna and Venice. He
          spent his last three years in France, where he died in 1519.
          <br />
          <br />
          Although he had no formal academic training, many historians and
          scholars regard Leonardo as the prime exemplar of the "Renaissance
          Man" or "Universal Genius", an individual of "unquenchable curiosity"
          and "feverishly inventive imagination." He is widely considered one of
          the most diversely talented individuals ever to have lived. According
          to art historian Helen Gardner, the scope and depth of his interests
          were without precedent in recorded history, and "his mind and
          personality seem to us superhuman, while the man himself mysterious
          and remote." Scholars interpret his view of the world as being based
          in logic, though the empirical methods he used were unorthodox for his
          time.
          <br />
          <br />
          Leonardo is revered for his technological ingenuity. He conceptualized
          flying machines, a type of armoured fighting vehicle, concentrated
          solar power, an adding machine, and the double hull. Relatively few of
          his designs were constructed or even feasible during his lifetime, as
          the modern scientific approaches to metallurgy and engineering were
          only in their infancy during the Renaissance. Some of his smaller
          inventions, however, entered the world of manufacturing unheralded,
          such as an automated bobbin winder and a machine for testing the
          tensile strength of wire. He is also sometimes credited with the
          inventions of the parachute, helicopter, and tank. He made substantial
          discoveries in anatomy, civil engineering, geology, optics, and
          hydrodynamics, but he did not publish his findings and they had little
          to no direct influence on subsequent science.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
