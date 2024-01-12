"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
    { imgUrl: "/assets/photo3.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo4.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo2.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo5.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo6.jpg", alt: "reunion" },
    { imgUrl: "/assets/photo7.jpg", alt: "reunion" },
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
            height={484}
            width={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
