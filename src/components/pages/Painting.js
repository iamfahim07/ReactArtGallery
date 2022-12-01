import img from "../../assets/images/Jacques-Louis David/The Death of Socrates.jpg";
import ImageComponent from "../ImageComponent";
import ImagesComponent from "../ImagesComponent";

export default function Painting() {
  return (
    <ImagesComponent>
      <ImageComponent
        to={"girlwithApearlearring"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
      <ImageComponent
        to={"laprimavera"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
      <ImageComponent
        to={"./sub-pages/painting/theDeathOfSocrates.html"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
      <ImageComponent
        to={"./sub-pages/painting/theDeathOfSocrates.html"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
      <ImageComponent
        to={"./sub-pages/painting/theDeathOfSocrates.html"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
      <ImageComponent
        to={"./sub-pages/painting/theDeathOfSocrates.html"}
        img={img}
        alt={"The Death of Socrates"}
        text={"The Death of Socrates"}
      />
    </ImagesComponent>
  );
}
