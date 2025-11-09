import React from 'react';
import { Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400">Last updated: March 1, 2024</p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
              <li>This is the grant of a license, not a transfer of title.</li>
              <li>This license shall automatically terminate if you violate any of these restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p>
              The materials on Devsecure's website are provided on an 'as is' basis. Devsecure makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property or other violation
              of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall Devsecure or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Devsecure's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that
              location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <a href="mailto:team.devsecure@gmail.com" className="text-cyan-400 ml-2">
                team.devsecure@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;