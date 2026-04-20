export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}
