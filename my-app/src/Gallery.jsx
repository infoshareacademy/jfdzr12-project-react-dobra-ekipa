import { ThemeContext } from "./context";
import imageUrls from "./imageURLs";
import { useContext } from "react";


const Gallery = (props) => {
  const theme = useContext(ThemeContext);  
  const randomIndex = Math.floor(Math.random() * imageUrls.length);

  return (
      <>
      <div className="gallery">
      <img key={randomIndex} src={imageUrls[randomIndex]} alt={`Zdjęcie Galerii ${randomIndex + 1}`} />
      </div>
      </>
    );
  };
  
  export default Gallery;

  {/* const randomIndex = Math.floor(Math.random() * images.length); */} // losowanie indeksu zdjęcia