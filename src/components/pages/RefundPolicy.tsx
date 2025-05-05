import { RefreshCw } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <RefreshCw className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Terms and conditions for refunds on DevSecure products and services
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Software and Digital Products</h2>
          <p>
            DevSecure offers a 30-day money-back guarantee on most software products and digital services. If you're not satisfied with your purchase, you can request a full refund within 30 days of the purchase date.
          </p>
          <p>
            Exceptions to this policy include:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Custom development services that have already been delivered</li>
            <li>Enterprise licenses that have been activated and deployed</li>
            <li>Digital products explicitly marked as non-refundable</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. Hardware Products</h2>
          <p>
            Hardware products may be returned for a full refund within 14 days of delivery, provided they are in their original packaging, undamaged, and include all accessories. Return shipping costs are the responsibility of the customer unless the return is due to a defect or error on our part.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. Subscription Services</h2>
          <p>
            For subscription-based services, you may cancel at any time. Refunds are provided on a prorated basis for the unused portion of your current billing period. Annual subscriptions canceled within the first 30 days qualify for a full refund.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Consulting and Implementation Services</h2>
          <p>
            Consulting, installation, and implementation services are eligible for a refund only if DevSecure fails to deliver the agreed-upon services. Cancellations made before service delivery may be subject to a cancellation fee depending on the resources already allocated.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. How to Request a Refund</h2>
          <p>
            To request a refund, please contact our customer service department at refunds@devsecure.com or call +1 (800) 555-0123. Please include your order number, the reason for your refund request, and any relevant details.
          </p>
          <p>
            Refunds are typically processed within 5-7 business days and will be issued to the original payment method used for the purchase.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Disputes and Exceptions</h2>
          <p>
            If you believe an exception should be made to this policy, please contact our customer service team to discuss your situation. We review all refund disputes on a case-by-case basis.
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

export default RefundPolicy;
