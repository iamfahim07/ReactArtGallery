import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function TheDeathOfSocrates() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Painting%2FThe%20Death%20of%20Socrates.jpg?alt=media&token=6b5ed271-b46e-4a6d-b6b9-74b514848df5"
        }
        alt={"The Death of Socrates"}
        width={"750"}
        height={"900"}
        artName={"The Death of Socrates"}
        artist={"Jacques-Louis David"}
        year={"1787"}
        medium={"Oil on canvas"}
        period={"Neoclassicism"}
        dimensions={"129.5 cm * 196.2 cm (51.0 in * 77.2 in)"}
        location={"Metropolitan Museum of Art, New York"}
      >
        <p>
          The Death of Socrates (1787) by Jacques-Louis David is a poignant and
          impassioned portrayal of the handing over of Socrates' poison while
          sitting on - quite literally - his deathbed. It is furthermore a
          famous example of a Neoclassical painting closely connected to the
          French Revolution - we will explore it in more detail in this article.
          <br />
          <br />
          Below we will start with a brief contextual analysis of The Death of
          Socrates by Jacques-Louis David, looking at the historical events that
          occurred when David painted it, who commissioned it, as well as how
          Socrates died. We will then look at a formal analysis, exploring
          Jacques-Louis David’s stylistic approach and rendering of the painting
          – we will utilize several art elements and principles as guideposts to
          help us understand the visual components that make The Death of
          Socrates painting.
          <br />
          <br />
          It is believed that The Death of Socrates was commissioned by either
          Charles-Louis or Charles-Michel Trudaine de la Sablière in 1786.
          However, there are scholarly debates around the validity of this as
          the painting could have been commissioned by the other Trudaine
          brother. When Jacques-Louis David completed The Death of Socrates in
          1787, the political and social climate was on the cusp of the French
          Revolution, which started in 1789. There were various reasons that
          catalyzed the revolution, especially the inequalities between the
          people and the monarchy, which was headed by King Louis XVI and his
          wife Marie Antoinette. Jacques-Louis David was a supporter of the
          revolution and reportedly acquaintances with the often-termed tyrant,
          Maximilien Robespierre, who was a key figure in various parts of the
          revolution, including the Reign of Terror that occurred around 1793.
          <br />
          <br />
          Robespierre was also part of the political Jacobin Club, of which
          David was a member. However, before the events of the French
          Revolution Jacques-Louis David’s paintings conveyed revolutionary
          ideas like republicanism, patriotism, heroism, fraternity, and a
          return to Classical art subjects and ideals. A notable example of this
          includes his earlier The Oath of the Horatii (1784), which portrays a
          scene based on a Roman narrative.
          <br />
          <br />
          Socrates was an ancient Athenian philosopher and widely known as the
          “founding father of Western philosophy”. He reportedly did not write
          any of his philosophical beliefs and ideals and expressed these
          through oration. His legacy was continued through his students Plato
          and Xenophon, who were also philosophers from Athens. They wrote
          various texts that are often referred to as the “Socratic dialogues”
          related to Socrates’ teachings and dialogues. Plato covered Socrates’
          fate – from his trial to his death – in four dialogues, namely,
          Euthyphro (c. 380 BCE), the Apology (c. 399 to 387 BCE), Crito (c. 360
          BCE), and finally, Phaedo (C. 360 BCE). Phaedo was about Socrates’
          time in prison and his imminent death, which was by drinking hemlock –
          a poisonous plant. However, the question arises: Why was Socrates in
          prison? He was tried for several crimes, such as “corrupting the
          youth” with his ideas and philosophies. As a result, he was sentenced
          to death. Socrates did not compromise on what he believed in and chose
          to die instead, surrounded by his students.
          <br />
          <br />
          Phaedo explored his last dialogues about the soul and its immortality
          – reportedly the title was also understood to be On the Soul for those
          who lived during the ancient times. Plato also wrote it from the
          viewpoint of Phaedo of Elis, who narrated the story to the Pythagorean
          philosopher Echecrates.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
