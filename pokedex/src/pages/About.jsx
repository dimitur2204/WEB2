const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-bold text-blue-600">About Pokédex</h1>
            <p className="text-lg text-gray-700 mt-4 max-w-lg">
                This is a simple Pokédex built using React, TailwindCSS, and the PokéAPI. Browse through Pokémon and view their details!
            </p>
        </div>
    );
};

export default About;
