import React from 'react'

export default function Salery({ onSalaryChang, email }) {
    
    const changeSalary = (e) => {
        onSalaryChang(e)
    }

    return (
        <div  style={{border:'3px solid red', width:'500px'}}>
             <h2>Welcome to Salary Component</h2>

<p>

    <label>Employee email: 

            <input type="text" name="Salary" value={email}

            onChange={changeSalary}></input>

    </label>

  </p>
        </div>
    )
}
