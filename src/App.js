import "./App.css";
import "./tailwind.css";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import shoesData from "./data";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Detail from "./pages/Detail";

function App() {
  const [shoes] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">토끼상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">로그인</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
            <Nav.Link href="#pricing">마이페이지</Nav.Link>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductList shoes={shoes} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
