import imageUrls from "./imageURLs.js";

const Gallery = (props) => {
    return (
      <div className="gallery">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Zdjęcie Galerii ${index + 1}`} />
        ))}
      </div>
    );
  };
  
  export default Gallery;