import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CoffeeDetails = () => {
    const CoffeeDetails = useLoaderData();
    console.log(CoffeeDetails);
    const { category, details, name, photo, quantity, supplier, taste, _id } = CoffeeDetails;

    const navigate = useNavigate();
    const handleBack = () => {
        console.log('click');
    }

    return (
        <div className='p-4'>
            <button onClick={() => handleBack()} className='btn hover:text-white bg-slate-50  text-chocolate font-rancho tracking-wide text-3xl'> Back to Home </button>
            <div className='max-w-2xl mx-auto mt-5'>
                <div className="bg-slate-50 shadow-xl flex">
                    <div className="flex justify-evenly items-center w-full pr-4">
                        <div>
                            <figure><img src={photo} alt="Movie" /></figure>
                        </div>

                        <div className="">
                            <h2 className="card-title text-gray-800 text-2xl">{name}</h2>

                            <p className="text-gray-800 text-xl"><b>Quantity :</b> {quantity} pcs</p>
                            <p className="text-gray-800 text-xl"><b>Supplier : </b>{supplier}</p>
                            <p className="text-gray-800 text-xl"><b>Taste : </b> {taste} / 1000</p>
                            <p className="text-gray-800 text-xl"><b>Details : </b> {details}</p>
                            <p className="text-gray-800 text-xl"><b>Category : </b> {category}</p>                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CoffeeDetails;