import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./Firebase";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }));
      setProducts(tempProducts);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </Content>
    </Container>
  );
};
export default Home;
const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 800px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -450px;
  z-index: 100;
  display: flex;
  justify-content: center;

  width: 100%;
`;
