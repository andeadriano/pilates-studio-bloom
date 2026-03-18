import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5581986870839?text=Olá! Gostaria de saber mais sobre as aulas de Pilates."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", damping: 15, delay: 1 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={26} className="text-primary-foreground" strokeWidth={1.5} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
