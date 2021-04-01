import React from "react";
import styled from "styled-components";
import { db } from "./Firebase";
const Product = ({ title, price, rating, image, id }) => {
  const AddToCart = () => {
    const cartItem = db.collection("CartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1
        });
      } else {
        db.collection("CartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1
        });
      }
    });
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Price>₹{price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>

      <Image src={image} />
      <Actionsection>
        <Orderkey onClick={AddToCart}>Add to Cart</Orderkey>
      </Actionsection>
    </Container>
  );
};
export default Product;

const Container = styled.div`
  background-color: white;
  max-width: 20%;
  min-width: 20%;
  max-height: 400px;
  z-index: 100;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 1000;
`;
const Rating = styled.div`
  display: flex;
  margin-top: -10px;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const Orderkey = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #000000;
  border-radius: 5px;
  cursor: pointer;
`;
const Actionsection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
