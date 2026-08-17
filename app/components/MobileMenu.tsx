"use client";

import { useEffect, useState } from "react";

const links = [
  ["01", "Qué hacemos", "#que-hacemos"],
  ["02", "Casos", "#casos"],
  ["03", "Cómo trabajamos", "#como-trabajamos"],
  ["04", "Nosotras", "#nosotras"],
  ["05", "Conversemos", "#contacto"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  return (
    <div className={`mobile-menu ${open ? "is-open" : ""}`}>
      <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span className="menu-button-label">{open ? "Cerrar" : "Menú"}</span>
        <span className="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <div className="mobile-menu-panel" id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegación mobile">
          {links.map(([number, label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}><span>{number}</span><strong>{label}</strong><span>↗</span></a>)}
        </nav>
        <div className="mobile-menu-footer"><span>Creative partners</span><span>Mendoza · Argentina</span></div>
      </div>
    </div>
  );
}
