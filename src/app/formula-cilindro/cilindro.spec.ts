import { cilindro } from './cilindro';
describe('cilindro', () => {
    it('should return 282.6 if input is h = 10 and r = 3', () => {
        const result = cilindro(10,3);
        expect(result).toBe(282.6);
    });
    it('should return 62.8 if input is h = 5 and r = 2', () => {
        const result = cilindro(5,2);
        expect(result).toBe(62.8);
    });
    it('should return 549.5 if input is h = 7 and r = 5', () => {
        const result = cilindro(7,5);
        expect(result).toBe(549.5);
    });
    it('should return 5024 if input is h = 16 and r = 10', () => {
        const result = cilindro(16,10);
        expect(result).toBe(5024);
    });
    it('should return 0 if input is h <= 0 and r <= 0', () => {
        const result = cilindro(0,0);
        expect(result).toBe(0);
    });
    
});