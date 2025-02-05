import React from "react";
import Marquee from "react-fast-marquee";

type CustomMarqueeProps = {
  direction?: "left" | "right";
};

const CustomMarquee = ({ direction }: CustomMarqueeProps) => {
  return (
    <div className="bg-yellow-dark border-violet-dark w-full border-y-2">
      <Marquee
        className="w-full overflow-hidden py-2 md:py-3"
        autoFill
        speed={100}
        direction={direction}
      >
        {Array.from({ length: 10 }, (_, index) => (
            <div
            className={`text-md xl:text-lg font-pixel px-4 ${index % 2 === 0 ? "text-yellow-light" : "text-violet-dark"}`}
            key={index}
            >
            FULLSTACK DEVELOPER
            </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
