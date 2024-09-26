import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent()
{
  
    let navigate = useNavigate();
    
    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
      })


  const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setEmployee({... employee,[name]:value});
  }    

  const saveHandler=(e)=>
  {
      e.preventDefault();
      console.log("employee =>"+JSON.stringify(employee));
      EmployeeService.createEmployee(employee).then(res=>
        {
          navigate('/employees');
        })
  }

  
  const cancelHandler=(e)=>
  {
    navigate('/employees');
  }
 
  
    return (
      <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                           value={employee.firstName} onChange={handleClick}/>
                  </div>
                  <div className="form-group my-2">
                    <label>Last Name:</label>
                    <input placeholder="Last Name" name="lastName" className="form-control"
                           value={employee.lastName} onChange={handleClick}/>
                  </div>

                  <div className="form-group my-2">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control"
                           value={employee.email} onChange={handleClick}/>
                  </div>
                  <button className='btn btn-success' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>  
      </div>

    )
  }
