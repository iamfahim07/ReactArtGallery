import classes from "../styles/ArtistImageAndInfoAndDescription.module.css";

export default function ArtistImageAndInfoAndDescription({
  img,
  alt,
  artistName,
  born,
  died,
  artName,
  artist,
  year,
  medium,
  period,
  dimensions,
  location,
  width,
  height,
  children,
}) {
  return (
    <>
      <div className={classes.artistImageAndInfo}>
        <div className={classes.artistImage}>
          <img src={img} alt={alt} width={width} height={height} />
        </div>

        <div className={classes.artistInfo}>
          {artistName && <h1>{artistName}</h1>}

          {artName && <h1>{artName}</h1>}

          {born && (
            <p>
              <span>Born:</span> {born}
            </p>
          )}

          {died && (
            <p>
              <span>Died:</span> {died}
            </p>
          )}

          {artist && (
            <p>
              <span>Artist:</span> {artist}
            </p>
          )}

          {year && (
            <p>
              <span>Year:</span> {year}
            </p>
          )}

          {medium && (
            <p>
              <span>Medium:</span> {medium}
            </p>
          )}

          {period && (
            <p>
              <span>Period / Movement:</span> {period}
            </p>
          )}

          {dimensions && (
            <p>
              <span>Dimensions:</span> {dimensions}
            </p>
          )}

          {location && (
            <p>
              <span>Location:</span> {location}
            </p>
          )}
        </div>
      </div>

      {children && <div className={classes.artistDescription}>{children}</div>}
    </>
  );
}
