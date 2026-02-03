export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Invoicely Clone",
    description: "A full-featured Beautiful Invoices Not Ugly Ones",
    image: "./18777.jpg",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Modern E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    image: "./18777.jpg",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Modern E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    image: "./18777.jpg",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
];
