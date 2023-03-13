import React from "react";

const NavLinkHeader = ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="hover: absolute  bottom-0 block h-1 w-full scale-x-0 rounded-sm transition-all duration-700  group-hover:scale-x-100 group-hover:bg-orange-primary "></span>
    </a>
  );
};

export default NavLinkHeader;
