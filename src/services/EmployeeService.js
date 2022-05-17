import axios from 'axios'
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/ems/api/v1/createemployee"

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    fetchEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
}



export default new EmployeeService();