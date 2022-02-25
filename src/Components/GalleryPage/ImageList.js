import { useContext } from "react";
import { GalleryContext } from "../../Context/GalleryContext";

import Image from "./Image";

function ImageList() {
    const { data } = useContext(GalleryContext);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center md:px-20 px-3 py-24">
            {data && data[0].fields.galleryImage.map(img => <Image data={img} key={img.sys.id} />)}
        </div>
    );
}

export default ImageList;
