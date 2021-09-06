import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div
        className="flex h-14 relative z-40 items-center justify-center"
        style={{ boxShadow: "1px -3px 10px 0px rgba(0, 0, 0, 0.75)" }}
      >
        <div className="container flex">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-12" />
          </div>
          <div className="flex self-center cursor-pointer text-gray-600 text-sm md:text-lg font-black ml-12 ibm">
            home {">"} online-java-foundation {">"} function-and-arrays {">"}{" "}
            sum_of_two_arrays
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
