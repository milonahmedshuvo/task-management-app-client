import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const Taskfilter = () => {
    const { register,handleSubmit} = useForm();
    const [dateValue, setDateValue] = useState("")
    const [priorityValue, setPriorityValue] = useState("")
    const [taskValue, setTaskValue] = useState("")





    const {data} = useQuery({
        queryKey: ["taskview"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/teamtaskview")
            const data = res.json()
            return data
        }
    })

     const taskDate = data?.filter((el) => el.date === dateValue)

   
    
     



   const handleDate = (data) => {
       setDateValue(data.date)
   }

   const handlePriority = (data) => {
         setPriorityValue(data.priority)
   }


   const handletask = (data) => {
         setTaskValue(data.task)
   }

   


  return (
    <div className="mt-10 ml-6 ">

      <form action="" onSubmit={handleSubmit(handleDate)}  className="my-6">
        <select className="select select-bordered w-full max-w-xs" {...register("date")}>
          <option disabled selected>
            Due date
          </option>
          {
            data?.map((el, i) =><option key={i} > {el.date}</option> )
          }
          
        </select>

        <input type="submit" value="Search" className="bg-blue-300 py-2 ml-1 px-10 text-white text-xl " />
      </form>


      <form action="" className="my-6" onSubmit={handleSubmit(handlePriority)} >
        <select className="select select-bordered w-full max-w-xs" {...register("priority")} >
          <option disabled selected>
            priority
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <input type="submit" value="Search" className="bg-blue-300 py-2 ml-1 px-10 text-white text-xl " />
      </form>



      <form action="" className="my-6" onSubmit={handleSubmit(handletask)}>
        <select className="select select-bordered w-full max-w-xs" {...register("task")}>
          <option disabled selected>
             completed
          </option>
          <option>padding</option>
          <option>completed</option>
        </select>

        <input type="submit" value="Search" className="bg-blue-300 py-2 ml-1 px-10 text-white text-xl " />
      </form>


    </div>
  );
};

export default Taskfilter;
