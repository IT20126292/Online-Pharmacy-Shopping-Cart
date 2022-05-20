import React, { Component } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SvgComponent from "./svg/editsvg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class editdetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      tpnumber: "",
      address: "",
      city: "",
      stpnumber: "",
      status: "",
    }
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value

    })
  }

  onSubmit = (e) => {

    e.preventDefault();
    const id = this.props.match.params.id;

    const {fname, email, tpnumber, tpnum, address, city, stpnumber, status } = this.state
    const data = {
      fname: fname,
      email: email,
      tpnumber: tpnumber,
      address: address,
      city: city,
      stpnumber: stpnumber,
      status: status,
    }
    console.log(data)

    axios.put(`http://localhost:8090/details/update/${id}`, data).then((res) => {
      if (res.data.success) {
        // alert("Post Updated Sucessfully.....!")
        toast.success('Customer Details updated Sucessfully.....!', { position: toast.POSITION.TOP_CENTER })
        this.setState(
          {
            fname: "",
            email: "",
            tpnumber: "",
            address: "",
            city: "",
            stpnumber: "",
            status: "",
          }
        )
      }
    })

  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8090/details/${id}`).then((res) => {

      if (res.data.success) {
        this.setState({
          //topic:res.data.details.topic,
          //description:res.data.details.description,
          //postCategory:res.data.details.postCategory
          id:res.data.details._id,
          fname: res.data.details.fname,
          email: res.data.details.email,
          tpnumber: res.data.details.tpnumber,
          address: res.data.details.address,
          city: res.data.details.city,
          stpnumber: res.data.details.stpnumber,
          status: res.data.details.status,
        });

        console.log(this.data.details);

      }
      
    });
    

  }


  render() {

    return (

      <div>

        <div className="App mb-5 mt-5 mh-100">

          <div className="grid-container">

            <div className="grid-child purple">
              <div className="svg d-flex justify-content-center">
                <SvgComponent
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="grid-child green text-left">

              <Box
                classname="mt-5"

                sx={{
                  '& > :not(style)': { m: 2, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" /> */}


                <div className="hrdivider mr-3">

                  <span>User Id : Ref{this.state.id}</span>
                  <br />
                </div>

                <form className="submit-form">

                  <label className="form-label mt-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="form-control form-control-lg mt-1"
                    value={this.state.fname}
                    onChange={this.handleInputChange}
                  />

                  <label className="form-label  mt-1">
                    E mail
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    disabled
                    className="form-control form-control-lg  mt-1"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />

                  <label className="form-label mt-1">
                    Telephone Number
                  </label>

                  <input
                    type="text"
                    id="tpnumber"
                    name="tpnumber"
                    className="form-control form-control-lg  mt-1"
                    value={this.state.tpnumber}
                    onChange={this.handleInputChange}
                  />

                  <label className="form-label  mt-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control form-control-lg  mt-1"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                  />

                  <label className="form-label  mt-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control form-control-lg  mt-1"
                    value={this.state.city}
                    onChange={this.handleInputChange} />


                  <label className="form-label  mt-1">
                    Second Phone Number
                  </label>
                  <input
                    type="text"
                    id="stpnumber"
                    name="stpnumber"
                    className="form-control form-control-lg  mt-1"

                    value={this.state.stpnumber}
                    onChange={this.handleInputChange} />


                  <label className="form-label mt-1">
                    Status &nbsp;
                  </label>

                  <select id="status" className="form-control form-control-lg dropdown-toggle selectpicker show-tick pb-2  mt-1"
                    onChange={this.handleInputChange}
                    data-role="select-dropdown"

                    name="status"
                    value={this.state.status} data-live-search="true" >
                    <option></option>
                    <option>Completed</option>
                    <option>Error Occored</option>
                    <option>Pending</option>
                  </select>

                  <div className="mt-1">

                    <button type="submit" className="btn btn-success d-block mr-0 ml-auto mb-3 mt-2" onClick={this.onSubmit}>
                      <i className="fa fa-check-square"></i>
                      &nbsp; Update</button>
                  </div>





                </form>
              </Box>

            </div>

          </div>

        </div>

      </div>


    );
  }
}