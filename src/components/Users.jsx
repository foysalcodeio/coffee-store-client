import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        // console.log('delete action working', id)

        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
        })
        .then( res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('delete successfully');
                //remove the user from UI
                const remainingUsers = users.filter( user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
        


        
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire({
        //         title: "Deleted!",
        //         text: "Your file has been deleted.",
        //         icon: "success"
        //       });
        //     }
        //   });
    }

    return (
        <div className="px-10 py-5">
            <h2>Users : {loadedUsers.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-gray-800 text-white text-semibold">
        <th></th>
        <th>Email</th>
        <th>created date/time</th>
        <th>Last Login</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="text-gray-800">
      {/* row 1 */}
     {
        users.map(user => 
            <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td></td>
            <td>
                <button onClick={() => handleDelete(user._id)} className="btn btn-error">X</button>
            </td>
          </tr>
        )
     }
             </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;