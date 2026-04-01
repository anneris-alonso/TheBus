import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, label, suffix = "" }: { from: number, to: number, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / (to - from)));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === to) {
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-5xl md:text-7xl font-serif font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-widest text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 container mx-auto" id="agency">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            We are a creative <br/><span className="text-primary italic">force of nature.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Born from a desire to challenge the ordinary, we exist to build brands that leave a mark. 
            We blend strategic rigor with obsessive craftsmanship to deliver digital experiences that transform businesses.
          </p>
          <div className="mt-12">
            <button className="group relative px-8 py-4 border border-white/20 rounded-full overflow-hidden hover-trigger">
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 font-medium tracking-widest uppercase text-sm group-hover:text-background transition-colors duration-300">
                Discover our story
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-12 lg:gap-16 content-center">
          <Counter from={0} to={120} suffix="+" label="Projects Delivered" />
          <Counter from={0} to={15} suffix="+" label="Industry Awards" />
          <Counter from={0} to={8} label="Years Active" />
          <Counter from={0} to={40} suffix="+" label="Global Clients" />
        </div>
      </div>
    </section>
  );
}
