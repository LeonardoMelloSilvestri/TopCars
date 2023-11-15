export default function Location() {
  const places = [
    {
      id: 1,
      city: "Sâo José",
      img: "./TopCars/img/logo.png",
      address:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iure molestiae ratione nihil, fugiat reprehenderit qui laudantium ut.",
    },
    {
      id: 2,
      city: "Palhoça",
      img: "./TopCars/img/logo.png",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequatur inventore itaque in velit asperiores iure explicabo cumque ullam at.",
    },
    {
      id: 3,
      city: "Florianópolis",
      img: "./TopCars/img/logo.png",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium optio excepturi commodi? Doloribus ad voluptatum illum quo praesentium eos.",
    },
    {
      id: 4,
      city: "Joinvile",
      img: "./TopCars/img/logo.png",
      address:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur reiciendis inventore, sit facilis libero veniam nulla perferendis est quasi.",
    },
  ];

  return (
    <>
      <article className="flex justify-center mt-20">
        <div className="w-11/12 bg-neutral-100 rounded p-10 shadow-inner">
          <h3 className="text-2xl font-semibold">
            Encontre nossa loja mais próxima de você:
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {places.map((place) => (
              <div
                key={place.id}
                className="flex-auto sm:w-60 rounded overflow-hidden shadow-lg mt-6"
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
