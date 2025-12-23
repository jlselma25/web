import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary/50 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
              <p className="text-gradient-gold">
                El Puerto de Sanata Maria<br />
                {/* Calle del Deporte, 123<br />
                Los Angeles, CA 90001 */}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
              <p className="text-muted-foreground text-sm">--------</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-gradient-gold">cdpvoleibollaelite@gmail.com</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Síguenos</h4>
              <div className="flex gap-3">
                {[Instagram, Facebook].map((Icon, index) => {
                    let href = "";

                    switch (Icon) {
                      case Instagram:
                        href = "https://www.instagram.com/laelite_voleibol?igsh=MTFiMWZxem45YmczZA==";
                        break;
                      case Facebook:
                        href = "https://www.facebook.com/p/Voleibol-La-%C3%89lite-CDP-61584338318308/";
                        break;
                      // case Twitter:
                      //   href = "https://twitter.com/tu_cuenta";
                      //   break;
                      default:
                        href = "#";
                    }

                    return (
                      <motion.a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display text-xl font-bold text-accent-foreground">CDP</span>
              </div>
              <div>
                <span className="font-display text-xl text-foreground">VOLEIBOL</span>
                <span className="font-display text-xl text-accent ml-2">LA ELITE</span>
                 <motion.img
                                src="/assets/logo.png"
                                alt="Únete Ahora"
                                className="inline-block h-16 w-auto  ml-6"
                                whileHover={{ scale: 1.85 }}
                               
                              />
              </div>
            </motion.div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a>               
              <a href="#equipo" className="hover:text-foreground transition-colors">Equipo</a>
              <a href="#galeria" className="hover:text-foreground transition-colors">Galería</a>
              <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2024 CDP Voleibol LA Elite. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
