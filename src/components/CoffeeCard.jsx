import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(result)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your food item has been deleted.",
                            icon: "success"
                        });
                        //filter - delete; jata delete korbo oita bad sob kisu rakha
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining);
                    }
                })
            }
        });

    }

    return (
        <div className="card card-side bg-slate-50 shadow-xl flex">
            
            <div className="flex justify-between items-center w-full pr-4">
            <div>
                <figure><img src={photo} alt="Movie" /></figure>
            </div>

                <div className="border ">
                    <h2 className="card-title text-gray-800 text-2xl"><b>Name:</b> {name}</h2>
                    <p className="text-gray-800 text-xl"><b>Quantity :</b> {quantity} pcs</p>
                    <p className="text-gray-800 text-xl"><b>Supplier : </b>{supplier}</p>
                    <p className="text-gray-800 text-xl"><b>Taste : </b> {taste} / 1000</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                    
                        <Link to={`coffeeDetails/${_id}`}>
                        <button className="btn border-none join-item text-white bg-blue-500">View</button>
                        </Link>

                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn border-none join-item text-white">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn border-none bg-red-500 join-item text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;