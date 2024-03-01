import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Creators from "./pages/Creators.jsx";

export const disableScroll = () => {
  let element = document.getElementsByTagName("body");
  element[0].classList.toggle("disableScroll");
};

export default function App() {
  return (
    <>
      {/* Handles page routing */}
      <BrowserRouter>
        <Routes>
          {/* Default page is Home.jsx page */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* /about redirects to About.jsx page */}
          <Route path="/about" element={<About />} />
          {/* /creators redirects to Creators.jsx page */}
          <Route path="/creators" element={<Creators />} />
          {/* Unknown URL redirects to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
