import { z } from 'zod';

export const leadFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s\-\(\)\+\.]+$/, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address is required'),
  postalCode: z
    .string()
    .min(5, 'ZIP code must be at least 5 characters')
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
  budget: z.string().min(1, 'Please select a budget range'),
  startDate: z.string().min(1, 'Please select a start date'),
  service: z.string().min(1, 'Please select a service'),
  description: z
    .string()
    .max(180, 'Description must be 180 characters or less')
    .optional()
    .or(z.literal('')),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const budgetOptions = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];
