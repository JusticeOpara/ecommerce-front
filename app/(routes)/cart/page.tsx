"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const cartItems = Array.isArray(cart?.items) ? cart.items : []; // Ensure items is an array
  console.log(cartItems, "--cart.item");
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Ensure cart.items exists before mapping
  
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 ">
              {cartItems.length === 0 && (
                <p className="text-neutral-500">No Item is added to the cart</p>
              )}
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
