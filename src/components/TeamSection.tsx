import { motion } from "framer-motion";
import teamImage from "@/assets/entrenamiento.jpg";

const teamMembers = [
  { name: "Elena Campos", role: "Entrenadora Principal", number: "01" },
  { name: "LLopis", role: "Segunda Entrenadora", number: "02" },
  { name: "Carmen López", role: "Asistenta Técnica", number: "03" },
  { name: "Sergio Campos", role: "Preparador físico", number: "04" },
  { name: "Rafael Afán", role: "Secretario ", number: "05" },
  
];

export const TeamSection = () => {
  return (
    <section id="equipo" className="py-24">
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
            Conoce al Equipo
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-4">
            NUESTRO <span className="text-gradient-gold">STAFF</span>
          </h2>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <img
            src={teamImage}
            alt="Equipo Voleibol LA Elite entrenando"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-display text-3xl text-foreground">
              ENTRENAMIENTO DE  LA ÉLITE
            </span>
            <p className="text-gradient-gold mt-2">
              Sesion de entrenamiento 
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border rounded-xl p-6 overflow-hidden"
            >
              {/* Background Number */}
              <span className="absolute -top-4 -right-4 font-display text-8xl text-border/50 group-hover:text-accent/20 transition-colors">
                {member.number}
              </span>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 border-2 border-primary/40 group-hover:border-accent transition-colors">
                  <span className="font-display text-xl text-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
