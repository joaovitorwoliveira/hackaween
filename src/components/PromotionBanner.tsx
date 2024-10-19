"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme sua estrutura

const images = [
  { src: "/banner-1.png", alt: "Imagem 1" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mb-8 mx-4">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        layout="responsive"
        width={800}
        height={800}
        className="rounded-md"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <Button onClick={prevSlide} variant="outline">Anterior</Button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <Button onClick={nextSlide} variant="outline">Próximo</Button>
      </div>
    </div>
  );
}
