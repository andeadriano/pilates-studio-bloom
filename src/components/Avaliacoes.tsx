import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aluno do Studio",
    text: "Fiz a aula experimental e a experiência foi maravilhosa! Me senti muito bem acolhido no espaço e os profissionais são extremamente atenciosos.",
  },
  {
    name: "Cliente do Studio",
    text: "O atendimento é excelente, o ambiente é acolhedor e as aulas são conduzidas com muito profissionalismo e atenção.",
  },
  {
    name: "Avaliação no Google",
    text: "Espaço muito bem organizado, atendimento humanizado e acompanhamento de qualidade. Recomendo bastante.",
  },
];

const Avaliacoes = () => {
  return (
    <section id="depoimentos" className="section-spacing">
      <div className="container-narrow">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Avaliações
          </p>

          <h2
            className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            O que nossos alunos dizem
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            ⭐ Excelente experiência e atendimento humanizado no Studio
            Tridimensional Pilates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 p-8 rounded-2xl card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-muted-foreground leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              <p className="text-foreground font-medium">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;