import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import heroImg from "../img/ikm-water.jpg";
import ProductBox from "./ProductBox";
import axios from "axios";
import shoeData from "../data";

const ProductList = ({ shoes, setShoes }) => {
  let callCnt = useRef(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShoes(shoeData);
  }, []);
  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="container">
        <div className="row">
          {callCnt === 0
            ? null
            : shoes.map((a, i) => {
                return (
                  <ProductBox
                    shoe={shoes[i]}
                    id={shoes[i].id}
                    key={shoes[i].id}
                  />
                );
              })}
        </div>
      </div>
      {callCnt.current < 2 ? (
        <button
          onClick={() => {
            setLoading(true);
            if (callCnt.current < 2) {
              axios
                .get(
                  `https://codingapple1.github.io/shop/data${
                    callCnt.current + 2
                  }.json`
                )
                .then((res) => {
                  callCnt.current++;
                  const fetched = res.data;
                  const newShoes = shoes.concat(fetched);
                  setShoes(newShoes);
                  setLoading(false);
                })
                .catch((err) => {
                  console.log(err);
                  setLoading(false);
                });
            }
          }}
        >
          버튼
        </button>
      ) : null}
      {loading ? <p>로딩중입니다...</p> : null}
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
