import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-background pt-32 pb-8 overflow-hidden border-t border-white/10" id="contact">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] font-serif font-bold uppercase leading-[0.85] tracking-tighter mb-8"
          >
            Let's Talk
            <br />
            <span className="text-primary italic">Ideas.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="mailto:hello@agency.com" 
              className="inline-block bg-foreground text-background px-12 py-6 rounded-full font-bold text-lg md:text-xl uppercase tracking-widest hover-trigger hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif font-bold text-2xl mb-4 tracking-tight">Noomo<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-xs">
              A digital creative agency crafting uncompromising web experiences for the bold.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium tracking-widest uppercase mb-6 text-xs text-muted-foreground">Socials</h4>
            <ul className="flex flex-col gap-3">
              {['Instagram', 'Twitter / X', 'LinkedIn', 'Awwwards'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors hover-trigger">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium tracking-widest uppercase mb-6 text-xs text-muted-foreground">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:hello@noomo.com" className="hover:text-primary transition-colors hover-trigger">hello@noomo.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary transition-colors hover-trigger">+1 (234) 567-890</a></li>
              <li className="mt-4 text-muted-foreground">
                123 Creative Studio<br/>
                Design District, NY 10012
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Noomo Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors hover-trigger">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors hover-trigger">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Abstract background footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-full max-w-3xl bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </footer>
  );
}
