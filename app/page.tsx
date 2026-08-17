import Image from "next/image";
import MobileMenu from "./components/MobileMenu";

const Arrow = () => <span aria-hidden="true">↗</span>;

const services = [
  { number: "01", title: "Estrategia de marca", copy: "Diagnóstico, posicionamiento, narrativa y criterios para decidir." },
  { number: "02", title: "Identidad y sistemas", copy: "Identidades nuevas o evoluciones capaces de sostener el crecimiento." },
  { number: "03", title: "Dirección creativa", copy: "Coherencia, supervisión y desarrollo de la comunicación en el tiempo." },
  { number: "04", title: "Comunicación corporativa", copy: "Mensajes, presentaciones y materiales que ordenan la percepción." },
];

const anaWork = [
  "/gallery/ana-armentano.jpg",
  "/gallery/ana-chozos.jpg",
  "/gallery/ana-mutante.jpg",
  "/gallery/ana-penta.jpg",
  "/gallery/ana-brand-system.jpg",
];

const antoWork = [
  "/gallery/anto-caramia.jpg",
  "/gallery/anto-etereo.jpg",
  "/gallery/anto-wine.jpg",
  "/gallery/anto-revival.jpg",
  "/gallery/anto-loca.jpg",
];

const heroWork = [
  "/cases/mutante.webp",
  "/gallery/anto-caramia.jpg",
  "/gallery/ana-armentano.jpg",
  "/gallery/anto-etereo.jpg",
  "/gallery/ana-chozos.jpg",
  "/gallery/anto-revival.jpg",
];

