"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
    { imgUrl: "/assets/photo3.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo4.JPG", alt: "reunion" },
    { imgUrl: "/assets/photo2.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo5.JPG", alt: "reunion" },
    { imgUrl: "/assets/photo6.JPG", alt: "reunion" },
    { imgUrl: "/assets/photo7.JPG", alt: "reunion" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={true}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            height={700}
            width={484}
            className="object-contain rounded-xl"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
