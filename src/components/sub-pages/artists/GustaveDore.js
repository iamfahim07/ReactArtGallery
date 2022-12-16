import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function GustaveDore() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Artists%2FGustave%20Dore.jpg?alt=media&token=bd99f23f-d833-47bc-bb7a-e320ffd9cab8"
        }
        alt={"Gustave Doré"}
        width={"450"}
        height={"600"}
        artistName={"Gustave Doré"}
        born={"6 January 1832 Strasbourg, France"}
        died={"23 January 1883 Paris, France"}
      >
        <p>
          Paul Gustave Dore Louis Christophe Was a French artist, printmaker ,
          illustrator , comics artist , caricaturist , and sculptor Who worked
          primarily with wood-engraving .
          <br />
          <br />
          Doré was born in Strasbourg on 6 January 1832. By age 5 he was a
          prodigy artist, creating drawings that were mature beyond his years.
          Seven years later, he began carving in stone. At the age of 15, Doré
          began his career working as a caricaturist for the French paper Le
          journal pour rire . Wood-engraving was his primary method at this
          time. In the late 1840s and early 1850s, he made several text comics ,
          like Les Travaux d'Hercule (1847), Trois artistes misunderstood et
          malcontents (1851), Les Dés-agrments d'un voyage d'aménément (1851)
          and L ' History of Holy Russia(1854). Doré subsequently went on to win
          commissions to depict scenes from books by Cervantes , Rabelais ,
          Balzac , Milton , and Dante . He also illustrated "Gargantua et
          Pantagruel" in 1854.
          <br />
          <br />
          In 1853 Doré was asked to illustrate the works of Lord Byron . This
          commission was followed by additional work for British publishers,
          including a new illustrated Bible . In 1856 he produced 12 folio-size
          illustrations of The Legend of The Wandering Jew , which propagated
          longstanding antisemitic views of the time, for a short poem which
          Pierre-Jean de Béranger had derived from a novel of Eugène Sue of
          1845.
          <br />
          <br />
          In the 1860s he illustrated a French edition of Cervantes 's Don
          Quixote , and his depictions of the knight and his squire, Sancho
          Panza , have become so famous that they have influenced subsequent
          readers, artists, and stage and film directors' ideas of the physical
          "look" of the two characters. Doré also illustrated an oversized
          edition of Edgar Allan Poe 's " The Raven ", an endeavor that earned
          him 30,000 francs from publisher Harper & Brothers in 1883.
          <br />
          <br />
          Doré's later work included illustrations for new editions of Coleridge
          's Rime of the Ancient Mariner , Milton ' s Paradise Lost , Tennyson
          's Idylls of the King , The Works of Thomas Hood , and The Divine
          Comedy . Doré's work also appeared in the weekly newspaper The
          Illustrated London News.
          <br />
          <br />
          Doré never married and, following the death of his father in 1849, he
          continued to live with his mother , illustrating books until his death
          in Paris following a short illness. The city's Père Lachaise Cemetery
          contains his grave. At the time of his death in 1883, he was working
          on illustrations for an edition of Shakespeare's plays . The
          government of France made him a Chevalier de la Légion d'honneur in
          1861.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
