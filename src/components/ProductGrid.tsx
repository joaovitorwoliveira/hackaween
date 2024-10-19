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
import { Input } from "@/components/ui/input";
import { products } from "@/data-mock/products";

export default function ProductGrid() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [filterType, setFilterType] = useState<string>("name");
  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

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

  const filteredProducts = products.filter((product) => {
    if (filterType === "name") {
      return product.name.toLowerCase().includes(filterValue.toLowerCase());
    }
    if (filterType === "category") {
      return product.category
        ?.toLowerCase()
        .includes(filterValue.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border p-2 rounded-md text-xs"
          >
            <option value="name">Filtrar por Nome</option>
            <option value="category">Filtrar por Categoria</option>
          </select>
          <Input
            className="bg-white"
            placeholder={`Pesquisar por ${
              filterType === "name" ? "nome" : "categoria"
            }`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
                  {product.fullPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span className="text-xl font-bold ml-2">
                  {product.discountedPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
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
              <Button
                onClick={() => addToCart(product.id)}
                className="w-full bg-[#328366]"
              >
                Adicionar ao carrinho{" "}
                {cart.find((item) => item.id === product.id)?.quantity
                  ? `(${cart.find((item) => item.id === product.id)?.quantity})`
                  : ""}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
