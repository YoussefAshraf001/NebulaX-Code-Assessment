import Marquee from "react-fast-marquee";

function ShowcaseSection() {
  const projectsData = [
    {
      title: "FASHION STORE",
      description:
        "Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week",
      imageUrl: "../public/Showcase/S1.png",
    },
    {
      title: "HOME FURNITURE",
      description:
        "Provides superior quality furniture and mattresses at a price that customers can easily afford",
      imageUrl: "../public/Showcase/S2.png",
    },
    {
      title: "SUPER GADGET STORE",
      description:
        "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys.",
      imageUrl: "../public/Showcase/S3.jpg",
    },
    {
      title: "BOOKSTORE",
      description:
        "Browse a wide range of books in various genres, from fiction to non-fiction, self-help, and more.",
      imageUrl: "../public/Showcase/S4.png",
    },
    {
      title: "MUSIC INSTRUMENTS",
      description:
        "Shop a variety of musical instruments, from guitars to drums and synthesizers, for every skill level.",
      imageUrl: "../public/Showcase/S5.png",
    },
    {
      title: "GOURMET KITCHEN",
      description:
        "Premium kitchenware and accessories to help you prepare meals like a professional chef.",
      imageUrl: "../public/Showcase/S6.png",
    },
    {
      title: "PET STORE",
      description:
        "From pet food to accessories, we have everything you need to take care of your furry friends.",
      imageUrl: "../public/Showcase/S7.png",
    },
    {
      title: "ELECTRONICS HUB",
      description:
        "Latest electronics including smartphones, laptops, accessories, and home electronics.",
      imageUrl: "../public/Showcase/S8.png",
    },
  ];

  return (
    <div id="projects" className="relative z-40">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]"></div>

      <div className="flex justify-center my-5"></div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {[...projectsData].map((project, id) => (
            <div
              className="w-80 h-96 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative cursor-pointer hover:scale-105"
              key={id}
            >
              <div className="bg-white w-full h-full rounded-lg border shadow-none shadow-gray-50 transition-all duration-500">
                <div className="h-48 w-full p-3">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <p className="text-black text-sm sm:text-lg text-left font-semibold">
                    {project.title}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm text-left">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default ShowcaseSection;
