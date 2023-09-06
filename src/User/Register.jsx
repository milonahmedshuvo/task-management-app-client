import React from "react";
import registerImg from '../image/Register.jpg'
const Register = () => {
   

    const handleUserRegister = (event) => {
        event.preventDefault()

    }



  return (
    <div className="flex items-center">
      <div className=" w-full md:w-1/2 mt-10">
        <img src={registerImg} alt="" />
      </div>

      <div className=" md:w-1/2 px-28 ">
        <h1 className="text-2xl text-center mb-10">Register form</h1>

        <form onSubmit={handleUserRegister}>
          <input
            type="text"
            placeholder="name"
            name="name"
            required
            className="input input-bordered w-full "
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className="input input-bordered w-full mt-2 "
          />
          <input
            type="password"
            required
            placeholder="password"
            name="password"
            className="input input-bordered w-full mt-2"
          />
          
          <textarea name="bio" className="textarea textarea-bordered w-full mt-2" placeholder="Bio"></textarea>
          <input type="file" required name="file" className="input input-bordered w-full mt-2" />
          
          <input
            type="submit"
            value="Submit"
            className="bg-blue-400 py-1 w-full text-center mt-4 font-bold text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
