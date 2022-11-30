export type NavLinks = {
  name: string;
  href: string;
}[];

export type PlanetInformationType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};
