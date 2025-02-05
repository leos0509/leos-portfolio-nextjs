import { Dot } from "lucide-react";
import React, { Suspense } from "react";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "./ui/skeleton";

type ProjectCardProps = {
  index: number;
  title: string;
  img: string;
  date: string;
  url?: string;
  type?: string;
  classNames?: string;
};

const SkeletonCard = () => {
  return (
    <div className="group flex w-[90%] flex-col gap-2 text-violet-dark transition-all ease-in-out hover:scale-110 hover:cursor-pointer">
      <div className="flex w-fit items-center justify-start font-pixel text-lg">
        00
      </div>
      <div className="overflow-hidden rounded-xl border-2 border-violet-dark bg-violet-light p-2 shadow-hard shadow-violet-dark xl:rounded-3xl xl:p-4">
        <Skeleton className="aspect-square h-full w-full rounded-lg xl:rounded-2xl" />
      </div>
      <Skeleton className="aspect-square h-4 w-[40%] rounded-md" />
      <div className="font-space-mono text-xl font-bold capitalize transition-all ease-in-out">
        <Skeleton className="aspect-square h-8 w-[80%] rounded-md" />
      </div>
    </div>
  );
};

const ProjectCard = ({
  index,
  title,
  img,
  date,
  url,
  type,
  classNames,
}: ProjectCardProps) => {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <div
        className={twMerge(
          "group flex w-[90%] flex-col gap-2 text-violet-dark transition-all ease-in-out hover:scale-110 hover:cursor-pointer",
          classNames,
        )}
        onClick={() => window.open(url, "_blank")}
      >
        <div className="flex w-fit items-center justify-start font-pixel text-lg">
          0{index}
          {type === "project" ? (
            !date.toLowerCase().includes("today") ? (
              <div className="flex w-fit items-center justify-center">
                <Dot className="size-12 text-green-500" /> Production
              </div>
            ) : (
              <div className="flex w-fit items-center justify-center">
                <Dot className="size-12 text-yellow-600" /> Under Development
              </div>
            )
          ) : null}
        </div>
        <div className="overflow-hidden rounded-xl border-2 border-violet-dark bg-violet-light p-2 shadow-hard shadow-violet-dark xl:rounded-3xl xl:p-4">
          <img
            src={img}
            alt={title}
            className="aspect-square h-auto w-full rounded-lg object-cover xl:rounded-2xl"
          />
        </div>
        <div className="text-md pt-2 font-space-mono italic">{date}</div>
        <div className="font-space-mono text-xl font-bold capitalize transition-all ease-in-out">
          {title}
        </div>
      </div>
    </Suspense>
  );
};

export default ProjectCard;
