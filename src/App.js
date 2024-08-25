import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm'; // Import EmployeeForm component

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/employees/")
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employees!", error);
            });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <EmployeeForm /> {/* Add EmployeeForm component here */}
            {employees.map(employee => (
                <div key={employee.id}>
                    <p>Name: {employee.name}</p>
                    <p>Age: {employee.age}</p>
                    <p>Salary: ${employee.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeList;
