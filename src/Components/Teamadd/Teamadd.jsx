import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { createmyContextUser } from "../../Context/Authprovider";

const Teamadd = () => {
      const {user} = useContext(createmyContextUser)
      console.log("emailllllllll:",user?.email)
  

 
 

  


  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userinfo"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <p className="text-center">Loading...</p>
  }
  console.log("team data:", data);









    const handleTeamadd = (name, image, email, id) =>{
      console.log("click")
      console.log(name, image, email, id)
      const team = {
        admin: user?.email,
        status:true
      }



      fetch(`http://localhost:5000/teamadd/${id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(team)
      })
      .then((res) => res.json())
      .then((data) => {
        toast.success("succeful team member add")
        console.log(data)
        refetch()
        
      })
      .catch((err) => console.log(err))

    }

   const handleRemove =(id) => {
    console.log(id)
    const data ={
      status: false
    }
    fetch(`http://localhost:5000/teamMemberRemove/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      refetch()
      toast.success("Team Member Remove")
    })
    .catch((err) => console.log(err))
   }



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team Member Add</th>
              <th>Team Member remove</th>
            </tr>
          </thead>
          <tbody>


            {/* row 1 */}
            {
              data?.map((el, i) =>   <tr key={i}>
              
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={el.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{el.username}</div>
                  </div>
                </div>
              </td>
              <td>
                
                <span className="badge badge-ghost badge-sm">
                  {el.email}
                </span>
              </td>


              <td >

                {
                  el.admin === user?.email && el.status===true? <button className="btn-sm btn px-6 text-white bg-[#74ccb2]" >Join</button>  :  <button onClick={()=> handleTeamadd(el.username,el.image, el.email, el._id)} className="btn btn-sm btn-primary px-6"  type="submit">Add</button>
                }
     
             
              </td>
              <th>
              <button onClick={() => handleRemove(el._id)} className="btn btn-sm btn-error px-6"  type="submit">remove</button>
              </th>
            </tr>  )
            }



           
            
            
           
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Teamadd;
