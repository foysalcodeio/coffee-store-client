const Info = ({ product }) => {
    const { image, coffee_name, desc } = product
    return (
        <div className="ml-24  mr-36 border-green-50">
            <div className="mt-10 mb-5">
                <img src={image} alt="" />
                <h1 className="font-rancho text-4xl tracking-wide text-chocolate">{coffee_name}</h1>
                <h3 className="text-chocolate1 text-semibold">{desc}</h3>
            </div>
            
        </div>
    );
};

export default Info;