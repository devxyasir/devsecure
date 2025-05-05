import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Cookie className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            How we use cookies and similar technologies on our website
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. How We Use Cookies</h2>
          <p>
            DevSecure uses cookies for several purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
            <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functional cookies:</strong> Remember your preferences to enhance your experience</li>
            <li><strong>Targeting cookies:</strong> Used to deliver relevant advertising</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for enabling you to navigate our website and use its features. Without these cookies, services you have asked for cannot be provided.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.2 Performance and Analytics Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, for instance which pages visitors go to most often. They help us improve how our website works and optimize the user experience.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.3 Functionality Cookies</h3>
          <p>
            These cookies allow our website to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.4 Targeting and Advertising Cookies</h3>
          <p>
            These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Managing Your Cookie Preferences</h2>
          <p>
            You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and some features of our website may no longer be fully accessible.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">4.1 Browser Controls</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. Find out how to manage cookies on popular browsers:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Google Chrome</li>
            <li>Microsoft Edge</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Opera</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">4.2 Cookie Consent Tool</h3>
          <p>
            We provide a cookie preference center accessible on our website that allows you to accept or decline non-essential cookies.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We do not control the dissemination of these cookies. You should check the third-party websites for more information about these cookies.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at privacy@devsecure.com.
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

export default CookiePolicy;
