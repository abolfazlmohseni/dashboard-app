import { useInfo } from "../../../context/Info";
import Chat from "./Chat";
import TraficSource from "./TraficSource/TraficSource";

const Overview = () => {
  const { info, setInfo } = useInfo();
  var renderComponent;
  switch (info.activePage) {
    case 0:
      renderComponent = <Chat />;
      break;
    case 1:
      renderComponent = <TraficSource />;
      break;
    case 2:
      renderComponent = <Chat />;
      break;
    case 3:
      renderComponent = <Chat />;
      break;
    default:
      renderComponent = <div>not Page</div>;
      break;
  }

  return renderComponent;
};

export default Overview;
