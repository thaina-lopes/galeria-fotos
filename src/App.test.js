import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("src > App", () => {
  test("Se a quantidade das imagens foram renderizadas corretamente", () => {
    render(<App />);

    const imagens = screen.getAllByRole("img", { hidden: false });
    expect(imagens).toHaveLength(10);
  });

  test("Se a mensagem de nenhuma foto encontrada foi renderizada", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/pesquise por palavras-chave/i);
    fireEvent.change(input, { target: { value: "Girafa" } });

    const imagens = screen.queryAllByRole("img", { hidden: false });

    expect(imagens).toHaveLength(0);

    expect(screen.getByText("Nenhuma foto encontrada")).toBeInTheDocument();
  });

  test("Se o campo de busca filtra as fotos corretamente", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/pesquise por palavras-chave/i);
    fireEvent.change(input, { target: { value: "Galinha" } });

    const imagens = screen.getAllByRole("img", { hidden: false });

    expect(imagens).toHaveLength(1);
    expect(screen.getByAltText("Galinha")).toBeInTheDocument();
  });
});
