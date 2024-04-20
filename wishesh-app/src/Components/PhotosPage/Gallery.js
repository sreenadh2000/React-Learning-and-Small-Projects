import "./Gallery.css";
import Pic from "../ParentImages/Candile.jpg";
import GridDiv from "./GridDiv";
function Gallery() {
  return (
    <div className="GalleryView">
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} Name="Big" />
      <GridDiv Pic={Pic} Name="Second-Big" />
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} />
      <GridDiv Pic={Pic} />
    </div>
  );
}

export default Gallery;
