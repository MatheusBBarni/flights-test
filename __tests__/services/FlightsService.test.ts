import FlightsService from "../../src/services/FlightsService";
import { GOL_CODE, LATAM_CODE, AZUL_CODE } from "../../src/config/constants";

describe('FlightsService class', () => {
  it ('Should return only gol company flights', async () => {
    const result = await FlightsService.getGolFlights();

    if (result) {
      result.forEach((item) => {
        expect(item.cia.code).toBe(GOL_CODE);
      });
    }
  });
  it ('Should return only LATAM company flights', async () => {
    const result = await FlightsService.getLatamFlights();

    if (result) {
      result.forEach((item) => {
        expect(item.cia.code).toBe(LATAM_CODE);
      });
    }
  });
  it ('Should return only Azul company flights', async () => {
    const result = await FlightsService.getAzulFlights();
    
    if (result) {
      result.forEach((item) => {
        expect(item.cia.code).toBe(AZUL_CODE);
      });
    }
  });
});