import { motion } from "framer-motion";
import { MapPin, Instagram, MessageCircle, Mail } from "lucide-react";

const Contato = () => {
  return (
    <section id="contato" className="section-spacing bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Contato</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>
            Venha nos conhecer
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <motion.a
            href="https://wa.me/5581986870839"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <MessageCircle size={24} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-heading font-medium text-foreground mb-1">WhatsApp</p>
              <p className="text-muted-foreground text-sm">(81) 98687-0839</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:atendimento@tridimissionalpilates.com.br"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow transition-all duration-200 hover:card-shadow-hover hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-heading font-medium text-foreground mb-1">E-mail</p>
              <p className="text-muted-foreground text-xs break-all">atendimento@tridimensionalpilates.com.br</p>
            </div>
          </motion.a>


          <motion.div
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-heading font-medium text-foreground mb-1">Endereço</p>
              <p className="text-muted-foreground text-sm">Rua Manoel Estevão da Costa, 298<br />Loja 02, Iputinga<br />Recife – PE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
