import { ITaxes } from "./ITaxes";

export interface IPrice {
  total: number;
  perAdult: number;
  perChild: number;
  taxes: ITaxes;
}