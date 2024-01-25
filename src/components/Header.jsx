import ConnectButton from "./ConnectButton";

const Header = () => {
  return (
    <div className="h-[40vmax] max-h-[200px] bg-header-gradient p-5 text-white">
      <div className="flex justify-between items-cener">
        <p>John Doe</p>
        <div className=" text-center">
          <p>Wallet Address</p>
          <h2 className="text-4xl mt-5">0.00</h2>
        </div>
        <div>
          {" "}
          <ConnectButton />{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
