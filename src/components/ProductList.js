import React from "react";
import PropTypes from "prop-types";
import heroImg from "../img/ikm-water.jpg";
import ProductBox from "./ProductBox";
import axios from "axios";

const ProductList = ({ shoes, setShoes }) => {
  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <ProductBox shoes={shoes[i]} i={i} key={shoes[i].id} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((res) => {
              const fetched = res.data;
              const newShoes = shoes.concat(fetched);
              setShoes(newShoes);
            });
        }}
      >
        버튼
      </button>
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
  setShoes: PropTypes.func,
};

export default ProductList;
