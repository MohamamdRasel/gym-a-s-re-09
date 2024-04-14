import { Link, NavLink } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const first_name = form.get('first_name');
        const last_name = form.get('last_name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(first_name, last_name, email, password);


        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
       

    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className=" text-3xl text-center font-bold">Please Register</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="First Name" className="input input-bordered" required name="first_name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Last Name" className="input input-bordered" required name="last_name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className=" text-center mt-4">Already have an account please <Link className="text-blue-600 font-bold" to='/login'>Sign In</Link></p>
            </form>

        </div>
    );
};

export default SignUp;