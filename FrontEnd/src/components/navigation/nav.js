import React from 'react'
import './nav.css'

function nav() {
  return (
    <div>
      <div class="d-flex flex-nowrap justify-content-center" id="navh">

        <button class="btn order-1 p-2 mb-3 mr-3 mt-2" id="nbtn">
          <a href="/" class="link-dark">Home</a>
        </button>

        <button class="btn order-2 p-2 mb-3 mr-3 mt-2" id="nbtn">
          <a href="/categories" class="link-dark">Category</a>
        </button>

        <button class="btn order-3 p-2 mb-3 mr-3 mt-2" id="nbtn">
        <a href="/Service" class="link-dark">Service</a>
        </button>

        <button class="btn order-4 p-2 mb-3 mr-3 mt-2" id="nbtn">
          <a href="/feedback" class="link-dark">Feedback</a>
        </button>
      </div>
    </div>
  )
}

export default nav
