import React from "react";

interface Props {
  username: string;
  onLogout: ()=> void
}

export const Header: React.FC<Props> = ({ username, onLogout }) => {
  return (
    <div className="w-full h-16 bg-primary flex flex-row justify-between items-center p-4 sm:px-10">
      <div className=" text-sm sm:text-xl tsukimi flex gap-2">
        <span className="font-semibold text-yellowish">Welcome</span>
        <span className="font-bold text-secondary">{username}</span>
      </div>
      <div onClick={onLogout} className="text-yellowish text-sm sm:text-lg tsukimi font-semibold cursor-pointer">
        Logout
      </div>
    </div>
  );
};
