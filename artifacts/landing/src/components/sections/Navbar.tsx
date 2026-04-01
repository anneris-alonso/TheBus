import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter uppercase z-10 hover-trigger">
          Noomo<span className="text-primary">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Work", "Expertise", "Agency", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors hover-trigger">
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 hover-trigger">
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
          <span className="w-6 h-[2px] bg-foreground block transition-all" />
        </button>
      </div>
    </motion.header>
  );
}
