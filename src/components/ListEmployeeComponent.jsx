import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
 
        this.state={
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
        this.setState({employees: res.data});
    });
}
    
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    updateEmployee(id){
        this.props.history.push(`/update-employee/${id}` );
        console.log("id is : "+ id);
    }

    viewEmployee(id){
        this.props.history.push(`view-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            window.location.reload()});
        
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Employee List </h2>
                
                    <div className="row">
                    <table className="table table-striped table-bordered" >
                        <thead >
                            <tr >
                                <th> Employee Id </th>
                                <th> Employee Name </th>
                                <th> Gender(M/F/O) </th>
                                <th> Project Name</th>
                                <th> Address </th>
                                <th> Action</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.employeeName}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.projectName}</td>
                                        <td>{employee.address}</td>
                                        <td> <button className="btn btn-secondary"
                                            onClick={() => this.updateEmployee(employee.id)}>Update</button> &nbsp;
                                        <button className="btn btn-danger"
                                            onClick={() => this.deleteEmployee(employee.id)}>Delete</button> &nbsp;
                                        <button className="btn btn-info"
                                            onClick={() => this.viewEmployee(employee.id)}>View</button></td>

                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                    <div className="button"> 
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>{'  '}
                    </div>
                    <br></br>
                   


                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent

