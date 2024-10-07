import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateThirteen = () => {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [fathername, setFathername] = useState('');
  const [mothername, setMothername] = useState('');
  const [address, setAddress] = useState('');
  const [adharno, setAdharno] = useState('');
  const [panno, setPanno] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [qualification, setQualification] = useState('');
  const [marks, setMarks] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [yopass, setYopass] = useState('');
  const [currentjob, setCurrentJob] = useState('');
  const [tc, setTc] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/createthirteen', {rollno, name, dob, gender, fathername, mothername, address, adharno, panno, telephone, email, category, qualification, marks, subject1, subject2, yopass, currentjob, tc})
        .then(res => {
            console.log(res);
             alert('Student Added Successfully');
             navigate('/studentthirteen');
         })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-250 bg-danger justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='name1' className='text-danger'>Adm No</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter AdmNo' 
              onChange={(e) => setRollno(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>Name</label>
              <input id='name2' type='text' className='form-control'  placeholder='Enter Name' 
              onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='dob1' className='text-danger'>DOB</label>
              <input id='dob1' type='text' className='form-control' placeholder='Enter DOB' 
              onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='dob2' className='text-danger'>Gender</label>
              <input id='dob2' type='text' className='form-control' placeholder='Enter Gender' 
              onChange={(e) => setGender(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='name1' className='text-danger'>FatherName</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter FatherName' 
              onChange={(e) => setFathername(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>MotherName</label>
              <input id='name2' type='text' className='form-control' placeholder='Enter MotherName'
              onChange={(e) => setMothername(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='name1' className='text-danger'>Address</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter Address' 
              onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>AdharNo</label>
              <input id='name2' type='text' className='form-control' placeholder='Enter AdharNo' 
              onChange={(e) => setAdharno(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <label htmlFor='name1' className='text-danger'>PanNo</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter PanNo' 
              onChange={(e) => setPanno(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>Telephone</label>
              <input id='name2' type='text' className='form-control' placeholder='Enter Telephone' 
              onChange={(e) => setTelephone(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>       
              <label htmlFor='name1' className='text-danger'>Email</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter Email' 
              onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>Category</label>
              <input id='name2' type='text' className='form-control' placeholder='Enter Category' 
              onChange={(e) => setCategory(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col' >
              <label htmlFor='name1' className='text-danger'>Qualification</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter Qualification'
              onChange={(e) => setQualification(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>Marks</label>
              <input id='name2' type='text' className='form-control'  placeholder='Enter Marks' 
              onChange={(e) => setMarks(e.target.value)} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col' >
              <label htmlFor='name1' className='text-danger'>Subject1</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter Subject1' 
              onChange={(e) => setSubject1(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>Subject2</label>
              <input id='name2' type='text' className='form-control'  placeholder='Enter Subject2' 
              onChange={(e) => setSubject2(e.target.value)} />
            </div>
          </div><div className='row mb-2'>
            <div className='col' >
              <label htmlFor='name1' className='text-danger'>YearOfPass</label>
              <input id='name1' type='text' className='form-control' placeholder='Enter YearOfPass' 
              onChange={(e) => setYopass(e.target.value)} />
            </div>
            <div className='col'>
              <label htmlFor='name2' className='text-danger'>CurrentJob</label>
              <input id='name2' type='text' className='form-control'  placeholder='Enter CurrentJob' 
              onChange={(e) => setCurrentJob(e.target.value)} />
            </div>
          </div>
          <div className='col'>
              <label htmlFor='name2' className='text-danger'>TC Issue</label>
              <input id='name2' type='text' className='form-control'  placeholder='Enter TC Issue' 
              onChange={(e) => setTc(e.target.value)} />
            </div>
          <button className='btn btn-success mt-2'>Submit</button>
          {/* Add more rows for additional data here */}
        </form>
      </div>
    </div>
  );
};

export default CreateThirteen;