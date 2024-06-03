import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { CarList } from "pages/CarList/CarList";
import { About } from "pages/AboutUs/About";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<CarList />} />
      </Route>
    </Routes>
  );
};
