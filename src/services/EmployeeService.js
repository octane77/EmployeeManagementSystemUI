import axios from 'axios'
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/ems/api/v1/createemployee"
const FETCH_EMPLOYEES_DATA_URL = "http://localhost:8080/ems/api/v1/fetchemployees"
const DELETE_EMPLOYEE_DATA_URL = "http://localhost:8080/ems/api/v1/deleteemployee"
const FETCH_EMPLOYEE_BY_ID_DATA_URL = "http://localhost:8080/ems/api/v1/fetchemployee"
const UPDATE_EMPLOYEE_DATA_URL = "http://localhost:8080/ems/api/v1/updateemployee"

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    fetchEmployees(){
        return axios.get(FETCH_EMPLOYEES_DATA_URL)
    }
    
    deleteEmployee(id){
        return axios.delete(DELETE_EMPLOYEE_DATA_URL + "/" + id)
    }

    fetchEmployeeById(id){
        return axios.get(FETCH_EMPLOYEE_BY_ID_DATA_URL + "/" + id)
    }

    updateEmployee(id, employee){
        return axios.put(UPDATE_EMPLOYEE_DATA_URL + "/" + id, employee)
    }
}

export default new EmployeeService();