import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/sectionHeaders";


export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16" id="about">
        <SectionHeader 
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className="text-gary-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Discover the easiest way to satisfy your pizza cravings with OAPP. Customize and order your favorite pizzas with just a few taps on their smartphone or tablet. Users can browse through a variety of pizza options, select toppings, crust types, and sizes, and even add sides and drinks to their order. </p>
          <p>
          OAPP provides secure payment options, and easy checkout. Whether you are ordering for a quick lunch or a family dinner, OAPP simplifies the entire process, making it easy to enjoy delicious pizza delivered right to your door.</p>
          <p>
          Fast, convenient, and delicious—pizza ordering made simple!</p>
          
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeader 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel: +2349012345678">
            +234 901 234 5678
          </a>
        </div>
      </section>
      
    </>
  );
} 
