import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function openNav() {
    setNav(!nav);
  }
  return (
    <>
      <nav className="z-20 relative flex p-6">
        <div>
          <h1 className="text-3xl font-semibold text-orange-400 drop-shadow-lg">
            TopCars
          </h1>
        </div>
        <div className="max-[900px]:hidden flex ml-auto gap-8 text-lg text-white drop-shadow-lg font-semibold">
          <a
            href="#location"
            className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            Lojas
          </a>
          <a
            href="#services"
            className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            Serviços
          </a>
          <a
            href="#choose"
            className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            Vantagens
          </a>
          <a
            href="#testimonials"
            className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            Testemunhas
          </a>
          <a
            href="#FAQ"
            className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer"
          >
            FAQ
          </a>
        </div>
        <div className="min-[900px]:hidden flex ml-auto">
          <i
            onClick={() => openNav()}
            className={`${
              nav == false ? "fa-solid fa-bars" : "fa-solid fa-x"
            } text-2xl text-orange-400 cursor-pointer hover:scale-125 transition-all`}
          ></i>
        </div>
      </nav>

      <div
        className={`${
          nav == false ? "hidden" : ""
        } mobile-menu flex flex-col gap-8 items-center justify-center z-30 absolute bg-orange-500 h-screen w-screen top-0 text-3xl text-white drop-shadow-lg`}
      >
        <a onClick={() => openNav()} href="#location">
          Lojas
        </a>
        <a onClick={() => openNav()} href="#services">
          Serviços
        </a>
        <a onClick={() => openNav()} href="#choose">
          Vantagens
        </a>
        <a onClick={() => openNav()} href="#testimonials">
          Testemunhas
        </a>
        <a onClick={() => openNav()} href="#FAQ">
          FAQ
        </a>
        <i
          onClick={() => openNav()}
          className="fa-solid fa-x absolute top-0 right-0 p-6"
        ></i>
      </div>
    </>
  );
}
