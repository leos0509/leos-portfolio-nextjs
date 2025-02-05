import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="z-50 flex h-screen w-full items-center justify-center gap-2 bg-yellow-light font-space-mono text-xl text-violet-dark motion-preset-fade motion-duration-100">
      <Loader2Icon className="szie-8 animate-spin" />
      Loading ...
    </div>
  );
};

export default Loading;