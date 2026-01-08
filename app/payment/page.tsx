import PaymentButton from '@/components/shared/PaymentButton';

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Complete Your Payment
        </h1>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Service</span>
              <span className="font-semibold text-gray-900">$99.00</span>
            </div>
            <p className="text-sm text-gray-500">One-time payment</p>
          </div>

          <div className="flex justify-between items-center text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>$99.00</span>
          </div>
        </div>

        {/* Payment Button */}
        <PaymentButton
          items={[
            {
              name: 'Restailing Service',
              priceInCents: 9900, // $99.00
              quantity: 1,
            },
          ]}
          metadata={{
            source: 'payment-page',
          }}
        />

        {/* Security Notice */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          🔒 Secured by Stripe. Your payment information is encrypted and
          secure.
        </p>
      </div>
    </div>
  );
}
