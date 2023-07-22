import { StaticImageData } from 'next/image';

export type Technology =
  | 'React'
  | 'TypeScript'
  | 'Material UI'
  | 'Tailwind CSS'
  | 'SVG.js'
  | 'Node'
  | 'Express'
  | 'Python'
  | 'Flask'
  | 'SQLite'
  | 'Docker';

export interface IProject {
  name: string;
  description: string;
  image: StaticImageData;
  github: string;
  link?: string;
  technologies: Technology[];
}
