import Comments from "../../Comments";
import FirstColumn from "../../FirstColumn";
import FirstColumnImg from "../../FirstColumnImg";
import FirstColumnText from "../../FirstColumnText";
import ImageComponent from "../../ImageComponent";
import Layout from "../../Layout";
import SecondColumn from "../../SecondColumn";

export default function FibonacciSequenceInArt() {
  return (
    <>
      <Layout>
        <FirstColumn>
          <h1>Fibonacci Sequence in Art - Using the Fibonacci Theory in Art</h1>
          <FirstColumnImg
            img={
              "https://firebasestorage.googleapis.com/v0/b/react-art-gallery.appspot.com/o/Art%20History%2FFibonacci%20Sequence%20in%20Art.jpg?alt=media&token=e91cd094-a408-4cda-8467-7571541979fb"
            }
            alt={"Fibonacci Sequence in Art"}
          />
          <FirstColumnText>
            <h6>
              You may have heard of the golden section in your mathematics class
              or perhaps referred to as the golden ratio, but have you heard of
              the Fibonacci sequence? The Fibonacci sequence is closely
              connected to the golden ratio and frequently occurs in various
              facets of human life. From nature to space and art, the Fibonacci
              sequence discussed below is the formula to remember! Below is an
              article that will take you on a journey into the Fibonacci
              sequence in art as well as answer questions such as “why is the
              Fibonacci sequence so important?”
            </h6>

            <h2>What Is the Fibonacci Sequence?</h2>

            <p>
              Each object and person in the universe is made up of a unique
              design, including yourself if you consider that no two people
              share the exact same DNA makeup. Commonly referred to as “nature's
              code”, the Fibonacci sequence finds itself at the center of most
              foundational facets of human existence, including popular culture.
              First documented in 300 BC by Greek mathematician Euclid, the
              Fibonacci sequence is a mathematical formula that suggests that
              each number is equal to the sum of the two numbers that precede
              it. Numerically, the sequence starts with the integers 0, 1, 1, 2,
              3, 5, 8, 13, 21, 34, and so on, continuing up to infinity! The
              sequence begins with a zero, followed by a one, another one, and
              by the fourth digit, the sequence begins by adding the last one to
              the two to arrive at three.
            </p>
            <p>
              Although this may be confusing to some at first, as you take a
              look at the visual representation of the Fibonacci sequence, you
              will recognize this as the golden ratio (also referred to as the
              divine ratio). The golden ratio (1:1.16), as visualized by the
              golden curve, is an ancient symbol that has possibly existed since
              the beginning of time. The golden ratio is mostly used in design
              and is derived from the Fibonacci sequence to produce aesthetic
              visuals through proportion across art, graphic design, and
              architecture.
            </p>
            <p>
              While the exact origination of the Fibonacci sequence is still
              under debate, multiple sources state that the formula was possibly
              discovered by the Italian mathematician Leonardo Fibonacci well
              after 1170 AD. On the other hand, popular British mathematician,
              Keith Devlin, states that there are findings dating back to 200 BC
              consisting of texts within Hindu-Arabic numerical systems and
              Sanskrit writings which predate the so-called discovery made by
              Fibonacci. A text published by Fibonacci titled “Liber Abaci”,
              also called the “Book of Calculus”, featured methods for
              calculating and tracking finances, for use by traders, using the
              Fibonacci sequence.
            </p>
            <p>
              Leonardo of Pisa used an example of rabbits where if you couple
              two rabbits, one female and one male, and leave the rabbits to
              reproduce, it will result in one female and one male appearing
              again in the litter. Using the male and female from the first
              litter, if those rabbits reproduce - you are left with another
              litter containing another set of male-female rabbits. The cycle
              repeats itself and after one year, you are left with around 144
              rabbits. The formula applied to that result is of course none
              other than the Fibonacci sequence.
            </p>

            <h2>What Is the Fibonacci Sequence Used For?</h2>

            <p>
              Fibonacci numbers seem to appear in multiple areas of human
              existence, from orbital systems and plants to tree branches,
              artichokes, and pine cones. The Fibonacci sequence can also be in
              the pattern in which sunflowers generate new cells for seeds and
              even in our own solar system, where the Fibonacci series is used
              to determine the distances of moons of certain planets such as
              Saturn, Jupiter, and Uranus. So why is the Fibonacci sequence so
              important? The importance of the Fibonacci sequence lies in the
              very reason why it is a topic of high debate.
            </p>
            <p>
              Among the reasons, the one that comes to the forefront is the fact
              that this formula, initially thought to be exclusive to
              mathematics, became a formula with a ratio that appears in very
              specific elements in nature; plants, seed growth, and the human
              ear, and may be considered a universal formula.
            </p>
            <p>
              Most evidently captured on the petals of flowers, the Fibonacci
              theory in the application of flowers shows that the petals of
              certain flowers are equal to that of the different Fibonacci
              numbers. The Fibonacci theory can also be seen a little more
              in-depth regarding flowers, cauliflowers, pineapples, and bananas.
              Here we refer to the Fibonacci spiral defined by the organization
              of seeds growing on flower heads in a spiral shape.
            </p>
            <p>
              The Fibonacci order remains a topic of high debate but is still
              very much reliable in its mathematical basis. It is only the
              speculations and hypotheses drawn from the reasoning behind why
              the sequence appears in many vital aspects of human life that it
              becomes a subject of debate. To further build on the appearance of
              the Fibonacci order, there exists the golden angle. The golden
              angle suggests that the angle at which the new growth occurs from
              the previous growth sits at 222.5 degrees and divides a 360-degree
              circle as per the golden section, which is 0.168…
            </p>

            <h2>The Rule of Thirds</h2>

            <p>
              The rule of thirds speaks directly to a simplified version of the
              golden ratio where a similar approach to producing an
              aesthetically pleasing image is possible. From photography to
              painting, the rule of thirds is applied within the context of
              composition. To proceed with applying the rule of thirds, you
              would first divide your image into a grid of three by three and
              then place the focal point of your image or painting either
              two-thirds to the left or right for a horizontal image. The rule
              of thirds can become complex, but trust your eye for symmetry and
              you cannot go wrong! If you get stuck, there are photographic
              editing software programs such as Adobe Lightroom that feature a
              golden ratio overlay as a guide to help you perfect your
              composition.
            </p>
          </FirstColumnText>
        </FirstColumn>
        <SecondColumn>
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
        </SecondColumn>
      </Layout>

      <div style={{ marginBottom: "100px" }}>
        <h1>Comments</h1>
        <Comments />
      </div>
    </>
  );
}
