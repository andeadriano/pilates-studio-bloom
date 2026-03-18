import { motion } from "framer-motion";
import heroPilates from "@/assets/hero-pilates.jpg";

const Hero = () => {
  return (
    <section className="section-spacing pt-12 md:pt-20">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              Studio Tridimensional Pilates
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-foreground mb-6" style={{ letterSpacing: "-0.02em", textWrap: "balance" }}>
              Transforme seu corpo e sua qualidade de vida com Pilates
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Melhore sua postura, alivie dores e conquiste mais bem-estar com acompanhamento individualizado e profissionais qualificados.
            </p>
            <a
              href="https://wa.me/5581986870839?text=Olá! Gostaria de agendar uma aula experimental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              Agendar Aula Experimental
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              <img
                src={heroPilates}
                alt="Mulher praticando Pilates no reformer em estúdio moderno"
                className="w-full aspect-[4/5] object-cover rounded-3xl"
                style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
