import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './TeacherDetails.css'
const TeacherDetails = (props) => {
    const {details} = props
    console.log(details)
    const teacherIcon = <FontAwesomeIcon icon={faUser} />
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
            <h6>Total tution fees cost : {}</h6>
        </div>
    );
};

export default TeacherDetails;