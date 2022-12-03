import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailTabContents from "./DetailTabContents";

function DetailTabs() {
  const [tabKey, setTabKey] = useState("0");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={tabKey}
        onSelect={(k) => setTabKey(k)}
        className="mb-3"
      >
        <Tab eventKey={0} title="tab 1"></Tab>
        <Tab eventKey={1} title="tab 2"></Tab>
        <Tab eventKey={2} title="tab 3"></Tab>
      </Tabs>
      <DetailTabContents tabKey={tabKey} />
    </div>
  );
}

export default DetailTabs;
