import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div><h2 className=" text-3xl text-center mt-5">Our Services</h2></div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="hero min-h-screen">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/Vxj5KCb/Fitness.jpg"  className="rounded-xl h-[250px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{
                                categories.map(category => <Link key={category.id} to={`/category/${category.id}`}>{category.title}</Link> )
                            }</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            
                
                

            </div>

        </div>
    );
};

export default Services;