import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/equipo2.jpg";

export const HeroSection = () => {
  const [isTeamOpen, setIsTeamOpen] = useState(false); 
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Voleibol LA Elite en acción"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/30">
            CLUB DE VOLEIBOL PROFESIONAL
          </span> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-4xl leading-none mb-6"
        >
          
          <span className="text-gradient-gold">CDP</span>
          <br />
         
        </motion.h1>

         <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-6xl leading-none mb-6"
        >          
          <span className="text-foreground">VOLEIBOL</span>
          <br />
         
        </motion.h1>


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6"
        >         
         
          <span className="text-gradient-gold">LA ELITE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Formando campeones desde el espíritu del equipo. 
          Entrenamiento profesional, pasión infinita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl" onClick={() => setIsTeamOpen(true)}>
            Conoce al Equipo
          </Button>
          {/* <Button variant="heroOutline" size="xl">
            Conoce al Equipo
          </Button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />

      <AnimatePresence>
  {isTeamOpen && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsTeamOpen(false)} // click en fondo cierra
    >
      <motion.img
        src={heroImage}
        alt="Equipo en acción"
        className="max-h-[90%] max-w-[90%] object-contain"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
      />
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};
