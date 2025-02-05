import React from "react";
import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <div
      className={twMerge(
        "border-violet-dark mx-auto flex h-screen max-h-[1000px] w-full max-w-[2000px] flex-col items-center justify-between overflow-hidden border-b-2 relative",
        className,
      )}
      style={{ scrollSnapAlign: "start" }}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
