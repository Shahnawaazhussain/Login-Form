import React from "react";

function LoginForm() {
  return (
    <div className="container">

{/* Side image */}
    <div className="sidebar">
      <div className="stepmenu">
      
      <div className="steps">
      <div className="stepnumber first">
        <div className="number">1</div>
      </div>
      <div className="stepdetails">
        <h4 className="stepcount">STEP 1</h4>
        <h4 className="">YOUR INFO</h4>
      </div>
      </div>

      <div className="steps">
      <div className="stepnumber">
        <div className="number">2</div>
      </div>
      <div className="stepdetails">
        <h4 className="stepcount">STEP 2</h4>
        <h4 className="">SELECT PLAN</h4>
      </div>
      </div>

      <div className="steps">
      <div className="stepnumber">
        <div className="number">3</div>
      </div>
      <div className="stepdetails">
        <h4 className="stepcount">STEP 3</h4>
        <h4 className="">ADD-ONS</h4>
      </div>
      </div>

      <div className="steps">
      <div className="stepnumber">
        <div className="number">4</div>
      </div>
      <div className="stepdetails">
        <h4 className="stepcount">STEP 4</h4>
        <h4 className="">SUMMARY</h4>
      </div>
      </div>

      </div>
      </div>

{/* Login Form  */}
      <div className="loginsection">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="#">
        <label htmlFor="">Name</label>
        <input type="text" name="" placeholder="e.g. Stephen King" id="name" />
        <label htmlFor="">Email Address</label>
        <input type="email" name="" placeholder="e.g. stephenking@lorem.com" id="email" />
        <label htmlFor="">Phone Number</label>
        <input type="tel" name="" placeholder="e.g. +1212 1212" id="tel" />
      </form>
      <button>Next Step</button>
      </div>
    </div>
    );
}

export default LoginForm;
