import React from 'react';

const TeacherDetails = (props) => {
    const {details} = props
    console.log(props.details);
    return (
        <div>
            <p>Selected Teacher:{details.length}</p>
        </div>
    );
};

export default TeacherDetails;