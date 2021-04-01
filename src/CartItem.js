import React from "react";
import styled from "styled-components";
import { db } from "./Firebase";

const CartItem = ({ id, item }) => {
  let options = [];
  for (let i = 1; i < 20; i++) {
    options.push(<option value={i}>Qty:{i}</option>);
  }
  const changequant = (newQunt) => {
    db.collection("CartItems")
      .doc(id)
      .update({
        quantity: parseInt(newQunt)
      });
  };
  const DeleteItem = (e) => {
    e.preventDefault();
    db.collection("CartItems").doc(id).delete();
  };
  return (
    <Container>
      <Image>
        <img src={item.image} />
      </Image>
      <ItemInfo>
        <ItemTop>
          <h2>{item.name}</h2>
        </ItemTop>
        <Itembottom>
          <Quantity>
            <select
              onChange={(e) => changequant(e.target.value)}
              value={item.quantity}
            >
              {options}
            </select>
          </Quantity>
          <Delete onClick={DeleteItem}>Delete</Delete>
        </Itembottom>
      </ItemInfo>
      <Price>₹{item.price}</Price>
    </Container>
  );
};
export default CartItem;

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #000000;
`;
const Image = styled.div`
  height: 250px;
  width: 200px;
  margin: 0px 16px 10px 16px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;
const ItemInfo = styled.div`
  flex: 1;
`;

const ItemTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const Itembottom = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const Quantity = styled.div`
  padding-right: 10px;
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    :focus {
      outline: none;
    }
  }
`;
const Delete = styled.div`
  color: #007185;
  margin-left: 10px;
  cursor: pointer;
`;
const Price = styled.div`
  margin-top: 16px;
  font-weight: 1000;
  font-size: 18px;
  margin-right: 20px;
`;
