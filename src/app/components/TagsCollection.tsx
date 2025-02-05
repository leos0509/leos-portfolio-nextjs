import React from "react";

type TagsCollectionProps = {
  smallResponsive?: boolean;
};

const TagsCollection = ({ smallResponsive }: TagsCollectionProps) => {
  if (smallResponsive) {
    return (
      <div className="mt-2 flex h-fit flex-wrap gap-2 text-sm md:hidden motion-preset-slide-left motion-duration-500">
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          Vietnamese
        </div>
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          Javascript/Typescript
        </div>
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          UX/UI
        </div>
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          HTML/CSS
        </div>
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          NextJS
        </div>
        <div className="bg-yellow-base w-fit text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium h-fit cursor-pointer rounded-xl border-2 px-2 md:px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          ReactJS
        </div>
      </div>
    );
  }
  return (
    <div className="hidden flex-col gap-2 text-sm md:flex motion-preset-slide-left motion-duration-500">
      <div className="flex gap-2">
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          Vietnamese
        </div>
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          Javascript/Typescript
        </div>
      </div>
      <div className="ml-4 flex gap-2">
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          UX/UI
        </div>
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          HTML/CSS
        </div>
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          NextJS
        </div>
      </div>
      <div className="-ml-4 flex gap-2">
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          ReactJS
        </div>
        <div className="bg-yellow-base text-violet-dark border-violet-dark shadow-hard shadow-violet-dark font-space-mono hover:bg-yellow-medium cursor-pointer rounded-xl border-2 px-4 py-2 hover:scale-105 transition-all duration-100 ease-in-out">
          Ho Chi Minh City
        </div>
      </div>
    </div>
  );
};

export default TagsCollection;
