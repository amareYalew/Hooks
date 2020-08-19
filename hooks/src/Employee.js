import React, { Component, useState } from "react";
import Salary from './Salery' 

export default function Employee() {
const[employee,setEmployeeData]=useState({id:'',name:'',userName:'',email:''})

    
    const changeEmployeeInfo=(e)=> {
setEmployeeData({...employee,[e.target.name]:e.target.value})
}
    
    return (
        <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <lebel>Employee ID :
                    <input type="text" name="id" value={employee.id}onChange={changeEmployeeInfo}></input>
                </lebel>
            </p>
            <p>
                <lebel>Employee Name : 
                    <input type="text" name="name" value={employee.name}onChange={changeEmployeeInfo}></input>
                </lebel>
            </p>
            <p>
                <lebel>Employee User Name 
                    <input type="text" name="userName" value={employee.userName}onChange={changeEmployeeInfo}></input>
                </lebel>
            </p>
            <p>
                <lebel>Employee email 
                    <input type="text" name="email" value={employee.email}onChange={changeEmployeeInfo}></input>
                </lebel>
            </p>
            <p>
                Employee ID is : <b>{employee.id}</b>,
        Name is : <b>{employee.name}</b> ,
        User Name is : <b>{employee.userName}</b> and email is : <b>{employee.email}</b>
      </p>
        <Salary onSalaryChang={changeEmployeeInfo} email={employee.email}></Salary>
        </div>
    )
}
