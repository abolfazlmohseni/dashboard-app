import Header from "../components/header";
import Modal from "../components/modal/modal";
import Sidebar from "../components/Sidebar/Sidebar";
import Selector from "../../../components/Selector";
import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../Overview/Overview";
import Login from "../../login&more/login";
import Sinup from "../../login&more/sinup";
const Main = () => {
  document.body.classList.add("bg-lightgray-100");
  document.body.classList.add("dark:bg-dark-100");
  document.body.classList.add("transition-colors");
  document.body.classList.add("overflow-x-hidden");

  const [StatusModal, setStatusModal] = useState(false);
  const toggleModal = () => {
    setStatusModal(!StatusModal);
  };

  return (
    <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
      <Suspense>
        <Routes>
          <Route
            path="/Dashborad"
            element={
              <>
                <Sidebar />
                <div
                  className={`${
                    StatusModal ? "sm:w-[65%]" : "sm:w-full"
                  }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[95%]`}
                >
                  <Header />
                  <Selector
                    asli={true}
                    fontSize={22}
                    mt={"mt-16"}
                    item={[
                      "Dashboard",
                      "Realtime",
                      "Audience",
                      "Trafic Source",
                    ]}
                  />
                  <Overview />
                </div>
                <Modal onClick={toggleModal} state={StatusModal}></Modal>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sinup" element={<Sinup />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;
