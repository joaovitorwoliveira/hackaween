"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Item } from "@/data-mock/products";

export default function CheckoutPage() {
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      const products = JSON.parse(localStorage.getItem("products") || "[]");

      const cartProducts = cartItems
        .map((cartItem) => {
          const product = products.find((p) => p.id === cartItem.id);
          return product ? { ...product, stock: cartItem.stock } : null;
        })
        .filter(Boolean);

      const totalAmount = cartProducts.reduce((sum: number, item: Item) => {
        if (!item) return sum;
        return sum + item.discountedPrice * (item.stock || 1);
      }, 0);

      setTotal(totalAmount);
    }
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      `Obrigado, ${name}! Seu pedido de ${total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })} foi confirmado!`
    );
    localStorage.removeItem("cartItems");
    router.push("/");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleCheckout} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome Completo
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço de Entrega
            </label>
            <Input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 w-full"
            />
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold">
              Total:{" "}
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <Button type="submit" className="mt-4 w-full">
            Confirmar Pagamento
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
