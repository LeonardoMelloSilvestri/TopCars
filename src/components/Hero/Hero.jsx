export default function Hero() {
  return (
    <>
      <article className="flex flex-wrap justify-center place-items-center mt-2 min-[1231px]:mt-16 px-10">
        <div className="max-w-full min-[1231px]:w-1/3">
          <h4 className="font-bold text-2xl">
            A maior rede de Santa Catarina!
          </h4>
          <h1 className="mt-3 font-bold text-5xl">
            Carros luxuosos por um preço justo
          </h1>
          <p className="mt-6">
            Grande variedade de carros importados, nacionais, novos e seminovos,
            tudo em um só lugar.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 mt-6 uppercase rounded">
            Conheça
          </button>
        </div>
        <div>
          <img
            className=" w-full md:max-w-3xl"
            src="./TopCars/img/hero.png"
            alt=""
          />
        </div>
      </article>
    </>
  );
}
