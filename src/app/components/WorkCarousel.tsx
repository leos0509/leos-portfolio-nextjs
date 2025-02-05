import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProjectCard from "./ProjectCard";
import SkeletonCard from "./SkeletonCard";

const getWorks = async () => {
  try {
    const res = await fetch("/api/works", { cache: "no-cache" });
    if (!res.ok) {
      throw new Error("Failed to fetch projects.");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

type Work = {
  title: string;
  date: string;
  img: string;
};

const WorksCarousel = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      setIsFetching(true);
      const data = await getWorks();
      setWorks(data);
      setIsFetching(false);
    };
    fetchWorks();
  }, []);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="py-8">
        {isFetching ? (
          Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              className="flex w-full flex-col items-center justify-start md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <SkeletonCard />
            </CarouselItem>
          ))
        ) : (
          works.map((work, index) => (
            <CarouselItem
              className="flex w-full flex-col items-center justify-start md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <ProjectCard
                type="works"
                index={index + 1}
                title={work.title}
                date={work.date}
                img={work.img}
                classNames=""
              />
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default WorksCarousel;
