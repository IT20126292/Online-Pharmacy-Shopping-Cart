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

        const{fname,lname,email,tpnumber,tpnum,address,city,stpnumber} = this.state
        const data ={
            fname:fname,
            email:email,
            tpnumber:tpnumber,
            address:address,
            city:city,
            stpnumber:stpnumber,
        }
        console.log(data)

    axios.put(`/details/update/${id}`,data).then((res) => {
        if(res.data.success){
           // alert("Post Updated Sucessfully.....!")
           toast.success('Details Post Updated Sucessfully.....!',{position:toast.POSITION.TOP_CENTER})
            this.setState(
                {
                    fname:"",
                    email:"",
                    tpnumber:"",
                    address:"",
                    city:"",
                    stpnumber:"",
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
                });

                console.log(this.state.details);

            }
        });

    }


    render() {

        return (

                <form className="submit-form">
                <section className="h-100 h-custom bg-dark text-black h5" style={{ borderRadius: "25px" }}>
                  <br />
                  <h1>
                    {/* <center className="text-white">
                        Inside The Black Bar
                    </center> */}
                  </h1>
                  <div className="container py-5 h-60">
                    <div className="row d-flex justify-content-center align-items-center h-60">
                      <div className="col-12">
                        <div
                          className="card card-registration card-registration-3 bg-"
                          style={{ borderRadius: "25px",backgroundColor: "#f2f2f2" ,textSize:'2x'}}
                        >
                          <div className="card-body p-0">
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="p-5">
                                  <h3 className="fw-normal mb-5">Change User Profile</h3>
                           
                                  <div className="row">
                                    <div className="col-md-6 mb-4 pb-6">
                                      <div className="form-outline">
                                        <label className="form-label">
                                          First name
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
                                  </div>
          
                                  <div className="mb-4 pb-2">
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
                                        onChange={this.handleInputChange}/>
                                    
                                    </div>
                                  </div>
          
                                  <div className="row">
                                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                      <div className="form-outline">
                                        <label className="form-label">
                                        city
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
                                      stpnumber
                                      </label>
                                      <input
                                        type="text"
                                        id="stpnumber"
                                        name="stpnumber"
                                        className="form-control form-control-lg"
    
                                        value={this.state.stpnumber}
                                        onChange={this.handleInputChange}/>
    
                                    </div>
                                  </div>
          

                                </div>
                              </div>
                              <div
                                className="col-lg-6 bg-white"
                                style={{ borderRadius: "25px" }}>
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
                    </div>
                    <hr className="my-5" style={{color:"#f57d00"}}/>
                  </div>
                  
                </section>
              </form>
            );
          }
        }