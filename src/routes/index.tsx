import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import bodyHtml from "../lp/body.html?raw";
import appJs from "../lp/app.js?raw";

const title = "ENEM por Palavras-Chave — Guia Definitivo de Revisão";
const description =
  "Método prático de resolução: as palavras-chave de cada matéria e assunto para bater o olho na questão e saber o que ela quer de você.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("lp-body", "antialiased");

    const behavior = document.createElement("script");
    behavior.textContent = appJs;
    document.body.appendChild(behavior);

    return () => {
      behavior.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
