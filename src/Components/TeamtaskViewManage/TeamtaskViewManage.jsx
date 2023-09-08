import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const TeamtaskViewManage = () => {
  const [value, setValue] = useState("")

  const { data, refetch } = useQuery({
    queryKey: ["teamtaskviewmange"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/teamtaskview");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/taskDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesful delete");
        refetch();
      })
      .catch((err) => console.log(err));
  };

  const status = ["completed", "padding"];

 

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg">Team member</th>
            <th className="text-lg">Task title</th>
            <th className="text-lg">Status</th>
            <th className="text-lg">priority</th>
            <th className="text-lg">Due date</th>
            <th className="text-lg"> Dalete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data?.map((el, i) => (
            <tr className="" key={i}>
              <td>{el.teamMember}</td>
              <td>{el.title}</td>
              <td>
                <button className="btn btn-sm lowercase bg-green-300  ">
                  {el.isTask}
                </button>
              </td>

              <td>
                <progress
                  className="progress progress-secondary w-40 h-[3px]"
                  value={el.priority}
                  max="100"
                ></progress>
              </td>
              <td>{el.date}</td>

              <td>
                <button
                  onClick={() => handleDelete(el._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamtaskViewManage;
