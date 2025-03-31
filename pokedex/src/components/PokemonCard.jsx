import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
    const id = url.split("/")[url.split("/").length - 2]; // Extract ID from URL
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <img className="w-24 h-24 mx-auto" src={imageUrl} alt={name} />
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <Link
                to={`/pokemon/${name}`}
                className="text-blue-500 hover:underline"
            >
                View Details
            </Link>
        </div>
    );
};

export default PokemonCard;

