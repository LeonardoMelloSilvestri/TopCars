import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Location from "./components/Location/Location";
import Choose from "./components/Choose/Choose";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Location />
      <Services />
      <Choose />
      <Banner />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
