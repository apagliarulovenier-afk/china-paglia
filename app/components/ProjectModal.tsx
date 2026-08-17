"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectModalProps = {
  project: string;
  title: string;
  category: string;
  description: string;
  image?: string;
};

export default function ProjectModal({ project, title, category, description, image }: ProjectModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.classList.add("project-open");
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.classList.remove("project-open");
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  return (
    <>
      <button className="project-more" type="button" onClick={() => setOpen(true)}>Ver más <span aria-hidden="true">↗</span></button>
      {open && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`${project}-title`}>
          <button className="project-modal-backdrop" aria-label="Cerrar detalle" onClick={() => setOpen(false)} />
          <div className="project-modal-panel">
            <button className="project-modal-close" type="button" onClick={() => setOpen(false)}>Cerrar ×</button>
            <span className="project-modal-category">{category}</span>
            <h2 id={`${project}-title`}>{title}</h2>
            <p>{description}</p>
            <div className="project-modal-grid">
              <div className="project-modal-feature">
                {image ? <Image src={image} alt={`Proyecto ${title}`} fill unoptimized sizes="70vw" /> : <span>Imagen principal pendiente</span>}
              </div>
              <div className="project-modal-placeholder"><span>Contexto</span><p>Contenido del caso en preparación.</p></div>
              <div className="project-modal-placeholder"><span>Alcance</span><p>Detalle del proceso y entregables.</p></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
