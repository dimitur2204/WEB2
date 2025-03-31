import PokemonList from "../components/PokemonList";

const Pokedex = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-center py-8">
            <h1 className="text-4xl font-bold text-blue-600">Pokédex</h1>
            <PokemonList />
        </div>
    );
};

export default Pokedex;
