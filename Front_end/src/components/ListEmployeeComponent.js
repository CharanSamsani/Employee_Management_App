import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Link } from 'react-router-dom';
export default class ListEmployeeComponent extends Component {

     

    constructor(props)
    {
        super(props);

        this.state={
            employees:[]
        }
     
    }
  
  

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>
        {
            this.setState({employees:res.data})
        })
    }


  render() {
    return (
      <div>
            <h2 className='text-center'>Employee List</h2>

          
            <div className='row'>       
            <Link to="/add-employee" className='btn btn-outline-primary mt-4 w-100'>Add Employee</Link>    
   
                <table className='table  table-striped table-bordered'>
                    <thead>
                        <tr>
                          
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee=>
                                <tr key={employee.id}>
                                      <td>{employee.firstName}</td>
                                      <td>{employee.lastName}</td>
                                      <td>{employee.email}</td> 
                                      <td>
                                         
                  <Link to={`/update-employee/${employee.id}`} className="btn btn-info" >update</Link>  
                                          
                                      </td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>        
      </div>
    )
  }
}
