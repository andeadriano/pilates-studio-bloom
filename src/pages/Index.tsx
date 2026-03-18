import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreEspaco from "@/components/SobreEspaco";
import Beneficios from "@/components/Beneficios";
import Servicos from "@/components/Servicos";
import Depoimentos from "@/components/Depoimentos";
import CTASection from "@/components/CTASection";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <SobreEspaco />
        <Beneficios />
        <Servicos />
        <Depoimentos />
        <CTASection />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
