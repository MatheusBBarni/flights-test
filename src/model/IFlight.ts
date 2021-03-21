import { ICompany } from "./ICompany";
import { IPrice } from "./IPrice";

export interface IFlight {
  cia: ICompany;
  flightNumber: number;
  originCity: string;
  departureTime: string;
  destinationCity: string;
  arrivalTime: string;
  numberOfStops: number;
  totalDuration: number;
  priceData: IPrice;
}