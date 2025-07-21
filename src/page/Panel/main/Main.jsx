import Header from "../components/header";
import Modal from "../components/modal/modal";
import Sidebar from "../components/Sidebar/Sidebar";
import Selector from "../../../components/Selector";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
const Main = () => {
  document.body.classList.add("bg-lightgray-100");
  document.body.classList.add("dark:bg-dark-100");
  document.body.classList.add("transition-colors");
  document.body.classList.add("overflow-x-hidden");

  return (
    <div className="flex flex-col h-screen w-screen sm:flex-row  justify-between items-center">
      <Suspense>
        <Routes>
          <Route
            path="/Dashborad"
            element={
              <>
                <Sidebar />
                <div className="w-[53%] h-[92vh]">
                  <Header />
                  <Selector
                    fontSize={22}
                    mt={"mt-16"}
                    item={[
                      "Dashboard",
                      "Realtime",
                      "Audience",
                      "Trafic Source",
                    ]}
                  />
                  <Dashboard />
                </div>
                <Modal></Modal>
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;
