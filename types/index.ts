export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  budget: string;
  startDate: string;
  service: string;
  description?: string;
}

export interface LeadWithMetadata extends LeadFormData {
  id: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Location {
  city: string;
  state: string;
  lat?: number;
  lng?: number;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
}
