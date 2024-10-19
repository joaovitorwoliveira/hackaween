"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import Link from "next/link";
import { Item, products } from "@/data-mock/products";
import Footer from "@/components/Footer";
import SelectDeliveryType from "@/components/SelectDeliveryType";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CartPage() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = (
    updatedCart: { id: number; quantity: number }[]
  ) => {
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const addToCart = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCartToLocalStorage(updatedCart);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove o item se a quantidade for 0
    saveCartToLocalStorage(updatedCart);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      saveCartToLocalStorage(updatedCart);
    }
  };

  const cartProducts = cart
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean);

  const total = cartProducts.reduce((sum, item) => {
    if (!item) return sum;
    return sum + item.discountPrice * (item.quantity || 1);
  }, 0);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        </Link>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartProducts.map((item: Item | null) => {
              if (item === null) return null;

              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.discountPrice.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      min="1"
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    {(item.discountPrice * (item.quantity || 1)).toLocaleString(
                      "pt-br",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      className="bg-gray-400"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      className="bg-gray-400"
                      onClick={() => addToCart(item.id)}
                    >
                      +
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="mt-8 text-right">
          <p className="text-xl font-bold">
            Total:{" "}
            {total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4">Seguir com a entrega</Button>
            </DialogTrigger>
            <DialogContent className="rounded-lg">
              <DialogHeader>
                <DialogTitle>Selecione a sua entrega</DialogTitle>
              </DialogHeader>
              <SelectDeliveryType />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Footer />
    </>
  );
}
