import React from "react";

function EmployeeDetails(props) {
    return (
        <div>
            <div className="employee-div">
                <img alt={props.image} className="img-fluid" src={props.src} style={{ margin: "auto" }} />
            </div>
            <div className="text-center">
                <p>{props.name}</p>
            </div>
            <div className="float-right">
                <p>{props.details}</p>
            </div>
        </div>
    );
};

export default EmployeeDetails;