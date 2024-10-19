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
  const [cart, setCart] = useState<{ id: number; stock: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = (
    updatedCart: { id: number; stock: number }[]
  ) => {
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const addToCart = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, stock: item.stock + 1 } : item
    );
    const isInCart = cart.find((item) => item.id === id);

    if (!isInCart) {
      updatedCart.push({ id, quantity: 1 });
    }

    saveCartToLocalStorage(updatedCart);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, stock: item.stock - 1 } : item
      )
      .filter((item) => item.stock > 0);
    saveCartToLocalStorage(updatedCart);
  };

  const updateQuantity = (id: number, newStock: number) => {
    if (newStock <= 0) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, stock: newStock } : item
      );
      saveCartToLocalStorage(updatedCart);
    }
  };

  const removeProduct = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
  };

  // Mapear produtos do carrinho, vinculando à quantidade no estado do carrinho
  const cartProducts = cart
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? { ...product, stock: cartItem.stock } : null;
    })
    .filter(Boolean);

  const total = cartProducts.reduce((sum, item) => {
    if (!item) return sum;
    return sum + item.discountedPrice * (item.stock || 1);
  }, 0);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-20 bg-[#e5faf2] my-[-50px]">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold mb-8 text-center">Carrinho</h1>
        </Link>

        {/* Tabela Responsiva */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
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
                      {item.discountedPrice.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={item.quantity || 1} // 'quantity' agora vem do estado do carrinho
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        min="1"
                        className="w-20 text-center"
                      />
                    </TableCell>
                    <TableCell>
                      {(
                        item.discountedPrice * (item.quantity || 1)
                      ).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell className="flex gap-2 items-center">
                      <Button
                        className="bg-gray-400 text-white hover:bg-gray-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </Button>
                      <Button
                        className="bg-gray-400 text-white hover:bg-gray-500"
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </Button>
                      <Button
                        className="bg-red-500 text-white hover:bg-red-600"
                        onClick={() => removeProduct(item.id)}
                      >
                        X
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

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
              <Button className="mt-4 bg-[#507a72] text-white hover:bg-green-500 px-6 py-3 rounded-lg">
                Seguir com a entrega
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-lg p-6">
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
