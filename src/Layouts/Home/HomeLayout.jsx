import React from "react";
import Homenavber from "./Homenavber";
import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {



  return (
    <div>
        <Homenavber></Homenavber>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">


         
          {/* Page content here */}
          <Outlet></Outlet>


        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
             
             <Link to='/home' >
             <li>
               <a className="text-lg"> Team Creation </a>
            </li>
             </Link>

            <Link to="/home/taskcreation">
            <li>
               <a className="text-lg"> Task Creation </a>
            </li>
            </Link>

            <Link to="/home/teamtaskviewmanage" >
            <li>
            <a className="text-lg"> Team task view and manage </a>
            </li>
            </Link>

           
           <Link to="/home/taskfilter" >
           <li>
            <a className="text-lg"> Task Filtering and Sorting </a>
            </li>
           </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
