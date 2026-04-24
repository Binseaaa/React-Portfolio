import React from "react";

type DividerProps = {
  className?: string;
  width?: string; // e.g. "w-32", "w-full"
  opacity?: string; // e.g. "opacity-50"
};

const Divider: React.FC<DividerProps> = ({
  className = "",
  width = "w-32",
  opacity = "opacity-60",
}) => {
  return (
    <div
      className={`mx-auto my-10 h-px ${width} ${opacity} ${className}`}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
    </div>
  );
};

export default Divider;