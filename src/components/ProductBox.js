import React from "react";
import { Col } from "react-bootstrap";

const ProductBox = ({ shoes, i }) => {
  <>
    <Col sm>
      <img
        src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
        alt=""
        width="80%"
      />
      <h4>{shoes[i].title}</h4>
      <p>{shoes[i].price}</p>
    </Col>
  </>;
};

export default ProductBox;
