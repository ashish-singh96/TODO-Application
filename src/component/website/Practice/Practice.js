import React from 'react'
import { Table } from 'react-bootstrap';
const Practice = () => {
    const students = [
        {
            name: "Ashish", email: "ashish@gmail.com", address: [
                { Hn: "10", city: "Delhi", country: "India" },
                { Hn: "44", city: "Noida", country: "India" },
                { Hn: "34", city: "Gurugram", country: "India" },
            ]
        },
        {
            name: "Abhishek", email: "abhishek@gmail.com", address: [
                { Hn: "10", city: "Delhi", country: "India" },
                { Hn: "44", city: "Noida", country: "India" },
                { Hn: "34", city: "Gurugram", country: "India" },
            ]
        },
        {
            name: "Akash", email: "akash@gmail.com", address: [
                { Hn: "10", city: "Delhi", country: "India" },
                { Hn: "44", city: "Noida", country: "India" },
                { Hn: "34", city: "Gurugram", country: "India" },
            ]
        },
    ]
    return (
        <div className='App'>
            <h1>Arrays Element</h1>
            <Table variant='dark'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>{
                    students.map((item)=>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{
                         item.address.map((data)=>
                            <tr>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        </tr>
                         )
                        }
                        </td>
                    </tr>
                    )
                }
            </Table>
        </div>
    )
}

export default Practice


