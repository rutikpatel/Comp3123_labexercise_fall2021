import React from "react";
class Course extends React.Component{
  
    render(){
        return(
        <>
            <h1>{this.props.courseName}</h1><br/>
            <h2>{this.props.lab}</h2>
        </>
        )
    }

}

export default Course