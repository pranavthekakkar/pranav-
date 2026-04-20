import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'post-digital',
    title: 'Post-Digital Collage',
    category: 'Experimental Design',
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/collage1/800/1000',
    images: [
      'https://picsum.photos/seed/collage1/1200/800',
      'https://picsum.photos/seed/detail1/800/1200',
      'https://picsum.photos/seed/detail2/1200/1200'
    ],
    description: 'An exploration of analog techniques in a high-fidelity digital world. This project uses scanned paper textures, hand-drawn scribbles, and irregular shapes to create a series of posters that challenge the clean precision of modern software.',
    color: '#FFD700' // Gold/Yellow
  },
  {
    id: 'neon-brutalism',
    title: 'Neon Brutalism',
    category: 'Brand Identity',
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/brutal1/800/1000',
    images: [
      'https://picsum.photos/seed/brutal1/1200/800',
      'https://picsum.photos/seed/brutal2/800/1200',
      'https://picsum.photos/seed/brutal3/1200/1200'
    ],
    description: 'A visual identity for a disruptive tech startup. The brand system relies on high-contrast colors, oversized typography, and a deliberate lack of "polish" to subvert corporate expectations.',
    color: '#FF4500' // Orange Red
  },
  {
    id: 'kinetic-type',
    title: 'Kinetic Typography',
    category: 'Motion Graphics',
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/type1/800/1000',
    images: [
      'https://picsum.photos/seed/type1/1200/800',
      'https://picsum.photos/seed/type2/1200/1200'
    ],
    description: 'A study on how letterforms can convey emotion through movement. This collection features posters that appear to be in constant motion, using skewed grids and layered transparency.',
    color: '#00BFFF' // Deep Sky Blue
  },
  {
    id: 'paper-cuts',
    title: 'Paper Cuts',
    category: 'Illustration',
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/paper1/800/1000',
    images: [
      'https://picsum.photos/seed/paper1/1200/800',
      'https://picsum.photos/seed/paper2/800/1200',
      'https://picsum.photos/seed/paper3/1200/800'
    ],
    description: 'Digitally rendered collage inspired by Matisse. This project celebrates the "imperfection" of hand-cut shapes, focusing on organic forms and vibrant, clashing colors.',
    color: '#32CD32' // Lime Green
  },
  {
    id: 'urban-echo',
    title: 'Urban Echo',
    category: 'Editorial',
    year: '2024',
    thumbnail: 'https://picsum.photos/seed/urban1/800/1000',
    images: [
      'https://picsum.photos/seed/urban1/1200/800',
      'https://picsum.photos/seed/urban2/1200/1200'
    ],
    description: 'A magazine layout focusing on urban subcultures. Bold pull-quotes and unconventional image placements create a rhythmic experience across the spreads.',
    color: '#FF1493' // Deep Pink
  },
  {
    id: 'abstract-reality',
    title: 'Abstract Reality',
    category: 'Poster Design',
    year: '2023',
    thumbnail: 'https://picsum.photos/seed/abstract1/800/1000',
    images: [
      'https://picsum.photos/seed/abstract1/1200/800',
      'https://picsum.photos/seed/abstract2/1200/1200'
    ],
    description: 'Posters created using custom generative algorithms. The final pieces are hand-tweaked to add a "designer touch," bridging the gap between machine logic and human intuition.',
    color: '#8A2BE2' // Blue Violet
  }
];
