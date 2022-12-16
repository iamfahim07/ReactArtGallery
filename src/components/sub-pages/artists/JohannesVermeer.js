import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function JohannesVermeer() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Artists%2FJohannes%20Vermeer.jpg?alt=media&token=7cdca170-7de4-4ad2-84d0-a657447b8145"
        }
        alt={"Johannes Vermeer"}
        width={"450"}
        height={"600"}
        artistName={"Johannes Vermeer"}
        born={"31 October 1632 Delft, Holland, Dutch Republic"}
        died={"15 December 1675 Delft, Holland, Dutch Republic"}
      >
        <p>
          Johannes Vermeer was a Dutch Baroque Period painter who specialized in
          domestic interior scenes of middle class life. During his lifetime, he
          was a moderately successful provincial genre painter, recognized in
          Delft and The Hague. Nonetheless, he produced relatively few paintings
          and evidently was not wealthy, leaving his wife and children in debt
          at his death.
          <br />
          <br />
          Vermeer worked slowly and with great care, and frequently used very
          expensive pigments. He is particularly renowned for his masterly
          treatment and use of light in his work.
          <br />
          <br />
          "Almost all his paintings," Hans Koningsberger wrote, "are apparently
          set in two smallish rooms in his house in Delft; they show the same
          furniture and decorations in various arrangements and they often
          portray the same people, mostly women."
          <br />
          <br />
          His modest celebrity gave way to obscurity after his death. He was
          barely mentioned in Arnold Houbraken's major source book on
          17th-century Dutch painting (Grand Theatre of Dutch Painters and Women
          Artists) and was thus omitted from subsequent surveys of Dutch art for
          nearly two centuries. In the 19th century, Vermeer was rediscovered by
          Gustav Friedrich Waagen and Théophile Thoré-Bürger, who published an
          essay attributing 66 pictures to him, although only 34 paintings are
          universally attributed to him today. Since that time, Vermeer's
          reputation has grown, and he is now acknowledged as one of the
          greatest painters of the Dutch Golden Age.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
