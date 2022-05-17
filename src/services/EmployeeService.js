import axios from 'axios'
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/ems/api/v1/createemployee"
const FETCH_EMPLOYEE_DATA_URL = "http://localhost:8080/ems/api/v1/fetchemployees"

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    fetchEmployees(){
        return axios.get(FETCH_EMPLOYEE_DATA_URL)
    }
}



export default new EmployeeService();