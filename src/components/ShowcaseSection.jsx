import { motion } from "framer-motion";

function ShowcaseSection() {
  const projectsData = [
    {
      title: "FASHION STORE",
      description:
        "Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week",
      imageUrl: "/Showcase/S1.png",
    },
    {
      title: "HOME FURNITURE",
      description:
        "Provides superior quality furniture and mattresses at a price that customers can easily afford",
      imageUrl: "Showcase/S2.png",
    },
    {
      title: "SUPER GADGET STORE",
      description:
        "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys.",
      imageUrl: "Showcase/S3.jpg",
    },
  ];

  return (
    <div
      id="projects"
      className="relative z-40 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/Showcase/bg.png')",
        backgroundPosition: "left center",
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="w-full my-12 px-4">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-5">
            {[...projectsData].map((project, id) => (
              <motion.div
                key={id}
                className="w-80 h-96 flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg group relative cursor-pointer hover:scale-105"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: id * 0.4,
                  duration: 1,
                }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
