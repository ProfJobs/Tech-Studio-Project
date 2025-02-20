import Image from "next/image";
import React from "react";

const Jobs = () => {
  return (
    <section className="mx-auto max-w-[1240px] flex items-center h-full px-[1rem] xl:px-0 min-h-[678px] pb-[50px] pt-[50px]">
      <div className="flex items-center">
        <div className="relative flex-1 pr-10">
          <Image
            alt="Jobs"
            width={300}
            height={300}
            src="/images/Jobs.png"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <p className="text-secondary font-semibold text-lg">Hiring!</p>
          <h2 className="text-[1.5rem] md:text-[2rem] text-primary font-semibold">
            Frontend Development Tutor
          </h2>
          <p>
            We are seeking a passionate and experienced Frontend Development
            Tutor to help guide students through the essential skills and
            concepts of modern frontend web development. The ideal candidate
            will be able to explain complex topics in a clear and approachable
            way, focusing on technologies like HTML, CSS, JavaScript, and
            popular frameworks such as React, Vue, or Angular.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
