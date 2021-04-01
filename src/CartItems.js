import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ActualCart>{
        cartItems.map((data)=>(
          <CartItem 
          id={data.id}
          item={data.product}
            />
        ))
        }
      </ActualCart>
    </Container>
  );
};
export default CartItems;

const Title = styled.h1`
  padding: 15px 10px 10px 15px;
  font-weight: 1000;
  height: 10px;
`;
const ActualCart = styled.div``;
const Container = styled.div`
  margin: 18px;
  background-color: white;
  flex: 0.8;
`;
