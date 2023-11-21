import hero from "../../assets/img/hero.png";
import heroBackground from "../../assets/img/hero-background.png";

export default function Hero() {
  return (
    <>
      <article className="flex flex-wrap justify-center mt-2 min-[1231px]:mt-16 px-4 lg:px-10">
        <img
          className="h-screen w-screen bg-cover absolute z-10 top-0"
          src={heroBackground}
          alt=""
        />
        <div className="relative z-20 max-w-full min-[1231px]:w-1/3 text-white drop-shadow-lg">
          <h4 className="font-bold text-xl sm:text-2xl">
            A maior rede de Santa Catarina!
          </h4>
          <h1 className="mt-3 font-bold text-4xl sm:text-5xl">
            Carros luxuosos por um preço justo
          </h1>
          <p className="text-md sm:text-lg mt-6">
            Grande variedade de carros importados, nacionais, novos e seminovos,
            tudo em um só lugar.
          </p>
        </div>
        <div className="relative z-20">
          <img className="w-full md:max-w-3xl mt-8 lg:mt-0" src={hero} alt="" />
        </div>
      </article>
    </>
  );
}
