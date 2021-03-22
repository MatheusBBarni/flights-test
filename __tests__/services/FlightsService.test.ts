import FlightsService from "../../src/services/FlightsService";
import { GOL_CODE, LATAM_CODE, AZUL_CODE } from "../../src/config/constants";

describe('FlightsService class', () => {
  it ('Should return only gol company flights', async () => {
    const result = await FlightsService.getGolFlights();

    if (result && result.length > 0) {
      expect(result[0].cia.code).toBe(GOL_CODE);
    }
  });
  it ('Should return only LATAM company flights', async () => {
    const result = await FlightsService.getLatamFlights();

    if (result && result.length > 0) {
      expect(result[0].cia.code).toBe(LATAM_CODE);
    }
  });
  it ('Should return only Azul company flights', async () => {
    const result = await FlightsService.getAzulFlights();

    if (result && result.length > 0) {
      expect(result[0].cia.code).toBe(AZUL_CODE);
    }
  });
});