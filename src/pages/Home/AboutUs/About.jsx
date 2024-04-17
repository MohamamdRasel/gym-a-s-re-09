import Navbar from "../Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const About = () => {
    const { id } = useParams();

    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default About;