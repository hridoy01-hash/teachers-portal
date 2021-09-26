import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './TeacherDetails.css'
const TeacherDetails = (props) => {
    const details = props.details
    //calculate total cost
    const total = details.reduce((previous,teacher)=> previous+teacher.Salary,0)
    
    //font awsome icon
    const teacherIcon = <FontAwesomeIcon icon={faUser} />

    //display teacher details and cost 
    return (
        <div className="details-cart">
            <h6> Total Selected Teacher {teacherIcon} {details.length}</h6>
            <h6>Your Selected Teacher:</h6>
            {
             <ul>
               {
                   details.map( detail=> <li>{detail.name}</li>)
               }
           </ul>
            }
            <h6>Total tution fees cost :$ {total}</h6>
            <button style={{marginLeft:"15px", marginTop:"20px"}} type="button" className="btn btn-primary text-center">Booked Your Slot</button>
        </div>
    );
};

export default TeacherDetails;