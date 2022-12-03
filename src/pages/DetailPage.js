import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import DetailTabs from "../components/DetailTabs";

const DetailPage = ({ shoes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(true);
  const [nums, setNums] = useState("");
  const [viClass, setViClass] = useState("");
  const shoe = shoes.find((el) => el.id === parseInt(id));

  useEffect(() => {
    setViClass("vi-end");
  }, []);

  useEffect(() => {
    () => clearTimeout(timer);
    if (shoe === undefined) {
      navigate("/error");
      return;
    }
    const timer = setTimeout(() => {
      setCountDown(false);
    }, 2000);

    if (isNaN(nums)) {
      setNums("");
      alert("숫자만 입력하세요");
    }
  }, [nums]);

  return shoe === undefined ? null : (
    <div className={`container vi-start ${viClass}`}>
      {countDown ? (
        <div className="alert alert-warning">2초 이내 누르면 할인됩니다!</div>
      ) : null}

      {count}
      <button onClick={() => setCount((count) => count + 1)}>버튼</button>
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
          <input
            type="text"
            onChange={(e) => setNums(e.target.value)}
            style={{ border: "5px solid red" }}
            value={nums}
          />
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <DetailTabs shoes={shoes} />
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
