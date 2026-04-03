import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/sections/CustomCursor";

const TRANSFORMATION_STEPS = [
  { 
    id: "step1", 
    title: "The Acquisition", 
    description: "Finding the vessel that would become our home on wheels.", 
    image: "/attached_assets/MOS@COASTALROAD_(1)_-_Copy_1775042600076.png" 
  },
  { 
    id: "step2", 
    title: "Stripping Down", 
    description: "Removing the old to make way for the future of production.", 
    image: "/attached_assets/Screenshot_2026-04-01_at_1.22.08_PM_-_Copy_1775042600075.png" 
  },
  { 
    id: "step3", 
    title: "The Signature Blue", 
    description: "Painting the dream in our iconic LexiconLore turquoise.", 
    image: "/attached_assets/Screenshot_2026-04-01_at_1.21.49_PM_-_Copy_1775042600075.png" 
  },
  { 
    id: "step4", 
    title: "Inside the Hub", 
    description: "Crafting a state-of-the-art studio within the chassis.", 
    image: "/attached_assets/Screenshot_2026-04-01_at_1.22.15_PM_-_Copy_1775042600075.png" 
  }
];

export default function TheBusStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Video Opacity & Scale
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const videoScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Gallery Horizontal Scroll
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO SECTION - THE VIDEO */}
        <section ref={videoSectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ opacity: videoOpacity, scale: videoScale }}
            className="absolute inset-0 z-0"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover grayscale opacity-50 contrast-125"
            >
              <source src="/attached_assets/the_bus_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
          </motion.div>

          <div className="container relative z-10 px-6 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-[12vw] md:text-[10vw] font-serif font-black leading-[0.85] uppercase tracking-tighter mb-8">
                The<br /><span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>Bus</span><br />Story<span className="text-primary">.</span>
              </h1>
              <p className="text-xl md:text-3xl font-light text-muted-foreground max-w-2xl leading-relaxed tracking-tight">
                From a vision on the road to a state-of-the-art mobile production office. This is how we built our sanctuary of creativity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* NARRATIVE BREAK: MANTRAS FROM DECK */}
        <section className="py-32 bg-background relative z-10">
          <div className="container px-6 grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase">The Objective</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight leading-none">
                  Stories Behind <br /> The Skyline
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                In this current uncertain season, founders are still showing up, and businesses are still running. 
                We chose to build here to maintain continuity and tell the stories that matter, wherever they happen.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-xl">
                <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-tight">
                  "A full-service virtual agency on wheels that can travel to any location regardless of how remote."
                </p>
                <div className="w-12 h-1 bg-primary mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECS SECTION: SOLAR, SATELLITE, STUDIO */}
        <section className="py-32 bg-background border-y border-white/5 relative z-10">
          <div className="container px-6">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { title: "Solar-Powered", desc: "Fully off the grid. No venue required.", icon: "☀" },
                { title: "Satellite-Connected", desc: "High-speed connectivity anywhere.", icon: "📡" },
                { title: "Fully Equipped", desc: "Green screen, lights, 4k cameras.", icon: "📸" },
                { title: "Road-Legal", desc: "Cross-border across the Middle East.", icon: "🚛" }
              ].map((spec, i) => (
                <motion.div 
                  key={spec.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-3xl text-primary">{spec.icon}</div>
                  <h4 className="text-xl font-serif font-bold uppercase tracking-tight">{spec.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATION GALLERY - HORIZONTAL SCROLL CONCEPT */}
        <section ref={galleryRef} className="relative py-32 overflow-hidden bg-[#050505]">
          <div className="container px-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tighter">
              The <span className="text-primary italic">Metamorphosis</span>
            </h2>
          </div>

          <div className="flex gap-8 px-6 md:px-20 overflow-x-auto no-scrollbar pb-20">
            {TRANSFORMATION_STEPS.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-none w-[85vw] md:w-[45vw] group"
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="text-2xl font-serif font-bold uppercase text-white">{step.title}</h3>
                  <p className="text-muted-foreground font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ANATOMY OF CREATIVITY - GRID */}
        <section className="py-40 bg-background">
          <div className="container px-6 grid md:grid-cols-2 gap-32 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-30 pointer-events-none" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 aspect-square border border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:bg-primary transition-colors">
                  <span className="text-lg font-serif font-bold group-hover:text-background uppercase leading-none mb-2">Editing</span>
                  <span className="text-xs group-hover:text-background/80 opacity-60 uppercase font-mono tracking-tighter">Suite</span>
                </div>
                <div className="bg-white/5 aspect-square border border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:bg-primary transition-colors">
                  <span className="text-lg font-serif font-bold group-hover:text-background uppercase leading-none mb-2">Hospitality</span>
                  <span className="text-xs group-hover:text-background/80 opacity-60 uppercase font-mono tracking-tighter">Studio</span>
                </div>
                <div className="bg-white/5 aspect-square border border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:bg-primary transition-colors">
                  <span className="text-lg font-serif font-bold group-hover:text-background uppercase leading-none mb-2">4K</span>
                  <span className="text-xs group-hover:text-background/80 opacity-60 uppercase font-mono tracking-tighter">Camera</span>
                </div>
                <div className="bg-white/5 aspect-square border border-white/10 flex flex-col items-center justify-center p-8 text-center group hover:bg-primary transition-colors">
                  <span className="text-lg font-serif font-bold group-hover:text-background uppercase leading-none mb-2">Global</span>
                  <span className="text-xs group-hover:text-background/80 opacity-60 uppercase font-mono tracking-tighter">Reach</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight">
                THE ANATOMY OF <br /> <span className="text-primary italic">CREATIVITY.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 pb-6 border-b border-white/5 items-start">
                  <div className="text-primary pt-1">01</div>
                  <p className="text-muted-foreground">High-end production suite with dual-monitor arrangement and soundproofing for focused editing anywhere.</p>
                </div>
                <div className="flex gap-6 pb-6 border-b border-white/5 items-start">
                  <div className="text-primary pt-1">02</div>
                  <p className="text-muted-foreground">Premium hospitality area designed for crew comfort, including coffee station and relaxing seating during long shoots.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-primary pt-1">03</div>
                  <p className="text-muted-foreground">On-board equipment storage housing 4k cameras, professional microphones, and a full lighting array.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL MANTRA SECTION */}
        <section className="py-48 bg-background relative overflow-hidden">
          <div className="container px-6 text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-white leading-none">GLOBAL AMBITION.</h3>
              <h3 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-transparent leading-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>LOCAL ENTREPRENEURS.</h3>
              <h3 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-primary leading-none">HOMEGROWN IMPACT.</h3>
            </motion.div>
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
