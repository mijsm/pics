import "./ImageList.css"
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        //remember: apply key to topmost element (ex <div key="a5" <ImageShow /> </div>)
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;