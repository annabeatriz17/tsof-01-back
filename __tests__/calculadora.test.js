import { somar, subtrair } from "../src/calculadora.js";

describe("Calculadora", () => {
  test("Deve somar dois números corretamente", () => {
    //AAA
    //Arrange(Preparar)
    const a = 5;
    const b = 7;
    
    //act (executar)
    const resultado = somar(a, b);

    //assert (verificar)
    expect(resultado).toBe(12);
  });
  test("Deve subtrair dois números corretamente", () => {
    //AAA
    //Arrange(Preparar)
    const a = 5;
    const b = 7;

    //act (executar)
    const resultado = subtrair(a, b);

    //assert (verificar)
    expect(resultado).toBe(-2);
  });
});