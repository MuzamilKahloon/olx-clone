import { categories } from '../constants/index';

const Categories = () => {
    return (
        <div className='container mx-auto overflow-x-hidden md:px-8 lg:px-16'>
            <h3 className='my-10 text-3xl font-bold text-left'>All Categories</h3>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-7'>
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col items-center p-4 text-center'>
                        <img 
                            src={category.image} 
                            alt={category.type} 
                            className='object-contain w-24 h-24 mb-4 rounded-full' 
                        />
                        <h4 className='font-bold text-x'>{category.type}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
