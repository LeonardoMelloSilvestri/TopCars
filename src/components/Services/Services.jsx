export default function Services() {
  const services = [
    {
      id: 1,
      name: "Troca de Óleo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia dui vitae justo fringilla.",
      icon: "fa-solid fa-bottle-droplet",
    },
    {
      id: 2,
      name: "Ajuste de Frenagem",
      description:
        "Fusce sed risus est. Integer at egestas neque. Aliquam eu tortor laoreet, tincidunt risus.",
      icon: "fa-brands fa-empire",
    },
    {
      id: 3,
      name: "Pintura Automotivca",
      description:
        "Ut in libero sit amet ipsum fermentum vulputate id vitae nibh. Praesent faucibus interdum tempus.",
      icon: "fa-solid fa-brush",
    },
    {
      id: 4,
      name: "Lavação Completa",
      description:
        " Aenean nulla risus, laoreet in ante eu, venenatis sagittis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "fa-solid fa-shower",
    },
    {
      id: 5,
      name: "Som Automotivo",
      description: "Duis in porttitor lacus. Ut elementum posuere rhoncus.",
      icon: "fa-solid fa-volume-high",
    },
    {
      id: 6,
      name: "Consertos em Geral",
      description:
        "Donec fringilla neque nec pretium blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      icon: "fa-solid fa-car-burst",
    },
  ];
  return (
    <>
      <article id="services" className="flex flex-col items-center mt-28">
        <div className="w-11/12 lg:w-6/12 text-center ">
          <h2 className="text-2xl font-semibold mb-2">
            Somos muito mais que uma concessionária
          </h2>
          <h1 className="text-4xl font-bold mb-6 text-orange-600">
            Nossos Serviços
          </h1>
          <h2 className="text-md text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facere,
            itaque repellat doloremque exercitationem minima beatae quibusdam
            obcaecati. Suscipit quo veniam quaerat voluptates iure recusandae
            earum illum consequuntur ipsam ea.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center md:place-items-baseline w-11/12 lg:w-9/12 mt-10 lg:mt-16 gap-12">
          {services.map((service) => (
            <div key={service.id} className="grid gap-2 text-center">
              <i className={`text-7xl lg:text-8xl ${service.icon}`}></i>
              <h1 className="text-2xl font-semibold">{service.name}</h1>
              <p className="text-slate-500">{service.description}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
