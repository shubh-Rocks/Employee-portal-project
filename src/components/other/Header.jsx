import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-end justify-between px-10">
      <h1 className="text-white text-2xl font-medium">
        Hello <br></br> <span className="text-3xl font-bold">Shubh 👋🏻</span>
      </h1>
      <Button variant="success">Log Out</Button>
    </div>
  );
};

export default Header;
