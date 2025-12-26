'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import {
  leadFormSchema,
  type LeadFormValues,
  budgetOptions,
} from '@/lib/validations/leadForm';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  variant?: 'default' | 'compact';
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  variant = 'default',
  title = 'Get a Free Estimate',
  subtitle = 'Fill out the form below and we will get back to you within 24 hours',
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  const description = watch('description') || '';

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();

      if (typeof window !== 'undefined') {
        const existingLeads = JSON.parse(
          localStorage.getItem('leads') || '[]'
        );
        existingLeads.push(result.data);
        localStorage.setItem('leads', JSON.stringify(existingLeads));
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              placeholder="(555) 123-4567"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('address')}
            type="text"
            id="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              {...register('postalCode')}
              type="text"
              id="postalCode"
              placeholder="12345"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-red-600">
                {errors.postalCode.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Approx Budget <span className="text-red-500">*</span>
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select budget</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600">
                {errors.budget.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Desired Start Date <span className="text-red-500">*</span>
            </label>
            <input
              {...register('startDate')}
              type="date"
              id="startDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Service <span className="text-red-500">*</span>
            </label>
            <select
              {...register('service')}
              id="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Describe Your Project
          </label>
          <textarea
            {...register('description')}
            id="description"
            rows={4}
            maxLength={180}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            <div>
              {errors.description && (
                <p className="text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500">
              {description.length}/180 characters
            </p>
          </div>
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
            'Submit Request'
          )}
        </button>
      </form>
    </div>
  );
}
