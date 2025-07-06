import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./router";
import "./index.css";

import FPSCounter from "@sethwebster/react-fps-counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="[&>div]:!bottom-0 [&>div]:!left-0 [&>div]:!top-auto [&>div]:mb-5 [&>div]:ml-5 [&>div]:z-[999999] [&>div]:!border-0 [&>div>div]:!bg-transparent [&>div>div>div]:!bg-transparent opacity-20">
      <FPSCounter visible={true} />
    </div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
