import React from "react";

const Button = ({ styles }) => (
  <a href="https://calendly.com/d/5ff-cgb-f8p/discovery-call">
  <button  type="button" className={`py-3 px-3 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[12px] outline-none ${styles}`}>
     Book A Call
  </button>
  </a>
);

export default Button;
