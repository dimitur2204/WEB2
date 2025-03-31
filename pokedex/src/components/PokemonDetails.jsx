import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../utils/api";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetchPokemonDetails(id).then(data => setPokemon(data));
    }, [id]);

    if (!pokemon) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 capitalize">{pokemon.name}</h1>
            <img
                className="w-32 h-32 my-4"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
                <p className="text-gray-700"><strong>Height:</strong> {pokemon.height}</p>
                <p className="text-gray-700"><strong>Weight:</strong> {pokemon.weight}</p>
                <p className="text-gray-700">
                    <strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}
                </p>
                <p className="text-gray-700">
                    <strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(", ")}
                </p>

                <h3 className="text-xl font-semibold mt-4">Base Stats</h3>
                <ul className="mt-2">
                    {pokemon.stats.map(s => (
                        <li key={s.stat.name} className="text-gray-700">
                            <strong>{s.stat.name}:</strong> {s.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetails;

