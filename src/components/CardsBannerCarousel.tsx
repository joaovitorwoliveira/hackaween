"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Store, Tag, Bone } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const categories = [
  { id: 1, name: "Produtos", icon: ShoppingCart, href: "/products" },
  { id: 2, name: "Mercados", icon: Store, href: "/partners" },
  { id: 3, name: "Ofertas do dia", icon: Tag, href: "/offers" },
  { id: 4, name: "Pet Shop", icon: Bone, href: "/pet-shop" },
];

export default function CardsBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full max-w-lg overflow-hidden mx-2  pb-8">
      <CarouselContent
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${(currentIndex % categories.length) * 50}%)`,
        }}
      >
        {categories.map((category) => (
          <CarouselItem key={category.id} className="flex-none w-1/2 p-2">
            <Link href={category.href}>
              <Card className="w-full cursor-pointer">
                <CardHeader className="flex justify-center items-center h-32">
                  <category.icon className="w-12 h-12 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-center">{category.name}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
