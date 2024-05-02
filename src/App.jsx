import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState, useEffect } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    // Ensure loadedCoffees is an array before setting it as state
    if (Array.isArray(loadedCoffees)) {
      setCoffees(loadedCoffees);
    } else {
      console.error("Loaded coffees data is not an array:", loadedCoffees);
    }
  }, [loadedCoffees]);

  return (
    <>
      <div className="bg-cover h-screen mt-4 bg-[url('https://i.postimg.cc/9McbxL29/1.png')] bg-no-repeat">
      <div className="px-40 text-center py-28">
        <h2 className="text-2xl"> --- Sip & Savor --- </h2>
        <h1 className="text-7xl font-rancho text-chocolate text-semibold tracking-wide">Our Popular Products</h1>
        
        <button className="btn mt-5  bg-dark-yellow text-black text-3xl hover:text-white hover:border-gray-50 font-rancho">
          <Link to="/addcoffee">Add Coffee</Link>
        </button>

        <h1 className="text-6xl text-center my-10 text-purple-600">
          Coffees : {coffees.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-2">
          {coffees.slice(0, dataLength).map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees} // This prop seems redundant, you may remove it if not used in CoffeeCard
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>

        <div className={dataLength === coffees.length ? 'hidden': ''}>
          <button onClick={() => setDataLength(coffees.length)} className="btn btn-neutral">Show All</button>
        </div>

      </div>
      
      </div>
    </>
  );
}

export default App;
