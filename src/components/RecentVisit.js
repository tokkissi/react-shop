import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RecentVisit = ({ recentVisit }) => {
  const navigate = useNavigate();
  const liClicked = false;

  useEffect(() => {
    if (liClicked) {
      console.log("lilili");
    }
  }, [recentVisit, navigate]);

  return (
    <div>
      <ul>
        {recentVisit.map((el) => {
          return (
            <li key={el.id} onClick={() => navigate(`/detail/${el.id}`)}>
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

RecentVisit.propTypes = {
  recentVisit: PropTypes.array,
};

export default RecentVisit;
