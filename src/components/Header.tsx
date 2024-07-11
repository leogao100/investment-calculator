import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header: React.FC = () => { 
    return (
      <header className="text-align p-12 flex flex-col items-center w-full ">
        <img
          src={logo}
          alt="Invest to your future"
          className="w-20 h-20 object-contain bg-transparent mb-5"
        />
        <h1 className="text-2xl text-white font-bold">Investment Calculator</h1>
      </header>
    );
}

export default Header;