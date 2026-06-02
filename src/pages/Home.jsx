import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => {
                setAnimals(data.slice(0, 4));
            });
    }, []);

    return (
        <div>

            {/* Hero Section */}
            <section className="hero min-h-[500px] bg-base-200 rounded-2xl mt-8">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img
                        src="https://i.ibb.co.com/2wN2kqB/pngtree-market-day-for-qurbani-animals-png-image-21053556.png"
                        className="max-w-md rounded-lg min-h-[600px] mt-8 overflow-hidden"
                        alt="Cow"
                    />
                    <section
                        className="hero min-h-[600px] rounded-2xl mt-8 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/CKPPbTwr/Global-animal-production-expected-to-grow.jpg')",
                        }}
                    ></section>

                    <div>
                        <h1 className="text-5xl font-bold">
                            Find Your Perfect Qurbani Animal
                        </h1>

                        <p className="py-6 text-gray-600">
                            Explore healthy cows and goats from trusted farms
                            across Bangladesh. Book your preferred animal
                            easily and securely.
                        </p>

                        <Link
                            to="/animals"
                            className="btn bg-green-700 text-white"
                        >
                            Browse Animals
                        </Link>
                    </div>

                </div>
            </section>

            {/* Featured Animals */}
            <section className="py-16">

                <h2 className="text-4xl font-bold text-center mb-10">
                    Featured Animals
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {animals.map((animal) => (
                        <div
                            key={animal.id}
                            className="card bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="h-52 w-full object-cover"
                                />
                            </figure>

                            <div className="card-body">

                                <h2 className="card-title">
                                    {animal.name}
                                </h2>

                                <p>
                                    Breed: {animal.breed}
                                </p>

                                <p>
                                    Location: {animal.location}
                                </p>

                                <p className="font-bold text-green-600">
                                    ৳ {animal.price}
                                </p>

                                <div className="card-actions justify-center">
                                    <Link
                                        to={`/animals/${animal.id}`}
                                        className="btn bg-green-700 text-white btn-sm"
                                    >
                                        View Details
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default Home;
