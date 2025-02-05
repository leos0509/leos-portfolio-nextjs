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

const getProjects = async () => {
  try {
    const res = await fetch("/api/projects", { cache: "no-cache" });
    if (!res.ok) {
      throw new Error("Failed to fetch projects.");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

type Project = {
  title: string;
  date: string;
  img: string;
  url: string;
};

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setIsFetching(true);
      setProjects(data);
      setIsFetching(false);
    };
    fetchProjects();
  }, []);

  console.log(projects);
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
        ) : (projects.map((project, index) => (
          <CarouselItem
            className="flex w-full flex-col items-center justify-start md:basis-1/2 lg:basis-1/3"
            key={index}
          >
            <ProjectCard
              type="project"
              index={index + 1}
              title={project.title}
              date={project.date}
              img={project.img}
              url={project.url}
              classNames=""
            />
          </CarouselItem>
        )))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;
