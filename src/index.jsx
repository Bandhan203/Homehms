import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HospitalInformation } from "./screens/HospitalInformation";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HospitalInformation />
  </StrictMode>,
);
