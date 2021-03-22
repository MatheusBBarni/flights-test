import { render, screen } from "@testing-library/react";
import Home from "../src/pages";

describe('Home', () => {
  const homeId = 'home';
  const filterId = 'filter';
  const flights = [{
    "cia":{
      "code":"LA",
      "name":"045 LATAM AIRLINES GROUP"
    },
    "flightNumber":3030,
    "originCity":"GRU",
    "departureTime":"2021-06-01T00:00:00",
    "destinationCity":"FOR",
    "arrivalTime":"2021-06-01T03:00:00",
    "numberOfStops":0,
    "totalDuration":180,
    "priceData":{
      "total":3000.00,
      "perAdult":2000.00,
      "perChild":1000.00,
      "taxes":{
        "total":120.00,
        "perAdult":60.00,
        "perChild":60.00
      }
    }
  }];

  it ('Should render', () => {
    render(<Home flights={flights} />);
    expect(screen.getByTestId(homeId)).toBeInTheDocument();
  });
  it ('Should render Filter', () => {
    render(<Home flights={flights} />);
    expect(screen.getByTestId(filterId)).toBeInTheDocument();
  });
});