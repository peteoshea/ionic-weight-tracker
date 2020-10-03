export interface Measurement {
  weight: string;
  date: string;
  id: number;
}

const measurements: Measurement[] = [
  {
    weight: '70',
    date: '10 aug',
    id: 0,
  },
  {
    weight: '71',
    date: '16 aug',
    id: 1,
  },
];

export const getMeasurements = () => measurements;

export const getMeasurement = (id: number) => measurements.find((m) => m.id === id);
