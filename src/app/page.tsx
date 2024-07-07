import Image from "next/image";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Pixel from "./components/Pixel";
import Count from "./components/Count";
import Design from "./components/Design";
import Tim from "./components/Tim";
import Caring from "./components/Caring";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import { CarouselDemo } from "./components/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col h-screen  items-center justify-between">
      <CarouselDemo/>

      <Clients/>
      <Community />
      <Pixel/>
      <Count/>
      <Design/>
      <Tim/>
      <Caring/>
      <Demo/>
      <Footer/>
    </main>
  );
}
