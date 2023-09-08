import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createmyContextUser } from "../../Context/Authprovider";
import { useQuery } from "react-query";

const TaskCreation = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(createmyContextUser)
    console.log("email:", user?.email)


    const {data:member=[]} = useQuery({
      queryKey:["member", user?.email],
      queryFn: async () => {
        const res =await fetch(`http://localhost:5000/member/${user?.email}`)
        const data = await res.json()
        return data
      }
    })

    console.log(member)


  
      

      


    const handleTaskCreation = (data) => {
          console.log(data.title, data.description, data.date, data.priority, data.member)
          const taskInfo = {
            title:data.title,
            description: data.description,
            date: data.date,
            priority: data.priority,
            teamMember:data.member,
            isTask: "paddding"
          }

          fetch("http://localhost:5000/taskCreation",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body: JSON.stringify(taskInfo)
          })
          .then((res) => res.json())
          .then((data) => {
            toast.success("successfull task create!")
          })
          .catch((err) => {
            toast.error("Task filed create!")
          })
    }




  return (
    <div className="flex justify-center items-center mt-16">
      <form action="" onSubmit={handleSubmit(handleTaskCreation)}>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full mt-2"
          {...register("title")}
        />
        <textarea
          className="textarea textarea-bordered w-full mt-2"
          placeholder="Description"
          {...register("description")}
        ></textarea>

        <input
          type="date"
          placeholder=""
          className="input input-bordered w-full mt-2"
          {...register("date")}
        />
        <select className="select select-bordered w-full mt-3" {...register("priority")} >
          <option disabled selected>
          priority level
          </option>
          <option>50</option>
          <option>60</option>
          <option>70</option>
          <option>80</option>
          <option>90</option>
        </select>


        <select className="select select-bordered w-full mt-3" {...register("member")} >
          <option disabled selected>
          Team member add
          </option>
          {
            member.map((el) => <option>{el.username}</option> )
          }
          
        </select>


        <input
            type="submit"
            value="Tack Assign"
            className="bg-blue-400 py-1 w-full text-center mt-7 font-bold text-white"
          />
      </form>
    </div>
  );
};

export default TaskCreation;
