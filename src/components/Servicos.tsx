import { motion } from "framer-motion";
import { Accessibility, Cog, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Yoga,
    title: "Pilates Solo",
    description: "Exercícios no solo com foco em consciência corporal, flexibilidade e fortalecimento do core. Ideal para iniciantes e praticantes avançados.",
  },
  {
    icon: Cog,
    title: "Pilates com Aparelhos",
    description: "Trabalho focado em resistência e precisão utilizando Reformer, Cadillac e Chair. Maior variedade de exercícios e intensidades.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Individual",
    description: "Sessões exclusivas com atenção total às suas necessidades. Ideal para reabilitação, gestantes e objetivos específicos.",
  },
];

const Servicos = () => {
  return (
    <section id="servicos" className="section-spacing">
      <div className="container-narrow">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Serviços</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>
            Encontre a modalidade ideal para você
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-secondary/50 p-8 rounded-2xl transition-all duration-200 hover:bg-secondary card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center text-primary">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
