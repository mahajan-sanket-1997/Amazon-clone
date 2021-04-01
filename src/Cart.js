import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import { db } from "./Firebase";

const Cart = ({ cartItems }) => {
  const CartCount = () => {
    let count = 0;
    let total = 0;
    var arr = [];
    cartItems.forEach((item) => {
      count += item.product.quantity;
      total += item.product.quantity * item.product.price;
    });
    arr.push(count);
    arr.push(total);
    return arr;
  };
  return (
    <Container>
      <CartItems cartItems={cartItems} />

      <Checkout CartCount={CartCount} />
    </Container>
  );
};
export default Cart;

const Container = styled.div`
  display: flex;
  flex: start;
`;
