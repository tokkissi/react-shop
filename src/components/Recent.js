import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecentVisit = () => {
  const recentVisit = useSelector((state) => state.recentVisit);
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {recentVisit.map((el) => {
          return (
            <li key={el.id} onClick={navigate(`/detail/${el.id}`)}>
              <img
                src={`https://codingapple1.github.io/shop/shoes${
                  el.id + 1
                }.jpg`}
                alt=""
                width="40%"
              />
              <h5>{el.name}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentVisit;
