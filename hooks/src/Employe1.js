

import React, { Component ,useState, useEffect } from 'react'

export default function Employe1() {
    const [employee, setEmployee] = useState([])
    
    useEffect(()=>{
        var handle=setInterval(getEmployeesCount,5000);    
    
        return ()=>{
          clearInterval(handle);
        }
      },[]);
    
    useEffect(() => {
        alert('hello')
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setEmployee(res)
        })
    }, [])
    
    function getEmployeesCount(){
      alert("feching Data")
      }

    return (
        <div>
            <h2>Employees Data...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>User email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.userName}</td>
                                <td>{emp.email}</td>
                                </tr>
                       )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

