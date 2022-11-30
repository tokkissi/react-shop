import React from "react";
import PropTypes from "prop-types";
import heroImg from "../img/ikm-water.jpg";
import ProductBox from "./ProductBox";

const ProductList = ({ shoes }) => {
  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="container">
        <div className="row">
          {console.log(Array.isArray(shoes))}
          {shoes.map((a, i) => {
            return <ProductBox shoes={shoes[i]} i={i} key={shoes[i].id} />;
          })}
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  shoes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default ProductList;
