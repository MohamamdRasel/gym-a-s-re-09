import Navbar from "../Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const Product = () => {
    const { id } = useParams();

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    // const { title, image, description} = product;

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className=" text-5xl text-center font-semibold">Product Details</h2>
                <p>{id}</p>

                <h2 className="card-title">{
                    categories.map(category => {category.title})
                }</h2>
             
            </div>

        </div>
    );
};

export default Product;