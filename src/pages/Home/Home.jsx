import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import Slider from "./Slider/Slider";
import ProductCard from "./ProductCard";


const Home = () => {
    const product = useLoaderData();
    // console.log(product);
    return (
        <div>
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <h2 className=" text-3xl font-poppins text-center">This is Home</h2>
            <div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/5GSNd7R/Body-Building.jpg)' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className=" text-2xl font-semibold">SHAPE YOUR BODY</p>
                                <h1 className="mb-5 text-6xl font-bold">Burn Fat Earn Muscles Be <span className=" text-red-400">Strong</span></h1>
                                <button className=" mt-5 btn btn-warning text-white text-2xl">Get Info</button>
                            </div>
                        </div>
                    </div>

                    <h2 className=" text-3xl text-center mt-5 font-semibold "> Our Services</h2>
                    <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
                        {
                            product.map(aProduct => <ProductCard
                            key={aProduct._id}
                            product={aProduct}
                            ></ProductCard>)
                        }

                    </div>
                    
                </div>
                {/* <Slider></Slider> */}
                {/* <Services></Services> */}
                <AboutUs></AboutUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;