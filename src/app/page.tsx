import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <InteractiveVRSection />

      <section>
        <h2>OUR CREATIONS</h2>
        {/* Add a list or grid of creations */}
      </section>
      <footer>
        <h2>LOOPSTUDIOS</h2>
        {/* Add footer content */}
      </footer>
    </main>
  );
}

const Header = () => {
  return (
    <header className="relative flex aspect-[1440/650] flex-col justify-between pt-16">
      <div className="absolute inset-0 bg-[url('/images/desktop/image-hero.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-40"></div>
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-between">
        <nav className="flex items-center justify-between">
          <Image
            src="/images/logo.svg"
            alt="Loopstudios"
            width={192}
            height={32}
          />
          <ul className="font-regular flex gap-8 text-[15px] leading-[25px] text-white">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <h1 className="font-josefin mb-[10%] mt-auto w-[650px] border-2 border-white p-10 pb-8 text-[70px] font-light leading-[70px] text-white">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </header>
  );
};

const InteractiveVRSection = () => {
  return (
    <div className="container mx-auto">
      <section className="relative mt-40">
        <Image
          src="/images/desktop/image-interactive.jpg"
          alt="Interactive"
          width={731}
          height={500}
        />
        <div className="absolute bottom-0 right-0 flex h-[317px] w-[541px] bg-white">
          <div className="ml-24 mt-24 flex h-full w-full flex-col gap-6">
            <h2 className="font-josefin text-[48px] font-light uppercase leading-[48px]">
              THE LEADER IN INTERACTIVE VR
            </h2>
            <p className="font-regular font-alata text-[15px] leading-[25px] opacity-50">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Careers Events Products Support Immersive experiences that deliver
// The leader in interactive VR Founded in 2011, Loopstudios has been
// producing world-class virtual reality projects for some of the best
// companies around the globe. Our award-winning creations have transformed
// businesses through digital experiences that bind to their brand. Our
// creations See all Deep earth Night arcade Soccer team VR The grid From up
// above VR Pocket borealis The curiosity Make it fisheye About Careers
// Events Products Support © 2021 Loopstudios. All rights reserved.
