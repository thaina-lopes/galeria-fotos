import React, { useState, useEffect } from "react";
import BarraDeBusca from "./componentes/BarraDeBusca";
import Foto from "./componentes/foto";
import styles from "./App.module.css";

export default function App() {
  const fotos = [
    {
      id: 1,
      titulo: "Galinha",
      url: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg",
    },
    {
      id: 2,
      titulo: "Pinguins",
      url: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg",
    },
    {
      id: 3,
      titulo: "Cavalo",
      url: "https://images.pexels.com/photos/2313396/pexels-photo-2313396.jpeg",
    },
    {
      id: 4,
      titulo: "Lhamas",
      url: "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg",
    },
    {
      id: 5,
      titulo: "Ouriço",
      url: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg",
    },
    {
      id: 6,
      titulo: "Raposa",
      url: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg",
    },
    {
      id: 7,
      titulo: "Esquilo",
      url: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
    },
    {
      id: 8,
      titulo: "Urso Panda",
      url: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
    },
    {
      id: 9,
      titulo: "Tigre",
      url: "https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg",
    },
    {
      id: 10,
      titulo: "Rinocerontes",
      url: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg",
    },
  ];

  const [termoBusca, setTermoBusca] = useState("");
  const [fotosFiltradas, setFotosFiltradas] = useState(fotos);

  useEffect(() => {
    setFotosFiltradas(
      fotos.filter((foto) =>
        foto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      )
    );
  }, [termoBusca]);

  return (
    <div className={styles.aplicacao}>
      <header className={styles.cabecalho}>
        <h1 className={styles.titulo}>Galeria de Fotos</h1>
      </header>

      <BarraDeBusca termoBusca={termoBusca} setTermoBusca={setTermoBusca} />

      <div className={styles.galeria}>
        {fotosFiltradas.length > 0 ? (
          fotosFiltradas.map((foto) => <Foto key={foto.id} foto={foto} />)
        ) : (
          <p className={styles.semResultado}>Nenhuma foto encontrada</p>
        )}
      </div>

      <footer className={styles.rodape}>
        <p>&copy; 2025 Galeria de Fotos. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por
          <a
            href="https://github.com/thaina-lopes/galeria-fotos"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Thainá Lopes
          </a>
        </p>
      </footer>
    </div>
  );
}
