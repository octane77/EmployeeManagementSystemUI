import React from 'react';

const Employee = ({employee}) => {
    return (
            <tr key={employee.id}>
                <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">{employee.firstName}</div></td>
                <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">{employee.lastName}</div></td>
                <td className="text-left py-2 px-6 whitespace-nowrap"><div className="text-sm text-gray-700">{employee.emailId}</div></td>
                <td className="text-right py-2 px-6 whitespace-nowrap font-medium text-sm">
                    <a href="" className="rounded text-white bg-blue-500 py-1 px-2 hover:bg-blue-700">Edit</a>
                    <a href="" className="rounded text-white bg-red-500 py-1 px-2 ml-1 hover:bg-red-700">Delete</a>
                </td>
            </tr>
    );
};

export default Employee;
