import "./styles.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db, auth } from "./Firebase";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setcartItems] = useState([]);
  const getcartItems = () => {
    db.collection("CartItems").onSnapshot((snapshot) => {
      const tempitems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }));
      setcartItems(tempitems);
    });
  };
  const SignOut = () => {
   // auth.Signout().then(() => {
      setUser(false);
     // localStorage.removeItem("user");
   // });
  };
  useEffect(() => {
    getcartItems();
  }, []);
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header SignOut={SignOut} user={user} cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>

            <Cart />
          </Switch>
        </Container>
      )}
    </Router>
  );
}
export default App;
const Container = styled.div`
  background-color: #e4d9d9;
`;
