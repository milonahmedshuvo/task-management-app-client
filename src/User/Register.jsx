import React, { useContext } from "react";
import registerImg from "../image/Register.jpg";
import { useForm } from "react-hook-form";
import { createmyContextUser } from "../Context/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";





const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const {userCreate} = useContext(createmyContextUser)




  const handleUserRegister = (data) => {
        console.log(data.image)
        console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData();
        formData.append("image", image);



        userCreate(data.email, data.password)
        .then((res) => {


          console.log(res.user)
          fetch("https://api.imgbb.com/1/upload?&key=fb70d1eaaaaf3643c06f16d2e654b7a0",{
            method:"POST",
            body: formData
          })
          .then((res) => res.json())
          .then((imageData)=>{
            console.log(imageData.data.url)
            const userData = {
              username:data.name,
              email : data.email,
              bio : data.bio,
              image: imageData.data.url 
            }
            console.log("user info", userData)
            userinfoSave(userData)
          })

          .catch((err)=>console.log(err))
        })






        .catch((err) => {
          console.log(err)
        })

  };




  function userinfoSave (user){
    fetch("http://localhost:5000/userinfo",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) =>{
      toast.success("Successful")
      navigate("/home")
      console.log(data)
    })
    .catch((err) =>console.log(err))
  }





  return (
    <div className="flex items-center">
      <div className=" w-full md:w-1/2 mt-10">
        <img src={registerImg} alt="" />
      </div>

      <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">Register form</h1>

        <form onSubmit={handleSubmit(handleUserRegister)}>
          <input
            type="text"
            placeholder="name"
            {...register("name")}
            
            className="input input-bordered w-full "
          />
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            required
            className="input input-bordered w-full mt-2 "
          />
          <input
            type="password"
            required
            placeholder="password"
            {...register("password")}
            className="input input-bordered w-full mt-2"
          />

          <textarea
            {...register("bio")}
            className="textarea textarea-bordered w-full mt-2"
            placeholder="Bio"
          ></textarea>
          <input
            type="file"           
            {...register("image")}
            className="input input-bordered w-full mt-2"
          />

          <input
            type="submit"
            value="Submit"
            className="bg-blue-400 py-1 w-full text-center mt-4 font-bold text-white"
          />
        </form>
        <p className="mt-3 font-serif">Already your account please click<Link className="ml-3 text-[#00CC90]" to="/login">login </Link>  </p>
      </div>
    </div>
  );
};

export default Register;
