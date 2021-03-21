import api from '../config/api';
import { IFlight } from '../model/IFlight';

class FlightsService {

  private async getFlights (code: string): Promise<IFlight[] | null> {
    try {
      const { data } = await api.get(`/${code}`);
      return data;
    } catch (error) {
      return null;
    }
  }

  async getLatamFlights(): Promise<IFlight[] | null> {
    return await this.getFlights('faadd728-2e31-42f9-bf69-fc245ff2867f');
  }
  async getGolFlights(): Promise<IFlight[] | null> {
    return await this.getFlights('71f6629c-951c-4add-8c36-cf18bcd9d5ce');
  }

  async getAzulFlights(): Promise<IFlight[] | null> {
    return await this.getFlights('916c6073-8d13-4464-a791-069bfebf41ed');
  }

}

export default new FlightsService();