import React, { useState } from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRecentVisit } from "../store/recentVisitSlice";
import { useEffect } from "react";

const ProductBox = ({ shoe, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonClick, setButtonClick] = useState(false);

  const shoeOj = {
    type: "recent",
    id: id,
    name: shoe.title,
    price: shoe.price,
  };

  useEffect(() => {
    if (buttonClick) {
      console.log("클릭됨");
      console.log(buttonClick);
      dispatch(updateRecentVisit(shoeOj));
      navigate(`/detail/${id}`);
      console.log("감지됨");
      console.log(shoeOj);
    }
  }, [buttonClick]);

  return (
    <Col
      sm
      onClick={() => {
        console.log("딸깍");
        setButtonClick(true);
        console.log(buttonClick);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        alt=""
        width="80%"
      />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </Col>
  );
};

ProductBox.propTypes = {
  shoe: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  id: PropTypes.number,
};

export default ProductBox;
