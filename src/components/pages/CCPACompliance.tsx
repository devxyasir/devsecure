import { KeyRound } from 'lucide-react';

const CCPACompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <KeyRound className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            CCPA Compliance
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            How Devsecure complies with the California Consumer Privacy Act
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Introduction to CCPA</h2>
          <p>
            The California Consumer Privacy Act (CCPA) is a state statute intended to enhance privacy rights and consumer protection for residents of California. Devsecure is committed to complying with the CCPA and protecting the privacy rights of California residents.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. Information We Collect</h2>
          <p>
            Under the CCPA, California residents have the right to know what personal information is collected about them. Devsecure may collect the following categories of personal information:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Identifiers (name, email address, IP address)</li>
            <li>Commercial information (products purchased, service usage)</li>
            <li>Internet activity (browsing history, search history)</li>
            <li>Geolocation data</li>
            <li>Professional or employment-related information</li>
            <li>Inferences drawn from other personal information</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. Your Rights Under CCPA</h2>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.1 Right to Know</h3>
          <p>
            You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.2 Right to Delete</h3>
          <p>
            You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.3 Right to Opt-Out of Sale</h3>
          <p>
            You have the right to opt-out of the sale of your personal information. Devsecure does not sell personal information in the traditional sense. However, under the CCPA's broad definition, some data sharing might be considered a "sale." We provide a "Do Not Sell My Personal Information" option to ensure compliance.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.4 Right to Non-Discrimination</h3>
          <p>
            We will not discriminate against you for exercising any of your CCPA rights. We will not:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Deny you goods or services</li>
            <li>Charge you different prices or rates for goods or services</li>
            <li>Provide you a different level or quality of goods or services</li>
            <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. How to Exercise Your Rights</h2>
          <p>
            To exercise your rights under the CCPA, please submit a verifiable consumer request to us by:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Calling us at +1 (800) 555-0123</li>
            <li>Visiting our website's Privacy Center at www.Devsecure.com/privacy-center</li>
            <li>Emailing us at ccpa@Devsecure.com</li>
          </ul>
          <p>
            Only you, or a person registered with the California Secretary of State authorized to act on your behalf, may make a verifiable consumer request related to your personal information.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. Response Timing and Format</h2>
          <p>
            We will acknowledge receipt of your request within 10 business days and provide information about how we will process your request. We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time, we will inform you of the reason and extension period in writing.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Changes to Our CCPA Notice</h2>
          <p>
            We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on our website and update the notice's effective date.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">7. Contact Information</h2>
          <p>
            If you have any questions or comments about this notice, the ways in which Devsecure collects and uses your information, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> ccpa@Devsecure.com<br />
            <strong>Phone:</strong> +1 (800) 555-0123<br />
            <strong>Website:</strong> www.Devsecure.com/privacy-center<br />
            <strong>Postal Address:</strong> Devsecure Privacy Office, 123 Security Blvd, Suite 400, San Francisco, CA 94103
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

export default CCPACompliance;
