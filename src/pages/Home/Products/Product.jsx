import Navbar from "../Shared/Navbar/Navbar";


const Product = ({ product }) => {
    const { title, image, description} = product;
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className=" text-5xl text-center font-semibold">Product Details</h2>
                <div>
                    <figure><img src={image} /></figure>
                    <div>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;