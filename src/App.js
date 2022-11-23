import "./App.css";
import "./tailwind.css";
import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import heroImg from "./img/ikm-water.png";

function App() {
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

      <Container>
        <Row>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt=""
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt=""
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>

          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt=""
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
