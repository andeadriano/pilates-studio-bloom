import { motion } from "framer-motion";
import { MapPin, Instagram, MessageCircle, Mail } from "lucide-react";

const Contato = () => {
  return (
    <section id="contato" className="section-spacing bg-secondary/30">
      <div className="container-narrow">

        {/* TITULO */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Contato
          </p>

          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Venha nos conhecer
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {/* WHATSAPP 1 */}
          <motion.a
            href="https://wa.me/5581986870839"
            target="_blank"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <MessageCircle size={24} />
            </div>

            <div className="text-center">
              <p className="font-heading font-medium mb-1">WhatsApp</p>
              <p className="text-muted-foreground text-sm">(81) 98687-0839</p>
            </div>
          </motion.a>

          {/* WHATSAPP 2 */}
          <motion.a
            href="https://wa.me/5581991766388"
            target="_blank"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <MessageCircle size={24} />
            </div>

            <div className="text-center">
              <p className="font-heading font-medium mb-1">WhatsApp</p>
              <p className="text-muted-foreground text-sm">(81) 99176-6388</p>
            </div>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://instagram.com/tridimensionalpilates"
            target="_blank"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Instagram size={24} />
            </div>

            <div className="text-center">
              <p className="font-heading font-medium mb-1">Instagram</p>
              <p className="text-muted-foreground text-sm">
                @tridimensionalpilates
              </p>
            </div>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href="mailto:atendimento@tridimensionalpilates.com.br"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Mail size={24} />
            </div>

            <div className="text-center">
              <p className="font-heading font-medium mb-1">E-mail</p>
              <p className="text-muted-foreground text-xs break-all">
                atendimento@tridimensionalpilates.com.br
              </p>
            </div>
          </motion.a>

        </div>

        {/* ENDEREÇO */}
        <motion.div
          className="mt-8 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background card-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <MapPin size={24} />
            </div>

            <div className="text-center">
              <p className="font-heading font-medium mb-1">Endereço</p>
              <p className="text-muted-foreground text-sm">
                Rua Manoel Estevão da Costa, 298
                <br />
                Loja 02 — Iputinga
                <br />
                Recife — PE
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contato;