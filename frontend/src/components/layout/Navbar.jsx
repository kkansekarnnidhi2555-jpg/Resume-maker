import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-primary text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8" />
        <h1 className="font-bold">ResumePro</h1>
      </div>
    </div>
  );
}