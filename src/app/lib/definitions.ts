interface SailingShipLine {
  logo: string;
  name: string;
}

interface SailingShip {
  image: string;
  name: string;
  rating: number;
  line: SailingShipLine;
  reviews: number;
}

export interface Sailing {
  departureDate: string;
  name: string;
  duration: number;
  price: number;
  region: string;
  returnDate: string;
  ship: SailingShip;
  itinerary: string[];
}
