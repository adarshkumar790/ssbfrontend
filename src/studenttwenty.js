import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Student from './Student';
import CreateForteen from './CreateForteen';

const StudentTwenty = () => {
    const [students, setStudents] = useState([]);
   
    useEffect (()=>{
      axios.get('http://localhost:8081/studenttwenty/')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err))
    }, [])

    const handleDelete = async(id) => {
       try {
        await axios.delete('http://localhost:8081/studenttwenty/'+id)
        window.location.reload()
       }
       catch(err)
        {
            console.log(err)
        }
    }

    return (
        <div className='d-flex vh-100 bg-danger justify-content-center align-items-center'>
            <div className='w-100 bg-success rounded p-3 shadow'>
            <div className="d-flex justify-content-between align-items-center mb-3"> {/* Align to the right */}
                    <h3 className="text-center">Session 2020-2022</h3> {/* Center the session header */}
                    <Link to="/createtwenty" className='btn btn-dark'>Add Student Details</Link>
                </div>
                <div className='table-responsive'>
                    <div className='table-container' style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
                        <table className='table table-bordered' style={{ fontSize: '0.8rem' }}>
                            <thead className='thead-light' style={{ position: 'sticky', top: '0', zIndex: '1' }}>
                                <tr>
                                    <th>Adm No</th>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>Gender</th>
                                    <th>Father's Name</th>
                                    <th>Mother's Name</th>
                                    <th>Address</th>
                                    <th>Adhar No</th>
                                    <th>Pan No</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Qualification</th>
                                    <th>Marks</th>
                                    <th>Subject1</th>
                                    <th>Subject2</th>
                                    <th>Year of Pass</th>
                                    <th>Marks</th>
                                    <th>Current location/job</th>
                                    <th>TC Issue</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(students) && students.length > 0 ? (
                                students.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.RollNo}</td>
                                        <td>{data.Name}</td>
                                        <td>{data.Dob}</td>
                                        <td>{data.Gender}</td>
                                        <td>{data.FatherName}</td>
                                        <td>{data.MotherName}</td>
                                        <td>{data.Address}</td>
                                        <td>{data.AdharNo}</td>
                                        <td>{data.PanNo}</td>
                                        <td>{data.Telephone}</td>
                                        <td>{data.Email}</td>
                                        <td>{data.Category}</td>
                                        <td>{data.Qualification}</td>
                                        <td>{data.Marks}</td>
                                        <td>{data.Subject1}</td>
                                        <td>{data.Subject2}</td>
                                        <td>{data.YearOfPass}</td>
                                        <td>{data.Marks}</td>
                                        <td>{data.CurrentJob}</td>
                                        <td>{data.TC}</td>
                                        <td>
                                            <div className="btn-group" role="group">
                                                <Link to={`studenttwenty/${data.ID}`} className='btn btn-primary'>Update</Link>
                                                <button className='btn btn-danger ml-3' onClick={e=>handleDelete(data.ID)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                  <td colSpan="21" className="text-center">No students found</td>
                                </tr>
                              )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentTwenty;
