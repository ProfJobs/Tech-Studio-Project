import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="max-w-[1240px] mx-auto py-16 text-white">
        <section className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <div className="flex flex-col">
            <a className="" data-testid="logo" href="/">
              <Logo />
            </a>
            <ul className="flex flex-col text-sm mt-5 gap-1">
              <li className="mb-2">
                <p className="text-light text-xs">
                  1, Ogunlesi Street, Awoyokun Bus Stop,
                  <br />
                  Onipanu Lagos
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/6">
            <p className="text-base font-bold pb-2.5">Courses</p>
            <ul className="flex flex-col gap-3"></ul>
          </div>
          <div className="flex flex-col lg:w-1/6">
            <h5 className="text-base text-white">About Us</h5>
            <ul className="flex flex-col gap-3 mt-3">
              <li>
                <a
                  className="text-white hover:text-mid-danger text-xs"
                  href="/about"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-mid-danger text-xs"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-mid-danger text-xs"
                  href="/jobs"
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/3">
            <div>
              <h5 className="text-base pb-2.5 text-white">
                Subscribe to our newsletter
              </h5>
              <form className="flex h-[48px] max-w-[521px] items-center">
                <div className="space-y-2 h-full">
                  <input
                    className="flex w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 h-full rounded-none rounded-s-[5px] text-black"
                    data-testid="email-input"
                    placeholder="Enter Your Email Address"
                    size="384"
                    id=":Rd3qfsq:-form-item"
                    aria-describedby=":Rd3qfsq:-form-item-description"
                    aria-invalid="false"
                    name="email"
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-muted text-primary-foreground shadow hover:bg-white hover:text-primary px-4 py-2 tsaButton h-[100%] w-[138px] rounded-none rounded-e-[5px] bg-secondary"
                  role="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        <div
          aria-hidden="true"
          className="-mx-1 my-1 h-px bg-white mt-[32px] mb-[30px]"
        ></div>
        <section className="flex flex-col items-center lg:flex-row justify-between pt-4 gap-5">
          <p>© 2025 TechStudio Academy</p>
          <ul className="flex items-center gap-[33px]">
            <p className="font-light">Terms and Policy</p>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/techstudioacdmy"
                className="text-white hover:text-mid-danger"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/company/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://facebook.com/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/techstudioacademy"
                className="text-white hover:text-mid-danger"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
