import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Why = () => {
  return (
    <div className="">
      <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 min-h-[678px] pb-[50px] pt-[50px]">
        <section className="mx-auto w-fit text-center">
          <p className="text-sm font-[700] uppercase text-secondary">
            Why techstudio?
          </p>
          <h2 className="mb-[58px] mt-[33px] text-4xl font-semibold text-primary">
            We Are Customer-Centric
          </h2>
        </section>
        <section className="grid min-h-[403px] grid-cols-1 gap-[44px] md:grid-cols-2 lg:grid-cols-3">
          <section className="mx-auto w-full max-w-[376px]">
            <div className="relative overflow-hidden mx-auto">
              <Image
                width={337}
                height={190}
                alt="card-image"
                src="/images/great-learning-enviroment.gif"
              />
            </div>
            <div className="mt-[1rem] p-[1rem] text-center">
              <h4 className="mb-[1rem] text-lg font-[700] text-high-grey-III">
                Great learning Environment
              </h4>
              <p className="text-sm leading-[25px] text-high-grey-II">
                We provide exceptional learning facilities with comfortable,
                en-suite classrooms and high-speed internet.
              </p>
            </div>
          </section>
          <section className="mx-auto w-full max-w-[376px]">
            <div className="relative overflow-hidden mx-auto">
              <Image
                width={337}
                height={190}
                alt="card-image"
                src="/images/expirence-tutor.gif"
              />
            </div>
            <div className="mt-[1rem] p-[1rem] text-center">
              <h4 className="mb-[1rem] text-lg font-[700] text-high-grey-III">
                Experienced Tutor
              </h4>
              <p className="text-sm leading-[25px] text-high-grey-II">
                Our tutors are experienced professionals chosen for their
                exceptional teaching abilities. They are dedicated to providing
                top-notch education to our students.
              </p>
            </div>
          </section>
          <section className="mx-auto w-full max-w-[376px]">
            <div className="relative overflow-hidden mx-auto h-[190px] w-[337px]">
              <Image
                width={337}
                height={190}
                alt="card-image"
                src="/images/career-support.gif"
                className="absolute object-cover object-center w-full h-full inset-0"
              />
            </div>
            <div className="mt-[1rem] p-[1rem] text-center">
              <h4 className="mb-[1rem] text-lg font-[700] text-high-grey-III">
                Career Support
              </h4>
              <p className="text-sm leading-[25px] text-high-grey-II">
                We provide unparalleled support both during your learning
                journey and after graduation. Our commitment to your success
                extends beyond the classroom.
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className="relative min-h-[518px] overflow-hidden bg-[#e6f0fe] py-[85px]">
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0">
          <section className="grid grid-cols-1 items-center gap-[28px] lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="relative z-10 text-sm font-bold uppercase text-secondary">
                what we offer
              </span>
              <h3 className="mt-[12px] lg:mt-0 text-[2rem] text-primary font-semibold">
                Certified Tech Training Courses and
              </h3>
              <p className="leading-[23px]">
                Explore our extensive selection of highly sought-after
                beginner-friendly tech courses, meticulously designed to empower
                and inspire learners at every step of their educational journey.
                <Image
                  width={34}
                  height={34}
                  alt="card-image"
                  src="/images/scribble.webp"
                  className="relative left-1 top-4 hidden lg:inline"
                />
              </p>
            </div>
            <div
              className="relative w-full max-w-[655px] mx-auto"
              role="region"
              aria-roledescription="carousel"
            >
              <div className="overflow-hidden">
                <div className="flex -ml-4 h-[270px]">
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full"
                  >
                    <div className="p-1 h-full rounded-t-[1rem] overflow-hidden">
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full relative rounded-t-[1rem] overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                          <p className="text-4xl text-center text-white font-[700]">
                            Fullstack Development
                          </p>
                          <a href="/courses/fullstack-development">
                            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted shadow h-9 px-4 py-2 w-[160px] text-secondary bg-white hover:bg-white/90">
                              View Course
                            </Button>
                          </a>
                        </div>
                        <Image
                          width={200}
                          height={200}
                          alt="card-image"
                          src="/images/fullstack.webp"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full"
                  >
                    <div className="p-1 h-full rounded-t-[1rem] overflow-hidden">
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full relative rounded-t-[1rem] overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                          <p className="text-4xl text-center text-white font-[700]">
                            Product Design
                          </p>
                          <a href="/courses/product-design-ui-ux">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted shadow h-9 px-4 py-2 bg-background w-[160px] text-mid-blue border-mid-blue"
                              role="button"
                            >
                              View Course
                            </button>
                          </a>
                        </div>
                        <img
                          alt="logo"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-full object-cover"
                          //   style="color: transparent"
                          srcSet="
                                  /_next/image?url=%2Fimages%2Fui-ux.png&amp;w=256&amp;q=75 1x,
                                  /_next/image?url=%2Fimages%2Fui-ux.png&amp;w=640&amp;q=75 2x
                                "
                          src="/_next/image?url=%2Fimages%2Fui-ux.png&amp;w=640&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full"
                  >
                    <div className="p-1 h-full rounded-t-[1rem] overflow-hidden">
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full relative rounded-t-[1rem] overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                          <p className="text-4xl text-center text-white font-[700]">
                            Data Analysis and Machine Learning
                          </p>
                          <a href="/courses/data-analysis-with-machine-learning">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted shadow h-9 px-4 py-2 bg-background w-[160px] text-mid-blue border-mid-blue"
                              role="button"
                            >
                              View Course
                            </button>
                          </a>
                        </div>
                        <img
                          alt="logo"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-full object-cover"
                          //   style="color: transparent"
                          srcSet="
                                  /_next/image?url=%2Fimages%2Fdatascience.png&amp;w=256&amp;q=75 1x,
                                  /_next/image?url=%2Fimages%2Fdatascience.png&amp;w=640&amp;q=75 2x
                                "
                          src="/_next/image?url=%2Fimages%2Fdatascience.png&amp;w=640&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full"
                  >
                    <div className="p-1 h-full rounded-t-[1rem] overflow-hidden">
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full relative rounded-t-[1rem] overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                          <p className="text-4xl text-center text-white font-[700]">
                            Cyber Security
                          </p>
                          <a href="/courses/cyber-security">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted shadow h-9 px-4 py-2 bg-background w-[160px] text-mid-blue border-mid-blue"
                              role="button"
                            >
                              View Course
                            </button>
                          </a>
                        </div>
                        <img
                          alt="logo"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-full object-cover"
                          //   style="color: transparent"
                          srcSet="
                                  /_next/image?url=%2Fimages%2Fcyber-security.png&amp;w=256&amp;q=75 1x,
                                  /_next/image?url=%2Fimages%2Fcyber-security.png&amp;w=640&amp;q=75 2x
                                "
                          src="/_next/image?url=%2Fimages%2Fcyber-security.png&amp;w=640&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full"
                  >
                    <div className="p-1 h-full rounded-t-[1rem] overflow-hidden">
                      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full relative rounded-t-[1rem] overflow-hidden">
                        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full p-2 gap-[23px] bg-gray-900 bg-opacity-70">
                          <p className="text-4xl text-center text-white font-[700]">
                            Product Managment
                          </p>
                          <a href="/courses/product-management">
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted shadow h-9 px-4 py-2 bg-background w-[160px] text-mid-blue border-mid-blue"
                              role="button"
                            >
                              View Course
                            </button>
                          </a>
                        </div>
                        <img
                          alt="logo"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-full object-cover"
                          //   style="color: transparent"
                          srcSet="
                                  /_next/image?url=%2Fimages%2Fproduct-management.png&amp;w=256&amp;q=75 1x,
                                  /_next/image?url=%2Fimages%2Fproduct-management.png&amp;w=640&amp;q=75 2x
                                "
                          src="/_next/image?url=%2Fimages%2Fproduct-management.png&amp;w=640&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                // style="scrollbar-width: none; -ms-overflow-style: none"
                className="overflow-auto border rounded-b-[1rem] mx-[4px] p-[10px] bg-primary"
              >
                <div className="flex w-fit justify-between gap-[10px]">
                  <div>
                    <div className="bg-white text-card-foreground shadow-sm w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm border border-blue-500">
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
                        <p className="text-xs text-center text-white font-semibold">
                          Fullstack Development
                        </p>
                      </div>
                      <Image
                        width={100}
                        height={100}
                        alt="card-image"
                        src="/images/fullstack.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="border bg-white text-card-foreground shadow-sm w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm">
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
                        <p className="text-xs text-center text-white font-semibold">
                          Product Design
                        </p>
                      </div>
                      <Image
                        width={100}
                        height={100}
                        alt="card-image"
                        src="/images/fullstack.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="border bg-white text-card-foreground shadow-sm w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm">
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
                        <p className="text-xs text-center text-white font-semibold">
                          Data Analysis and Machine Learning
                        </p>
                      </div>
                      <Image
                        width={100}
                        height={100}
                        alt="card-image"
                        src="/images/fullstack.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="border bg-white text-card-foreground shadow-sm w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm">
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
                        <p className="text-xs text-center text-white font-semibold">
                          Cyber Security
                        </p>
                      </div>
                      <Image
                        width={100}
                        height={100}
                        alt="card-image"
                        src="/images/fullstack.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="border bg-white text-card-foreground shadow-sm w-[150px] relative h-[56px] border-none p-2 cursor-pointer rounded-sm">
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full p-2 bg-gray-900 bg-opacity-70">
                        <p className="text-xs text-center text-white font-semibold">
                          Product Managment
                        </p>
                      </div>
                      <Image
                        width={100}
                        height={100}
                        alt="card-image"
                        src="/images/fullstack.webp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>
        <Image
          width={112}
          height={112}
          alt="card-image"
          src="/images/box-2.webp"
          className="absolute left-[-1rem] top-[-1rem] hidden xl:block"
        />
        <Image
          width={91}
          height={88}
          alt="card-image"
          src="/images/box-1.webp"
          className="absolute bottom-0 right-0 hidden xl:block"
        />
      </section>
      <section className="min-h-[1577px] py-[100px]">
        <div className="min-h-[305px]">
          <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 mb-[50px] grid grid-cols-1 items-end gap-[28px] gap-y-0 text-center lg:mb-[64px] lg:grid-cols-2 lg:text-left">
            <div className="flex-1">
              <span className="font-bold uppercase text-secondary">
                LIFE AFTER TRAINING
              </span>
              <h3 className="mt-[12px] text-primary text-[2rem] font-semibold">
                Where Our Graduates Work
              </h3>
            </div>
            <div className="flex-1">
              <p className="leading-[25px]">
                Our talented graduates flourish in leading companies across the
                globe, making significant contributions to both their personal
                growth and the organizations they serve. They work in industries
                ranging from Information technology to Telecommunication, and
                more.
              </p>
            </div>
          </section>
        </div>
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 my-[50px] min-h-[412px] lg:my-[100px]">
          <section className="mx-auto flex min-h-[392px] max-w-full flex-col justify-between rounded-[16px] bg-primary p-4 text-background md:max-w-[1244px] md:flex-row md:p-[42px]">
            <div className="self-start mb-4 md:mb-0">
              <Image
                width={112}
                height={112}
                alt="card-image"
                src="/images/box-2.webp"
                className="hidden lg:block"
              />
            </div>
            <div className="text-center flex-1">
              <h3 className="text-xl md:text-2xl text-white font-semibold">
                What Our Graduate Say
              </h3>
              <div
                className="relative w-full md:max-w-[597px] mx-auto"
                role="region"
                aria-roledescription="carousel"
              >
                <div className="overflow-hidden text-white">
                  <div className="flex -ml-4">
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex items-center justify-center"
                    >
                      <div>
                        <p className="leading-[24px] text-sm md:text-[1rem] md:leading-[32px] my-[16px] md:my-[27px] tracking-[0.2px]">
                          I came into techStudio Academy with practically no
                          prior knowledge in software development. However,
                          within a few weeks, I was able to grasp the crux of
                          software development and also master the soft skills
                          required for being a software developer. So far so
                          good, the skills acquired have given me a mind-blowing
                          push in my career as a software developer.
                        </p>
                        <div className="flex items-center justify-center gap-[12px] md:gap-[20px]">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full w-[72px] md:w-[96px] h-[72px] md:h-[96px] border-[2px] md:border-[3px] border-mid-grey-II">
                            <Image
                              width={91}
                              height={80}
                              alt="card-image"
                              src="/images/joseph.jpg"
                              className="flex h-full w-full items-center justify-center"
                            />
                          </span>
                          <div className="text-left">
                            <p className="font-semibold tracking-[0.5px] text-base md:text-xl text-accent mb-[4px] md:mb-[8px]">
                              JOSEPH DARAMOLA
                            </p>
                            <p className="text-sm tracking-[0.2px]">
                              Frontend Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex items-center justify-center"
                    >
                      <div>
                        <p className="leading-[24px] text-sm md:text-[1rem] md:leading-[32px] my-[16px] md:my-[27px] tracking-[0.2px]">
                          TechStudio Academy has been one of the big push I
                          needed to get in the real world space. I had an
                          immense learning that was really different from the
                          self learning I started with. The learning was fun and
                          there were some internship job opportunities that were
                          presented to us. I got my first gig immediately after
                          the program. Thank you TechStudio for that push I
                          needed.
                        </p>
                        <div className="flex items-center justify-center gap-[12px] md:gap-[20px]">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full w-[72px] md:w-[96px] h-[72px] md:h-[96px] border-[2px] md:border-[3px] border-mid-grey-II">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                              CN
                            </span>
                          </span>
                          <div className="text-left">
                            <p className="font-semibold tracking-[0.5px] text-base md:text-xl text-accent mb-[4px] md:mb-[8px]">
                              PETER EDEAWE
                            </p>
                            <p className="text-sm tracking-[0.2px]">
                              Software Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex items-center justify-center"
                    >
                      <div>
                        <p className="leading-[24px] text-sm md:text-[1rem] md:leading-[32px] my-[16px] md:my-[27px] tracking-[0.2px]">
                          I bless the day the Instagram algorithm pop up
                          TechStudio Academy to my news feed. I read through
                          their curriculum and other details about the Bootcamp
                          and I told myself this is the opportunity I&#x27;ve
                          been waiting for. I wasn&#x27;t disappointed, the
                          environment was well ventilated and conducive, with
                          competent instructors. Here I am today at OT&amp;T
                          Consulting, fulfilling my dreams thanks to TechStudio
                          Academy.
                        </p>
                        <div className="flex items-center justify-center gap-[12px] md:gap-[20px]">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full w-[72px] md:w-[96px] h-[72px] md:h-[96px] border-[2px] md:border-[3px] border-mid-grey-II">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                              CN
                            </span>
                          </span>
                          <div className="text-left">
                            <p className="font-semibold tracking-[0.5px] text-base md:text-xl text-accent mb-[4px] md:mb-[8px]">
                              RILWAN AJIBOLA
                            </p>
                            <p className="text-sm tracking-[0.2px]">
                              Software Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <div className="h-[8px] md:h-[10px] rounded-full transition-all duration-300 cursor-pointer w-[20px] md:w-[30px] bg-white"></div>
                <div className="h-[8px] md:h-[10px] rounded-full transition-all duration-300 cursor-pointer w-[8px] md:w-[10px] bg-gray-400"></div>
                <div className="h-[8px] md:h-[10px] rounded-full transition-all duration-300 cursor-pointer w-[8px] md:w-[10px] bg-gray-400"></div>
              </div>
            </div>
            <div className="self-end mt-4 md:mt-0">
              <Image
                width={91}
                height={80}
                alt="card-image"
                src="/images/box-1(full).webp"
                className="hidden h-[88px] w-[91px] lg:block"
              />
            </div>
          </section>
        </section>
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 grid min-h-[431px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
          <div className="">
            <div className="relative overflow-hidden mx-auto object-cover">
              <Image
                width={567}
                height={431}
                loading="lazy"
                alt="card-image"
                src="/images/certificate-2.gif"
                className="h-full w-full object-cover duration-700 ease-in-out"
              />
            </div>
          </div>
          <div className="">
            <span className="text-sm font-bold uppercase text-mid-blue">
              Take A Course
            </span>
            <h3 className="my-[19px]">
              Acquire a tech skill to transcend your current earning status
            </h3>
            <p>
              We provide high-quality and affordable technology training to meet
              our students’ needs. Also, we ensure all our students are equipped
              with the necessary tech skills for related work opportunities at
              the end of the program.
            </p>
            <a href="/explore">
              <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-white shadow hover:bg-white hover:text-primary px-8 mt-[36px] h-[48px] w-[156px]">
                Enroll Now
              </Button>
            </a>
          </div>
        </section>
      </section>
      <section className="bg-[#e6f0fe] py-[76px]">
        <section className="mx-auto max-w-[1240px] px-[1rem] xl:px-0 grid grid-cols-1 items-center gap-[28px] gap-y-0 lg:grid-cols-2">
          <div className="flex-1">
            <div className="relative flex flex-col">
              <div className="relative flex items-start">
                <div className="absolute left-4 top-6 h-full w-px bg-secondary"></div>
                <div className="z-10 mr-4 flex flex-col items-center">
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[8px] border-secondary bg-white"></div>
                </div>
                <div className="mb-8">
                  <h6 className="mb-[1rem] md:text-2xl text-primary font-semibold">
                    Apply
                  </h6>
                  <p className="text-mid-grey-III">
                    At Tech Studio we offer a variety of courses designed to
                    build your skills and professionally improve you. All you
                    have to do is apply.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="absolute left-4 top-6 h-full w-px bg-secondary"></div>
                <div className="z-10 mr-4 flex flex-col items-center">
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[8px] border-[#ED9742] bg-white"></div>
                </div>
                <div className="mb-8">
                  <h6 className="mb-[1rem] md:text-2xl text-primary font-semibold">
                    Get Admitted
                  </h6>
                  <p className="text-mid-grey-III">
                    Once we confirm your payment for the program, we reserve
                    your spot. You will go through the onboarding process before
                    the program starts.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="z-10 mr-4 flex flex-col items-center">
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[8px] border-secondary bg-white"></div>
                </div>
                <div className="mb-8">
                  <h6 className="mb-[1rem] md:text-2xl text-primary font-semibold">
                    Start classes
                  </h6>
                  <p className="text-mid-grey-III">
                    Be sure to attend the introductory classes, this will play a
                    huge role in your subsequent learning stages. You&#x27;ll
                    participate in projects, personal tasks, and group works.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="relative group w-[440px] h-[387px] overflow-hidden object-cover transition-opacity duration-500 ease-in-out">
              <Image
                width={440}
                height={387}
                loading="lazy"
                alt="card-image"
                src="/images/apply.gif"
                className="inset-0 group-hover:hidden h-full w-full object-cover duration-700 ease-in-out"
              />
              <Image
                width={440}
                height={387}
                loading="lazy"
                alt="card-image"
                src="/images/join-class.gif"
                className="inset-0 hidden group-hover:block h-full w-full object-cover duration-700 ease-in-out"
              />
            </div>
          </div>
        </section>
      </section>
      <section className="min-h-[2157px] py-[50px] lg:py-[100px]">
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 grid min-h-[83px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-3 lg:text-left">
          <div>
            <span className="mb-[10px] text-sm font-bold uppercase text-secondary">
              What To Expect
            </span>
            <h3 className="text-2xl md:text-4xl text-primary font-semibold">
              Our Facility
            </h3>
          </div>
          <div className="col-span-2">
            <p>
              We have put in place a very comfortable and conducive learning
              facility where you have access to resources. We have also invested
              in unlimited internet to ensure our students don’t have hindrance
              in their learning process.
            </p>
          </div>
        </section>
        <div className="min-h-[874px]">
          <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 relative items-center gap-[28px] gap-y-0 lg:flex lg:py-[100px]">
            <div>
              <div
                className="max-w-[892px] mx-auto relative"
                role="region"
                aria-roledescription="carousel"
              >
                <div className="overflow-hidden">
                  <div className="flex -ml-4">
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                    >
                      <div className="p-1">
                        <div className="border bg-card text-card-foreground shadow-sm rounded-[30px] overflow-hidden">
                          <div className="max-w-[892px] lg:h-[664px] p-0">
                            <Image
                              width={500}
                              height={50}
                              loading="lazy"
                              alt="card-image"
                              src="/images/img-1.webp"
                              className="w-full object-bottom"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                    >
                      <div className="p-1">
                        <div className="border bg-card text-card-foreground shadow-sm rounded-[30px] overflow-hidden">
                          <div className="max-w-[892px] lg:h-[664px] p-0">
                            <Image
                              width={500}
                              height={50}
                              loading="lazy"
                              alt="card-image"
                              src="/images/img-1.webp"
                              className="w-full object-bottom"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  width={525}
                  height={100}
                  loading="lazy"
                  alt="card-image"
                  src="/images/Polygon.webp"
                  className="hidden lg:block absolute top-[10rem] left-[12rem] z-10 scale-[200%]"
                />
              </div>
            </div>
            <div className="right-0 z-10 rounded-lg bg-white px-[28px] py-[47px] shadow-lg lg:absolute lg:max-w-[458px]">
              <div>
                <h6 className="font-bold text-2xl text-primary">
                  A World-Class Learning Facility
                </h6>
                <p className="my-[25px] leading-[26px]">
                  At Tech Studio Academy, we have created a conducive
                  environment for learning, combining exceptional school
                  structures, inspiring classrooms, and dedicated tutors. We
                  understand that the physical surroundings greatly impact the
                  educational experience, and we strive to provide a nurturing
                  setting that fosters academic growth, creativity, and personal
                  development.
                </p>
                <p className="leading-[26px]">
                  Our classrooms are carefully designed to facilitate effective
                  teaching and learning to enable tutors to deliver dynamic and
                  engaging lessons that captivate students attention and spark
                  their curiosity.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0 my-[100px] grid min-h-[593px] grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex-1">
            <div className="relative overflow-hidden object-cover">
              <Image
                width={300}
                height={200}
                loading="lazy"
                alt="card-image"
                src="/images/upcoming.gif"
                className="inset-0 h-full w-full object-cover duration-700 ease-in-out"
              />
            </div>
          </div>
          <div className="flex-1 text-left">
            <section>
              <span className="text-sm font-bold uppercase text-secondary">
                Upcoming Classes
              </span>
              <h3 className="my-[19px] text-[1.7rem] md:text-[2rem] font-semibold text-primary">
                Product Design UI/UX
              </h3>
              <p className="mb-[30px]">
                Learn to design and deliver digital products that serve clients'
                needs and solve users' problems. Understand the fundamental
                techniques and tools of design like problem definition, user
                research, prototyping, testing, and more. Dive into
                human-computer interaction, information architecture, usability,
                and product management. You'll learn to engage in real-life
                project works, collaborate with other members of your team to
                execute the UX design process from start to finish.
              </p>
              <div className="md:max-w-[355px]">
                <div className="flex items-center justify-between gap-[11px]">
                  <span className="flex items-center gap-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Location</span>
                  </span>
                  <span>weekday</span>
                </div>
                <div className="my-[11px] flex items-center justify-between gap-[11px]">
                  <span className="flex items-center gap-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar-days"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 14h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 18h.01"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M16 18h.01"></path>
                    </svg>
                    <span>Start Date</span>
                  </span>
                  <span>Mar 10, 2025</span>
                </div>
                <div className="flex items-center justify-between gap-[11px]">
                  <span className="flex items-center gap-[11px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-hourglass"
                    >
                      <path d="M5 22h14"></path>
                      <path d="M5 2h14"></path>
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                    </svg>
                    <span>Duration</span>
                  </span>
                  <span>24 Weeks</span>
                </div>
              </div>
              <div className="mt-[33px] flex flex-col justify-between gap-[20px] md:flex-row lg:items-center lg:gap-0">
                <a href="/courses/product-design-ui-ux">
                  <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-white shadow hover:bg-white hover:text-primary h-[48px] px-8 w-full lg:max-w-[136px]">
                    Enroll Now
                  </Button>
                </a>
                <span className="flex items-center justify-between gap-5 font-semibold text-primary">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-link underline-offset-4 hover:underline h-[48px] px-8"
                    role="button"
                  >
                    Next &gt;&gt;
                  </button>
                </span>
              </div>
            </section>
          </div>
        </section>
        <section className="mx-auto max-w-[1240px] h-full px-[1rem] xl:px-0">
          <section className="relative flex max-w-[1240px] rounded-[15px] bg-primary p-[40px] text-center text-white lg:max-h-[335px] lg:px-[145px] lg:py-[60px] lg:text-left">
            <div className="mx-auto h-fit max-w-[500px] lg:mx-0">
              <p className="text-md font-light text-white">
                Need help choosing a course?
              </p>
              <h5 className="text-white font-semibold text-[1.5rem] md:text-[1.75rem]">
                Talk To An Expert
              </h5>
              <p className="mb-[32px] mt-[16px] text-sm font-light leading-[22px]">
                Are you indecisive about what course to choose? Would you like
                to talk to a Tech expert over any tech related issue? We have
                professionals in place who are ready and willing to be of help.
              </p>
              <a href="/contact">
                <Button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-white shadow hover:bg-white hover:text-primary h-[48px] px-8 w-[159px] font-semibold"
                  role="button"
                >
                  Get Help
                </Button>
              </a>
            </div>
            <div className="absolute bottom-0 right-[148px] hidden overflow-hidden lg:block">
              <Image
                width={279}
                height={400}
                loading="lazy"
                alt="smiling lady"
                src="/images/smiling-lady.webp"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-2rem] top-[-2rem] hidden overflow-hidden xl:block">
              <Image
                width={116}
                height={118}
                loading="lazy"
                alt="icon"
                src="/images/box-2.webp"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[-2rem] right-[-2rem] hidden overflow-hidden xl:block">
              <Image
                width={90}
                height={72}
                loading="lazy"
                alt="icon"
                src="/images/box-1(transparent).webp"
                className="object-cover"
              />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Why;
