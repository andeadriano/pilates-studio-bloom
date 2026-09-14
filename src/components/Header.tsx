import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
const links = [{ label: "O studio", href: "#sobre" }, { label: "Serviços", href: "#servicos" }, { label: "Nossa equipe", href: "#equipe" }, { label: "Contato", href: "#contato" }];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header">
    <div className="container-narrow header-inner">
      <a href="#inicio" className="brand" aria-label="Tridimensional Pilates — início"><img src={logo} alt="" width="54" height="54" /><span>tridimensional<small>STUDIO DE PILATES</small></span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a className="header-cta" href="https://wa.me/5581986870839" target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
      <button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação para celular" hidden={!open}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="https://wa.me/5581986870839" target="_blank" rel="noopener noreferrer" className="button-primary" onClick={() => setOpen(false)}>Agendar pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a></nav>
  </header>;
}
