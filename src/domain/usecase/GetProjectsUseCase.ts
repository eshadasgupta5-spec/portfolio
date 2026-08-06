import type { Project } from '../entities/Project';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'HealthTrack',
    category: 'Mobile App',
    year: '2024',
    description: 'A comprehensive health monitoring platform that helps users track vitals, medications, and wellness goals with an intuitive dashboard.',
    color: '#f4e4e4',
    accentColor: '#e05c5c',
    tags: ['UX Design', 'Mobile', 'Health'],
    featured: true,
    image: 'https://picsum.photos/seed/healthtrack/900/675',
  },
  {
    id: '2',
    title: 'Finova',
    category: 'Web Platform',
    year: '2024',
    description: 'Next-generation banking platform redesign focused on reducing friction in daily financial tasks and improving accessibility.',
    color: '#e4eaf4',
    accentColor: '#3b6cc7',
    tags: ['Product Design', 'FinTech', 'Web'],
    featured: true,
    image: 'https://picsum.photos/seed/finovabank/900/675',
  },
  {
    id: '3',
    title: 'Bloom',
    category: 'E-Commerce',
    year: '2023',
    description: 'Plant care and e-commerce platform connecting plant enthusiasts with expert care guides and a curated marketplace.',
    color: '#e4f4ea',
    accentColor: '#3c9a5f',
    tags: ['E-Commerce', 'UX Research', 'Branding'],
    featured: true,
    image: 'https://picsum.photos/seed/bloomshop/900/675',
  },
  {
    id: '4',
    title: 'Atlas',
    category: 'Navigation App',
    year: '2023',
    description: 'Reimagining urban navigation with context-aware routing, real-time transit integration, and accessibility-first design.',
    color: '#ede4f4',
    accentColor: '#7c4dc7',
    tags: ['UX Design', 'Mobile', 'Maps'],
    featured: true,
    image: 'https://picsum.photos/seed/atlasmap/900/675',
  },
  {
    id: '5',
    title: 'Lumio',
    category: 'Dashboard',
    year: '2023',
    description: 'Analytics dashboard for content creators to understand audience engagement and optimize publishing strategies.',
    color: '#f4f0e4',
    accentColor: '#c79c3c',
    tags: ['Dashboard', 'Data Viz', 'Web'],
    featured: false,
  },
  {
    id: '6',
    title: 'Petal',
    category: 'Design System',
    year: '2022',
    description: 'A comprehensive design system built for scale — covering components, patterns, and guidelines for a team of 40+ designers.',
    color: '#f4e4ee',
    accentColor: '#c73c78',
    tags: ['Design System', 'Documentation', 'UI'],
    featured: false,
  },
];

export class GetProjectsUseCase {
  execute(): Project[] {
    return PROJECTS;
  }

  getFeatured(): Project[] {
    return PROJECTS.filter((p) => p.featured);
  }
}
