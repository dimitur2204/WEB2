import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "../pages/Pokedex";
import PokemonDetails from "../components/PokemonDetails";
import About from "../pages/About";

const AppRouter = () => (
    <Router basename="/WEB2">
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
);

export default AppRouter;

