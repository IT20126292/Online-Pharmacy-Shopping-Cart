import React from 'react'

function test() {
  return (
    <div>
      <div class="card">

<h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign up</strong>
</h5>

<div class="card-body px-lg-5 pt-0">

    <form class="md-form" style={{color: "#757575"}}>

                <input type="text" id="materialRegisterFormFirstName" class="form-control"/>
                <label for="materialRegisterFormFirstName">First name</label>

                <input type="email" id="materialRegisterFormLastName" class="form-control"/>
                <label for="materialRegisterFormLastName">Last name</label>

                <input type="email" id="materialRegisterFormEmail" class="form-control"/>
                <label for="materialRegisterFormEmail">E-mail</label>

                <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                <label for="materialRegisterFormPassword">Password</label>

                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>

                <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock"/>
                <label for="materialRegisterFormPhone">Phone number</label>

                <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter"/>
                    <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div>


        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

        <div class="text-center">
            <p>or sign up with:</p>

            <a type="button" class="btn-floating btn-fb btn-sm">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a type="button" class="btn-floating btn-tw btn-sm">
                <i class="fab fa-twitter"></i>
            </a>
            <a type="button" class="btn-floating btn-li btn-sm">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a type="button" class="btn-floating btn-git btn-sm">
                <i class="fab fa-github"></i>
            </a>

            <hr/>

            <p>By clicking
                <em>Sign up</em> you agree to our
                <a href="" target="_blank">terms of service</a> and
                <a href="" target="_blank">terms of service</a>. </p>
        </div>

    </form>
</div>
</div>
    </div>
  
    
  )
}

export default test
