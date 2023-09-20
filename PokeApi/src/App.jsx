import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import Pokemonpages from "./Pages/Pokemonpage";
import Search from "./Pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="pokemon/:id" element={<Pokemonpages />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default App;
