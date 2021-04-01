import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const Header = ({ cartItems, user, SignOut }) => {
  const CartTotal = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };
  return (
    <div>
      <Container>
        <C1>
          <Link to="/">
            <Headerlogo>
              <img src={"https://i.imgur.com/7I9Was5.png"} />
            </Headerlogo>
          </Link>
          <Headeropt>
            <LocationOnIcon />
            <Headeropt1>
              <OptionLineOne>Hello</OptionLineOne>
              <OptionLineTwo>Select Your Address</OptionLineTwo>
            </Headeropt1>
          </Headeropt>
          <Headersearch>
            <Headersearch1 type="input" />
            <Headersearch2>
              <SearchIcon />
            </Headersearch2>
          </Headersearch>
          <Headeruser onClick={SignOut}>
            <OptionLineOne>Hello, Sanket</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </Headeruser>
          <Headeruser>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </Headeruser>
          <Link to="/cart">
            <Headercart>
              <Headercart1>
                <ShoppingCartIcon />
              </Headercart1>
              <Headercart2>{CartTotal()}</Headercart2>
            </Headercart>
          </Link>
        </C1>
      </Container>
    </div>
  );
};
export default Header;

const Container = styled.div`
  height: 60px;
  background-color: black;
  margin: 0px 0px 0px 0px;

  color: white;
`;
const C1 = styled.div`
  margin: 0px 0px 15px 0px;
  padding-top: 10px;
  display: flex;
  align-content: center;

  justify-content: space-between;
`;
const Headerlogo = styled.div`
  img {
    width: 100px;
    margin: 5px 0px 0px 5px;
  }
`;
const Headeropt = styled.div`
  display: flex;
  align-items: center;
`;
const Headeropt1 = styled.div`
  padding-left: 2px;
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const Headersearch = styled.div`
  display: flex;
  flex-grow: 0.8;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const Headersearch1 = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;
const Headersearch2 = styled.div`
  background-color: orange;
  width: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Headeruser = styled.div`
  cursor: pointer;
`;
const Headercart = styled.div`
  padding-right: 10px;
  display: flex;
  align-items: center;
  color: white;
`;
const Headercart1 = styled.div``;
const Headercart2 = styled.div``;
