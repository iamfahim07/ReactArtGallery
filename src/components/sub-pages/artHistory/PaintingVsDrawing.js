import classes from "../../../styles/FirstColumnText.module.css";
import Comments from "../../Comments";
import FirstColumn from "../../FirstColumn";
import FirstColumnImg from "../../FirstColumnImg";
import FirstColumnText from "../../FirstColumnText";
import ImageComponent from "../../ImageComponent";
import Layout from "../../Layout";
import SecondColumn from "../../SecondColumn";

export default function PaintingVsDrawing() {
  return (
    <>
      <Layout>
        <FirstColumn>
          <h1>
            Painting vs. Drawing - Tips for Learning How to Paint vs. Draw
          </h1>
          <FirstColumnImg
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FPainting%20vs%20Drawing.jpg?alt=media&token=478c6dde-6eba-41f4-ba94-a364332d648b"
            }
            alt={"Painting vs Drawing"}
          />
          <FirstColumnText>
            <h6>
              When it comes to painting vs. drawing, you may be wondering which
              one is easier and whether there are many differences between the
              two. Both are popular and well-known amongst everyone, and they
              are both ways in which artists can express themselves. Whether it
              is creating something new or recreating an image, drawing, and
              painting have something to offer. So, painting vs. drawing - let
              us discover the differences.
            </h6>

            <h2>Is There a Difference Between Drawing and Painting?</h2>

            <p>
              Paint vs. draw, is one more outstanding than the other? You cannot
              say that painting is better or vice versa, as they both have
              something to give when creating art. It is also a matter of
              opinion, one person may enjoy painting over a drawing, but that
              does not mean it is a better choice.
            </p>
            <p>
              The only major factor that stands out is that there have been many
              famous painters in history, which simply brings it to the
              forefront, making it seem the more influential choice.
            </p>
            <p>
              However, drawing can be something that is done before painting
              commences, and it can be a final art piece on its own. Today,
              drawing is associated more with commercial art, but it is gaining
              popularity as a standalone art medium in general.
            </p>
            <p>
              Both painting and drawing are visual arts that can be done on a
              two-dimensional surface like paper or canvas or even wood or metal
              panels. Drawing is done using mainly dry media like pencils and
              charcoal on paper, while painting uses wet media like oil,
              acrylic, or watercolor paints on a canvas. However, you can also
              paint on paper and draw on a canvas.
            </p>
            <p>
              When looking at paintings and drawings, in most cases, paintings
              will have color, while drawings rarely do. However, today you can
              get colored pencils and watercolor pencils but much of the pencil
              art remains without color. The textures of the media are
              different, paint can be thin or thick, and it can be opaque or
              transparent. Think of painting techniques like impasto, where you
              work with thick blobs of paint.
            </p>
            <p>
              On the other hand, pencils and pens are quite basic and offer a
              more consistent and smooth application.
            </p>
            <p>
              You can also look at the dimensions of the artwork. You often see
              paintings done on canvas or other surfaces, and they can get quite
              large. Drawings, on the hand, are mostly done on paper, and maybe
              only rarely are there larger drawings.
            </p>
            <p>
              Drawings are often precursors to paintings, and act as guidelines
              for paintings. So, the art piece is then a painting, which is
              constructed from a drawing. Some artists also combine the
              techniques, so you might get an art piece that has both visible
              drawing and painting aspects, and as such, can be classified as
              both a drawing and a painting.
            </p>

            <p>
              You also have mediums like soft pastels, which might be considered
              a drawing material by some, and may be thought of as a painting by
              others. Liquid ink is another medium that can be considered a
              drawing medium, but it can also be thought of as an ink painting.
              So, there is not much difference between some mediums. You can see
              the difference between drawing and painting in the following
              table.
            </p>

            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Painting</th>
                  <th>Drawing</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Uses mainly wet media</td>
                  <td>Uses mainly dry media</td>
                </tr>

                <tr>
                  <td>Can be small or very large</td>
                  <td>Usually only done on paper sizes</td>
                </tr>

                <tr>
                  <td>Done with a variety of paint colors</td>
                  <td>Mainly done with no color</td>
                </tr>

                <tr>
                  <td>Mainly done on canvas, paper, or wood</td>
                  <td>Mainly on paper, but also on canvas</td>
                </tr>

                <tr>
                  <td>Oil, acrylic, and watercolor paints</td>
                  <td>Pencils, charcoal, chalk, ink, pastels</td>
                </tr>

                <tr>
                  <td>Focuses on shapes and lines</td>
                  <td>Focuses on form as well as color</td>
                </tr>
              </tbody>
            </table>
          </FirstColumnText>
        </FirstColumn>
        <SecondColumn>
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
        </SecondColumn>
      </Layout>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
