import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreEspaco from "@/components/SobreEspaco";
import Beneficios from "@/components/Beneficios";
import Servicos from "@/components/Servicos";
import Equipe from "@/components/Equipe";
import CTASection from "@/components/CTASection";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import SeoLocal from "@/components/SeoLocal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="sr-only">
          <h1 className="text-3xl font-bold mb-4">
            Pilates em Recife na Iputinga com atendimento terapêutico especializado
          </h1>

          <p className="mb-4">
            O Studio Tridimensional Pilates é referência em Pilates em Recife,
            localizado no bairro da Iputinga e com fácil acesso para Camaragibe.
            Oferecemos atendimento personalizado focado em reabilitação da coluna,
            tratamento da dor, melhora da postura e fortalecimento muscular.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Pilates terapêutico para dores na coluna em Recife
          </h2>

          <p className="mb-4">
            Nosso método é indicado para pessoas com hérnia de disco, escoliose,
            dores lombares, dores cervicais e limitações funcionais.
            Trabalhamos com fisioterapia integrada, liberação miofascial,
            RPG e terapia manual.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Studio de Pilates próximo a Camaragibe
          </h2>

          <p>
            Atendemos alunos de Recife, Iputinga, Cordeiro, Torre,
            Várzea e Camaragibe. Agende sua aula experimental e comece
            hoje sua transformação com Pilates.
          </p>
        </section>

        <Hero />
        <SobreEspaco />
        <Beneficios />
        <Servicos />
        <SeoLocal />
        <Equipe />
        <CTASection />
        <Contato />
      </main>

      <Footer />
    </div>
  );
};

export default Index;