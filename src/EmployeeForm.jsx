import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/employees/", {
            name: name,
            age: age,
            salary: salary,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("There was an error posting the employee data!", error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;
