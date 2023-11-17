export default function Testimonials() {
  return (
    <>
      <article className="flex flex-col items-center my-20">
        <div className="w-11/12 lg:w-6/12 text-center ">
          <h2 className="text-2xl font-semibold mb-2">
            Veja o que nossos clientes tem a dizer
          </h2>
          <h1 className="text-4xl font-bold mb-6">Melhores Avaliações</h1>
          <h2 className="text-md text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            vitae illum magnam consequuntur facere omnis ab laborum quo odit
            debitis deserunt, repellat quae, numquam totam id officiis. Placeat,
            esse pariatur!
          </h2>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center w-11/12 lg:w-9/12 mt-10 lg:mt-16 gap-8">
          <div className="bg-zinc-100 p-10 shadow-lg">
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              accusamus dolore incidunt, nemo, iure minus quaerat doloribus quae
              facilis, vitae voluptatem ex animi odit ipsum culpa asperiores
              quas cumque illum.
            </h1>
            <div className="flex flex-wrap gap-6 mt-8">
              <i className="fa-solid fa-user text-7xl text-orange-600"></i>
              <div className="flex flex-col justify-center">
                <h1 className="text-lg font-bold">Leonardo Mello</h1>
                <h2>Palhoça, SC</h2>
              </div>
              <div className="flex items-center ml-auto">
                <i className="fa-solid fa-percent text-6xl text-orange-600"></i>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 p-10 shadow-lg">
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              aut a saepe quos, exercitationem esse autem. Odit tenetur
              molestiae laboriosam, culpa minus, repudiandae itaque illum
              placeat, quia perferendis illo accusamus.
            </h1>
            <div className="flex flex-wrap gap-6 mt-8">
              <i className="fa-solid fa-user text-7xl text-orange-600"></i>
              <div className="flex flex-col justify-center">
                <h1 className="text-lg font-bold">Leonardo Mello</h1>
                <h2>Palhoça, SC</h2>
              </div>
              <div className="flex items-center ml-auto">
                <i className="fa-solid fa-percent text-6xl text-orange-600"></i>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
