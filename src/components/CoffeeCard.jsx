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
        <div className="card card-side bg-slate-50 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="">
                    <h2 className="card-title text-gray-800">Name: {name}</h2>
                    <p className="text-gray-800">Quantity : {quantity}</p>
                    <p className="text-gray-800">Supplier : {supplier}</p>
                    <p className="text-gray-800">Taste : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn border-none join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn border-none join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn border-none bg-red-500 join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;