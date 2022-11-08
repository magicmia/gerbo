import React from "react";
import Gallery from "react-grid-gallery";
import Line from "../assets/Line";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 165,
    thumbnailHeight: 165,
    margin: 25,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 165,
    thumbnailHeight: 165,
    margin: 25,
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 165,
    thumbnailHeight: 165,
    margin: 25,
  },
];

const MyGallery = () => {
  return (
    <div>
      <Line />
      <div className="mb-5 mx-5">
        <h1 className="mb-5 font-font-medium uppercase text-xl">GALÉRIA</h1>
        <Gallery images={IMAGES} />
      </div>
    </div>
  );
};

export default MyGallery;
