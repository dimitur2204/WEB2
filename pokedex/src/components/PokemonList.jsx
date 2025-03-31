import { useState, useEffect } from "react";
import { fetchPokemonList } from "../utils/api";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        fetchPokemonList(offset, limit).then(data => setPokemon(data.results));
    }, [offset]);

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {pokemon.map((p, index) => (
                    <PokemonCard key={index} name={p.name} url={p.url} />
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                    disabled={offset === 0}
                    onClick={() => setOffset(offset - limit)}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => setOffset(offset + limit)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PokemonList;

