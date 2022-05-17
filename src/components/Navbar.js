import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-800">
            <div className="h-16 px-6 flex items-center text-white font-bold">
                <p><a onClick={() => navigate("/employeeList")}> Employee Management System </a></p>
            </div>
        </div>
    );
};

export default Navbar;
