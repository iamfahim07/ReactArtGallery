import ArtistImageAndInfoAndDescription from "../../ArtistImageAndInfoAndDescription";
import Comments from "../../Comments";

export default function PabloPicasso() {
  return (
    <>
      <ArtistImageAndInfoAndDescription
        img={
          "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Artists%2FPablo%20Picasso.jfif?alt=media&token=8461ad95-20d5-4eb8-bb7c-9b24057c7460"
        }
        alt={"Pablo Picasso"}
        width={"450"}
        height={"600"}
        artistName={"Pablo Picasso"}
        born={"25 October 1881 Málaga, Kingdom of Spain"}
        died={"8 April 1973 Mougins, France"}
      >
        <p>
          Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker,
          ceramicist and theatre designer who spent most of his adult life in
          France. Regarded as one of the most influential artists of the 20th
          century, he is known for co-founding the Cubist movement, the
          invention of constructed sculpture, the co-invention of collage, and
          for the wide variety of styles that he helped develop and explore.
          Among his most famous works are the proto-Cubist Les Demoiselles
          d'Avignon (1907), and the anti-war painting Guernica (1937), a
          dramatic portrayal of the bombing of Guernica by German and Italian
          air forces during the Spanish Civil War.
          <br />
          <br />
          Picasso demonstrated extraordinary artistic talent in his early years,
          painting in a naturalistic manner through his childhood and
          adolescence. During the first decade of the 20th century, his style
          changed as he experimented with different theories, techniques, and
          ideas. After 1906, the Fauvist work of the slightly older artist Henri
          Matisse motivated Picasso to explore more radical styles, beginning a
          fruitful rivalry between the two artists, who subsequently were often
          paired by critics as the leaders of modern art.
          <br />
          <br />
          Picasso's work is often categorized into periods. While the names of
          many of his later periods are debated, the most commonly accepted
          periods in his work are the Blue Period (1901-1904), the Rose Period
          (1904-1906), the African-influenced Period (1907-1909), Analytic
          Cubism (1909-1912), and Synthetic Cubism (1912-1919), also referred to
          as the Crystal period. Much of Picasso's work of the late 1910s and
          early 1920s is in a neoclassical style, and his work in the mid-1920s
          often has characteristics of Surrealism. His later work often combines
          elements of his earlier styles.
          <br />
          <br />
          Exceptionally prolific throughout the course of his long life, Picasso
          achieved universal renown and immense fortune for his revolutionary
          artistic accomplishments, and became one of the best-known figures in
          20th-century art.
        </p>
      </ArtistImageAndInfoAndDescription>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
