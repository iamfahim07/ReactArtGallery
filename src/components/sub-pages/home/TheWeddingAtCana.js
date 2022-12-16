import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function TheWeddingAtCana() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Home%2FThe%20Wedding.jpg?alt=media&token=82ada8ea-dfdd-4382-878f-1c54c169fa04"
        }
        alt={"The Wedding"}
        width={"750"}
        height={"900"}
        artName={"The Wedding at Cana"}
        artist={"Paolo Veronese"}
        year={"1563"}
        medium={"Oil on canvas"}
        period={"Italian Renaissance"}
        dimensions={"6.77 m * 9.94 m (267 in * 391 in)"}
        location={"Louvre Museum"}
      >
        <p>
          The Wedding Feast at Cana (Nozze di Cana, 1562-1563), by Paolo
          Veronese, is a representational painting that depicts the biblical
          story of the Marriage at Cana, at which Jesus miraculously converts
          water into red wine (John 2:1-11). Executed in the Mannerist style
          (1520-1600) of the late Renaissance, the large-format (6.77 m * 9.94
          m) oil painting comprehends the stylistic ideal of compositional
          harmony, as practised by the artists Leonardo, Raphael, and
          Michelangelo.
          <br />
          <br />
          The art of the High Renaissance (1490-1527) emphasised human figures
          of ideal proportions, balanced composition, and beauty, whereas
          Mannerism exaggerated the Renaissance ideals - of figure, light, and
          colour - with asymmetric and unnaturally elegant arrangements achieved
          by flattening the pictorial space and distorting the human figure as
          an ideal preconception of the subject, rather than as a realistic
          representation.
          <br />
          <br />
          The visual tension among the elements of the picture and the thematic
          instability among the human figures in The Wedding Feast at Cana
          derive from Veronese's application of technical artifice, the
          inclusion of sophisticated cultural codes and symbolism (social,
          religious, theologic), which present a biblical story relevant to the
          Renaissance viewer and to the contemporary viewer.
          <br />
          <br />
          From the 16th to the 18th centuries, the painting hung in the
          refectory of the San Giorgio Monastery. In 1797, soldiers of
          Napoleon's French Revolutionary Army plundered the picture as war
          booty during the Italian campaigns of the French Revolutionary Wars
          (1792-1802). The pictorial area (67.29 m2) of the canvas makes The
          Wedding Feast at Cana the most expansive picture in the paintings
          collection of the Musée du Louvre.
          <br />
          <br />
          At Venice, on 6 June 1562, the Black Monks of the Order of Saint
          Benedict (OSB) commissioned Paolo Veronese to realise a monumental
          painting (6.77 m * 9.94 m) to decorate the far wall of the monastery's
          new refectory, designed by the architect Andrea Palladio, at the San
          Giorgio Monastery, on the eponymous island. In their business contract
          for the commission of The Wedding Feast at Cana, the Benedictine monks
          stipulated that Veronese be paid 324 ducats; be paid the costs of his
          personal and domestic maintenance; be provided a barrel of wine; and
          be fed in the refectory.Aesthetically, the Benedictine contract
          stipulated that the painter represent “the history of the banquet of
          Christ's miracle at Cana, in Galilee, creating the number of human
          figures that can be fully accommodated”, and that he use optimi colori
          (optimal colours) — specifically, the colour ultramarine, a deep-blue
          pigment made from lapis lazuli, a semi-precious, metamorphic rock.
          Assisted by his brother, Benedetto Caliari, Veronese delivered the
          completed painting in September 1563, in time for the Festa della
          Madonna della Salute, in November.
          <br />
          <br />
          In The Wedding Feast at Cana, Veronese represents the water-into-wine
          miracle of Jesus in the grand style of the sumptuous feasts of food
          and music that were characteristic of 16th-century Venetian society
          the sacred in and among the profane world where “banquet dishes not
          only signify wealth, power, and sophistication, but transfer those
          properties directly into the individual diner. An exquisite dish makes
          the eater exquisite.”
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
