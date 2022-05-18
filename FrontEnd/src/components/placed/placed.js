import React from 'react'
import Deliverysvg from './Deliverysvg'
import './placed.css'

function placed() {
    return (
        <div class="d-md-flex h-md-100">

            <div class="col-md-6 p-0 bg-indigo h-md-100">
                <div class="text-dark d-md-flex h-100 p-2">
                    <div class="logoarea pt-5 pb-5">


                        <div className="d-flex justify-content-center font-weight-bold">
                            <div className="hclass mt-3">
                                <h1>Order <d style={{ color: '#11ad00' }}> Placed </d>!</h1>
                                <p>Order will recived as soon as possible<br />
                                    within two or three working days.
                                </p>
                                <p style={{ color: '#2949ff' }}>Thanks for deaing with us :)</p>
                            </div>
                        </div>
                        <div className="mb-2 p-2">
                            <Deliverysvg
                                height={600}
                                width={600}
                            />
                        </div>

                    </div>
                </div>
            </div>



            <div class="d-md-flex ml-3" id="hclass">


                <div class="row row-cols-1">
                    <div class="col">                <div className="card shadow" id="card">
                        <div className="card-body mb-5 ml-2 mr-2">
                            <div class="mb-3 bg-white">
                                <div class="bs-example">
                                    <div class="d-flex justify-content-between">
                                        <div><h3>CITY MEDICALS</h3></div>
                                        <div><button type="button" class="btn btn-outline-dark"><i class="fa fa-cloud-download" aria-hidden="true"></i></button></div>
                                    </div>

                                </div>
                                <h6 className="text-muted">Online Payment Receipt</h6><br />
                                <p className="card-text">Receipt Number : {Number}</p>
                                <p className="card-text">Client Name :  {Number}</p>
                                <div class="accordion-item ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                           Check Your Items :
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ol>
                                                <li>{Number}</li>
                                                <li>{Number}</li>
                                                <li>{Number}</li>
                                                <li>{Number}</li>
                                                <li>{Number}</li>
                                                <li>{Number}</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="alert alert-success d-flex align-items-bottom fade show positon-absolute">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                <strong class="mx-2"></strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <button type="button" class="btn-close ml-2" data-bs-dismiss="alert"></button>

                            </div>
                            <button class="btn btn-primary align-content-right" type="button" id="btnnext">Button</button>
                        </div>


                    </div></div>
                    <div id="btnright">
                       
                        
                    </div>
                </div>




            </div>

        </div>

    )
}

export default placed;
