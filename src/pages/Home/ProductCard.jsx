import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { title, image, description, id } = product;
    return (
        <div className=" grid md:grid-cols-3">
            <div className=" card w-96 h-[660px] bg-base-100 shadow-xl gap-4">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {
                        description.length> 100
                        ? <p>{description.slice(0,100)} <Link
                        to={`/product/${id}`}
                        className=" text-blue-700 font-bold">Read More...</Link> </p>
                        : <p>{description}</p>
                    }
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ProductCard;