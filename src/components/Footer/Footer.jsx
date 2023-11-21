import logo from "../../assets/img/logo.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-blue-700 px-12 pt-12 lg:px-20 lg:pt-20 pb-6 mt-28">
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3  min-[1300px]:grid-cols-6 gap-6">
          <div className="col-span-full lg:col-span-2">
            <img className="max-w-xs" src={logo} alt="" />
          </div>
          <div className="text-md  sm:text-lg font-semibold text-white tracking-wider">
            <h1>Weebly Themes</h1>
            <h1>Pre-Sales FAQ</h1>
            <h1>Submit a ticket</h1>
          </div>
          <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
            <h1>Weebly Themes</h1>
            <h1>Pre-Sales FAQ</h1>
            <h1>Submit a ticket</h1>
          </div>
          <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
            <h1>Weebly Themes</h1>
            <h1>Pre-Sales FAQ</h1>
            <h1>Submit a ticket</h1>
          </div>
          <div className="text-md sm:text-lg font-semibold text-white tracking-wider">
            <h1>Weebly Themes</h1>
            <h1>Pre-Sales FAQ</h1>
            <h1>Submit a ticket</h1>
          </div>
        </div>
        <div className="flex justify-center mt-12 text-white font-semibold">
          Handcrafted by Leonardo Mello Silvestri
        </div>
      </footer>
    </>
  );
}
