import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Legal disclaimers and limitations of liability
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Website Information</h2>
          <p>
            The information provided on DevSecure's website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. No Professional Advice</h2>
          <p>
            The information on DevSecure's website is not intended to be a substitute for professional advice. Before making any decision or taking any action based on information on our site, you should consult with a qualified professional. Use of and access to this website or any of the links or resources contained within the site do not create a professional-client relationship.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. External Links</h2>
          <p>
            DevSecure's website may contain links to external websites that are not provided or maintained by or in any way affiliated with DevSecure. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Errors and Omissions</h2>
          <p>
            The information given by DevSecure is for general guidance on matters of interest. Even though we have made every effort to ensure that the information provided is accurate and up to date, errors and omissions may occur. We are not responsible for any errors or omissions, or for the results obtained from the use of this information.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. No Warranties</h2>
          <p>
            DevSecure's website is provided on an "as is," "as available" basis without warranties of any kind, either express or implied, including, without limitation, those of merchantability and fitness for a particular purpose. We do not warrant that the website will be error-free, that defects will be corrected, or that our site or the server that makes it available are free of viruses or other harmful components.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall DevSecure, nor any of its officers, directors, employees, or agents, be liable for any indirect, special, incidental, consequential, or punitive damages including, but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Your access to or use of or inability to access or use the website;</li>
            <li>Any conduct or content of any third party on the website;</li>
            <li>Any content obtained from the website; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless DevSecure, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these terms of use or your use of the website.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">8. Changes and Updates</h2>
          <p>
            We reserve the right to update, change, or replace any part of this disclaimer. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website following the posting of any changes to this disclaimer constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this disclaimer, please contact us at legal@devsecure.com.
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

export default Disclaimer;
