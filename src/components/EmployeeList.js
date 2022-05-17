import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";


const EmployeeList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.fetchEmployees();
                setEmployees(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button onClick={()=> navigate("/addEmployee")} className="rounded bg-slate-600 text-white px-6 py-2 ml-5 font-semibold">
                    Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 py-2 px-6">First Name</th>
                            <th className="text-left font-medium text-gray-500 py-2 px-6">Last Name</th>
                            <th className="text-left font-medium text-gray-500 py-2 px-6">Email Address</th>
                            <th className="text-right font-medium text-gray-500 py-2 px-6">Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className="bg-white">
                        {employees.map((employee) => (
                            <Employee employee={employee} key={employee.id} />
                        ))}
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
