import { z } from 'zod';

export const simpleLeadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s\-\(\)\+\.]+$/, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
});

export type SimpleLeadFormValues = z.infer<typeof simpleLeadFormSchema>;
