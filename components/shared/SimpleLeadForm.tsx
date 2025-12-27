'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import {
  simpleLeadFormSchema,
  type SimpleLeadFormValues,
} from '@/lib/validations/simpleLeadForm';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

interface SimpleLeadFormProps {
  variant?: 'default' | 'compact';
  title?: string;
  subtitle?: string;
}

export default function SimpleLeadForm({
  variant = 'default',
  title = 'Request a Free Consultation',
  subtitle = 'Fill out the form and we will contact you within 24 hours',
}: SimpleLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SimpleLeadFormValues>({
    resolver: zodResolver(simpleLeadFormSchema),
  });

  const onSubmit = async (data: SimpleLeadFormValues) => {
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Simple lead submitted:', data);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        const simpleLead = {
          ...data,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          type: 'simple',
        };
        const existingLeads = JSON.parse(
          localStorage.getItem('simpleLeads') || '[]'
        );
        existingLeads.push(simpleLead);
        localStorage.setItem('simpleLeads', JSON.stringify(existingLeads));
      }

      setShowSuccess(true);
      reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg p-6 sm:p-8',
        variant === 'compact' && 'max-w-md'
      )}
    >
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! Your request has been submitted successfully. We will
            contact you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type of Work <span className="text-red-500">*</span>
          </label>
          <select
            {...register('service')}
            id="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.id} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            'Request Free Consultation'
          )}
        </button>
      </form>
    </div>
  );
}
