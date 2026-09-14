import { ArrowDown, ArrowUpRight, MapPin, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container-narrow hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> MOVIMENTO. EQUILÍBRIO. BEM-ESTAR.</p>
          <h1 id="hero-title">Seu corpo em<br /><em>movimento.</em><br />Sua vida em equilíbrio.</h1>
          <p className="hero-description">Pilates e fisioterapia com um olhar atento a você. Cuidado individualizado para se movimentar melhor e viver com mais bem-estar.</p>
          <a className="button-primary" href="https://wa.me/5581986870839?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank" rel="noopener noreferrer">Agendar aula experimental <ArrowUpRight size={19} aria-hidden="true" /></a>
          <p className="hero-note"><Check size={15} aria-hidden="true" /> Aula experimental gratuita · Agendamento pelo WhatsApp</p>
          <a className="hero-location" href="#contato"><MapPin size={16} aria-hidden="true" /> Pilates na Iputinga, Recife <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src="/pilates-studio.jpg" alt="Entrada do Studio Tridimensional Pilates na Iputinga, Recife" width="720" height="960" fetchPriority="high" /></div>
          <div className="image-caption"><span>UM ESPAÇO PARA CUIDAR DE VOCÊ</span><span>Tridimensional Pilates</span></div>
          <div className="hero-stamp" aria-hidden="true"><span>corpo + mente</span><strong>Em sintonia.</strong><span>no seu ritmo</span></div>
        </div>
      </div>
      <div className="container-narrow hero-bottom"><span>Acompanhamento por fisioterapeutas</span><span>Atendimento individualizado</span><a href="#sobre">Conheça o studio <ArrowDown size={15} aria-hidden="true" /></a></div>
    </section>
  );
}
