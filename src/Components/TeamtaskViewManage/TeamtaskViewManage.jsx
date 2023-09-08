import React from 'react'
import { useQuery } from 'react-query'

const TeamtaskViewManage = () => {

      const {data} = useQuery({
        queryKey:['teamtaskviewmange'],
        queryFn: async ( ) => {
            const res  = await fetch("http://localhost:5000/teamtaskview")
            const data = await res.json()
            return data
        }
      })

      
      const handleDelete =(id) => {
        console.log(id)
      }


  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className='text-lg'>Team member</th>
        <th className='text-lg'>Task title</th>
        <th className='text-lg'>Status</th>
         <th className='text-lg' >priority</th>
         <th className='text-lg' > Date</th>
         <th className='text-lg' > Dalete</th>
      </tr>

    </thead>
    <tbody>
      {/* row 1 */}

      {
        data?.map((el, i) =>  <tr className="" key={i}>
        
        <td>{el.teamMember}</td>
        <td>{el.title}</td>
        <td>
            <button className='btn btn-sm lowercase bg-green-300 '>{el.isTask}</button>
        </td>

        <td>
        <progress className="progress progress-secondary w-40" value={el.priority} max="100"></progress>
        </td>
        <td>{el.date}</td>

        <td>
            <button onClick={()=> handleDelete(el._id) } className='btn btn-sm btn-error text-white'>Delete</button>
        </td>
      </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>
  )
}

export default TeamtaskViewManage
