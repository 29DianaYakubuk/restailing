'use client';

import { useState } from 'react';

interface LineItem {
  name: string;
  priceInCents: number;
  quantity: number;
}

interface PaymentButtonProps {
  items: LineItem[];
  metadata?: Record<string, string>;
  buttonText?: string;
  className?: string;
}

export default function PaymentButton({
  items,
  metadata,
  buttonText = 'Proceed to Payment',
  className = '',
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          metadata,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setError('Failed to create payment session');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`
          bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200
          ${className}
        `}
      >
        {loading ? 'Processing...' : buttonText}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
          <button
            onClick={() => setError(null)}
            className="text-red-800 text-sm underline mt-2"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
