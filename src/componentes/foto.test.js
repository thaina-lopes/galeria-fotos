import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Foto from "./foto";

test("Se a imagem e o título são renderizados corretamente", () => {
  const foto = {
    id: 1,
    titulo: "Galinha",
    url: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg",
  };

  render(<Foto foto={foto} />);

  const img = screen.getByAltText("Galinha");
  const titulo = screen.getByText("Galinha");

  expect(img).toHaveAttribute("src", foto.url);
  expect(titulo).toBeInTheDocument();
});
