export default function Choose() {
  const options = [
    {
      id: 1,
      name: "Financiamento facilitado",
      icon: "fa-solid fa-money-bill-wave",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae obcaecati sed rem error, ipsum laboriosam earum,
      dolorum ipsa facere amet maxime exercitationem aspernatur?
      Quidem nulla totam unde ab optio similique.`,
    },
    {
      id: 2,
      name: "Garantia estendida",
      icon: "fa-solid fa-handshake",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate est soluta iste nostrum ipsam harum unde officiis
      dolorem aliquam excepturi obcaecati nemo dolorum doloremque
      aperiam quae, eaque eius. Fuga, nobis.`,
    },
    {
      id: 3,
      name: "Test drive gratuito",
      icon: "fa-solid fa-car",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Pariatur earum alias, omnis deserunt architecto repudiandae
      nisi. Commodi ratione cum nihil corrupti dolores repellendus, a
      dolore praesentium possimus consectetur explicabo veniam..`,
    },
  ];
  return (
    <>
      <article className="flex justify-center mt-20">
        <div className="flex flex-col w-11/12 md:w-9/12 min-[942px]:flex-row gap-10 md:gap-20">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">
              O que podemos lhe oferecer
            </h3>
            <h1 className="text-3xl font-semibold mb-3">
              Melhor custo benefício que vc encontrará
            </h1>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              unde perspiciatis mollitia delectus sequi incidunt magnam,
              laudantium amet dolor praesentium qui doloribus aperiam eaque
              provident, accusantium a vero illum possimus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Velit placeat blanditiis
              non odit excepturi.
            </p>
            <button className="text-white bg-orange-600 font-semibold rounded p-4 mt-6 shadow-lg shadow-orange-700 hover:scale-105">
              Mais detalhes
            </button>
          </div>
          <div className="flex-col flex-1">
            {options.map((option) => (
              <div key={option.id} className="flex gap-6 mb-6">
                <div className="flex items-center">
                  <i className={"text-5xl " + option.icon}></i>
                </div>
                <div className="">
                  <div className="flex gap-3">
                    <h1 className="text-2xl font-bold mb-2">{option.name}</h1>
                  </div>
                  <p className="text-slate-500">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
