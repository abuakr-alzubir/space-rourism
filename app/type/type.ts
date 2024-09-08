import { StaticImageData } from "next/image";

export type destinationsProps = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  description: string;
  distance: string;
  travel: string;
};

export type crewMemberProps = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  role: string;
  bio: string;
};

export type technologyProps = {
  name: string;
  images: {
    portrait: StaticImageData;
    landscape: StaticImageData;
  };
  description: string;
};
