"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/",
      id: "home",
    },
    {
      label: "Listing",
      href: "/listing",
      id: "listing",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
      id: "testimonials",
    },
    {
      label: "Blog",
      href: "/blog",
      id: "blog",
    },
    {
      label: "About",
      href: "/about",
      id: "about",
    },
    {
      label: "Contact",
      href: "/contact",
      id: "contact",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      id: "dashboard",
    },
  ];

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <Link href="/">
                  <strong>CarRental</strong>
                </Link>
              </div>
            </div>

            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <a href="#" className=" site-menu-toggle js-menu-toggle py-5 ">
                  <span className="icon-menu h3 text-black"></span>
                </a>
              </span>

              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  {navLinks.map((link) => (
                    <li key={link.id} className="nav-link">
                      <Link
                        href={link.href}
                        className={` ${
                          pathname === link.href
                            ? "text-blue-500 dark:text-blue-500 active"
                            : "hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
