import { Truck } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Truck className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Shipping Policy
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Delivery information for Intelliphic products and services
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Digital Delivery</h2>
          <p>
            As Intelliphic primarily provides digital security solutions and services, most of our products are delivered electronically through secure download links or direct access to our cloud-based platforms. Digital deliveries are typically processed within 24 hours of purchase confirmation.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. Hardware Shipping</h2>
          <p>
            For physical security hardware products (authentication keys, secure servers, etc.), Intelliphic ships globally using the following carriers:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Express Courier Services (2-3 business days) - $25</li>
            <li>Standard Shipping (5-7 business days) - $15</li>
            <li>Economy Shipping (7-14 business days) - $10</li>
          </ul>
          <p>
            Free shipping is available for orders above $500 within the continental United States.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. International Shipping</h2>
          <p>
            International customers are responsible for any customs duties, taxes, and import fees imposed by their country. Intelliphic cannot guarantee delivery timelines for international shipments due to varying customs processing times.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Order Tracking</h2>
          <p>
            All physical shipments include tracking information sent via email once your order is dispatched. You can also track your order through your Intelliphic account dashboard.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. Shipping Insurance</h2>
          <p>
            All hardware shipments include basic insurance coverage. Additional insurance can be purchased during checkout for high-value items.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about your shipment or need to make special arrangements, please contact our shipping department at shipping@Intelliphic.com or call +1 (800) 555-0123.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              Last updated: May 5, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
