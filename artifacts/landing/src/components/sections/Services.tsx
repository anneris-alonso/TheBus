import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description: "We define your core purpose, positioning, and voice to build a resilient brand foundation that resonates with your audience."
  },
  {
    id: "02",
    title: "Digital Design",
    description: "Crafting immersive, high-end interfaces that perfectly balance aesthetics with intuitive user experience."
  },
  {
    id: "03",
    title: "Development",
    description: "Bringing designs to life with robust, scalable engineering and cutting-edge frontend technologies."
  },
  {
    id: "04",
    title: "Motion & 3D",
    description: "Elevating digital experiences with bespoke animations, micro-interactions, and cinematic 3D visuals."
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 border-t border-white/5" id="expertise">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Our Expertise</h2>
          <p className="text-3xl md:text-5xl font-serif font-bold max-w-3xl leading-tight">
            We don't just build websites. We architect digital flagship experiences.
          </p>
        </motion.div>

        <div className="w-full">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white/10 relative group hover-trigger"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-none relative z-10">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xl md:text-2xl text-muted-foreground font-light">{service.id}</span>
                  <h3 className="text-4xl md:text-6xl font-serif font-bold group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h3>
                </div>
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="hidden md:block overflow-hidden"
                    >
                      <p className="w-[300px] text-muted-foreground text-sm leading-relaxed shrink-0">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile description always visible slightly */}
                <p className="md:hidden text-muted-foreground text-sm mt-4">
                  {service.description}
                </p>
              </div>

              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-white/[0.02] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
