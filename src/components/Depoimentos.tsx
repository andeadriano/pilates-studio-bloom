import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    age: 34,
    text: "Depois de anos sofrendo com dores na lombar, o Pilates mudou minha vida. Em poucos meses, a dor desapareceu e minha postura melhorou muito.",
  },
  {
    name: "Carlos Eduardo",
    age: 52,
    text: "Comecei o Pilates após uma cirurgia no joelho. A recuperação foi muito mais rápida do que eu esperava. O atendimento é excepcional.",
  },
  {
    name: "Ana Beatriz",
    age: 41,
    text: "Além dos benefícios físicos, o Pilates me ajudou muito com a ansiedade. Saio de cada sessão renovada e mais equilibrada.",
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="section-spacing bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Depoimentos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>
            O que dizem nossos alunos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-background p-8 rounded-2xl card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Quote size={24} className="text-primary/30 mb-4" strokeWidth={1.5} />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-heading font-medium text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.age} anos</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
