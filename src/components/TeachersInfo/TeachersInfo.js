import React, { useEffect, useState } from 'react';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import TeacherInfo from '../TeacherInfo/TeacherInfo';

const TeachersInfo = () => {
    const [informations,setInformation] = useState([])
    const [details,setDetails] = useState([]);
    //load data from fake API
    useEffect(()=>{
        fetch('data.JSON')
        .then(response => response.json())
        .then(data =>setInformation(data))
    },[])
    //Handaler add for see teacher details
    const handleTeachersDetails=(information)=>{
      const newInformation=[ ...details, information]
      setDetails(newInformation)
    }
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
             {
               informations.map(information => <TeacherInfo 
                information={information} 
                key={information.UniversityId}
                handleTeachersDetails={handleTeachersDetails}>
                    
                </TeacherInfo>)
             }
           
            </div>
          </div>
          <div className="col-md-2">
            <TeacherDetails details={details}></TeacherDetails>
          </div>
        </div>
      </div>
    );
};

export default TeachersInfo;