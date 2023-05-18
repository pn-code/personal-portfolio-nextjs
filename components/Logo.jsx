import { FaFire } from "react-icons/fa";

function Logo() {
  return (
    <div className="bg-primary p-1 rounded-full w-9 flex justify-center group-hover:bg-secondary">
      <FaFire color="black" size={30} />
    </div>
  );
}

export default Logo;
