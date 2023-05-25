import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "..";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        {/* Search, Heroe by id */}

        <Route path="/" element={<Navigate to="marvel" />} />
      </Routes>
    </>
  );
};
