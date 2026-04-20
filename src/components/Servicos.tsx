import { motion } from "framer-motion";
import {
  Activity,
  Home,
  HeartPulse,
  Hand,
  Dumbbell,
  ShieldPlus,
  Bone,
  HandHeart,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Acupuntura",
    description:
      "Técnica terapêutica que auxilia no alívio de dores, equilíbrio do organismo e promoção do bem-estar.",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliar",
    description:
      "Cuidado personalizado no conforto da sua casa, com foco em reabilitação, mobilidade e qualidade de vida.",
  },
  {
    icon: HeartPulse,
    title: "Fisioterapia",
    description:
      "Tratamentos voltados para prevenção, reabilitação e recuperação funcional, com acompanhamento individualizado.",
  },
  {
    icon: Hand,
    title: "Liberação Miofascial",
    description:
      "Técnica manual para aliviar tensões musculares, melhorar a mobilidade e reduzir dores no corpo.",
  },
  {
    icon: Dumbbell,
    title: "Pilates",
    description:
      "Exercícios que trabalham postura, força, flexibilidade, equilíbrio e consciência corporal.",
  },
  {
    icon: ShieldPlus,
    title: "Pilates Especial",
    description:
      "Atendimento adaptado para necessidades específicas, com foco em segurança, reabilitação e evolução individual.",
  },
  {
    icon: Bone,
    title: "RPG",
    description:
      "Reeducação Postural Global com foco no alinhamento corporal, correção postural e alívio de dores.",
  },
  {
    icon: HandHeart,
    title: "Terapia Manual",
    description:
      "Conjunto de técnicas aplicadas manualmente para tratar dores, disfunções musculares e limitações de movimento.",
  },
  {
    icon: Wind,
    title: "Ventosaterapia",
    description:
      "Técnica complementar que auxilia na circulação, relaxamento muscular e alívio de tensões.",
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
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Serviços
          </p>
          <h2
            className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            Encontre a modalidade ideal para você
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-secondary/50 p-8 rounded-2xl transition-all duration-200 hover:bg-secondary card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center text-primary">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;