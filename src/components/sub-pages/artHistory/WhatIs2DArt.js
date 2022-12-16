import Comments from "../../Comments";
import FirstColumn from "../../FirstColumn";
import FirstColumnImg from "../../FirstColumnImg";
import FirstColumnText from "../../FirstColumnText";
import ImageComponent from "../../ImageComponent";
import Layout from "../../Layout";
import SecondColumn from "../../SecondColumn";

export default function WhatIs2DArt() {
  return (
    <>
      <Layout>
        <FirstColumn>
          <h1>What Is 2D Art? - Explore the Different Types of 2D Art</h1>
          <FirstColumnImg
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FWhat%20Is%202D%20Art.jpg?alt=media&token=9b0774b1-0652-45d8-92a9-40d001fe81cd"
            }
            alt={"What Is 2D Art"}
          />
          <FirstColumnText>
            <h6>
              What is 2D art exactly? Two-dimensional art is defined as having a
              composition that only has height and depth. The various types of
              2D artworks are usually defined by composition and medium. In
              today's article, we will be exploring the world of 2D artists and
              examples of 2D artworks.
            </h6>

            <h2>What Is 2D Art?</h2>

            <p>
              One of the most popular forms of art is two-dimensional art.
              Although it is an art form that has been around for hundreds of
              years, there is still something about 2D painting that tends to
              pique interest. It can be the ease with which it can be utilized
              to convey important concepts. Regardless of the cause, the various
              types of 2D artworks are a well-liked and adaptable method of
              expression.
            </p>
            <p>
              Any type of visual art that only has two dimensions is referred to
              as two-dimensional art. Sketches, paintings, printed art, and
              photographs are examples of 2D artworks. 3D artworks like statues,
              installations, and 3D pictures are not included in the category of
              2D art.
            </p>

            <h2>Types of 2D Artworks</h2>

            <p>
              Sketches, paintings, prints, and pictures are a few well-known
              forms of 2D art. Several materials, including charcoal, pencil,
              ink, watercolors, and oil paintings, can be used to produce them.
              Except for sculpture and architecture, the majority of traditional
              fine arts are two-dimensional. 2D art is adaptable, expressive,
              and capable of conveying a wide range of thoughts and feelings. 2D
              art is often also used to make flat but intricate patterns.
            </p>
            <p>
              Two-dimensional art is more widespread and useful than other 3D
              art forms because it is simple to move and show in a variety of
              contexts.
            </p>

            <h2>2D Drawing</h2>

            <p>
              If an artist uses conventional techniques, the majority of
              drawings are two-dimensional. Typically, 2D art drawings are
              created on paper with colored ink, pencil, charcoal, or chalk. Of
              course, thanks to technological advancements, it is now feasible
              to use digital techniques with 2D art. Technology transforms an
              example of 2D art into a 3D work of art.
            </p>

            <h2>2D Paintings</h2>

            <p>
              Another common example of 2D artwork is a painting. A type of 2D
              art that has been existing for a while is painting. A
              two-dimensional painting might depict a certain time or place,
              tell a narrative, or convey feelings. These paintings may be
              created using a range of mediums, including acrylics, oils,
              watercolors, and pastels.
            </p>
            <p>
              If a painting, however, has three-dimensional aspects, it may be
              categorized as either a mixed-media piece of art or a 3D wall
              artwork. Nevertheless, there are a few instances of 3D paintings
              that create the illusion of depth by layering conventional
              materials. Famous artists' 2D paintings have recently been
              transformed into interactive three-dimensional encounters for
              several art shows.
            </p>
            <p>
              The immersive Klimt, Van Gogh and Monet shows are good examples of
              this transition from 2D to 3D.
            </p>

            <h2>Are 2D Artists and Two-Dimensional Art Still Thriving?</h2>

            <p>
              It can assist in spreading the concept around the team and
              obtaining input from key stakeholders. As increasingly more
              projects shift to 3D or digital graphics, some individuals think
              that 2D concept art is fading. However, two-dimensional concept
              art is still necessary for many projects, and it takes a
              particular talent to do it. As we have learned, 2D artworks are
              all around us. An example of 2D art will be defined by only two
              dimensions: height and width. Throughout history, 2D artists have
              brought us incredible paintings and drawings, and we highly doubt
              that skill will become redundant any time soon. Which are your
              favorite types of 2D art?
            </p>
          </FirstColumnText>
        </FirstColumn>

        <SecondColumn>
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
          <ImageComponent
            to={"/arthistory/whatis3dart"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FWhat%20Is%203D%20Art.jpg?alt=media&token=cf0842a4-0d6e-4c81-9b31-fab75acbd7ff"
            }
            alt={"What Is 3D Art"}
            text={
              <>
                What Is 3D Art? - <br /> The Different Aspects of
                Three-Dimensional Art
              </>
            }
          />
          <ImageComponent
            to={"/arthistory/repetitioninart"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FRepetition%20in%20Art.jpg?alt=media&token=afb2fa82-c3a2-4b3b-aee9-bfcec0f7d43c"
            }
            alt={"Repetition in Art"}
            text={
              <>
                Repetition in Art - <br /> What Is Repetition in Art and How Is
                It Used?
              </>
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