function ImageRail({ images, compact = false, label }: { images: string[]; compact?: boolean; label: string }) {
  return (
    <div className={`image-rail ${compact ? "image-rail-compact" : ""}`} aria-label={label}>
      <div className="image-rail-track">
        {[...images, ...images].map((src, index) => (
          <div className="rail-image" key={`${src}-${index}`} aria-hidden={index >= images.length}>
            <Image src={src} alt="" fill unoptimized sizes={compact ? "28vw" : "42vw"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="China y Paglia, inicio">CHINA<span>&amp;</span>PAGLIA</a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#que-hacemos">Qué hacemos</a><a href="#casos">Casos</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#nosotras">Nosotras</a>
        </nav>
        <a className="header-cta" href="#contacto">Conversemos <Arrow /></a>
        <MobileMenu />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-eyebrow"><span>Creative partners</span><span>Mendoza · Argentina</span></div>
        <h1>Identidad <span className="amp">&amp;</span><br />dirección creativa<br /><span className="hero-light">para negocios en expansión.</span></h1>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p>Somos Anto y Anita: diseñadoras senior, amigas desde la facultad y hoy socias en una alianza boutique especializada en branding, comunicación y dirección creativa.</p>
            <p className="hero-manifesto">Convertimos visión de negocio en marca, comunicación y experiencia.</p>
          </div>
          <a className="circle-link" href="#que-hacemos" aria-label="Descubrir qué hacemos">↓</a>
        </div>
        <div className="hero-chip chip-one">Estrategia</div><div className="hero-chip chip-two">Identidad</div>
      </section>

      <ImageRail images={heroWork} label="Selección de proyectos" />

      <section className="services section-dark" id="que-hacemos">
        <div className="section-kicker">01 / Qué hacemos</div>
        <div className="services-heading">
          <h2>Trabajamos en la intersección entre estrategia de negocio e identidad de marca.</h2>
          <p>Somos un partner senior que ayuda a empresas y desarrollos a convertir su estrategia de negocio en una marca consistente, reconocible y lista para expandirse.</p>
        </div>
        <div className="service-accordion">
          {services.map((service, index) => (
            <details key={service.title} open={index === 0}>
              <summary><span>{service.number}</span><h3>{service.title}</h3><span className="service-toggle" aria-hidden="true">+</span></summary>
              <div className="service-answer"><p>{service.copy}</p></div>
            </details>
          ))}
        </div>
        <ImageRail images={[...anaWork.slice(0, 3), ...antoWork.slice(0, 3)]} compact label="Detalles de proyectos y sistemas de marca" />
      </section>

      <section className="cases" id="casos">
        <div className="cases-intro section">
          <div className="section-kicker">02 / Casos</div>
          <div className="cases-intro-grid"><h2>Estrategia, identidad y comunicación en acción.</h2><p>Mostramos procesos donde estrategia, identidad y comunicación se integraron para resolver un momento concreto del negocio.</p></div>
        </div>

        <article className="case-panel case-mutante">
          <div className="case-panel-copy">
            <div className="case-meta"><span>01</span><span>Branding · Real Estate</span></div>
            <h3>Mutante</h3>
            <p>Estrategia e identidad para una nueva unidad de negocio que articula diseño, desarrollo y expansión comercial.</p>
          </div>
          <div className="case-panel-media"><Image src="/cases/mutante.webp" alt="Proyecto de branding Mutante" fill unoptimized sizes="(max-width: 900px) 100vw, 58vw" /></div>
        </article>

        <article className="case-panel case-fontalba">
          <div className="case-panel-copy">
            <div className="case-meta"><span>02</span><span>Dirección creativa · Marketing digital</span></div>
            <h3>Fontalba</h3>
            <p>Dirección creativa y sistema de contenidos para ordenar la comunicación de una marca de aceite de oliva y sostener su presencia digital.</p>
          </div>
          <div className="fontalba-canvas" aria-label="Composición visual del caso Fontalba">
            <span className="fontalba-word">FONTALBA</span>
            <div className="fontalba-tile tile-one"><span>Origen</span><strong>AOVE</strong></div>
            <div className="fontalba-tile tile-two"><span>Contenido</span><strong>Marca</strong></div>
            <div className="fontalba-tile tile-three"><span>Sistema</span><strong>Digital</strong></div>
            <span className="fontalba-note">Caso en desarrollo · 2026</span>
          </div>
        </article>
      </section>

      <section className="working section" id="como-trabajamos">
        <div className="section-kicker">03 / Cómo trabajamos</div>
        <div className="working-heading"><h2>¿Cómo trabajamos?</h2><p>No todas las marcas necesitan empezar por el mismo lugar. Definimos el alcance según el momento del negocio, la profundidad del desafío y la capacidad interna para implementarlo.</p></div>
        <div className="working-models">
          <article><span>01</span><div><h3>Proyecto a medida</h3><p>Alcances definidos para branding, comunicación, campañas, web o nuevos desarrollos.</p></div><a href="#contacto" aria-label="Consultar por un proyecto a medida"><Arrow /></a></article>
          <article><span>02</span><div><h3>Fee · Partner creativo estratégico</h3><p>Acompañamiento continuo para empresas que necesitan dirección, criterio y capacidad creativa sostenida con modalidad de fee mensual.</p></div><a href="#contacto" aria-label="Consultar por acompañamiento mensual"><Arrow /></a></article>
        </div>
      </section>

      <section className="people section-dark" id="nosotras">
        <div className="section-kicker">04 / Nosotras</div>
        <div className="people-story">
          <h2>Dos trayectorias.<br />Una mirada compartida.</h2>
          <div><p>Somos Ana y Anto. Nos conocimos estudiando Diseño y, después de más de una década de recorridos complementarios, en 2026 decidimos reunir nuestra experiencia en branding, dirección creativa, comunicación y negocios en una nueva alianza creativo-estratégica.</p><p>En cada proyecto miramos primero el negocio y después el diseño: preguntamos, ordenamos y construimos junto a nuestros clientes.</p></div>
        </div>

        <article className="person-profile">
          <div className="person-portrait"><Image src="/people/ana.webp" alt="Ana Paula Sánchez" fill unoptimized sizes="(max-width: 900px) 100vw, 40vw" /></div>
          <div className="person-copy"><span>Branding · Real Estate · Comunicación</span><h3>Ana Paula Sánchez</h3><p>Ana se especializa en branding, marketing y comunicación corporativa, con experiencia especialmente vinculada al real estate. Conoce el negocio inmobiliario desde adentro y tiene una facilidad natural para conectar personas, leer contextos y convertir conversaciones complejas en decisiones claras.</p><p className="person-detail">Practica yoga y juega al pádel: equilibrio y reflejos que también aparecen en su forma de trabajar.</p><a href="https://www.linkedin.com/in/anitasanchezr" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </article>
        <div className="person-gallery" aria-label="Selección de trabajos previos de Ana Paula Sánchez">{anaWork.map((src) => <div key={src}><Image src={src} alt="" fill unoptimized sizes="20vw" /></div>)}</div>

        <article className="person-profile person-profile-reverse">
          <div className="person-portrait"><Image src="/people/anto.webp" alt="Antonella Pagliarulo" fill unoptimized sizes="(max-width: 900px) 100vw, 40vw" /></div>
          <div className="person-copy"><span>Branding · Dirección creativa · Diseño</span><h3>Antonella Pagliarulo</h3><p>Antonella desarrolló su recorrido entre estudios de diseño, empresas y práctica independiente, trabajando con marcas de consumo y equipos internacionales de FMCG. Se especializó en branding y packaging en Barcelona.</p><p className="person-detail">Organizada, pragmática y orientada a procesos, convierte desafíos complejos en dinámicas y herramientas creativo-estratégicas que permiten avanzar.</p><a href="https://www.linkedin.com/in/antonellapagliarulo" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </article>
        <div className="person-gallery" aria-label="Selección de trabajos previos de Antonella Pagliarulo">{antoWork.map((src) => <div key={src}><Image src={src} alt="" fill unoptimized sizes="20vw" /></div>)}</div>
      </section>

      <section className="technology" id="ecosistema">
        <span className="tech-label">05 / Capacidad complementaria</span>
        <div><h2>Ecosistema digital operativo</h2><p>Cuando el desafío lo requiere, sumamos capacidad tecnológica y operativa para desarrollar herramientas que ayuden a optimizar procesos, centralizar información y mejorar la coordinación interna de nuestros clientes.</p></div>
        <span className="tech-stamp">Estrategia + tecnología</span>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-intro"><div className="section-kicker">06 / Conversemos</div><h2>Sobre la próxima etapa de tu negocio.</h2><p>Si tu empresa está creciendo, transformándose o necesita ordenar su marca, contanos el contexto.</p><a href="mailto:hola@chinapaglia.com">hola@chinapaglia.com <Arrow /></a></div>
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
