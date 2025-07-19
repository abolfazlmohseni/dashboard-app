import React from "react";
import ReactDom from "react-dom/client";
import Login from "./page/login&more/login/login";
import Sinup from "./page/login&more/sinup";
import RecoveryPass from "./page/login&more/RecoveryPass";
import Sidebar from "./page/Panel/components/Sidebar/Sidebar";
import Modal from "./page/Panel/components/modal/modal";
import Main from "./page/Panel/main";
import { InfoProvider } from "./context/Info";
import Selector from "./components/Selector";
import { BrowserRouter } from "react-router-dom";
const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <InfoProvider>
      <Main />
    </InfoProvider>
  </BrowserRouter>
);
