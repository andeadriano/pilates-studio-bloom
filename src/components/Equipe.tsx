export default function Equipe() {
  return (
    <section className="bg-[#f8f3eb] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f3b2d] mb-3">
            Por trás do Studio Pilates Tridimensional
          </h2>

          <p className="text-[#5f9f95] uppercase tracking-[0.2em] text-sm">
            Nossa equipe
          </p>
        </div>

        <div className="space-y-24">

          {/* Edivania */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center md:justify-start">
              <img
                src="/edivania.jpg"
                alt="Edivania Lira"
                className="w-full max-w-[380px] rounded-[32px] object-cover shadow-md"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#1f3b2d]">
                Dra. Edivania Lima
              </h3>

              <p className="text-[#5f9f95] mt-2 mb-6">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1">

              <h3 className="text-3xl font-semibold text-[#1f3b2d]">
                Dr. Sergio Vasconcelos
              </h3>

              <p className="text-[#5f9f95] mt-2 mb-6">
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

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src="/sergio.jpg"
                alt="Sergio Vasconcelos"
                className="w-full max-w-[380px] rounded-[32px] object-cover shadow-md"
              />
            </div>

          </div>

        </div>

        {/* Botão */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/5581986870839"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5f9f95] hover:bg-[#4c8a80] text-white px-8 py-4 rounded-full text-lg transition"
          >
            Agendar aula experimental
          </a>
        </div>

      </div>
    </section>
  );
}