export default function Equipe() {
  return (
    <section id="equipe" className="team-section section-spacing">
      <div className="container-narrow">

        {/* Título */}
        <div className="team-heading mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f3b2d] mb-3">
            Cuidado de perto. Conhecimento que acolhe.
          </h2>

          <p className="text-primary uppercase tracking-[0.2em] text-sm">
            Nossa equipe
          </p>
        </div>

        <div className="team-grid">

          {/* Edivania */}
          <div className="team-card">

            <div className="team-photo">
              <img
                src="/edivania.jpg"
                alt="Fisioterapeuta Edivania Lima" loading="lazy" width="600" height="750"
                className="team-portrait"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#1f3b2d]">
                Dra. Edivania Lima
              </h3>

              <p className="text-primary mt-2 mb-6">
                Fisioterapeuta | Instrutora de Pilates
              </p>

              <p className="text-[#2f2f2f] leading-8">
                Fisioterapeuta desde 2021 e pós-graduada em UTI Adulto pelo
                Centro Universitário Estácio. Possui formação em Pilates
                Clássico, Liberação Miofascial, Massagem Desportiva por Trilhos
                Anatômicos, Ventosaterapia, Auriculoterapia e Dry Needling.
                Atualmente cursa pós-graduação em Acupuntura, ampliando sua
                atuação na reabilitação, no tratamento de dores musculoesqueléticas
                e na promoção da saúde e qualidade de vida.
              </p>
            </div>

          </div>

          {/* Sergio */}
          <div className="team-card">

            <div className="team-bio">

              <h3 className="text-3xl font-semibold text-[#1f3b2d]">
                Dr. Sergio Vasconcelos
              </h3>

              <p className="text-primary mt-2 mb-6">
                Fisioterapeuta | Instrutor de Pilates
              </p>

              <p className="text-[#2f2f2f] leading-8">
                Fisioterapeuta desde 2010, com pós-graduação em
                Traumato-Ortopedia pelo IMIP. Possui formação em Pilates,
                RPG (Reeducação Postural Global), Conceito Mulligan e
                MDT – Método McKenzie. Atua há mais de uma década em
                clínicas de fisioterapia e no ensino do método Pilates,
                auxiliando pacientes e alunos na recuperação funcional,
                melhora da postura, fortalecimento corporal e promoção
                da qualidade de vida.
              </p>

            </div>

            <div className="team-photo">
              <img
                src="/sergio.jpg"
                alt="Fisioterapeuta Sergio Vasconcelos" loading="lazy" width="600" height="750"
                className="team-portrait"
              />
            </div>

          </div>

        </div>

        {/* Botão */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5581986870839"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:opacity-90 text-white px-8 py-4 rounded-full text-lg transition"
          >
            Agendar uma aula
          </a>
        </div>

      </div>
    </section>
  );
}
