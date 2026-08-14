import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

const offers = [
  {
    number: "01",
    name: "Marca en foco",
    label: "Programa inicial",
    description: "Una intervención estratégica y concreta para ordenar una marca existente, alinear prioridades y definir los próximos pasos sin abrir un proceso eterno.",
    bullets: ["Diagnóstico de marca, comunicación y materiales actuales", "Workshop de alineación con las personas clave", "Criterios de posicionamiento, mensajes y dirección visual", "Hoja de ruta priorizada para implementar"],
  },
  {
    number: "02",
    name: "Transformación de marca",
    label: "Programa profundo",
    description: "Un proceso integral para convertir una visión de negocio en una marca consistente, reconocible y preparada para crecer.",
    bullets: ["Diagnóstico e inmersión estratégica", "Posicionamiento, narrativa y arquitectura de mensajes", "Identidad visual y sistema de comunicación", "Criterios de implementación y lanzamiento"],
  },
];

const cases = [
  { name: "Foresta", type: "Oficinas flexibles", image: "/cases/foresta.webp", copy: "Una identidad flexible y un sistema de comunicación pensado para ordenar la experiencia de una marca de espacios de trabajo.", service: "Branding · Comunicación" },
  { name: "Grupo Armentano", type: "Desarrollos inmobiliarios", image: "/cases/armentano.webp", copy: "Construcción de marca y dirección de comunicación para proyectos que necesitan una presencia clara, consistente y con visión de largo plazo.", service: "Branding · Dirección creativa" },
  { name: "Mutante", type: "Desarrollos comerciales", image: "/cases/mutante.webp", copy: "Estrategia e identidad para una nueva unidad de negocio que articula diseño, desarrollo y expansión comercial.", service: "Estrategia · Branding" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="China y Paglia, inicio">CHINA<span>&amp;</span>PAGLIA</a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#que-hacemos">Qué hacemos</a><a href="#programas">Cómo trabajamos</a><a href="#casos">Casos</a><a href="#nosotras">Nosotras</a>
        </nav>
        <a className="header-cta" href="#contacto">Conversemos <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <div className="mobile-menu-panel"><a href="#que-hacemos">Qué hacemos</a><a href="#programas">Cómo trabajamos</a><a href="#casos">Casos</a><a href="#nosotras">Nosotras</a><a href="#contacto">Conversemos ↗</a></div>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-eyebrow"><span>Creative partners</span><span>Mendoza · Argentina</span></div>
        <h1>Identidad <span className="amp">&amp;</span><br />dirección creativa<br /><span className="hero-light">para negocios en expansión.</span></h1>
        <div className="hero-bottom"><p>Convertimos visión de negocio en marca, comunicación y experiencia.</p><a className="circle-link" href="#que-hacemos" aria-label="Descubrir qué hacemos">↓</a></div>
        <div className="hero-chip chip-one">Estrategia</div><div className="hero-chip chip-two">Identidad</div>
      </section>

      <section className="recognition" aria-label="Presentación breve">
        <p>Una alianza boutique senior</p>
        <p>Para empresas y desarrollos que ya entienden el valor de una marca bien construida y necesitan criterio, dirección y capacidad de implementación.</p>
      </section>

      <section className="split-intro section" id="que-hacemos">
        <div className="section-kicker">01 / Qué hacemos</div>
        <div className="split-intro-grid">
          <h2>Cuando el negocio evoluciona, la marca también tiene que hacerlo.</h2>
          <div className="intro-copy"><p className="lead">Trabajamos en la intersección entre estrategia de negocio e identidad de marca.</p><p>Somos un partner senior que ayuda a empresas y desarrollos a convertir su estrategia de negocio en una marca consistente, reconocible y lista para expandirse.</p><a className="text-link" href="#programas">Ver formas de trabajo <Arrow /></a></div>
        </div>
      </section>

      <section className="capabilities section-dark">
        <div className="capability-title"><span>Lo que conectamos</span><h2>Negocio, marca y comunicación.</h2></div>
        <div className="capability-list">
          <article><span>01</span><h3>Estrategia de marca</h3><p>Diagnóstico, posicionamiento, narrativa y criterios para decidir.</p></article>
          <article><span>02</span><h3>Identidad y sistemas</h3><p>Identidades nuevas o evoluciones capaces de sostener el crecimiento.</p></article>
          <article><span>03</span><h3>Dirección creativa</h3><p>Coherencia, supervisión y desarrollo de la comunicación en el tiempo.</p></article>
          <article><span>04</span><h3>Comunicación corporativa</h3><p>Mensajes, presentaciones y materiales que ordenan la percepción.</p></article>
        </div>
      </section>

      <section className="offers section" id="programas">
        <div className="section-kicker">02 / Cómo podemos empezar</div>
        <div className="offers-heading"><h2>Una forma de trabajo para cada etapa.</h2><p>No todas las marcas necesitan empezar por el mismo lugar. Definimos el alcance según el momento del negocio, la profundidad del desafío y la capacidad interna para implementarlo.</p></div>
        <div className="offer-grid">
          {offers.map((offer) => <article className="offer-card" key={offer.name}><div className="offer-topline"><span>{offer.number}</span><span>{offer.label}</span></div><h3>{offer.name}</h3><p>{offer.description}</p><ul>{offer.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href="#contacto">Consultar por este programa <Arrow /></a></article>)}
        </div>
        <div className="other-models">
          <article><span>03</span><div><h3>Proyecto a medida</h3><p>Alcances definidos para branding, comunicación, campañas, web o nuevos desarrollos.</p></div><a href="#contacto" aria-label="Consultar por proyecto a medida"><Arrow /></a></article>
          <article><span>04</span><div><h3>Partner creativo estratégico</h3><p>Acompañamiento continuo para empresas que necesitan dirección, criterio y capacidad creativa sostenida.</p></div><a href="#contacto" aria-label="Consultar por partner creativo"><Arrow /></a></article>
        </div>
      </section>

      <section className="process section-blue">
        <div className="section-kicker">03 / Nuestro proceso</div>
        <div className="process-heading"><h2>Un proceso continuo, flexible y alineado con cada etapa.</h2><p>Nos involucramos en la visión, el contexto y las prioridades del negocio para que cada decisión de marca tenga sentido y pueda implementarse.</p></div>
        <div className="process-grid">
          <article><span>01</span><h3>Diagnóstico e inmersión estratégica</h3><p>Entendemos el negocio, el momento, los desafíos y a las personas clave.</p></article>
          <article><span>02</span><h3>Ideación y desarrollo</h3><p>Traducimos estrategia en conceptos, sistemas y herramientas concretas.</p></article>
          <article><span>03</span><h3>Acompañamiento y evolución</h3><p>Supervisamos la implementación y ayudamos a sostener la coherencia.</p></article>
        </div>
      </section>

      <section className="cases section" id="casos">
        <div className="section-kicker">04 / Transformaciones seleccionadas</div>
        <div className="cases-heading"><h2>Pocos casos.<br />Mucho contexto.</h2><p>Mostramos procesos donde estrategia, identidad y comunicación se integraron para resolver un momento concreto del negocio.</p></div>
        <div className="case-list">
          {cases.map((item, index) => <article className="case-card" key={item.name}><div className="case-image-wrap"><Image src={item.image} alt={`Proyecto ${item.name}`} fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" /><span className="case-index">0{index + 1}</span></div><div className="case-info"><div><h3>{item.name}</h3><span>{item.type}</span></div><p>{item.copy}</p><span className="case-service">{item.service}</span></div></article>)}
        </div>
      </section>

      <section className="people section-dark" id="nosotras">
        <div className="section-kicker">05 / Dos trayectorias, una misma forma de trabajar</div>
        <div className="people-heading"><h2>Experiencia senior, involucramiento directo.</h2><p>China&Paglia reúne experiencia en branding, dirección creativa, comunicación y negocios. Las socias que piensan el proyecto son las que participan del proceso.</p></div>
        <div className="people-grid">
          <article className="person-card"><div className="person-top"><Image src="/people/ana.webp" alt="Ana Paula Sánchez" width={165} height={165} unoptimized /><span>Branding · Real Estate · Comunicación</span></div><h3>Ana Paula<br />Sánchez</h3><p>Especialista en branding con background en real estate, marketing corporativo y comunicación institucional. Entiende el negocio inmobiliario desde adentro.</p><ul><li>Branding para real estate y desarrollos</li><li>Marketing y comunicación corporativa</li><li>Construcción de sistemas de marca</li></ul><a href="https://www.linkedin.com/in/anitasanchezr" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></article>
          <article className="person-card person-card-alt"><div className="person-top"><Image src="/people/anto.webp" alt="Antonella Pagliarulo" width={165} height={165} unoptimized /><span>Branding · Dirección creativa · Diseño</span></div><h3>Antonella<br />Pagliarulo</h3><p>Especialista en branding y dirección creativa. Más de 10 años trabajando con marcas de consumo y empresas en crecimiento.</p><ul><li>Branding y dirección creativa</li><li>Marcas de consumo y empresas en crecimiento</li><li>Sistemas visuales y comunicación de marca</li></ul><a href="https://www.linkedin.com/in/antonellapagliarulo" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></article>
        </div>
      </section>

      <section className="technology"><span className="tech-label">Capacidad complementaria</span><div><h2>La marca también necesita herramientas para funcionar.</h2><p>Cuando el desafío lo requiere, sumamos capacidad tecnológica y operativa para ordenar procesos, centralizar información y convertir una definición estratégica en una herramienta concreta.</p></div><span className="tech-stamp">Ecosistema digital operativo</span></section>

      <section className="contact section" id="contacto">
        <div className="contact-intro"><div className="section-kicker">06 / Conversemos</div><h2>Sobre la próxima etapa de tu negocio.</h2><p>Si tu empresa está creciendo, transformándose o necesita ordenar su marca, contanos el contexto. Revisamos cada consulta antes de coordinar una primera conversación.</p><a href="mailto:hola@chinapaglia.com">hola@chinapaglia.com <Arrow /></a></div>
        <form className="contact-form" action="mailto:hola@chinapaglia.com" method="post" encType="text/plain">
          <label><span>Nombre y apellido</span><input type="text" name="nombre" autoComplete="name" required /></label>
          <label><span>Email de trabajo</span><input type="email" name="email" autoComplete="email" required /></label>
          <label><span>Empresa y rol</span><input type="text" name="empresa" autoComplete="organization" required /></label>
          <label><span>Qué está cambiando en el negocio</span><select name="momento" defaultValue=""><option value="" disabled>Seleccionar</option><option>Crecimiento o expansión</option><option>Nueva unidad de negocio</option><option>Reposicionamiento</option><option>Ordenar la comunicación</option><option>Otro desafío</option></select></label>
          <label className="full-field"><span>Contanos brevemente el contexto</span><textarea name="contexto" rows={4} required /></label>
          <button type="submit">Enviar consulta <Arrow /></button><p className="form-note">Respondemos personalmente. Sin respuestas automáticas ni calls de venta en serie.</p>
        </form>
      </section>

      <footer><div className="footer-mark">CHINA<span>&amp;</span>PAGLIA</div><div className="footer-links"><a href="#inicio">Volver arriba ↑</a><a href="mailto:hola@chinapaglia.com">Email</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div><div className="footer-bottom"><span>Creative partners · Mendoza, Argentina</span><span>© 2026 China&Paglia</span></div></footer>
    </main>
  );
}
