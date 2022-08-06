/// <reference types="vite/client" />

export interface Location {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
}

export type Species = 'Alien' | 'Human';

export type Status = 'Alive' | 'Dead' | 'unknown';

export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Result {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface DataApi {
  info: Info;
  results: Result[];
}
