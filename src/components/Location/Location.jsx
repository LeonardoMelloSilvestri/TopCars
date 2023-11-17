import logo from "../../assets/img/logo.png";
export default function Location() {
  const places = [
    {
      id: 1,
      city: "São José",
      img: logo,
      address:
        "Facilis iure molestiae ratione nihil, fugiat reprehenderit qui laudantium ut.",
    },
    {
      id: 2,
      city: "Palhoça",
      img: logo,
      address:
        "Ratione, consequatur inventore itaque in velit asperiores iure explicabo cumque ullam at.",
    },
    {
      id: 3,
      city: "Florianópolis",
      img: logo,
      address:
        "Esse accusantium optio excepturi commodi? Doloribus ad voluptatum illum quo praesentium eos.",
    },
    {
      id: 4,
      city: "Joinvile",
      img: logo,
      address:
        "Molestias consequuntur reiciendis inventore, sit facilis libero veniam nulla perferendis est quasi.",
    },
  ];

  return (
    <>
      <article className="flex justify-center mt-20">
        <div className="w-11/12 md:w-9/12 bg-neutral-100 rounded p-10 shadow-inner">
          <h3 className="text-2xl font-semibold">
            Encontre nossa loja mais próxima de você:
          </h3>
          <div className="grid grid-cols-1 min-[920px]:grid-cols-2 min-[1245px]:grid-cols-4  gap-4">
            {places.map((place) => (
              <div
                key={place.id}
                className="col-auto rounded overflow-hidden shadow-lg mt-6"
              >
                <img className="w-full" src={place.img} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{place.city}</div>
                  <p className="text-gray-700 text-base">{place.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
