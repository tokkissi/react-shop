import "./App.css";
import "./tailwind.css";
import React, { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import heroImg from "./img/ikm-water.jpg";
import shoesData from "./data";
import ProductBox from "./components/ProductBox";

function App() {
  const [shoes] = useState(shoesData);
  console.log(shoes);

  const ProductList = () => {
    const addProduct = () => {
      return shoesData.map((shoe, index) => {
        <>
          <ProductBox shoes={shoesData} i={index}></ProductBox>;
        </>;
      });
    };
    return (
      <>
        <Container>
          <Row>{addProduct()}</Row>
        </Container>
      </>
    );
  };

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">토끼상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">로그인</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
            <Nav.Link href="#pricing">마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <ProductList></ProductList>
    </div>
  );
}

export default App;
