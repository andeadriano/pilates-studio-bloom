import { motion } from "framer-motion";
import { Activity, Bone, Dumbbell, Brain } from "lucide-react";

const benefits = [
  { icon: Bone, title: "Redução de dores", description: "Alivia dores crônicas na coluna, articulações e musculatura com exercícios precisos e controlados." },
  { icon: Activity, title: "Melhora da postura", description: "Corrige desequilíbrios posturais, fortalecendo a musculatura profunda que sustenta a coluna." },
  { icon: Dumbbell, title: "Fortalecimento muscular", description: "Desenvolve força funcional e resistência sem impacto, respeitando os limites do seu corpo." },
  { icon: Brain, title: "Bem-estar mental", description: "A conexão entre corpo e mente promove relaxamento, foco e redução do estresse no dia a dia." },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="section-spacing bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Benefícios</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>
            Por que escolher o Pilates?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="text-center p-8 rounded-2xl bg-background card-shadow transition-all duration-200 hover:card-shadow-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl mb-6 flex items-center justify-center text-primary mx-auto">
                <b.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-medium text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
