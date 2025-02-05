import { Skeleton } from "./ui/skeleton";
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="group flex w-[90%] flex-col gap-2 text-violet-dark transition-all ease-in-out hover:scale-110 hover:cursor-pointer">
      <div className="flex w-fit items-center justify-start font-pixel text-lg">
        00
      </div>
      <div className="overflow-hidden rounded-xl border-2 border-violet-dark bg-violet-light p-2 shadow-hard shadow-violet-dark xl:rounded-3xl xl:p-4">
        <Skeleton className="aspect-square h-full w-full rounded-lg xl:rounded-2xl bg-violet-base" />
      </div>
      <Skeleton className="aspect-square h-4 w-[40%] rounded-md bg-violet-base" />
      <div className="font-space-mono text-xl font-bold capitalize transition-all ease-in-out">
        <Skeleton className="aspect-square h-8 w-[80%] rounded-md bg-violet-base" />
      </div>
    </div>
  );
};

export default SkeletonCard;
