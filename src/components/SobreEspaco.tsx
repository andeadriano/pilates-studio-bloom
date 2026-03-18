import { motion } from "framer-motion";
import { User, Award, Move3D } from "lucide-react";

const features = [
  { icon: User, title: "Atendimento personalizado", description: "Cada sessão é adaptada às suas necessidades específicas, garantindo resultados eficazes e seguros." },
  { icon: Award, title: "Profissionais qualificados", description: "Nossa equipe possui formação especializada e experiência comprovada em reabilitação e condicionamento." },
  { icon: Move3D, title: "Movimento em 3 dimensões", description: "Trabalhamos o corpo de forma tridimensional, promovendo equilíbrio muscular e funcionalidade completa." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const SobreEspaco = () => {
  return (
    <section id="sobre" className="section-spacing">
      <div className="container-narrow">
        <motion.div className="max-w-2xl mb-16" {...fadeUp}>
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Sobre o Espaço</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6" style={{ letterSpacing: "-0.02em" }}>
            Onde o movimento encontra o equilíbrio
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            O Pilates fortalece, alonga e melhora a postura, contribuindo para o alívio de dores e mais qualidade de vida. Nosso diferencial é o atendimento individualizado e o trabalho do movimento em três dimensões.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group bg-secondary/50 p-8 rounded-2xl transition-all duration-200 hover:bg-secondary card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center text-primary">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-medium text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreEspaco;
