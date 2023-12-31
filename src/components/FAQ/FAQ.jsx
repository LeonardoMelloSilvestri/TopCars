export default function FAQ() {
  const tabs = [
    {
      id: 1,
      title: "Pergunta 1?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, provident! Delectus suscipit, dolores aliquam quod nisi deserunt qui doloremque ab reprehenderit repellendus ad totam fugit corrupti aliquid! Libero, maiores molestiae.",
    },
    {
      id: 2,
      title: "Pergunta 2?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque exercitationem nobis beatae nemo doloremque modi soluta. Autem voluptatum, nesciunt unde, necessitatibus ut eaque harum esse debitis, voluptatem commodi a?",
    },
    {
      id: 3,
      title: "Pergunta 3?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur quod perferendis in et natus libero quasi assumenda obcaecati alias rem impedit omnis error deserunt, nulla est unde numquam tempore.",
    },
    {
      id: 4,
      title: "Pergunta 4?",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, dolorum non? Sed incidunt quod accusamus, architecto rem non nisi reiciendis blanditiis aperiam sequi ipsum quia explicabo aliquid nihil culpa quis!",
    },
  ];
  return (
    <article id="FAQ" className="flex flex-col items-center mt-28">
      <div className="w-11/12 lg:w-6/12">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-2xl font-semibold mb-2 ">FAQ</h2>
          <h1 className="text-4xl font-bold mb-6 text-orange-600">
            Perguntas comuns
          </h1>
          <h2 className="text-md text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus explicabo placeat a neque aliquam! Nobis ad sed quod
            maxime? Obcaecati maiores totam placeat delectus similique
            blanditiis nihil repellat commodi.
          </h2>
        </div>
      </div>
      <div className=" w-11/12 lg:w-9/12 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {tabs.map((tab) => (
          <div key={tab.id} className="bg-zinc-100 p-4 rounded shadow-lg">
            <h1 className="text-blue-600 text-xl mb-2 font-semibold">
              Q: {tab.title}
            </h1>
            <h2 className="text-lg">R: {tab.content}</h2>
          </div>
        ))}
      </div>
    </article>
  );
}
