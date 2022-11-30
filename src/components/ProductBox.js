import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductBox = ({ shoes, i }) => {
  return (
    <Col sm>
      <img
        src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
        alt=""
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
};

ProductBox.propTypes = {
  shoes: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  i: PropTypes.node,
};

export default ProductBox;
