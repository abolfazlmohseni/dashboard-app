import Header from "../components/header";
import Modal from "../components/modal/modal";
import Sidebar from "../components/Sidebar/Sidebar";


const Main = () => {
  document.body.classList.add("bg-lightgray-100");
  
  return (
    <div className="flex flex-col h-screen w-screen sm:flex-row justify-between items-center">
      <Sidebar />
      <div className="w-[53%] h-[92vh]">
        <Header />
      </div>

      <Modal></Modal>
    </div>
  );
};

export default Main;
