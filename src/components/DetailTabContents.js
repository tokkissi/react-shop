import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DetailTabContents = ({ tabKey }) => {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tabKey]);

  const contents = {
    0: <div>내용0</div>,
    1: <div>내용1</div>,
    2: <div>내용2</div>,
  };

  return <div className={`start ${fade}`}>{contents[tabKey]}</div>;
};

DetailTabContents.propTypes = {
  tabKey: PropTypes.string,
};
export default DetailTabContents;
