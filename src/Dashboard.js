import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container-fluid bg-success py-4 vh-100">
      <h1 className="mb-4 text-center">SSB</h1>
      <h2 className='mb-4 text-center text-primary'>Session wise Student Record</h2>
      <div className="row justify-content-center">
        {/* First Row */}
        <div className="row mb-2">
          <div className="col-md-3 mb-2">
            <Link to="/studentThirteen" className="btn btn-primary btn-block bg-warning">2013-2014</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentForteen" className="btn btn-primary btn-block bg-warning">2014-2015</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentFifteen" className="btn btn-primary btn-block bg-warning">2015-2017</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentSixteen" className="btn btn-primary btn-block bg-warning">2016-2018</Link>
          </div>
        </div>
        {/* Second Row */}
        <div className="row mb-2">
          <div className="col-md-3 mb-2">
            <Link to="/studentSeventeen" className="btn btn-primary btn-block bg-warning">2017-2019</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentEighteen" className="btn btn-primary btn-block bg-warning">2018-2020</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentNineteen" className="btn btn-primary btn-block bg-warning">2019-2021</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/studentTwenty" className="btn btn-primary btn-block bg-warning">2020-2022</Link>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-3 mb-2">
            <Link to="/studentTwentyone" className="btn btn-primary btn-block bg-warning">2021-2023</Link>
          </div>

          <div className="col-md-3 mb-2">
            <Link to="/studentTwentytwo" className="btn btn-primary btn-block bg-warning">2022-2024</Link>
          </div>
          <div className="col-md-3 mb-2">
            <Link to="/student" className="btn btn-primary btn-block bg-warning">2024-2026</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
