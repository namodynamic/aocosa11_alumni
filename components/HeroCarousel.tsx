"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/slide1.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide2.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide3.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide4.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide5.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide6.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide7.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide8.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide9.jpg", alt: "reunion" },
  { imgUrl: "/assets/slide10.svg", alt: "reunion" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel p-5 shadow-md">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            height={500}
            width={500}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
