import { lazy, Suspense } from "react";

import Loading from "./components/Loading/Loading.jsx";
const Navbar = lazy(() => import("./components/Navbar/Navbar.jsx"));
const Hero = lazy(() => import("./components/Hero/Hero.jsx"));
const Location = lazy(() => import("./components/Location/Location.jsx"));
const Choose = lazy(() => import("./components/Choose/Choose.jsx"));
const Banner = lazy(() => import("./components/Banner/Banner.jsx"));
const Testimonials = lazy(() =>
  import("./components/Testimonials/Testimonials.jsx")
);
const FAQ = lazy(() => import("./components/FAQ/FAQ.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const Services = lazy(() => import("./components/Services/Services.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Location />
        <Services />
        <Choose />
        <Banner />
        <Testimonials />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
