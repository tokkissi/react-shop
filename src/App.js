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
import RecentVisit from "./components/Recent";

function App() {
  const [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("watched", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>토끼상점</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/cart")}>장바구니</Nav.Link>
            <Nav.Link>마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <RecentVisit />
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
