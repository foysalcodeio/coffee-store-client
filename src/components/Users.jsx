import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";


const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Ensure loadedCoffees is an array before setting it as state
    if (Array.isArray(loadedUsers)) {
      setUsers(loadedUsers);
      console.log(loadedUsers)
    } else {
      console.error("Loaded coffees data is not an array:", loadedUsers);
    }
  }, [loadedUsers]);


  const handleDelete = (id) => {
    // console.log('delete action working', id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(result)
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            console.log('delete successfully');
            Swal.fire({
              title: "Deleted!",
              text: "Your User Data has been deleted.",
              icon: "success"
            });

            //remove the user from UI
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
          }
        })
    });
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
                  <th></th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td className="border flex gap-2">
                    <button onClick={() => handleDelete(user._id)} className="btn bg-red-500 border-none"> <MdDelete className="text-xl text-white" /></button>
                    {/* Log generated URL check */}
                    {console.log(`/user/${user._id}`)}

                      <Link to={`/user/${user._id}`}>
                        <button className="btn bg-blue-700 border-none"> <FiEdit className="text-xl text-white" /></button>
                      </Link>
                    <button className="btn bg-green-800 border-none"><GrView className="text-xl text-white" /></button>
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