import { ageVerifier } from "./App";

describe('Funciones dentro del componente App', () => {

    describe('ageVerifier', () => {
        test('Comprueba si una persona es mayor de edad', () => {
            expect(ageVerifier(20)).toBe(true); // La persona tiene 20 años, se espera true
            expect(ageVerifier(18)).toBe(true); // La persona tiene 18 años, se espera true
            expect(ageVerifier(16)).toBe(false); // La persona tiene 16 años, se espera false
            expect(ageVerifier(-5)).toBe(null); // La edad es negativa, se espera null
          });
        
    })
    
})