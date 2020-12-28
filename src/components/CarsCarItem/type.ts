import { ImageURISource } from 'react-native';

export type CarsCarItemProps = {
  car: CarItemProps;
};

export type CarItemProps = {
  brand: string;
  model: string;
  labelPrice: string;
  price: string;
  fuelType: string;
  source: ImageURISource[];
};
