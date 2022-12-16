import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function Raphael() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Artists%2FRaphael.jpg?alt=media&token=9da3ab63-0ec2-47da-b2ec-22e4cc2b56ca"
        }
        alt={"Raphael"}
        width={"450"}
        height={"600"}
        artistName={"Raphael"}
        born={"March 28 or April 6, 1483 Urbino, Duchy of Urbino"}
        died={"April 6, 1520 Rome, Papal States"}
      >
        <p>
          Raffaello Sanzio da Urbino, known as Raphael, was an Italian painter
          and architect of the High Renaissance. His work is admired for its
          clarity of form, ease of composition, and visual achievement of the
          Neoplatonic ideal of human grandeur. Together with Michelangelo and
          Leonardo da Vinci, he forms the traditional trinity of great masters
          of that period.
          <br />
          <br />
          Raphael was enormously productive, running an unusually large workshop
          and, despite his early death at 37, leaving a large body of work. Many
          of his works are found in the Vatican Palace, where the frescoed
          Raphael Rooms were the central, and the largest, work of his career.
          The best known work is The School of Athens in the Vatican Stanza
          della Segnatura. After his early years in Rome, much of his work was
          executed by his workshop from his drawings, with considerable loss of
          quality. He was extremely influential in his lifetime, though outside
          Rome his work was mostly known from his collaborative printmaking.
          <br />
          <br />
          After his death, the influence of his great rival Michelangelo was
          more widespread until the 18th and 19th centuries, when Raphael's more
          serene and harmonious qualities were again regarded as the highest
          models. His career falls naturally into three phases and three styles,
          first described by Giorgio Vasari: his early years in Umbria, then a
          period of about four years (1504–1508) absorbing the artistic
          traditions of Florence, followed by his last hectic and triumphant
          twelve years in Rome, working for two Popes and their close
          associates.
          <br />
          <br />
          His father was court painter to the ruler of the small but highly
          cultured city of Urbino. He died when Raphael was eleven, and Raphael
          seems to have played a role in managing the family workshop from this
          point. He trained in the workshop of Perugino, and was described as a
          fully trained "master" by 1500. He worked in or for several cities in
          north Italy until in 1508 he moved to Rome at the invitation of the
          pope, to work on the Vatican Palace. He was given a series of
          important commissions there and elsewhere in the city, and began to
          work as an architect. He was still at the height of his powers at his
          death in 1520.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
