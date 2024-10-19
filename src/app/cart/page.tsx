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

export default function CartPage() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const cartProducts = cart
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean);

  const total = cartProducts.reduce((sum, item) => {
    if (!item) return sum;
    return sum + item.price * (item.quantity || 1);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <Link href={"/"}>
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      </Link>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProducts.map((item: Item | null) => {
            if (item === null) return null;

            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.discountPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="0"
                    className="w-20"
                  />
                </TableCell>
                <TableCell>
                  ${(item.discountPrice * (item.quantity || 1)).toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button className="mt-4">Proceed to Checkout</Button>
      </div>
      <Footer />
    </div>
  );
}
