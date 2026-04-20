import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreEspaco from "@/components/SobreEspaco";
import Beneficios from "@/components/Beneficios";
import Servicos from "@/components/Servicos";
import Equipe from "@/components/Equipe";
import Depoimentos from "@/components/Depoimentos";
import CTASection from "@/components/CTASection";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import SeoLocal from "@/components/SeoLocal";
import Avaliacoes from "@/components/Avaliacoes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Studio Tridimensional Pilates | Pilates em Recife - Iputinga
        </title>

        <meta
          name="description"
          content="Studio Tridimensional Pilates em Recife, na Iputinga, com atendimento especializado em Pilates, fisioterapia, RPG, terapia manual, acupuntura e reabilitação. Agende sua aula experimental."
        />

        <meta
          name="keywords"
          content="Pilates Recife, Pilates Iputinga, Pilates Camaragibe, Studio de Pilates Recife, Fisioterapia Recife, RPG Recife, Acupuntura Recife, Liberação Miofascial Recife, Pilates terapêutico Recife"
        />

        <link
          rel="canonical"
          href="https://www.tridimensionalpilates.com.br/"
        />

        <meta
          property="og:title"
          content="Studio Tridimensional Pilates | Pilates em Recife - Iputinga"
        />
        <meta
          property="og:description"
          content="Atendimento especializado em Pilates, fisioterapia, RPG, terapia manual, acupuntura e reabilitação em Recife."
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://www.tridimensionalpilates.com.br/"
        />
        <meta
          property="og:image"
          content="https://www.tridimensionalpilates.com.br/pilates-studio.jpg"
        />
        <meta
          property="og:locale"
          content="pt_BR"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Studio Tridimensional Pilates | Pilates em Recife - Iputinga"
        />
        <meta
          name="twitter:description"
          content="Pilates, fisioterapia, RPG, terapia manual, acupuntura e reabilitação em Recife."
        />
        <meta
          name="twitter:image"
          content="https://www.tridimensionalpilates.com.br/pilates-studio.jpg"
        />
      </Helmet>

      <Header />

      <main className="pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Studio Tridimensional Pilates",
              image: "https://www.tridimensionalpilates.com.br/pilates-studio.jpg",
              "@id": "https://www.tridimensionalpilates.com.br/",
              url: "https://www.tridimensionalpilates.com.br/",
              telephone: "+55 81 98687-0839",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Recife",
                addressRegion: "PE",
                addressCountry: "BR",
              },
              sameAs: [
                "https://www.instagram.com/tridimensionalpilates"
              ],
            }),
          }}
        />

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
        <Avaliacoes />
        <Equipe />
        <Depoimentos />
        <CTASection />
        <Contato />
      </main>

      <Footer />
    </div>
  );
};

export default Index;