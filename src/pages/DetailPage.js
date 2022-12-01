import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = ({ shoes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find((el) => el.id === parseInt(id));
  useEffect(() => {
    if (shoe === undefined) {
      navigate("/error");
    }
  }, []);

  return shoe === undefined ? null : (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

DetailPage.propTypes = {
  shoes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default DetailPage;
