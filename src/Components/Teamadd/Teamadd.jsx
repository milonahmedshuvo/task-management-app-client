import React from 'react'
import { useQuery } from 'react-query'


const Teamadd = () => {
    
    const {data} = useQuery({
        queryKey: ["userinfo"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/user")
            const data= await res.json()
            return data
        }
    })

console.log("team data:", data)

  return (
    <div>
       <h1>team add </h1>    
    </div>
  )
}

export default Teamadd
