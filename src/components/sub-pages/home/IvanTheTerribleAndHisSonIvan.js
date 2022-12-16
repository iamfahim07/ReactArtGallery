import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function IvanTheTerribleAndHisSonIvan() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Home%2FIvan%20the%20Terrible%20and%20His%20Son%20Ivan.jfif?alt=media&token=e2d3f607-5b6f-4e56-9b5a-3f6e35f6303b"
        }
        alt={"Ivan the Terrible and His Son Ivan"}
        width={"750"}
        height={"900"}
        artName={"Ivan the Terrible and His Son Ivan"}
        artist={"Ilya Repin"}
        year={"1883-1885"}
        medium={"Oil on canvas"}
        period={"Realism"}
        dimensions={"199.5 cm * 254 cm (78.5 in * 100 in)"}
        location={"Tretyakov Gallery, Moscow"}
      >
        <p>
          Ivan the Terrible and His Son Ivan on 16 November 1581 is a painting
          by Russian realist artist Ilya Repin made between 1883 and 1885. It
          depicts the grief-stricken Tsar of Russia Ivan the Terrible cradling
          his dying son, the Tsarevich Ivan Ivanovich, shortly after the elder
          Ivan had dealt a fatal blow to his son's head in a fit of anger. The
          painting portrays the anguish and remorse on the face of the elder
          Ivan and the gentleness of the dying Tsarevich, forgiving his father
          with his tears.
          <br />
          <br />
          Repin used Grigoriy Myasoyedov, his friend and fellow artist, as the
          model for Ivan the Terrible, and writer Vsevolod Garshin for the
          Tsarevich. In 1885, upon completion of the oil-on-canvas work, Repin
          sold it to Pavel Tretyakov for display in his Tretyakov Gallery in
          Moscow.
          <br />
          <br />
          The artwork has been called one of Russia's most famous and
          controversial paintings. It has been vandalised twice, once in 1913
          and again in 2018. It remains on display in the Tretyakov Gallery.
          <br />
          <br />
          The Tsarevich Ivan's death had grave consequences for Russia, since it
          left no competent heir to the throne. After the Tsar's death in 1584,
          his unprepared son Feodor I succeeded him with Boris Godunov as de
          facto ruler. After Feodor's death, Russia entered a period of
          political uncertainty, famine and war known as the Time of Troubles.
          The details of the Tsarevich's death are unknown and controversial.
          The Tsarevich died in 1581 in the Alexandrov Kremlin, the residence of
          Tsar Ivan the Terrible from 1564 to 1581, and the centre of his
          oprichnina and de facto capital of the Russia.
          <br />
          <br />
          In a letter addressed to Nikita Zakharin and Andrey Shchelkalov in
          1581, Ivan the Terrible wrote; "he cannot go to Moscow because of his
          son's illness" without identifying the illness. Several contemporary
          Russian chronicles mention the Tsarevich's death without providing any
          details. According to the Piskarevsk Chronicle, the death occurred at
          midnight. None of these chronicles suggest the death of Ivan Ivanovich
          was violent. Other sources provide a more-detailed version of the
          death, saying the Tsarevich was mortally wounded by his father during
          an argument. One of these sources, the Mazurin chronicle, reports the
          following: In the summer of 7089, it was from the Sovereign Emperor
          and Grand Prince Ivan Vassilievitch, that his son, his greatness
          Prince Tsarevich Ivan Ivanovich, shining with wise meaning and grace
          and separated from the branch of life by a blade, received evil, and
          from this evil, he died. The sources indicate the event took place on
          14 November 1581 and that the Tsarevich would have died on 19
          November, but the dates reported vary. The diary of the dyak (clerk)
          Ivan Timofeev says; "some say (of the Tsarevich) that his life was
          extinguished because of blows by the hands of his father, after trying
          to prevent him from committing an ugly act".
          <br />
          <br />
          Contemporaneous foreign sources are more eloquent; Jacques Margeret, a
          French mercenary captain in service in Russia, wrote; "there is a
          rumour that he (the tsar) killed the eldest (son) with his own hand,
          which wasn't the case, because, although he struck him with the end of
          the rod and he was wounded by a blow, he did not die from this, but
          some time later, on a pilgrimage journey". Another version is reported
          by the papal diplomat Antonio Possevino. According to him, in November
          1581 in the Alexandrov Kremlin, Ivan the Terrible found his
          daughter-in-law Helen lying on a bench in undergarments.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
