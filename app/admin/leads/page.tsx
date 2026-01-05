'use client';

import { useState, useEffect } from 'react';
import { Trash2, Download, Mail, Phone, Calendar } from 'lucide-react';
import type { LeadWithMetadata } from '@/types';
import { formatDate, formatPhoneNumber } from '@/lib/utils';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadWithMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/lead');
        if (response.ok) {
          const result = await response.json();
          setLeads(result.leads || []);
        } else {
          console.error('Failed to fetch leads');
        }
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);


  const handleClearAll = async () => {
    if (
      confirm(
        'Are you sure you want to delete all leads? This action cannot be undone.'
      )
    ) {
      try {
        // Delete all leads one by one
        await Promise.all(
          leads.map((lead) =>
            fetch(`/api/lead?id=${lead.id}`, { method: 'DELETE' })
          )
        );
        setLeads([]);
      } catch (error) {
        console.error('Error deleting all leads:', error);
        alert('Failed to delete all leads. Please try again.');
      }
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        const response = await fetch(`/api/lead?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setLeads(leads.filter((lead) => lead.id !== id));
        } else {
          throw new Error('Failed to delete lead');
        }
      } catch (error) {
        console.error('Error deleting lead:', error);
        alert('Failed to delete lead. Please try again.');
      }
    }
  };

  const handleExport = () => {
    const csv = [
      [
        'ID',
        'Date',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Address',
        'ZIP',
        'Budget',
        'Start Date',
        'Service',
        'Description',
      ],
      ...leads.map((lead) => [
        lead.id,
        new Date(lead.createdAt).toLocaleDateString(),
        lead.firstName,
        lead.lastName,
        lead.email,
        lead.phone,
        lead.address,
        lead.postalCode,
        lead.budget,
        lead.startDate,
        lead.service,
        lead.description || '',
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lead Management
          </h1>
          <p className="text-gray-600">
            View and manage all submitted lead requests. Total leads:{' '}
            <span className="font-semibold">{leads.length}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={handleExport}
            disabled={leads.length === 0}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-5 w-5" />
            Export to CSV
          </button>
          <button
            onClick={handleClearAll}
            disabled={leads.length === 0}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="h-5 w-5" />
            Clear All Leads
          </button>
        </div>

        {leads.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-xl text-gray-600">
              No leads yet. Leads will appear here once submitted through the
              contact forms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {lead.firstName} {lead.lastName}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(lead.createdAt)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteLead(lead.id)}
                    className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                    aria-label="Delete lead"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <Mail className="h-4 w-4 text-primary-600" />
                      <span className="font-medium">Email:</span>
                    </div>
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {lead.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <Phone className="h-4 w-4 text-primary-600" />
                      <span className="font-medium">Phone:</span>
                    </div>
                    <a
                      href={`tel:${lead.phone}`}
                      className="text-primary-600 hover:underline"
                    >
                      {formatPhoneNumber(lead.phone)}
                    </a>
                  </div>

                  <div>
                    <span className="font-medium text-gray-700">Service:</span>
                    <p className="text-gray-600 capitalize">
                      {lead.service.replace(/-/g, ' ')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="font-medium text-gray-700">Address:</span>
                    <p className="text-gray-600">
                      {lead.address}, {lead.postalCode}
                    </p>
                  </div>

                  <div>
                    <span className="font-medium text-gray-700">Budget:</span>
                    <p className="text-gray-600 capitalize">
                      {lead.budget.replace(/-/g, ' ')}
                    </p>
                  </div>

                  <div>
                    <span className="font-medium text-gray-700">
                      Start Date:
                    </span>
                    <p className="text-gray-600">{lead.startDate}</p>
                  </div>
                </div>

                {lead.description && (
                  <div className="border-t border-gray-200 pt-4">
                    <span className="font-medium text-gray-700 block mb-2">
                      Project Description:
                    </span>
                    <p className="text-gray-600 italic">
                      &quot;{lead.description}&quot;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
