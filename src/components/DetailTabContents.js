import React from "react";
import PropTypes from "prop-types";

const DetailTabContents = ({ tabKey }) => {
  if (tabKey === 0) {
    return <div>내용0</div>;
  }
  if (tabKey === 1) {
    return <div>내용1</div>;
  }
  if (tabKey === 2) {
    return <div>내용2</div>;
  }
};

DetailTabContents.propTypes = {
  tabKey: PropTypes.number,
};
export default DetailTabContents;
