import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-black text-2xl font-medium">
        Hello <br></br> <span className="text-3xl font-bold">Shubh 👋🏻</span> 
      </h1>
      <Button variant="success">Log Out</Button>
    </div>
  );
};

export default Header;
