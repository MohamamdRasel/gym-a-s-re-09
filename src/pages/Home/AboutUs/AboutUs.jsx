import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import AboutCard from "./AboutCard";


const AboutUs = () => {
    const about = useLoaderData();
    // console.log(about);
    return (
        
        <div className=" m-5">
            <Navbar></Navbar>
            <div className=" text-3xl text-center"><h2> About Us</h2></div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
            {
                            about.map(aAbout => <AboutCard
                            key={aAbout._id}
                            product={aAbout}
                            ></AboutCard>)
                        }
            </div>
        </div>
    );
};

export default AboutUs;