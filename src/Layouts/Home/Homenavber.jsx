import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createmyContextUser } from '../../Context/Authprovider'
import { toast } from 'react-hot-toast'

const Homenavber = () => {
      const {userlogout, user} = useContext(createmyContextUser)
      


     const handlelogout = () => {
       userlogout()
       .then((res) => {
        console.log(res)
        toast.success("user logout success")
       })
       .catch((err) => console.log(err))
     }




  return (
    <div>

    <div className="navbar bg-[#f16060]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
         


      {/* item */}


        </div>
        <Link to="/">
        <a className="btn btn-ghost normal-case text-xl text-white font-serif">
          <img src="https://app.ntaskmanager.com/ed905250282e4067e76d17d64003393d.svg" alt="" />
         management app</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        

      {/* item */}



      </div>





      <div className="navbar-end">

      <label
            htmlFor="my-drawer-2"
            className="btn btn-sm btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

           
        
           <Link  onClick={handlelogout}  className='mr-3 text-white font-serif'>logout</Link>
           {/* <Link to="/register" className='mr-3'>Register</Link> */}
           

      </div>
    </div>
  </div>
  )
}

export default Homenavber
