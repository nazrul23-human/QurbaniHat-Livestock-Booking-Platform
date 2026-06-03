import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const AnimalDetails = () => {
  const { id } = useParams();

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const foundAnimal = data.find(
          (item) => item.id === parseInt(id)
        );

        setAnimal(foundAnimal);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;

    toast.success("Booking Submitted Successfully!");

    form.reset();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!animal) {
    return (
      <h2 className="text-center text-3xl font-bold py-20">
        Animal Not Found
      </h2>
    );
  }

  return (
    <div className="py-12">

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Animal Info */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-[350px] object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">
              {animal.name}
            </h2>

            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Weight:</strong> {animal.weight} KG</p>
            <p><strong>Age:</strong> {animal.age} Years</p>
            <p><strong>Location:</strong> {animal.location}</p>

            <p className="text-green-700 font-bold text-2xl mt-3">
              ৳ {animal.price}
            </p>

            <p className="mt-4 text-gray-600">
              {animal.description}
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-3xl font-bold mb-6">
            Book This Animal
          </h2>

          <form
            onSubmit={handleBooking}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />

            <textarea
              placeholder="Your Address"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="btn bg-green-700 text-white border-none hover:bg-green-800 w-full"
            >
              Confirm Booking
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AnimalDetails; 