import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function MonaLisa() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Home%2FMona%20Lisa.jpg?alt=media&token=a4e5da78-6ead-4dce-9435-aff3ab9fc666"
        }
        alt={"Mona Lisa"}
        width={"750"}
        height={"900"}
        artName={"Mona Lisa"}
        artist={"Leonardo da Vinci"}
        year={"1503-1506, perhaps continuing until c. 1517"}
        medium={"Oil on poplar panel"}
        period={"High Renaissance"}
        dimensions={"77 cm * 53 cm (30 in * 21 in)"}
        location={"Louvre, Paris"}
      >
        <p>
          The Mona Lisa (c. 1503-1506) by Leonardo da Vinci seemingly needs no
          introduction as almost all the world is well acquainted with this
          mysterious beauty and Renaissance masterpiece. This is the painting we
          will explore in the article below.
          <br />
          <br />
          The widely held consensus on who commissioned the painting Mona Lisa
          by Leonardo da Vinci is Francesco del Giocondo; he was reportedly a
          silk merchant, and his wife was Lisa del Giocondo (her maiden name was
          Gherardini), who was the subject for the Mona Lisa. The term “mona”
          originates from the Italian word Monna, which is utilized as a manner
          of address. The famous portrait painting is also titled the Italian
          “La Gioconda” and the French “La Joconde”, which translates to
          “jocund” or “jovial”.
          <br />
          <br />
          Significant information about the Mona Lisa painting, and regarding
          the question, “Where is the Mona Lisa?” as well as the woman's
          identity originates from the Italian writer and historian Giorgio
          Vasari and his seminal text The Lives of the Most Excellent Painters,
          Sculptors and Architects (1550). Vasari is often quoted as writing,
          “Leonardo undertook to execute, for Francesco del Giocondo, the
          portrait of Mona Lisa for his wife, and after he had lingered over it
          for four years, he left it unfinished; and the work is today in the
          possession of King Francis of France, at Fontainebleau”. However, many
          scholars who have researched Leonardo da Vinci's life and the “Mona
          Lisa” painting have disputed the accuracy of Vasari's account due to
          his potential lack of information and prior knowledge of Da Vinci's
          circumstances at the time he wrote about it.
          <br />
          <br />
          Furthermore, because the version of the Mona Lisa in the Louvre Museum
          is reportedly “finished” questions arise about why Vasari mentioned
          that it was unfinished and whether he was referring to a possible
          other copy of the Mona Lisa. Other discovered sources have verified
          that Leonardo da Vinci worked on a painting of Lisa del Giocondo.
          Evidence was found in what is known as the “Heidelberg Document”,
          found by Dr. Armin Schlechter while he was cataloging the documents.
          He saw a note, which was dated October 1503 and written by Agostino
          Vespucci, who was a Florentine clerk and chancellor, on a 1477 copy
          from one of the letters of the Roman philosopher Marcus Tullius
          Cicero. On that note, Vespucci wrote about Leonardo da Vinci's project
          of painting Lisa del Giocondo. He also compared Da Vinci's work to
          Apelles of Kos, who was an ancient Greek painter.
          <br />
          <br />
          However, apparently, the Mona Lisa painting was never given to the
          commissioner, Francesco del Giocondo, and Da Vinci kept it with him
          until he died, possibly also adding the finishing touches to it.
          Reportedly, when he moved to France in 1516 to live and work at the
          Château du Clos-Lucé in Amboise, he also worked on the painting and
          left it to his apprentice known as Salaì. There is wide scholarly
          debate around the notion that there was more than one copy of the Mona
          Lisa, which makes the question we raised earlier, “Where is the Mona
          Lisa?”, more complex. Notably, the copy at the Prado Museum is thought
          to have been painted by Da Vinci's apprentice Salaì, and possibly
          copied while Leonardo da Vinci was working on his original copy.
          Furthermore, when the Prado copy was cleaned it also provided more
          visual information in terms of the colors utilized as it did not have
          the yellow layer that the Louvre's Mona Lisa has. Additionally, the
          composition also depicts two columns on either side of the Mona Lisa,
          which are not in full view in the Louvre's painting.
          <br />
          <br />
          Leonardo da Vinci, who painted the Mona Lisa, depicted the half-length
          portrait in a new way compared to the common profile (side) formats of
          portrait paintings. Here we see the sitter almost completely facing
          us, the viewers. This more frontal format was also believed to
          influence numerous other artists after the “Mona Lisa” painting. It
          was also believed that Leonardo da Vinci took inspiration from the
          Northern Renaissance painters who painted portraits in a similar
          manner to that of the Mona Lisa. A notable example that has been
          pointed out includes Portrait of a Young Man at Prayer (c. 1485-1494)
          by Hans Hemling.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
