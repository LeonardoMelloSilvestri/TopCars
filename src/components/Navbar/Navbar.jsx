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
          <h1 className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Lojas
          </h1>
          <h1 className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Serviços
          </h1>
          <h1 className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Vantagens
          </h1>
          <h1 className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Testemunhas
          </h1>
          <h1 className="hover:scale-110 hover:text-orange-500 transition-all duration-200 cursor-pointer">
            FAQ
          </h1>
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
