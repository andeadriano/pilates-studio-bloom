import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <motion.div
          className="text-center bg-primary rounded-3xl p-12 md:p-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-primary-foreground mb-4" style={{ letterSpacing: "-0.02em" }}>
            Agende sua primeira aula agora
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
            Dê o primeiro passo para uma vida com menos dor e mais movimento. Sua aula experimental é gratuita.
          </p>
          <a
            href="https://wa.me/5581986870839?text=Olá! Gostaria de agendar uma aula experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          >
            <MessageCircle size={20} strokeWidth={1.5} />
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
