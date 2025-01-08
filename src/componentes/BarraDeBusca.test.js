import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BarraDeBusca from "./BarraDeBusca";

describe("src > componentes > BarraDeBusca", () => {
  test("Se o input de busca renderiza no documento", () => {
    const mockSetTermoBusca = jest.fn();
    render(<BarraDeBusca termoBusca="" setTermoBusca={mockSetTermoBusca} />);

    const input = screen.getByPlaceholderText(/pesquise por palavras-chave/i);
    expect(input).toBeInTheDocument();
  });

  test("Se o valor do input é atualizado corretamente", () => {
    const mockSetTermoBusca = jest.fn();
    render(<BarraDeBusca termoBusca="" setTermoBusca={mockSetTermoBusca} />);

    const input = screen.getByPlaceholderText(/pesquise por palavras-chave/i);

    fireEvent.change(input, { target: { value: "Galinha" } });
    expect(mockSetTermoBusca).toHaveBeenCalledWith("Galinha");
  });
});
