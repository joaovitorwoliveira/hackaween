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
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "sonner"; // Importando o Sonner para notificações

export default function ProductGrid() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filterType, setFilterType] = useState<string>("name");
  const [filterValue, setFilterValue] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("none");
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: { id: number; quantity: number }[]) => {
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const addToCart = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    const isInCart = cart.find((item) => item.id === productId);

    if (!isInCart) {
      updatedCart.push({ id: productId, quantity: 1 });
    }

    saveCartToLocalStorage(updatedCart);

    // Notificação de sucesso ao adicionar ao carrinho
    toast.success("Produto adicionado ao carrinho!");
  };

  const toggleFavorite = (productId: number) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const viewProduct = (productId: number) => {
    const updatedRecentlyViewed = [...new Set([productId, ...recentlyViewed])].slice(0, 5);
    setRecentlyViewed(updatedRecentlyViewed);
  };

  const filteredProducts = products
    .filter((product) => {
      if (filterType === "name") {
        return product.name.toLowerCase().includes(filterValue.toLowerCase());
      }
      if (filterType === "category") {
        return product.category
          ?.toLowerCase()
          .includes(filterValue.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.discountedPrice - b.discountedPrice;
      } else if (sortOrder === "price-desc") {
        return b.discountedPrice - a.discountedPrice;
      }
      return 0;
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
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() =>
              setSortOrder(sortOrder === "price-asc" ? "price-desc" : "price-asc")
            }
          >
            Ordenar por Preço{" "}
            {sortOrder === "price-asc" ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>

      {/* Grid de Produtos */}
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
                onClick={() => viewProduct(product.id)}
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex justify-between">
                <CardTitle>{product.name}</CardTitle>
                <Button
                  variant="ghost"
                  className="p-1"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Star
                    fill={favorites.includes(product.id) ? "gold" : "none"}
                    color={favorites.includes(product.id) ? "gold" : "gray"}
                  />
                </Button>
              </div>
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

      {/* Carrossel de Produtos Recentemente Visualizados */}
      {recentlyViewed.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Recentemente Visualizados</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {recentlyViewed.map((productId) => {
              const product = products.find((p) => p.id === productId);
              return product ? (
                <div key={product.id} className="min-w-[150px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                  <p className="text-sm mt-2 text-center">{product.name}</p>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
