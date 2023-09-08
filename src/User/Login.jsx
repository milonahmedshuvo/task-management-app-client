import React, { useContext } from "react";
import loginImage from "../image/login.jpg";
import { createmyContextUser } from "../Context/Authprovider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
      const {userlogin} = useContext(createmyContextUser)
      const { register, handleSubmit } = useForm();
       const navigate = useNavigate()



    const handleSingup = (data) => {
          console.log(data.email, data.password)
          userlogin(data.email, data.password)
          .then((res) => {
            console.log(res.user)
            navigate("/home")
          })
          .catch((err) =>console.log(err))

    }

  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img src={loginImage} alt="" />
      </div>

      <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">login form</h1>

        <form onSubmit={handleSubmit(handleSingup)}>
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            required
            className="input input-bordered w-full "
          />
          <input
            type="password"
            required
            placeholder="password"
            {...register("password")}
            className="input input-bordered w-full mt-2"
          />

          <input
            type="submit"
            value="Submit"
            className="bg-blue-400 py-1 w-full text-center mt-4 font-bold text-white"
          />
        </form>
        <p className="mt-3 font-serif"> are you new site please click<Link className="ml-3 text-[#00CC90]" to="/">Register</Link>  </p>
      </div>
    </div>
  );
};

export default Login;
