import React from "react";
class College extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <h6>{this.props.collegeName}</h6>
        )
    }

}
College.defaultProps =
{
    collegeName:"No college name"
}
export default College