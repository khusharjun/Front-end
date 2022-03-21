import axios from 'axios';

const EMPLOYEE_BASE_URL='http://localhost:8080/api/employees'
const EMPLOYEE_SUB_URL='http://localhost:8080/api/employee'

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }
    
    createEmployee(employee){
        return axios.post(EMPLOYEE_SUB_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_SUB_URL + "/" + employeeId);
    }

    updateEmployee( employeeId, employee){
        return axios.put(EMPLOYEE_SUB_URL + "/" + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_SUB_URL + "/" + employeeId);
    }

    // viewEmployee(employeeId){
    //     return axios.get
    // }

}

export default new EmployeeService()