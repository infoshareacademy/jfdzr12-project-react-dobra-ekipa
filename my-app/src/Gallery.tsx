import { ThemeContext } from "./context";
import imageUrls from "./imageURLs";
import { useContext } from "react";

interface GalleryProps {
  index: number;
  url: string;
}

const Gallery = (props: GalleryProps) => {
  const theme = useContext(ThemeContext);  
  
  return (
      <>
      <h1>The current theme is {theme}.</h1>;
      <div className="gallery">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Zdjęcie Galerii ${index + 1}`} />
        ))}
      </div>
      </>
    );
  };
  
  export default Gallery;