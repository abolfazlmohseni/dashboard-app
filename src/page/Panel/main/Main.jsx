import Header from "../components/header";
import Modal from "../components/modal/modal";
import Sidebar from "../components/Sidebar/Sidebar";
import Selector from "../../../components/Selector";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
const Main = () => {
  document.body.classList =
    "bg-lightgray-100 dark:bg-dark-100 transition-colors";

  return (
    <div className="flex flex-col h-screen w-screen sm:flex-row  justify-between items-center">
      <Suspense>
        <Sidebar />
        <Routes>
          <Route
            path="/Dashborad"
            element={
              <>
                <div className="w-[53%] h-[92vh]">
                  <Header />
                  <Selector
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
