import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";


const EmployeeList = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData =
            setLoading(true);
            try {

            } catch (e) {
                
            }
    }, [])
    

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button onClick={()=> navigate("/addEmployee")} className="rounded bg-slate-600 text-white px-6 py-2 ml-6 font-semibold">
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
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">Ruth</div></td>
                            <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">Adeyemi</div></td>
                            <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">r.adeyemi@semicolon.africa</div></td>
                            <td className="text-right py-2 px-6 whitespace-nowrap font-medium text-sm">
                                <a href="" className="rounded text-white bg-blue-500 py-1 px-2 hover:bg-blue-700">Edit</a>
                                <a href="" className="rounded text-white bg-red-500 py-1 px-2 ml-1 hover:bg-red-700">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
