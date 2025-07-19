import React from "react";
import ReactDom from "react-dom/client";
import Login from "./page/login&more/login/login";
import Sinup from "./page/login&more/sinup";
import RecoveryPass from "./page/login&more/RecoveryPass";
import Sidebar from "./page/Dashboard/components/Sidebar/Sidebar";
import Modal from "./page/Dashboard/components/modal/modal";
import Main from "./page/Dashboard/main";
import SetInfo from "./context/SetInfo";
import { InfoProvider } from "./context/Info";
const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <InfoProvider>
    {/* <SetInfo /> */}
    <Main />
  </InfoProvider>
);
