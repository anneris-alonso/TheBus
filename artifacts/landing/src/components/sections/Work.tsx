import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lumina Nexus",
    category: "Digital Product · Art Direction",
    image: "/work-1.png",
  },
  {
    id: 2,
    title: "Aura Fin",
    category: "Branding · Web Development",
    image: "/work-2.png",
  },
  {
    id: 3,
    title: "Vogue Frame",
    category: "E-Commerce · Strategy",
    image: "/work-3.png",
  },
  {
    id: 4,
    title: "Zenith Flow",
    category: "Motion · Identity",
    image: "/work-4.png",
  }
];

export default function Work() {
  return (
    <section className="py-32 px-4 md:px-8 container mx-auto" id="work">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <h2 className="text-5xl md:text-8xl font-serif font-bold uppercase leading-none tracking-tighter">
          Selected<br/>Work<span className="text-primary">.</span>
        </h2>
        <button className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors pb-2 border-b border-white/20 hover:border-primary w-fit hover-trigger">
          View all projects
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group block relative cursor-none ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <div className="overflow-hidden bg-white/5 aspect-[4/5] relative w-full mb-6 hover-trigger">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{project.category}</p>
              <h3 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
