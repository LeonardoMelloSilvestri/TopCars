export default function Navbar() {
  return (
    <>
      <header>
        <nav className="p-8 flex flex-wrap justify-between">
          <h1 className="text-2xl">Top Cars</h1>
          <ul className="flex flex-wrap gap-5 child:font-semibold child:cursor-pointer child-hover:text-orange-600 child-hover:scale-110 child-hover:transition-all">
            <li>Home</li>
            <li>Unidades</li>
            <li>Planos</li>
            <li>Sobre</li>
            <li>Dúvidas</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
