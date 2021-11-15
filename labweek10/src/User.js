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
                fName : '',
                lName :  '',
                Address : '',
                Address2: '',
                City:  '',
                Province: '',
                PostalCode: '',
                showDetails :false
                 
            }
        }
      
        readInput =(event)=>{
            let updatedDetail = event.target.value;
            this.setState({[event.target.name]: event.target.value})
        }
    
        submitData = (e)=>{
            e.preventDefault()
            this.setState({
                showDetails :true
            })
            // console.log(this.state)
            // console.log(JSON.stringify(this.state))
        }
        
    render() {
        return (
            <>
            <div className="App">
            <div className="container">
                <div className="col-lg-12">
                    <div className="col-lg-6">
                    <form onSubmit={this.submitData}>
                        <table width="100%">  
                            <tbody>
                               
                                <tr>
                                    <td>
                                        <b><label>Email</label></b>
                                        <br/>
                                        <input type="text" name="email" placeholder="Enter email"  onChange={this.readInput}/>
                                    </td>
                             
                
                                    <td>
                                        <label><b>Name</b></label>
                                        <br/>
                                        <input type="text" name="fname" placeholder="Full Name"  onChange={this.readInput}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b><label>Address</label></b>
                                        <br/>
                                        <input type="text" name="Address" placeholder="1234 Main st"  onChange={this.readInput}/>
                                    </td>
                                
                                    <td>
                                        <b><label>Address 2</label></b>
                                        <br/>
                                        <input type="text" name="Address2" placeholder="Apartment, studio or floor" onChange={this.readInput}/>
                                    </td>
                                </tr>
                               
                                
                                <tr>
                                    <td>
                                        <b><label>City</label></b>
                                        <br/>
                                        <input type="text" name="city" placeholder="City" onChange={this.readInput}/>
                                    </td>
                                    <td>
                                        <b><label>Province</label></b>
                                        <br/>
                                        <select name="province" onChange={this.readInput}>
                                            <option onChange={this.readInput}>Choose...</option>
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
                                        <input type="text" name="PostalCode" placeholder="A0A 0A0" onChange={this.readInput}/>
                                    </td> 
                                </tr>
                                
                            
                            </tbody> 
                            <tr>
                                    <td>
                                        <input type="checkbox" name="condition" placeholder="condition" className="App" onChange={this.readInput}/>
                                        <label> I,Agree terms and condition </label>
                                    </td>
                                </tr>
                                <br/> 
                              
                    </table>
                    <button type="submit" value="Submit" onClick={this.submitData}>Submit</button>
                    {this.state.showDetails &&
                    <p className="form">
                        <h4>Email : {this.state.email}</h4>
                        <h4>Full Name :  {this.state.fname}</h4>
                        <h4>Address : {this.state.Address}</h4>
                        <h4>Address 2: {this.state.Address2}</h4>
                        <h4>City:  {this.state.city}</h4>
                        <h4>Province: {this.state.province}</h4>
                        <h4>Postal Code: {this.state.PostalCode} </h4>
                        <h4>Terms and condition: {this.state.condition}</h4>
                    </p>
                    }
                    </form>  
                </div>
            </div>
        </div>
                    
    </div>
        </>
        )
    }
}
