import img from "../../assets/images/Raphael/The School of Athens.jpg";
import ImageComponent from "../ImageComponent";
import ImagesComponent from "../ImagesComponent";

export default function Home() {
  return (
    <ImagesComponent>
      <ImageComponent
        to={"danteandvirgil"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
      <ImageComponent
        to={"ivantheterribleandhissonivan"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
      <ImageComponent
        to={"./sub-pages/home/theSchoolOfAthens.html"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
      <ImageComponent
        to={"./sub-pages/home/theSchoolOfAthens.html"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
      <ImageComponent
        to={"./sub-pages/home/theSchoolOfAthens.html"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
      <ImageComponent
        to={"./sub-pages/home/theSchoolOfAthens.html"}
        img={img}
        alt={"Raphael"}
        text={"The School of Athens"}
      />
    </ImagesComponent>
  );
}
