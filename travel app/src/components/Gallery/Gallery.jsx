import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const Gallery = () => {
    const images = [
        { src: GalleryImg1, desc: "Person wearing shoes", sub: "Gift Habeshaw" },
        { src: GalleryImg3, desc: "Blonde woman wearing sunglasses smiling at the camera", sub: "Dmitriy Frantsev" },
        { src: GalleryImg6, sub: "Harry Cunningham" },
        { src: GalleryImg4, desc: "Jaipur , Rajasthan India", sub: "Liam Baldock" },
        { src: GalleryImg7, sub: "Verne Ho" },
        { src: GalleryImg6, desc: "Rann of kutch , India", sub: "Hari Nandakumar" },
    ];

    const options = {
        settings: {
            overlayColor: "rgba(0, 0, 0, 0.9)",
            autoplaySpeed: 3000,
            transitionSpeed: 900
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(255, 255, 255, 0.8)"
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Raleway, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase"
        }
    };

    return (
        <SRLWrapper options={options}>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <a href={image.src} key={index} data-attribute="SRL">
                        <img src={image.src} alt={image.desc} />
                        <p>{image.sub}</p>
                    </a>
                ))}
            </div>
        </SRLWrapper>
    );
};

export default Gallery;
