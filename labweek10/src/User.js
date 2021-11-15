import './App.css';
import React, { Component } from 'react'

export default class User extends Component {
     province=['Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',]

        constructor(props) {
            super(props)
        
            this.state = {
                 fname: 'Default First Name',
                 lname: 'Default Last Name'
            }
        }
      
        readInput =(event)=>{
            this.setState({[event.target.name]: event.target.value})
        }
    
        submitData = (e)=>{
            e.preventDefault()
            alert("Form submitted")
            console.log(this.state)
            console.log(JSON.stringify(this.state))
        }
    render() {
        return (
            <div className="App">
            <div className="container">
                <div className="col-lg-12">
                    <div className="col-lg-6">
                    <form onSubmit={this.submitData}>
                        <table width="100%">
                            
                            <tbody>
                               
                                <tr>
                                    <td>
                                        <b><label>First Name</label></b>
                                        <br/>
                                        <input type="text" name="fname" id="fname" onChange={this.readInput}/>
                                    </td>
                             
                
                                    <td>
                                        <label><b>Last Name</b></label>
                                        <br/>
                                        <input type="text" name="lname" id="lname" onChange={this.readInput}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b><label>Address</label></b>
                                        <br/>
                                        <input type="text" name="Address" id="Address" onChange={this.readInput}/>
                                    </td>
                                
                                    <td>
                                        <b><label>Address 2</label></b>
                                        <br/>
                                        <input type="text" name="Address2" id="Address2" onChange={this.readInput}/>
                                    </td>
                                </tr>
                               
                                
                                <tr>
                                    <td>
                                        <b><label>city</label></b>
                                        <br/>
                                        <input type="text" name="city" id="city" onChange={this.readInput}/>
                                    </td>
                                    <td>
                                        <b><label>Province</label></b>
                                        <br/>
                                        <select name="province" onChange={this.readInput}>
                                            <option name="province" onChange={this.readInput}>Province</option>
                                            {
                                                this.province.map(name=>(
                                                    <option key={name} onChange={this.readInput}>{name}</option>
                                                ))
                                            }
                                        </select>
                                    </td>
                                     <td>
                                        <b><label>Postal Code</label></b>
                                        <br/>
                                        <input type="text" name="PostalCode" id="PostalCode" onChange={this.readInput}/>
                                    </td> 
                                </tr>
                                
                            
                            </tbody> 
                            <tr>
                                    <td>
                                        <input type="checkbox" name="condition" id="condition" className="App" onChange={this.readInput}/>
                                        <label> I,Agree terms and condition </label>
                                    </td>
                                </tr>
                                <br/> 
                              
                    </table>
                    <input type="submit" value="Submit"/>

                    </form>  
                    </div>
                </div>
                </div>
                    <div>
                    <h4>{this.state.fname} {this.state.lname}{this.state.Address} {this.state.Address2} {this.state.city} {this.state.province}{this.state.PostalCode} {this.state.condition}</h4>
                    </div>
            </div>
            

        )
    }
}
