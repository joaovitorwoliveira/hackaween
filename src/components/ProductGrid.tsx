"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data-mock/products";

export default function ProductGrid() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); // Este efeito roda apenas uma vez, na montagem do componente

  const addToCart = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    const isInCart = cart.find((item) => item.id === productId);

    if (!isInCart) {
      updatedCart.push({ id: productId, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle>{product.name}</CardTitle>
            <div className="mt-2">
              <span className="text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xl font-bold ml-2">
                ${product.discountPrice.toFixed(2)}
              </span>
            </div>
            {product.expiresIn === 0 ? (
              <div className="mt-2">
                <Badge variant="secondary">{product.condition}</Badge>
              </div>
            ) : (
              <Badge variant="secondary" className="mt-2">
                Expira em {product.expiresIn} dia
                {product.expiresIn > 1 ? "s" : ""}
              </Badge>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product.id)} className="w-full">
              Adicionar ao carrinho{" "}
              {cart.find((item) => item.id === product.id)?.quantity
                ? `(${cart.find((item) => item.id === product.id)?.quantity})`
                : ""}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
