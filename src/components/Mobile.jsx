import { phones } from "../constants/index";

const Phones = () => {
  return (
    <div className="px-4 md:px-20">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Mobile Phones</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View more
        </a>
      </div>

      {/* Phones Grid */}
      <div className="grid gap-6 border sm:grid-cols-2 lg:grid-cols-4">
        {phones.map((phone, index) => (
          <div
            key={index}
            className="p-3"
          >
            {/* Phone Image */}
            <img
              src={phone.image}
              alt={phone.desc}
              className="w-full h-40 "
            />
            {/* Price and Icon */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-bold">Rs {phone.price}</span>
              <span className="text-gray-500 cursor-pointer">{phone.icon}</span>
            </div>
            {/* Description */}
            <p className="mt-2 text-sm font-medium">{phone.desc}</p>
            {/* Location and Time */}
            <p className="text-sm text-gray-500">{phone.loc}</p>
            <p className="text-xs text-gray-400">{phone.update}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
