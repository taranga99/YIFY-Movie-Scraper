import { IBUTTON } from "../../types";

const Button = ({ title, isLoading, onClick }: IBUTTON) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded shadow-md px-3 py-2 bg-[#6ac045] hover:scale-105 ease-in-out duration-150"
    >
      <p className="font-bold text-[#1d1d1d]">
        {isLoading ? <p>Opening Torrent...</p> : title}
      </p>
    </div>
  );
};

export default Button;
