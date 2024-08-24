import React, { ReactNode } from "react";

interface UnderlineHoverProps {
  children: ReactNode;
}

const UnderlineHover: React.FC<UnderlineHoverProps> = ({ children }) => {
  return (
    <span className="group relative cursor-pointer">
      <span className="relative">
        {children}
        <span className="absolute -bottom-[8px] left-1/2 h-[2px] w-6 -translate-x-1/2 scale-x-0 transform bg-white transition-transform group-hover:scale-x-100"></span>
      </span>
    </span>
  );
};

export default UnderlineHover;
