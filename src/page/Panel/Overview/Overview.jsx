import React from "react";
import Dashboard from "./Dashboard";
import { useInfo } from "../../../context/Info";
import Realtime from "./Realtime";
import Audience from "./Audience";

const Overview = () => {
  const { info, setInfo } = useInfo();
  var renderComponent;

  switch (info.activePage) {
    case 0:
      renderComponent = <Dashboard />;
      break;
    case 1:
      renderComponent = <Realtime />;
      break;
    case 2:
      renderComponent = <Audience />;
      break;
    case 3:
      renderComponent = <Dashboard />;
      break;
    default:
      renderComponent = <div>not Page</div>;
      break;
  }

  return <div>{renderComponent}</div>;
};

export default Overview;
