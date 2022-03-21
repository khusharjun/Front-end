import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employeeName:'',
            gender:'',
            projectName:'',
            address:''
        }

        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {employeeName: this.state.employeeName, projectName: this.state.projectName,
             address: this.state.address, gender: this.state.gender}
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/');
        });
    }

    cancel(){
        this.props.history.push('/');
    }

    changeEmployeeNameHandler = (event) => {
        this.setState({employeeName: event.target.value})
    }
    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value})
    }
    changeAddressHandler = (event) => {
        this.setState({address: event.target.value})
    }
    changeProjectNameHandler = (event) => {
        this.setState({projectName: event.target.value})
    }
    

   


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Employee Name: </label>
                                        <input placeholder="Employee Name" name="employeeName" className="form-control"
                                            value={this.state.employeeName} onChange={this.changeEmployeeNameHandler}/>
                                    </div><br/>
                                    <div className="form-group">
                                        <label>Gender(M/F/O): </label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler}/>
                                    </div><br/>
                                    <div className="form-group">
                                        <label>Project Name: </label>
                                        <input placeholder="Project Name" name="projectName" className="form-control"
                                            value={this.state.projectName} onChange={this.changeProjectNameHandler}/>
                                    </div><br/>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div><br/>
                                    
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateEmployeeComponent;