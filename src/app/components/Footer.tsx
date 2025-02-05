import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative mx-auto flex h-fit max-h-[600px] max-w-[2000px] items-center justify-between overflow-hidden bg-violet-dark p-8 py-16 text-yellow-light md:h-[50%] md:px-24 xl:px-32"
      style={{ scrollSnapAlign: "end" }}
      id="footer"
    >
      <div className="hidden cursor-pointer lg:block">
        <Image
          src="https://ik.imagekit.io/eef0on2jw/leos_blog_logo_invert.png"
          alt="logo"
          width={300}
          height={300}
        />
      </div>
      <div className="flex w-full md:w-fit gap-16">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:w-fit md:items-start md:justify-start">
          <h1 className="letter-spacing-lg font-pixel text-xl font-medium md:text-2xl">
            {"<Site map />"}
          </h1>
          <Link
            href="#hero-section"
            className="font-space-mono hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100"
          >
            Home
          </Link>
          <Link
            href="#working-experiences"
            className="font-space-mono hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100"
          >
            Working Experiences
          </Link>
          <Link
            href="#projects"
            className="font-space-mono hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="font-space-mono hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100"
          >
            Contact
          </Link>
        </div>
        <div className="hidden flex-col items-start justify-start gap-2 md:flex">
          <h1 className="letter-spacing-lg font-pixel text-xl font-medium md:text-2xl">
            {"<Contact />"}
          </h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
              );
              alert("Email copied to clipboard!");
            }}
            className="flex w-fit items-center justify-center gap-2 whitespace-nowrap font-space-mono text-sm hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100 md:text-base"
          >
            <Mail className="size-4" />
            Email: {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                process.env.NEXT_PUBLIC_ADMIN_PHONENUMBER || "",
              );
              alert("Phone number copied to clipboard!");
            }}
            className="flex w-fit items-center justify-center gap-2 whitespace-nowrap font-space-mono text-sm hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100 md:text-base"
          >
            <Phone className="size-4" />
            Phone: {process.env.NEXT_PUBLIC_ADMIN_PHONENUMBER}
          </button>
          <button
            className="flex w-fit items-center justify-center gap-2 whitespace-nowrap font-space-mono text-sm hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100 md:text-base"
            onClick={() =>
              window.open(
                process.env.NEXT_PUBLIC_ADMIN_LINKEDIN_URL || "",
                "_blank",
              )
            }
          >
            <Linkedin className="size-4" />
            LinkedIN
          </button>
          <button
            className="flex w-fit items-center justify-center gap-2 whitespace-nowrap font-space-mono text-sm hover:underline hover:opacity-80 active:text-yellow-base active:opacity-100 md:text-base"
            onClick={() =>
              window.open(
                process.env.NEXT_PUBLIC_ADMIN_GITHUB_URL || "",
                "_blank",
              )
            }
          >
            <Github className="size-4" />
            GitHub
          </button>
        </div>
      </div>
      <img
        src="/flower2.svg"
        alt="flower2-svg"
        className="absolute -bottom-1/3 left-1/4 hidden md:block"
      />
    </div>
  );
};

export default Footer;
