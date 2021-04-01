import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format"
const Checkout = ({CartCount}) => {
 
  return (
    <Container>
      <CheckoutTxt>Total({CartCount().[0]} Items):
      
      <NumberFormat value={CartCount().[1]}displayType={'text'} thousandSeparator={true} prefix={'₹'} />
      </CheckoutTxt>
      <hr />
      <Button1>
        <Cbutton>Proceed to Checkout</Cbutton>
      </Button1>
    </Container>
  );
};
export default Checkout;

const Container = styled.div`
  height: 200px;
  margin: 18px 18px 0px 0px;
  background-color: white;
  flex: 0.2;
  display: flex;
  flex-direction: column;
`;
const CheckoutTxt = styled.div`
  padding: 30px 10px 10px 15px;
  font-weight: 1000;
  height: 50px;
  flex: 0.3;
  border-bottom: 2px solid black;
`;
const Cbutton = styled.button`
  background-color: #f0c14b;
  border-radius: 5px;
  height: 40px;
  width: 100%;
`;
const Button1 = styled.button`
background-color:white;

border:none;
margin-top:10px


`;
