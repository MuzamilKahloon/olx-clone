import { cars } from '../constants/index';

const Cars = () => {
    return (
        <div className='px-4 mt-20 md:px-20'>
            <div className='flex items-start justify-between mb-6'>
                <h2 className='text-xl font-bold'>Cars</h2>
                <a href="#" className='text-blue-500 hover:underline'>See More</a>
            </div>
            <div className='grid grid-cols-1 gap-6 border sm:grid-cols-2 lg:grid-cols-4'>
                {cars.map((car, index) => (
                    <div key={index} className='p-3 border rounded'>
                        <img src={car.image} alt="Car" className='object-cover w-full h-40' />
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-lg font-bold">Rs {car.price}</span>
                            <span className="text-gray-500 cursor-pointer">{car.icon}</span>
                        </div>
                        <p className="mt-2 text-sm font-medium">{car.desc}</p>
                        <p className="text-sm text-gray-500">{car.loc}</p>
                        <p className="text-xs text-gray-400">{car.update}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
