import React from 'react'
import SvgComponent from "./SvgComponent";

function login() {
  return (
    <div>
          <div className="App">
      <h1>Login</h1>
      <div class="grid-container">
    <div class="grid-child purple">
    <h1>
      Test Area
    </h1>
   
    </div>

    <div class="grid-child green text-left">
    <div className="svg">
    <SvgComponent
            className="mt-3"
            height={800}
            width={700}
        />
    </div>
   
    </div>
  
</div>

  </div>

    </div>
  )
}

export default login