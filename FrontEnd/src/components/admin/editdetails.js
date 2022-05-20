import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class editdetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            fname:"",
            email:"",
            tpnumber:"",
            address:"",
            city:"",
            stpnumber:"",
            status:"",
        }
    }


    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]: value

        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const id = this.props.match.params.id;

        const{fname,lname,email,tpnumber,tpnum,address,city,stpnumber,status} = this.state
        const data ={
            fname:fname,
            email:email,
            tpnumber:tpnumber,
            address:address,
            city:city,
            stpnumber:stpnumber,
            status:status,
        }
        console.log(data)

    axios.put(`http://localhost:8090/details/update/${id}`,data).then((res) => {
        if(res.data.success){
           // alert("Post Updated Sucessfully.....!")
           toast.success('Customer Details updated Sucessfully.....!',{position:toast.POSITION.TOP_CENTER})
            this.setState(
                {
                    fname:"",
                    email:"",
                    tpnumber:"",
                    address:"",
                    city:"",
                    stpnumber:"",
                    status:"",
                }
            )
        }
    })

    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8090/details/${id}`).then((res) => {

            if(res.data.success){
                this.setState({ 
                   //topic:res.data.details.topic,
                   //description:res.data.details.description,
                   //postCategory:res.data.details.postCategory
                   fname:res.data.details.fname,
                   email:res.data.details.email,
                   tpnumber:res.data.details.tpnumber,
                   address:res.data.details.address,
                   city:res.data.details.city,
                   stpnumber:res.data.details.stpnumber,
                   status:res.data.details.status,
                });

                console.log(this.data.details);

            }
        });

    }


    render() {

        return (

                <form className="submit-form container">
              
                  <br />
                  <h1>
                    {/* <center className="text-white">
                        Inside The Black Bar
                    </center> */}
                  </h1>
                  <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-12">
                        <div
                          className="card card-registration card-registration-3 bg-"
                          style={{ borderRadius: "25px",backgroundColor: "#f2f2f2" ,textSize:'2x'}}
                        >
                          <div className="card-body p-0">
                            <div className="row g-0">
                              <div className="">
                                <div className="p-5">
                                  <h3 className="fw-normal mb-5">Change User Profile</h3>
                           
                                  <div className="row">
                                    <div className="col-md-6 mb-4">
                                      <div className="form-outline">
                                        <label className="form-label">
                                          Name
                                        </label>
          
                                        <input
                                          type="text"
                                          id="fname"
                                          name="fname"
                                          className="form-control form-control-lg"
                                          value={this.state.fname}
                                          onChange={this.handleInputChange}
                                          />
          
                                      </div>
                                    </div>
                                    <div className="col-md-6 mb-4 pb-6">
                                      <div className="form-outline">
                                        <label className="form-label">
                                        E mail
                                        </label>
                                        <input
                                          type="text"
                                          id="email"
                                          name="email"
                                          disabled
                                          className="form-control form-control-lg"
                                          value={this.state.email}
                                          onChange={this.handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
          
                                  <div className="row">
                                    <div className="col-md-6 mb-4">
                                      <div className="form-outline">
                                        <label className="form-label">
                                        tpnumber
                                        </label>
          
                                        <input
                                          type="text"
                                          id="tpnumber"
                                          name="tpnumber"
                                          className="form-control form-control-lg"
                                          value={this.state.tpnumber}
                                          onChange={this.handleInputChange}
                                          />
          
                                      </div>
                                    </div>
                                    <div className="col-md-6 mb-4 pb-6">
                                      <div className="form-outline">
                                        <label className="form-label">
                                        address
                                        </label>
                                        <input
                                          type="text"
                                          id="address"
                                          name="address"
                                          className="form-control form-control-lg"
                                          value={this.state.address}
                                          onChange={this.handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  
          
                                  <div className="row">
                                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                      <div className="form-outline">
                                        <label className="form-label">
                                        City
                                        </label>
                                        <input
                                          type="text"
                                          id="city"
                                          name="city"
                                          className="form-control form-control-lg"
                                          value={this.state.city}
                                          onChange={this.handleInputChange}/>
                                      </div>
    
                                    </div>
                                <br/>
                                
                                  </div>
          
                                  <div className="mb-4 pb-2" style={{marginTop:'15px'}}>
                                    <div className="form-outline">
                                      <label className="form-label">
                                      Second Phone Number
                                      </label>
                                      <input
                                        type="text"
                                        id="stpnumber"
                                        name="stpnumber"
                                        className="form-control form-control-lg"
    
                                        value={this.state.stpnumber}
                                        onChange={this.handleInputChange}/>
    
                                    </div>

                                    <div className="form-outline">
                                      <label className="form-label">
                                      Status &nbsp;
                                      </label>


                                <select id="status" className="form-control-lg dropdown-toggle selectpicker show-tick mt-4 pb-2" 
                                onChange={this.handleInputChange} 
                                data-role="select-dropdown"
                               
                                name="status" 
                                value={this.state.status} data-live-search="true" >
                                  <option></option>
                                  <option>Completed</option>
                                  <option>Error Occored</option>
                                  <option>Pending</option>
                                </select>
    
                                    </div>
                                  </div>
          

                                </div>
                              </div>
                             
                                <div className="p-5">
          
                                  <button type="submit" className="btn btn-success" onClick={this.onSubmit}>
                                    <i className="fa fa-check-square"></i>
                                    &nbsp; Update</button>
                                </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-5" style={{color:"#f57d00"}}/>
                  </div>
                  
               
              </form>
            );
          }
        }