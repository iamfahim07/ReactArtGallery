import useImageList from "../../hooks/useImageList";
import ImageComponent from "../ImageComponent";
import ImagesComponent from "../ImagesComponent";

export default function Painting() {
  const { loading, error, images } = useImageList("painting");

  return (
    <ImagesComponent>
      {images.length > 0 &&
        images.map((image) => {
          return (
            <ImageComponent
              key={Math.random()}
              to={image.link}
              img={image.imgUrl}
              alt={image.altText}
              text={image.text}
            />
          );
        })}

      {loading && <div>Loading...</div>}
      {!loading && images.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
    </ImagesComponent>
  );
}
