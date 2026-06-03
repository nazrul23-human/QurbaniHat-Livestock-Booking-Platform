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
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Qurbani Tips
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Choose a Healthy Animal
                            </h3>
                            <p>
                                Select animals that are active, healthy and free from visible diseases.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Verify Age
                            </h3>
                            <p>
                                Ensure the animal meets the Islamic requirements regarding age.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Check Weight
                            </h3>
                            <p>
                                Compare weight and price to get the best value for your Qurbani.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Buy from Trusted Sellers
                            </h3>
                            <p>
                                Always purchase animals from reliable farms and verified sellers.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Check Vaccination History
                            </h3>
                            <p>
                                Confirm that the animal has received necessary health care and vaccinations.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Arrange Proper Transportation
                            </h3>
                            <p>
                                Ensure safe and stress-free transportation before Qurbani day.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Top Breeds
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Deshi Shahi Cow
                            </h3>
                            <p>
                                Popular local breed known for strong health and quality meat.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Brahman Cross
                            </h3>
                            <p>
                                Large-sized breed with excellent growth and weight.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Sahiwal
                            </h3>
                            <p>
                                Famous for adaptability, strength and healthy body structure.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Black Bengal Goat
                            </h3>
                            <p>
                                The most popular goat breed in Bangladesh for Qurbani.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Jamunapari Goat
                            </h3>
                            <p>
                                Known for larger size and excellent meat production.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">
                                Boer Goat
                            </h3>
                            <p>
                                Premium meat breed with fast growth and high demand.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Why Choose QurbaniHat?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Trusted Sellers
                            </h3>
                            <p>
                                We work with verified livestock sellers across Bangladesh.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Healthy Animals
                            </h3>
                            <p>
                                All listed animals are carefully raised and health-checked.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Easy Booking
                            </h3>
                            <p>
                                Book your preferred animal quickly with a simple booking process.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Secure Experience
                            </h3>
                            <p>
                                Protected authentication and secure user experience.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Nationwide Availability
                            </h3>
                            <p>
                                Browse animals from different districts across Bangladesh.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-bold">
                                Quality Assurance
                            </h3>
                            <p>
                                We focus on quality livestock suitable for Qurbani purposes.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;
