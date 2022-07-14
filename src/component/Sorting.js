import React, { useState } from 'react'
import Details from '../users.json'

function Sorting() {
    const [data,setdata]=useState(Details)
    const [order,setorder]=useState("ascending")
    const sorting=(col)=>{
        if (order === "ascending"){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setdata(sorted);
            setorder("descending")
        }
        if (order === "descending"){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setdata(sorted);
            setorder("ascending")
        }
    };

  return (
    <div>
        <table>
            <thead>
                <th onClick={()=>sorting("username")}>Username &nbsp;<span>&#8593;</span> &nbsp; <span>&#8595;</span> &nbsp; &nbsp; &nbsp; &nbsp;</th>
                <th onClick={()=>sorting("email")}>Email  &nbsp;<span>&#8593;</span> &nbsp; <span>&#8595;</span></th>

            </thead>
            <tbody>
                { data.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.username} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                        <td>{d.email}</td>
                    </tr>
                ))

                }

            </tbody>
        </table>


    </div>
  )
}

export default Sorting