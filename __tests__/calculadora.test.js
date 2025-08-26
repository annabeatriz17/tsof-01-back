import { somar } from "../src/calculadora.js";

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
});