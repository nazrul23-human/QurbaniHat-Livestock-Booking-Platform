import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);

  const sortedAnimals = [...animals];

  if (sortOrder === "low") {
    sortedAnimals.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (sortOrder === "high") {
    sortedAnimals.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          All Animals
        </h1>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered mt-4 md:mt-0"
        >
          <option value="">
            Sort By Price
          </option>

          <option value="low">
            Low to High
          </option>

          <option value="high">
            High to Low
          </option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={animal.image}
                alt={animal.name}
                className="h-56 w-full object-cover"
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
                Weight: {animal.weight} KG
              </p>

              <p>
                Age: {animal.age} Years
              </p>

              <p>
                Location: {animal.location}
              </p>

              <p className="font-bold text-green-700 text-lg">
                ৳ {animal.price}
              </p>

              <div className="card-actions justify-center mt-4">
                <Link
                  to={`/animals/${animal.id}`}
                  className="btn bg-green-700 text-white border-none hover:bg-green-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;