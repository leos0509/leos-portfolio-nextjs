"use client";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import CustomMarquee from "./components/CustomMarquee";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SectionContainer from "./components/SectionContainer";
import TagsCollection from "./components/TagsCollection";
import Image from "next/image";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Loading from "./loading";
import { toast } from "sonner";
import WorksCarousel from "./components/WorkCarousel";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="h-screen w-full overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
    >
      <SectionContainer
        className="bg-violet-light bg-[url('/tile_path.svg')]"
        id="hero-section"
      >
        <CustomMarquee />
        <div className="flex h-full max-h-[80vh] w-full flex-col items-center justify-center gap-2 px-8 md:px-24 md:py-8 xl:px-32">
          <div className="relative flex h-full w-full items-center justify-between rounded-3xl border-2 border-violet-dark bg-violet-light px-4 shadow-hard shadow-violet-dark md:px-12 lg:px-24">
            <div className="flex h-full min-w-[60%] flex-col justify-center gap-2 py-8">
              <div className="flex w-full flex-col items-center justify-center gap-2 md:w-[60%] md:items-start">
                <Image
                  src="https://ik.imagekit.io/eef0on2jw/admin_avatar.png"
                  alt="admin_avatar"
                  className="z-0 mb-4 md:hidden"
                  width={150}
                  height={150}
                />
                <h1 className="motion-preset-slide-right font-pixel text-4xl font-semibold uppercase text-violet-dark motion-duration-500 md:text-6xl">
                  <span>Leos Pham</span>
                </h1>
                <p className="motion-preset-slide-right font-space-mono text-violet-medium motion-duration-500 motion-delay-100">
                  <span>UX/UI DESIGNER - FULLSTACK DEVELOPER</span>
                </p>
                {process.env.NEXT_PUBLIC_ADMIN_HIRING_STATUS === "true" ? (
                  <div className="motion-preset-slide-right flex items-center justify-center gap-2 font-space-mono text-violet-dark motion-duration-500 motion-delay-200">
                    <Bell className="motion-preset-seesaw size-10" />
                    <p>
                      I'm open for new opportunities, feel free to{" "}
                      <a
                        href="#contact"
                        className="cursor-pointer underline hover:text-yellow-light active:text-yellow-base"
                      >
                        reach out.
                      </a>
                    </p>
                  </div>
                ) : null}
              </div>
              <TagsCollection smallResponsive={true} />
            </div>
            <div className="flex translate-x-10 items-center justify-center gap-4 lg:translate-x-0">
              <Image
                src="https://ik.imagekit.io/eef0on2jw/admin_avatar.png"
                alt="admin_avatar"
                className="motion-preset-slide-up hidden motion-duration-500 motion-delay-200 xl:block"
                width={350}
                height={350}
              />
              <TagsCollection />
            </div>
          </div>
          <div className="motion-preset-expand z-10 hidden flex-col gap-2 rounded-3xl border-2 border-violet-dark bg-yellow-light p-6 shadow-hard shadow-violet-dark md:-mt-8 md:flex md:w-[90%] lg:-mt-16">
            <div className="flex gap-2">
              <div className="size-3 animate-wave rounded-full bg-violet-light transition-all duration-200 ease-in-out motion-delay-100"></div>
              <div className="size-3 animate-wave rounded-full bg-violet-base transition-all duration-200 ease-in-out motion-delay-200"></div>
              <div className="size-3 animate-wave rounded-full bg-violet-medium transition-all duration-200 ease-in-out motion-delay-300"></div>
            </div>
            <p className="hidden font-space-mono text-violet-dark xl:block">
              Hi, I'm Leos, a fullstack developer specializing in{" "}
              <span className="font-bold">NextJS and ReactJS</span>, with a
              passion for creating user-centric experiences through{" "}
              <span className="font-bold">UX/UI design</span>. With three years
              of experience in modern web development, I've experience working
              with frontend and backend technologies, including{" "}
              <span className="font-bold">
                Express, SQL, and NoSQL databases
              </span>
              . My portfolio is a testament to my ability to transform ideas
              into reality, showcasing a range of projects that embody my
              commitment to innovation and user-friendly design. Let's build
              something together!
            </p>
            <p className="font-space-mono text-violet-dark xl:hidden">
              Hi, I'm Leos, a fullstack developer specializing in{" "}
              <span className="font-bold">NextJS and ReactJS</span>, with a
              passion for creating user-centric experiences through{" "}
              <span className="font-bold">UX/UI design</span>. With three years
              of experience in modern web development, I've experience working
              with frontend and backend technologies, including{" "}
              <span className="font-bold">
                Express, SQL, and NoSQL databases
              </span>
              .
            </p>
          </div>
        </div>
        <CustomMarquee direction="right" />
      </SectionContainer>
      <SectionContainer className="" id="working-experiences">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-8 md:gap-8 md:p-24 xl:px-32">
          <h1 className="letter-spacing-lg motion-duration-800 motion-preset-oscillate font-pixel text-2xl font-bold text-violet-dark md:text-4xl">
            {"<Working Experiences />"}
          </h1>
          <WorksCarousel />
          <div className="flex w-full items-center justify-center gap-2 font-space-mono text-violet-dark md:hidden">
            <ArrowLeft className="size-4 animate-bounce-left" />
            <p className="">swipe to read</p>
            <ArrowRight className="size-4 animate-bounce-right" />
          </div>
          <div className="-z-10 hidden lg:block">
            <img
              src="/star.svg"
              alt="rombos_svg"
              className="absolute bottom-0 left-10 block"
            />
            <img
              src="/rombos.svg"
              alt="rombos_svg"
              className="absolute -top-32 right-80 block"
            />
            <img
              src="/star2.svg"
              alt="rombos_svg"
              className="absolute -bottom-16 right-20 block"
            />
            <img
              src="/union_cross.svg"
              alt="rombos_svg"
              className="absolute left-52 top-20 block"
            />
          </div>
          <img
            src="/bg_cross_pattern.svg"
            alt="rombos_svg"
            className="absolute -z-20 block object-cover"
          />
        </div>
      </SectionContainer>
      <SectionContainer className="" id="projects">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-8 md:gap-8 md:p-24 xl:px-32">
          <h1 className="letter-spacing-lg motion-duration-800 motion-preset-oscillate font-pixel text-2xl font-bold text-violet-dark md:text-4xl">
            {"<Projects />"}
          </h1>
          <ProjectsCarousel />
          <div className="flex w-full items-center justify-center gap-2 font-space-mono text-violet-dark md:hidden">
            <ArrowLeft className="size-4 animate-bounce-left" />
            <p className="">swipe to read</p>
            <ArrowRight className="size-4 animate-bounce-right" />
          </div>
          <div className="-z-10 hidden lg:block">
            <img
              src="/star.svg"
              alt="rombos_svg"
              className="absolute bottom-0 left-10 block"
            />
            <img
              src="/rombos.svg"
              alt="rombos_svg"
              className="absolute -top-32 right-80 block"
            />
            <img
              src="/star2.svg"
              alt="rombos_svg"
              className="absolute -bottom-16 right-20 block"
            />
            <img
              src="/union_cross.svg"
              alt="rombos_svg"
              className="absolute left-52 top-20 block"
            />
          </div>
          <img
            src="/bg_cross_pattern.svg"
            alt="rombos_svg"
            className="absolute -z-20 block object-cover"
          />
        </div>
      </SectionContainer>
      <SectionContainer id="contact">
        <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-8 p-8 md:px-24 lg:flex-row lg:justify-between xl:px-32">
          <div className="flex h-fit w-full flex-col gap-4">
            <h1 className="letter-spacing-lg motion-duration-800 motion-preset-oscillate font-pixel text-2xl font-bold text-violet-dark md:text-4xl">
              {"<Contact for Work />"}
            </h1>
            <p className="hidden font-space-mono text-violet-dark md:block">
              Feel free to reach out to me at my contact. I'm always eager to
              discuss new projects, collaborations, or simply share insights on
              the industry's latest trends.
            </p>
            <div className="flex flex-col flex-wrap gap-4 lg:flex-row">
              <div
                className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-violet-dark bg-violet-light px-4 py-2 font-space-mono shadow-hard shadow-violet-dark transition-all duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-violet-base hover:text-yellow-light hover:underline active:scale-100"
                onClick={() => {
                  navigator.clipboard.writeText(
                    process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
                  );
                  toast.success("Email copied to clipboard.", {
                    description: "Mail me now!",
                  });
                }}
              >
                <Mail className="size-6" />
                {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
              </div>
              <div
                className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-violet-dark bg-violet-light px-4 py-2 font-space-mono shadow-hard shadow-violet-dark transition-all duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-violet-base hover:text-yellow-light hover:underline active:scale-100"
                onClick={() => {
                  navigator.clipboard.writeText(
                    process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
                  );
                  toast.success("Phone number copied to clipboard.", {
                    description: "Call me now!",
                  });
                }}
              >
                <Phone className="size-6" />
                {process.env.NEXT_PUBLIC_ADMIN_PHONENUMBER}
              </div>
              <div
                className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-violet-dark bg-violet-light px-4 py-2 font-space-mono shadow-hard shadow-violet-dark transition-all duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-violet-base hover:text-yellow-light hover:underline active:scale-100"
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_ADMIN_LINKEDIN_URL || "",
                    "_blank",
                  )
                }
              >
                <Linkedin className="size-6" />
                Checkout my LinkedIN
              </div>
              <div
                className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-violet-dark bg-violet-light px-4 py-2 font-space-mono shadow-hard shadow-violet-dark transition-all duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-violet-base hover:text-yellow-light hover:underline active:scale-100"
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_ADMIN_GITHUB_URL || "",
                    "_blank",
                  )
                }
              >
                <Github className="size-6" />
                Checkout my GitHub
              </div>
            </div>
          </div>
          <div className="h-[30%] w-full rounded-2xl border-2 border-violet-dark bg-violet-light p-4 shadow-hard shadow-violet-dark md:h-full md:max-h-[30%] lg:max-h-[80%] lg:max-w-[50%]">
            <img
              src="https://ik.imagekit.io/eef0on2jw/contact_img.jpg?updatedAt=1738688347364"
              alt="contact-img"
              className="block h-full w-full rounded-lg object-cover"
            />
          </div>
          <img
            src="/flower.svg"
            alt="flowe-svg"
            className="absolute bottom-20 right-10 -z-10 scale-75 md:right-1/4 lg:right-1/2"
          />
          <img
            src="/bg_cross_pattern.svg"
            alt="rombos_svg"
            className="absolute right-1/2 -z-20 block object-cover opacity-40"
          />
        </div>
      </SectionContainer>
      <Footer />
    </div>
  );
}
