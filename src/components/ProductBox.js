import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductBox = ({ shoes, id }) => {
  const navigate = useNavigate();
  return (
    <Col sm onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
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
  id: PropTypes.number,
};

export default ProductBox;
