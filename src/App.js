import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import Login from './Login';
import CreateForteen from './CreateForteen';
import StudentForteen from './studentforteen';
import UpdateForteen from './UpdateForteen';
import Dashboard from './Dashboard';
import UpdateFifteen from './UpdateFifteen';
import StudentFifteen from './studentfifteen';
import CreateFifteen from './CreateFifteen';
import StudentThirteen from './studentthirteen';
import CreateThirteen from './CreateThirteen';
import UpdateThirteen from './UpdateThirteen';
import StudentSixteen from './studentsixteen';
import CreateSixteen from './CreateSixteen';
import UpdateSixteen from './UpdateSixteen';
import StudentSeventeen from './studentseventeen';
import CreateSeventeen from './CreateSeventeen';
import UpdateSeventeen from './UpdateSeventeen';
import StudentEighteen from './studenteighteen';
import CreateEighteen from './CreateEighteen';
import UpdateEighteen from './UpdateEighteen';
import StudentNineteen from './studentnineteen';
import CreateNineteen from './CreateNineteen';
import UpdateNineteen from './UpdateNineteen';
import StudentTwenty from './studenttwenty';
import CreateTwenty from './CreateTwenty';
import UpdateTwenty from './UpdateTwenty';
import StudentTwentyone from './studenttwentyone';
import StudentTwentytwo from './studenttwentytwo';
import CreateTwentyone from './CreateTwentyone';
import CreateTwentytwo from './CreateTwentytwo';
import UpdateTwentyone from './UpdateTwentyone';
import UpdateTwentytwo from './UpdateTwentytwo,js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
                         {/* Student */}
          <Route path='/student' element={<Student />}> </Route>
          <Route path='/studentforteen' element={<StudentForteen />}> </Route>
          <Route path='/studentfifteen' element={<StudentFifteen />}> </Route>
          <Route path='/studentthirteen' element={<StudentThirteen />}> </Route>
          <Route path='/studentsixteen' element={<StudentSixteen />}> </Route>
          <Route path='/studentseventeen' element={<StudentSeventeen />}> </Route>
          <Route path='/studenteighteen' element={<StudentEighteen />}> </Route>
          <Route path='/studentnineteen' element={<StudentNineteen />}> </Route>
          <Route path='/studenttwenty' element={<StudentTwenty />}> </Route>
          <Route path='/studenttwentyone' element={<StudentTwentyone />}> </Route>
          <Route path='/studenttwentytwo' element={<StudentTwentytwo />}> </Route>
      

          {/* Createstudent */}
          <Route path='/createforteen' element={<CreateForteen />}> </Route>
          <Route path='/create' element={<CreateStudent />}> </Route>
          <Route path='/createfifteen' element={<CreateFifteen />}> </Route>
          <Route path='/createthirteen' element={<CreateThirteen />}> </Route>
          <Route path='/createsixteen' element={<CreateSixteen />}> </Route>
          <Route path='/createseventeen' element={<CreateSeventeen />}> </Route>
          <Route path='/createeighteen' element={<CreateEighteen />}> </Route>
          <Route path='/createnineteen' element={<CreateNineteen />}> </Route>
          <Route path='/createtwenty' element={<CreateTwenty />}> </Route>
          <Route path='/createtwentyone' element={<CreateTwentyone />}> </Route>
          <Route path='/createtwentytwo' element={<CreateTwentytwo />}> </Route>

          {/* Update student */}
          <Route path='student/update/:id' element={<UpdateStudent />}> </Route>
          <Route path='studentforteen/studentforteen/:id' element={<UpdateForteen />}> </Route>
          <Route path='/studentfifteen/studentfifteen/:id' element={<UpdateFifteen />}> </Route>
          <Route path='/studentthirteen/studentthirteen/:id' element={<UpdateThirteen />}> </Route>
          <Route path='/studentsixteen/studentsixteen/:id' element={<UpdateSixteen />}> </Route>
          <Route path='/studentseventeen/studentseventeen/:id' element={<UpdateSeventeen />}> </Route>
          <Route path='/studenteighteen/studenteighteen/:id' element={<UpdateEighteen />}> </Route>
          <Route path='/studentnineteen/studentnineteen/:id' element={<UpdateNineteen />}> </Route>
          <Route path='/studenttwenty/studenttwenty/:id' element={<UpdateTwenty />}> </Route>
          <Route path='/studenttwentyone/studenttwentyone/:id' element={<UpdateTwentyone />}> </Route>
          <Route path='/studenttwentytwo/studenttwentytwo/:id' element={<UpdateTwentytwo/>}> </Route>
          

          {/* Dashboard and Login */}
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<Login />}> </Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
