import useImageList from "../../hooks/useImageList";
import ImageComponent from "../ImageComponent";
import ImagesComponent from "../ImagesComponent";

export default function Artists() {
  const { loading, error, images } = useImageList("artist");

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
