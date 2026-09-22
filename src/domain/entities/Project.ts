export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  color: string;
  accentColor: string;
  tags: string[];
  featured: boolean;
  image?: string;
  /** When set, the card links to the `/projects/{slug}` case study. */
  slug?: string;
}
