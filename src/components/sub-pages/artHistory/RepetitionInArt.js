import classes from "../../../styles/FirstColumnText.module.css";
import Comments from "../../Comments";
import FirstColumn from "../../FirstColumn";
import FirstColumnImg from "../../FirstColumnImg";
import FirstColumnText from "../../FirstColumnText";
import ImageComponent from "../../ImageComponent";
import Layout from "../../Layout";
import SecondColumn from "../../SecondColumn";

export default function RepetitionInArt() {
  return (
    <>
      <Layout>
        <FirstColumn>
          <h1>
            Repetition in Art - What Is Repetition in Art and How Is It Used?
          </h1>
          <FirstColumnImg
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FRepetition%20in%20Art.jpg?alt=media&token=afb2fa82-c3a2-4b3b-aee9-bfcec0f7d43c"
            }
            alt={"Repetition in Art"}
          />
          <FirstColumnText>
            <h6>
              There are seemingly thousands of ways to repeat oneself in art,
              and in creatively beneficial ways. Repetition in art is one of the
              most effective techniques to create emphasis and meaning, and this
              article will discuss and further explore the question, “What is
              repetition in art?
            </h6>

            <h2>What Is Repetition in Art?</h2>

            <p>
              Repetition in art means that an art element like color, lines,
              shapes, or textures are repeated in visual compositions, and these
              can be in various sequences or patterns. It is also often defined
              as a “single element” that is repeated. In fact, repetition is
              also referred to as one of the principles of art, and it works
              closely with the other principles of art, namely pattern and
              rhythm.
            </p>
            <p>
              Repetition seems like an innate tendency in human beings, to want
              to repeat designs or motifs because it adds a unique quality or
              statement to whatever the object might be. It is one of the most
              versatile and intriguing techniques in art and has been utilized
              for centuries, whether for decorative, functional, or cultural
              purposes, ranging from tribal masks, Greek vases, interior spaces,
              and even tattoos! However, it can also be applied and utilized to
              create meaning and add emphasis to an artwork, structure,
              sculpture, or installation piece. It creates a definition of the
              subject matter and evokes certain types of moods. It can also be
              utilized to create various optical effects or hint at social ideas
              of consumerism (think about Pop Art).
            </p>

            <h2>The Art Elements and Principles</h2>

            <p>
              Before we go any further, if you don't know the elements of art or
              principles of art (sometimes the principles of art are also
              referred to as “design principles” or “organizational”
              principles). Let us briefly go over them to provide more context.
            </p>

            <h2>The Seven Elements of Art</h2>

            <p>
              There are seven main art elements, namely value, color, texture,
              line, form, shape, and space. Each element can be utilized in
              various ways to compose a visual design, whether that is a
              two-dimensional surface like a canvas or a three-dimensional piece
              like a sculpture or installation.
            </p>

            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Elements of Art</th>
                  <th>Characteristics</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Color</td>
                  <td>
                    This includes different color schemes, the primary,
                    secondary, and tertiary colors as well as color contrasts
                    and temperatures.
                  </td>
                </tr>

                <tr>
                  <td>Value</td>
                  <td>
                    This refers to the lightness and darkness of colors, best
                    understood as visualized on a grey scale.
                  </td>
                </tr>

                <tr>
                  <td>Texture</td>
                  <td>
                    This is about the tactile/physicality of the paint on a
                    canvas or a three-dimensional sculpture/installation or the
                    implied on a two-dimensional surface that portrays the
                    illusion of texture.
                  </td>
                </tr>

                <tr>
                  <td>Line</td>
                  <td>
                    This includes the outline of the subject matter as well as
                    the types of lines that can appear more naturalistic/organic
                    or geometric.
                  </td>
                </tr>

                <tr>
                  <td>Shape</td>
                  <td>
                    There can be geometric or organic shapes, ranging from
                    circles, squares, or rectangles.
                  </td>
                </tr>

                <tr>
                  <td>Form</td>
                  <td>
                    This includes forms that are more three-dimensional like
                    spheres, cubes, or cylinders, and are different from shapes
                    that are more two-dimensional.
                  </td>
                </tr>

                <tr>
                  <td>Space</td>
                  <td>
                    This includes positive and negative space in composition as
                    well as the three-dimensionality or depth depicted.
                  </td>
                </tr>
              </tbody>
            </table>
          </FirstColumnText>
        </FirstColumn>

        <SecondColumn>
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
            to={"/arthistory/blackdeathart"}
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FBlack%20Death%20Art.jpg?alt=media&token=cfe59439-a149-40e0-9d99-989849a6639b"
            }
            alt={"Black Death Art"}
            text={
              <>
                Black Death Art - <br /> Artworks of the Medieval Bubonic Plague
              </>
            }
          />
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
        </SecondColumn>
      </Layout>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
