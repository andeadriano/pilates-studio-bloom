import { motion } from "framer-motion";

const SeoLocal = () => {
  return (
    <section className="section-spacing bg-secondary/20">
      <div className="container-narrow">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Localização
          </p>

          <h2
            className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Pilates em Recife – Iputinga
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              O Studio Tridimensional Pilates está localizado na região da
              Iputinga, em Recife, oferecendo atendimento especializado em
              Pilates, fisioterapia, RPG, terapia manual, acupuntura e outras
              modalidades voltadas para saúde, mobilidade e bem-estar.
            </p>

            <p>
              Nosso espaço foi pensado para proporcionar conforto, segurança e
              acompanhamento individualizado, atendendo pessoas que buscam mais
              qualidade de vida, melhora da postura, alívio de dores e
              reabilitação física.
            </p>

            <p>
              Se você procura Pilates em Recife, Pilates na Iputinga ou
              atendimento especializado com foco em evolução individual, o
              Studio Tridimensional Pilates está pronto para receber você.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoLocal;