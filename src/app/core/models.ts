export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}
export interface GalleryImage {
  src: string;
  alt: string;
}
export interface Profile {
  name: string;
  shortName: string;
  roles: string[];
  bio: string;
  title: string;
  intro: string;
  description: string;
  birthday: string;
  age: number;
  degree: string;
  city: string;
  email: string;
  phone: string;
  website: string;
  freelance: string;
  portrait: string;
  hero: string;
  socials: SocialLink[];
  mapQuery: string;
  multimedia: {
    title: string;
    description: string;
    video: string;
    audio: string;
    poster: string;
    gallery: GalleryImage[];
  };
}
export interface Fact {
  icon: string;
  value: number;
  label: string;
  description: string;
}
export interface Skill {
  name: string;
  value: number;
}
export interface Skills {
  description: string;
  items: Skill[];
}
export interface ResumeItem {
  title: string;
  period: string;
  organization: string;
  description: string;
  highlights: string[];
}
export interface Resume {
  description: string;
  summary: string;
  contacts: string[];
  education: ResumeItem[];
  experience: ResumeItem[];
}
export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  images: GalleryImage[];
  date: string;
  client: string;
  url: string;
  detail: string;
}
export interface Projects {
  description: string;
  categories: { id: string; label: string }[];
  items: Project[];
}
export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  detail: string;
  highlights: string[];
}
export interface Services {
  description: string;
  items: Service[];
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}
export interface Testimonials {
  description: string;
  items: Testimonial[];
}
export interface PortfolioData {
  profile: Profile;
  facts: Fact[];
  skills: Skills;
  resume: Resume;
  projects: Projects;
  services: Services;
  testimonials: Testimonials;
}
