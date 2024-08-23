import Image from "next/image";
import Navigation from "../components/Navigation";
import SocialIcons from "../components/SocialIcons";

const NAV_ITEMS = ["About", "Careers", "Events", "Products", "Support"];

export default function Home() {
  return (
    <main>
      <Header />
      <InteractiveVRSection />
      <CreationGallery />
      <Footer />
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
          <Navigation items={NAV_ITEMS} />
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

const CreationGallery = () => {
  return (
    <section className="container mx-auto mt-[184px] flex flex-col content-center gap-20">
      <div className="flex w-full items-end justify-between">
        <h2 className="font-josefin mx-auto text-[48px] font-light uppercase leading-[48px] md:mx-0">
          OUR CREATIONS
        </h2>
        <button className="font-regular hover:bg-fem-black border-fem-black bg-fem-white transition-text hidden h-10 w-[157px] border text-[15px] uppercase leading-[25px] tracking-[5px] text-black transition-colors duration-300 hover:text-white md:block">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-4 md:gap-[30px] md:px-0">
        {creations.map((creation, index) => (
          <div key={index} className="group relative cursor-pointer">
            <Image
              src={creation.src}
              alt={creation.alt}
              width={400}
              height={400}
              className="h-[240px] w-full object-cover object-center md:h-auto md:object-fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="bg-fem-white absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-75" />
            <h3
              className={`font-josefin text-fem-white absolute bottom-5 left-5 transition-colors duration-300 md:bottom-8 md:left-10 ${
                creation.specialWidth ? "w-[164px]" : "w-[148px]"
              } group-hover:text-fem-black text-2xl font-light uppercase leading-tight md:text-[32px] md:leading-[32px]`}
            >
              {creation.title}
            </h3>
          </div>
        ))}
      </div>
      <button className="-mt-30 font-regular border-fem-black bg-fem-white hover:bg-fem-black hover:text-fem-white transition-text mx-auto h-10 w-[157px] border text-[15px] uppercase leading-[25px] tracking-[5px] text-black transition-colors duration-300 md:hidden">
        SEE ALL
      </button>
    </section>
  );
};

const creations = [
  {
    src: "/images/desktop/image-deep-earth.jpg",
    alt: "Deep Earth",
    title: "Deep Earth",
  },
  {
    src: "/images/desktop/image-night-arcade.jpg",
    alt: "Night Arcade",
    title: "Night Arcade",
  },
  {
    src: "/images/desktop/image-soccer-team.jpg",
    alt: "Soccer Team VR",
    title: "Soccer Team VR",
  },
  { src: "/images/desktop/image-grid.jpg", alt: "The Grid", title: "The Grid" },
  {
    src: "/images/desktop/image-from-above.jpg",
    alt: "From Up Above VR",
    title: "From Up Above VR",
    specialWidth: true,
  },
  {
    src: "/images/desktop/image-pocket-borealis.jpg",
    alt: "Pocket Borealis",
    title: "Pocket Borealis",
  },
  {
    src: "/images/desktop/image-curiosity.jpg",
    alt: "The Curiosity",
    title: "The Curiosity",
  },
  {
    src: "/images/desktop/image-fisheye.jpg",
    alt: "Make it Fisheye",
    title: "Make it Fisheye",
  },
];

const Footer = () => {
  return (
    <footer className="mt-[184px] h-[160px] bg-black text-white">
      <div className="container mx-auto flex h-full items-center justify-between py-[44px] pb-[32px]">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/logo.svg"
            alt="Loopstudios"
            width={144}
            height={24}
          />
          <Navigation items={NAV_ITEMS} />
        </div>
        <div className="flex flex-col items-end gap-6">
          <SocialIcons />
          <p className="text-sm opacity-50">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
