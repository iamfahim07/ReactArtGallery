import Comments from "../../Comments";
import FirstColumn from "../../FirstColumn";
import FirstColumnImg from "../../FirstColumnImg";
import FirstColumnText from "../../FirstColumnText";
import ImageComponent from "../../ImageComponent";
import Layout from "../../Layout";
import SecondColumn from "../../SecondColumn";

export default function WhatIs3DArt() {
  return (
    <>
      <Layout>
        <FirstColumn>
          <h1>
            What Is 3D Art? - The Different Aspects of Three-Dimensional Art
          </h1>
          <FirstColumnImg
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FWhat%20Is%203D%20Art.jpg?alt=media&token=cf0842a4-0d6e-4c81-9b31-fab75acbd7ff"
            }
            alt={"What Is 3D Art"}
          />
          <FirstColumnText>
            <h6>
              What is 3D art and how do we define three-dimensional art? If we
              refer to anything that can be viewed from all sides and touched as
              three-dimensional art, then it becomes apparent that much of art
              has been 3D throughout time, such as the first beads that were
              worn, or the early clay sculptures made by our ancestors. Nowadays
              though, 3D has come to encompass many mediums and forms beyond the
              traditional sculptural types and several exist that cross the
              boundary between 2D and 3D art such as three-dimensional
              paintings. Let's explore this style further by looking at various
              three-dimensional art examples and types.
            </h6>

            <h2>What Is 3D Art?</h2>

            <p>
              Three-dimensional art objects possess physical space and can be
              seen from all angles and sides since they are represented in the
              dimensions of height, breadth, and depth. Two-dimensional art, on
              the other hand, can only be perceived in dimensions of height and
              breadth since they are produced on flat surfaces.
            </p>
            <p>
              Classic three-dimensional media such as reliefs and sculptures
              have existed since the dawn of time as proof of people's yearning
              for artistic expressiveness. For ages, sculptures have been the
              main three-dimensional art forms, changing continuously across
              different time periods of art history. However, innovative art
              groups that flourished in the 20th century questioned the
              traditional idea of fine art by employing unorthodox art mediums
              to communicate their aesthetics and beliefs. As a result of this
              process, performance and installation art emerged as modern
              versions of three-dimensional media.
            </p>

            <h2>Statues and Sculptures</h2>

            <p>
              Originally, humans made sculptures out of wood and stone. A
              little, stone-carved female figure from 230,000 years ago was the
              first preserved art piece. Throughout Europe, similar figures have
              been discovered. These statues are said to represent fertility and
              to have played important roles in numerous rites and festivities.
              These crudely carved art pieces represented our predecessors'
              initial attempts to convey their ideas in tangible form using
              natural materials. Traditional three-dimensional sculptures
              produced from these foundational artworks are:
            </p>

            <h2>Free-Standing Sculptures</h2>

            <p>
              This is the dominant three-dimensional form that has existed since
              antiquity. It is, as the name implies, a standalone art item that
              typically depicts humans, animals, or abstract themes. Artists
              build sculptures out of wood, stone, or metal, and the appropriate
              art media is determined by the scale and intricacy of the piece.
            </p>

            <h2>Relief Sculptures</h2>

            <p>
              Relief carvings, as compared to free-standing sculptures, protrude
              from the backdrop as pieces of a bigger work of art. There are
              numerous forms of relief. Bas reliefs are three-dimensional
              compositions in which figures stand out against a backdrop.
              High-relief art forms, on the other hand, include sculptures that
              protrude prominently from the foundation. Sunk relief sculpture is
              an art form associated with ancient Egypt in which depicted images
              are carved into the base.
            </p>

            <h2>Wood or Stone Carvings</h2>

            <p>
              Carving in wood or stone is the method of cutting off bits of
              substance until you get the required shape. As a result, it is
              characterized as a reductive method. This is one of the earliest
              art forms, dating back to ancient times. Wood is lightweight and
              can handle very small details, but it does not survive long. It is
              uncertain how the totem pole practice evolved as a mechanism for
              telling ancestral stories. The majority of Japan's, China's,
              Africa's, and Oceania's notable sculptures are made of wood.
              Significant ritual masks, notably in Africa, were made of wood and
              were elaborately crafted.
            </p>

            <h2>Casting</h2>

            <p>
              Casting is an artistic technique usually used when dealing with
              metal as a medium. The process involves pouring liquid metal into
              pre-fabricated molds to construct massive statues. Sculptures cast
              in bronze are typical examples of this artistic process. However,
              besides metal, there are other materials that one can also cast
              with. Concrete, epoxy, plaster of Paris, and clay are a few other
              examples of other time-setting materials that solidify after
              mixing two or more components together.
            </p>

            <h2>Glass Art</h2>

            <p>
              Glass art techniques entail shaping and modeling glass using warm,
              hot, or cold glass. Glass blowing, glass casting, and glass
              sculpting are among the techniques used in this artistic process.
              Rubbing, engraving, sandblasting, and acid etching are all typical
              cold glass processes. Glass casting is done by pouring molten
              glass into a mold and allowing it to solidify. Glass blowing is a
              method that includes collecting molten glass from a furnace and
              directing it through a blowpipe to make glass bubbles. Etching
              methods can entail adding acid to the glass's surface or blasting
              it with gritty materials to modify its texture and aesthetic.
            </p>
          </FirstColumnText>
        </FirstColumn>

        <SecondColumn>
          <ImageComponent
            to={"/arthistory/paintingvsdrawing"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FPainting%20vs%20Drawing.jpg?alt=media&token=478c6dde-6eba-41f4-ba94-a364332d648b"
            }
            alt={"Painting vs. Drawing"}
            text={
              <>
                Painting vs. Drawing - <br /> Tips for Learning How to Paint vs.
                Draw
              </>
            }
          />
          <ImageComponent
            to={"/arthistory/whatis2dart"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FWhat%20Is%202D%20Art.jpg?alt=media&token=9b0774b1-0652-45d8-92a9-40d001fe81cd"
            }
            alt={"What Is 2D Art"}
            text={
              <>
                What Is 2D Art? - <br /> Explore the Different Types of 2D Art
              </>
            }
          />
          <ImageComponent
            to={"/arthistory/fibonaccisequenceinart"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FFibonacci%20Sequence%20in%20Art.jpg?alt=media&token=e91cd094-a408-4cda-8467-7571541979fb"
            }
            alt={"Fibonacci Sequence in Art"}
            text={
              <>Fibonacci Sequence in Art - Using the Fibonacci Theory in Art</>
            }
          />
        </SecondColumn>
      </Layout>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
