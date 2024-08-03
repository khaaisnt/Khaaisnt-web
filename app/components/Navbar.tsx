import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css";

interface NavbarProps {
  title: string;
  href: string;
}

const links: NavbarProps[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  {
    title: "Resume 📄",
    href: "https://drive.google.com/file/d/1HOMGfp0K8fCctHRweMGdXtCqstm3WdVQ/view?usp=sharing",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="fixed z-20 px-[20px] lg:px-[130px] py-[25px] w-full bg-primary-black"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="flex justify-between items-center">
          <div className="text-secondary-gray font-bold text-[25px]">
            Khaaisnt.
          </div>
          <div className="block lg:hidden">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block relative z-30 ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          <div className="font-medium hidden lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mx-[12px] text-[16px] text-secondary-gray hover:text-white duration-200"
                target={link.href.startsWith("http") ? "_blank" : "_self"}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 w-full bg-primary-black transition-transform duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col items-center justify-center py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[16px] text-secondary-gray font-medium hover:text-white duration-200 mb-4"
                  onClick={toggleMenu}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <style jsx>{`
        .hamburger-line {
          display: block;
          width: 25px;
          height: 2px;
          margin: 5px auto;
          background-color: #fff;
          transition: all 0.3s ease-in-out;
        }
        #hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        #hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        #hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default Navbar;
