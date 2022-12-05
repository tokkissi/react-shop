import "./App.css";
import "./tailwind.css";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import shoesData from "./data";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import DetailPage from "./pages/DetailPage";
import EventPage from "./pages/EventPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  let fetchedUser = useQuery(
    "tok",
    () => {
      return axios
        .get("https://codingapple1.github.io/userdata.json")
        .then((res) => {
          console.log("axios 요청!");
          return res.data;
        });
    },
    { staleTime: 5000 }
  );
  console.log(fetchedUser);

  useEffect(() => {
    let hasWatched = false;
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key === "watched") {
        hasWatched = true;
        break;
      }
    }
    if (!hasWatched) {
      sessionStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>토끼상점</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => navigate("/detail")}>Detai  l</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/cart")}>장바구니</Nav.Link>
            <Nav.Link>마이페이지</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {fetchedUser.isLoading && "로딩중"}
            {fetchedUser.error && "에러남"}
            {fetchedUser.data && fetchedUser.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={<ProductList shoes={shoes} setShoes={setShoes} />}
        />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
