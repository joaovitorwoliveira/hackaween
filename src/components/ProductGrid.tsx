"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Organic Milk",
    price: 2.99,
    discountPrice: 1.99,
    expiresIn: 2,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Fresh Bread",
    price: 3.49,
    discountPrice: 2.49,
    expiresIn: 1,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Yogurt Pack",
    price: 4.99,
    discountPrice: 3.49,
    expiresIn: 3,
    image:
      "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Cheese Block",
    price: 5.99,
    discountPrice: 4.49,
    expiresIn: 4,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
];

export default function ProductGrid() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <img
              src={product.image}
              alt={product.name}
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
            <Badge variant="secondary" className="mt-2">
              Expires in {product.expiresIn} day
              {product.expiresIn > 1 ? "s" : ""}
            </Badge>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product.id)} className="w-full">
              Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ""}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
