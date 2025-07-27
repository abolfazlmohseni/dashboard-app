import Channels from "./components/Channels";
import Direct from "./components/Direct";
import { useInfo } from "../../../../context/Info";
const Chat = () => {
  const { info, setInfo } = useInfo();
  const checker = () => {
    switch (info.chatId) {
      case 3:
        return <Channels />;
      case 4:
        return <Channels />;
      case 5:
        return <Channels />;
      case 6:
        return <Channels />;
      case 7:
        return <Channels />;
      default:
        return <Direct />;
    }
  };
  return checker();
};

export default Chat;
