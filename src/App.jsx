import React from "react";
import ReactDom from "react-dom/client";
import Login from "./page/login&more/login/login";
import Sinup from "./page/login&more/sinup";
import RecoveryPass from "./page/login&more/RecoveryPass";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(<RecoveryPass />);
