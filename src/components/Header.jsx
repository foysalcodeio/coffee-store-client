import { useEffect, useState } from "react";
import Info from "./Info";

const Header = () => {
    const [store, setStore] = useState([])

    useEffect(() => {
        fetch('/images/icons.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStore(data);
            })
    }, [])



    return (
        <div>

            <div className="bg-cover h-screen bg-[url('https://i.postimg.cc/T3VvBrtf/3.png')] bg-no-repeat grid grid-cols-2">
                <div className="flex">
                </div>
                <div className="flex items-center space-y-6">
                    <div className="leading-6 mr-5">
                        <h1 className="text-5xl tracking-wider font-rancho">Would you like a Cup of Delicious Coffee</h1><br />
                        <p className="text-2xl tracking-wider">it's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable</p><br />
                        <button className="btn bg-dark-yellow text-black text-xl hover:text-white hover:border-gray-50 font-rancho">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 bg-custom-light">
                {
                    store.map(product => <Info
                        id={product.id}
                        product={product}
                    ></Info>)
                }
            </div>
            
        </div>
    );
};

export default Header;
