import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-[calc(100vh-85px)] lg:h-[calc(100vh-100px)] bg-[#151b4f]">
      <section className="flex w-full px-10 container flex-col items-center justify-between gap-[50px] lg:flex-row">
        <div class="flex flex-row gap-[7rem] lg:flex-col">
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/javascript.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
          />
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/react.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px] lg:translate-x-[7rem]"
          />
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/python.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
          />
        </div>

        <article className="z-10 flex flex-col items-center xl:w-[731px] px-5">
          <div className="mb-[10px] flex w-fit items-center gap-2 rounded-full bg-secondary px-[14px] py-[10px] opacity-[60%]">
            <p className="text-xs text-white lg:text-sm">
              No 1 Training Institute in Lagos
            </p>
          </div>
          <h1 className="font-bold text-center text-[40px] text-white lg:text-[73px] xl:leading-[99px]">
            Unlock Your
            <span className="italic text-tertiary">
              <br />
              Tech Potential <br />
            </span>
            With Us Today!
          </h1>
          <form className="flex h-[48px] max-w-[521px] items-center mt-[44px]">
            <div className="space-y-2 h-full">
              <input
                className="flex w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 h-full rounded-none rounded-s-[5px] text-black"
                data-testid="email-input"
                placeholder="Enter Your Email Address"
                size="384"
                id=":Rf5jttafsq:-form-item"
                aria-describedby=":Rf5jttafsq:-form-item-description"
                aria-invalid="false"
                name="email"
              />
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-white shadow hover:bg-white hover:text-black px-4 py-2 tsaButton h-[100%] w-[138px] rounded-none rounded-e-[5px] bg-secondary"
              role="button"
            >
              Explore Courses
            </button>
          </form>
        </article>

        <div class="flex flex-row gap-[7rem] lg:flex-col">
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/lock.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
          />
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/clickup.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px] lg:translate-x-[-7rem]"
          />
          <Image
            width={64}
            height={64}
            alt="icon"
            src="/images/clickup.webp"
            className="h-[32px] w-[32px] lg:h-[64px] lg:w-[64px]"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
