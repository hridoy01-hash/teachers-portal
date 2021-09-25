import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './TeacherInfo.css'
const TeacherInfo = (props) => {
    console.log(props.information);
    const{name,Position,Degree,Department,Salary,img} = props.information;
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Position: {Position}</p>
        <p className="card-text">Department: {Department}</p>
        <p className="card-text">Eduction: {Degree}</p>
        <p className="card-text">Tution Fee: ${Salary}</p>
       
        
        <button type="button" className="btn btn-outline-primary" 
        onClick={()=>props.handleTeachersDetails(props.information)}>Choose Teacher</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default TeacherInfo;