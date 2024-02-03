import React from "react";

const Button = ({ styles }) => (
  <button onClick={window.location.href = 'https://marketide.co'} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Book A Call
  </button>
);

export default Button;
