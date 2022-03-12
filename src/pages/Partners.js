import React from 'react'
import logo from '../chef2.png';
function Partners() {
  return (
    <div id="Partners">        
      <div className="Res-heading">
          <h1>Partners</h1> 
          <p class="par">Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <div className="container">
      <img src={logo} class="img22" alt=""/>
      <div>
      <h4 className="title">Join us by filling out this form   </h4>
      <form>
  <div class="form-row">
    <div class="form-group col-md-20">
      <label for="name">Name :</label>
      <input type="text" class="form-control" id="name" placeholder="Your Company's Name"/>
    </div>
    <div class="form-group col-md-20">
      <label for="add">Address :</label>
      <input type="text" class="form-control" id="add" placeholder="Your Address"/>
    </div>
    <div class="form-group col-md-20">
      <label for="name">Phone Number :</label>
      <input type="text" class="form-control" id="phone" placeholder="Your Phone Number"/>
    </div>
  </div>
  <div class="form-group">
    <label for="message">Write here Your Message</label>
    <textarea class="form-control" id="message" rows="5" placeholder="Your message ..."></textarea>
  </div>
  <button type="submit" class="btn bg-warning text-white">Send </button>
</form>
      </div>
     
      </div>
</div>
  )
}

export default Partners