import { bikes } from "../constants/index";

const Bikes = () => {
  return (
    <div className="px-4 mt-20 md:px-20">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Bikes</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View more
        </a>
      </div>

      {/* Bikes Grid */}
      <div className="grid gap-6 border sm:grid-cols-2 lg:grid-cols-4">
        {bikes.map((bike, index) => (
          <div key={index} className="p-3">
            {/* Bike Image */}
            <img
              src={bike.image}
              alt={bike.desc}
              className="object-cover w-full h-40"
            />
            {/* Price and Icon */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-bold">Rs {bike.price}</span>
              <span className="text-gray-500 cursor-pointer">{bike.icon}</span>
            </div>
            {/* Description */}
            <p className="mt-2 text-sm font-medium">{bike.desc}</p>
            {/* Location and Time */}
            <p className="text-sm text-gray-500">{bike.loc}</p>
            <p className="text-xs text-gray-400">{bike.update}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
