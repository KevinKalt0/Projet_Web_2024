import React from "react";

interface RoundedBtnProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({ icon, onClick }) => {
  return (
    <button
      className="text-[#24D26D] text-xl p-2 rounded-full hover:bg-[#3c454c]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default RoundedBtn;
