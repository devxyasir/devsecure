import { Shield } from 'lucide-react';

const GDPRCompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            GDPR Compliance
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            How Devsecure complies with the European Union's General Data Protection Regulation
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Introduction to GDPR</h2>
          <p>
            The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It addresses the export of personal data outside the EU and EEA areas.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. Our Commitment</h2>
          <p>
            Devsecure is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. We have always had a robust and effective data protection program in place which complies with existing law and abides by the data protection principles.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. How We Comply with GDPR</h2>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.1 Data Protection Officer</h3>
          <p>
            We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our data protection strategy and implementation to ensure compliance with GDPR requirements. You can contact our DPO at dpo@Devsecure.com.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.2 Lawful Basis for Processing</h3>
          <p>
            Devsecure processes personal data only on a lawful basis. This includes consent, contract, legal obligation, vital interests, public task, or legitimate interests.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.3 Data Protection Impact Assessments</h3>
          <p>
            We conduct Data Protection Impact Assessments (DPIAs) for all new projects involving the processing of personal data, particularly those using new technologies or considered high risk.
          </p>
          
          <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-2">3.4 Data Subject Rights</h3>
          <p>
            We respect and facilitate the rights of data subjects under the GDPR, including:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>The right to be informed</li>
            <li>The right of access</li>
            <li>The right to rectification</li>
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
            <li>Rights in relation to automated decision making and profiling</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Data Security Measures</h2>
          <p>
            We have implemented appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Encryption of personal data</li>
            <li>Ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems</li>
            <li>Ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident</li>
            <li>Process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. International Data Transfers</h2>
          <p>
            Devsecure ensures that any personal data transferred outside the EU/EEA is protected by appropriate safeguards, including:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Standard contractual clauses approved by the European Commission</li>
            <li>Binding corporate rules</li>
            <li>Adherence to approved codes of conduct or certification mechanisms</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Data Breach Notification</h2>
          <p>
            In the event of a data breach, Devsecure will notify the relevant supervisory authority without undue delay and, where feasible, within 72 hours after becoming aware of the breach. We will also notify affected data subjects when the breach is likely to result in a high risk to their rights and freedoms.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">7. Data Protection Training</h2>
          <p>
            All Devsecure employees receive regular training on data protection principles and GDPR compliance to ensure awareness and understanding of their responsibilities.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about our GDPR compliance or wish to exercise your rights as a data subject, please contact us at gdpr@Devsecure.com or write to us at our EU representative address.
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

export default GDPRCompliance;
