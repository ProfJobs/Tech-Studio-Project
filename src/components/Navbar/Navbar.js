"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";

const navItems = [
  { href: "/about-us", label: "About Us" },
  { href: "/jobs", label: "Jobs" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (navbarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navbarOpen]);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const openNavbar = () => {
    setNavbarOpen(true);
  };

  return (
    <header className="sticky top-0 left-0 z-40 bg-primary shadow-sm">
      <div className="h-[85px] lg:h-[100px] px-4 md:px-10 container mx-auto flex gap-5 items-center justify-between flex-wrap md:flex-nowrap text-xl">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 mt-4 md:mt-0">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`px-2 lg:px-5 py-2 hover:rounded-lg text-sm font-semibold hover:bg-white hover:text-tertiary text-white ${
                pathname === item.href ? "text-white" : ""
              }`}
            >
              <Link href={item.href} aria-label={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex text-white">
          <Link href="/">
            <Button className="text-lg py-7 px-7">Register</Button>
          </Link>
        </div>

        <button onClick={openNavbar} className="md:hidden text-white">
          <GiHamburgerMenu />
        </button>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="absolute top-0 right-0 isolate flex justify-end md:hidden w-full h-screen">
            <div className="max-w-[350px] w-full h-full bg-white shadow-xl">
              {/* Mobile Close Btn */}
              <button
                onClick={closeNavbar}
                className="py-7 w-full px-7 text-2xl shadow-lg shadow-slate-100"
                aria-label="Close Menu"
              >
                <IoMdClose />
              </button>

              {/* Dark Background */}
              <div
                onClick={closeNavbar}
                className="absolute inset-0 bg-black/70 -z-10"
              />

              {/* Mobile Ul */}
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={closeNavbar}
                    className={`p-7 hover:bg-slate-100 hover:text-tertiary hover:border-l-4 border-tertiary duration-500 transition-all ${
                      pathname === item.href ? "text-primary font-bold" : ""
                    }`}
                  >
                    <Link href={item.href} aria-label={item.label}>
                      {item.label}
                    </Link>
                  </li>
                ))}

                <Link href="/">
                  <li className="text-white mx-7" onClick={closeNavbar}>
                    <Button className="w-full text-lg py-7 px-7">
                      Register
                    </Button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
