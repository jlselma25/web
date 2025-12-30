import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/torneoConcejal.jpg",
    alt: "Torneo CDP Voleibol La Elite",
    caption: "Torneo CDP Voleibol La Elite",
  },
  {
    src: "/assets/torneoElite.jpeg",
    alt: "Torneo CDP Voleibol La Elite",
    caption: "Torneo CDP Voleibol La Elite",
  },
  {
    src: "/assets/mesaTorneo.jpg",
    alt: "Torneo CDP Voleibol La Elite",
    caption: "Torneo CDP Voleibol La Elite",
  },
  {
    src: "/assets/imagen1.png",
    alt: "Partido de voleibol",
    caption: "Partido equipo de CV Jerez",
  },
  {
    src: "/assets/image2.png",
    alt: "Entrenamiento del equipo",
    caption: "Campeón campeonato Jerez ",
  },
  {
    src: "/assets/imagen3.jpeg",
    alt: "Celebración del equipo",
    caption: "Presentacion torneo",
  },
  {
    src: "/assets/image4.png",
    alt: "Jugadores en acción",
    caption: "Sesion de entreno dura",
  },
  {
    src: "/assets/equipo3.jpg",
    alt: "Equipo juvenil",
    caption: "Categoría juvenil",
  },
  {
    src: "/assets/chipiona.jpg",
    alt: "Instalaciones deportivas",
    caption: "Campeonato CV Chipiona",
  },
  {
    src: "/assets/concejal.jpg",
    alt: "Instalaciones deportivas",
    caption: "Concejal deportes ",
  },
  {
    src: "/assets/donuts.jpg",
    alt: "Instalaciones deportivas",
    caption: "Vivan los donuts ",
  },
  {
    src: "/assets/concejal.jpg",
    alt: "Instalaciones deportivas",
    caption: "Concejal deportes ",
  },
  {
    src: "/assets/sanlucar.jpg",
    alt: "Instalaciones deportivas",
    caption: "Entrenamiento Adesa 80",
  },
  {
    src: "/assets/sanlucar2.jpg",
    alt: "Instalaciones deportivas",
    caption: "Entrenamiento profesional con Raquel",
  },
  
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Momentos Inolvidables
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-4">
            NUESTRA <span className="text-gradient-gold">GALERÍA</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-foreground font-display text-xl">{image.caption}</p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full bg-background/95 backdrop-blur-xl border-border p-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 text-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 text-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Caption */}
              <div className="p-6 text-center">
                <p className="text-foreground font-display text-2xl">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
