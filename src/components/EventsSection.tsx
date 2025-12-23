import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";

const events = [
  {
    title: "I Torneo Benefico Sergio Campos",
    date: "28 Diciembre 2025",
    time: "9:00 - 15:00",
    location: "Pabellón deportivo Angelita Alta (El Puerto de Santa María)",
    category: "",    
    image: "/assets/torneo.jpeg",
    prizesImage: "/assets/premios.jpeg"
  }
  // {
  //   title: "Clinic de Fundamentos",
  //   date: "02 Febrero 2025",
  //   time: "10:00 AM",
  //   location: "Instalaciones LA Elite",
  //   category: "Capacitación",
  //   spots: 30,
  //   image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=400&fit=crop",
  // },
  // {
  //   title: "Copa LA Elite 2025",
  //   date: "15 Marzo 2025",
  //   time: "8:00 AM",
  //   location: "Estadio Municipal",
  //   category: "Competencia",
  //   spots: 24,
  //   image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
  // },
];

export const EventsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
 
  return (
    <section id="eventos" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Calendario
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-4">
            PRÓXIMOS
            <br />
            <span className="text-gradient-gold">EVENTOS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Event Image */}
              
              <div className="relative h-78 overflow-hidden">
                
                <img
                  src={event.image}
                  alt={event.title}
                  onClick={() => setSelectedImage(event.image)}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-accent text-sm font-semibold uppercase tracking-wider bg-card/80 px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>
              
              <div className="p-6" >
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>              
    
                
                <div className="space-y-3">
                  <div className= "flex items-center justify-between gap-4 text-muted-foreground">
                    <div className="flex items-center gap-3 ">
                     <Calendar className="w-5 h-5 text-accent" />
                      <span className="whitespace-nowrap">{event.date}</span>
                    </div>
                    <button
                      onClick={() => setSelectedImage(event.prizesImage)}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap hover:scale-105 transition-transform animate-pulse"                      
                      >
                      Ver premios sorteo
                    </button>

                  </div>
                  



                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{event.location}</span>
                  </div>
                 
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Evento"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale:1.1}}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}

    </section>
  );
};
