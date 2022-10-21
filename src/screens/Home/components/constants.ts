export const all = 'all';
export const near = 'near';
export type HeaderState = typeof all | typeof near;

export type Location = {
  id: number;
  name: string;
  picture: number;
  description: string;
  street: string;
  founded: number;
  longitude: number;
  latitude: number;
}