import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" }, 
  { name: "Equipo", href: "#equipo" }, 
  { name: "Galeria", href: "#galeria" }, 
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);      // menú mobile
  const [isLogoOpen, setIsLogoOpen] = useState(false); // lightbox logo

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                setIsLogoOpen(true); // abrir logo en grande
              }}
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display text-xl font-bold text-accent-foreground">CDP</span>                
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-2xl text-foreground">VOLEIBOL</span>
                <span className="font-display text-2xl text-accent tbq ml-2">LA ELITE</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Logo como botón adicional (si quieres) */}
              <motion.img
                src="/assets/logo.png"
                alt="Únete Ahora"
                className="inline-block h-16 w-auto cursor-pointer mt-2"
                whileHover={{ scale: 1.85 }}
                onClick={() => setIsLogoOpen(true)}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <motion.img
                  src="/assets/logo.png"
                  alt="Únete Ahora"
                  className="w-full h-28 object-contain cursor-pointer mt-4"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setIsLogoOpen(true);
                    setIsOpen(false);
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Lightbox del logo */}
      <AnimatePresence>
        {isLogoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLogoOpen(false)}
          >
            <motion.img
              src="/assets/logo.png"
              alt="Logo Grande"
              className="max-h-[90%] max-w-[90%] object-contain"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
