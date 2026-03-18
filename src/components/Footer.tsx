const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-narrow text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Studio Tridimensional Pilates. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
