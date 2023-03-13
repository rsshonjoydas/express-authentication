export interface PathLabel {
  id: number;
  path: string;
  label?: string;
}

export const navbarData: PathLabel[] = [
  {
    id: 1,
    path: '/',
    label: 'Home',
  },
  {
    id: 2,
    path: '/about',
    label: 'About',
  },
  {
    id: 3,
    path: '/projects',
    label: 'Projects',
  },
  {
    id: 4,
    path: '/blog',
    label: 'Blogs',
  },
  {
    id: 5,
    path: '/contact',
    label: 'Contact',
  },
];
