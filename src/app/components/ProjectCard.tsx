import { Dot } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  index: number;
  title: string;
  img: string;
  date: string;
  url?: string;
  type?: string;
  classNames?: string;
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
  );
};

export default ProjectCard;
