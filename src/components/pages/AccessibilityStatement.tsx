import { Eye } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Eye className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            DevSecure's commitment to web accessibility
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">1. Our Commitment</h2>
          <p>
            DevSecure is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">2. Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. They define three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p>
            DevSecure's website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">3. Accessibility Features</h2>
          <p>
            DevSecure's website includes the following accessibility features:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Sufficient color contrast that meets WCAG 2.1 AA standards</li>
            <li>Text alternatives for non-text content</li>
            <li>Keyboard accessibility for all interactive elements</li>
            <li>ARIA landmarks and roles to enhance navigation</li>
            <li>Responsive design that adapts to different devices and screen sizes</li>
            <li>Focus indicators for keyboard navigation</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">4. Limitations and Alternatives</h2>
          <p>
            Despite our best efforts to ensure accessibility of DevSecure's website, there may be some limitations. Below is a description of known limitations, and potential solutions:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>PDFs:</strong> Not all PDF documents are fully accessible. We are working to remediate existing PDFs and ensure future PDFs are accessible. For inaccessible PDFs, please contact us, and we will provide an accessible version.</li>
            <li><strong>Videos:</strong> Some older video content may not have captions or audio descriptions. We are working to update these. Please contact us for alternative versions.</li>
            <li><strong>Interactive demos:</strong> Some of our security product demonstrations have complex visualizations that may be difficult to use with screen readers. We provide alternative text descriptions and are developing more accessible versions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">5. Feedback and Contact Information</h2>
          <p>
            We welcome your feedback on the accessibility of DevSecure's website. Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>Email:</strong> accessibility@devsecure.com</li>
            <li><strong>Phone:</strong> +1 (800) 555-0123</li>
            <li><strong>Postal address:</strong> DevSecure Accessibility Team, 123 Security Blvd, Suite 400, San Francisco, CA 94103</li>
          </ul>
          <p>
            We try to respond to feedback within 2 business days.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">6. Compatibility with Browsers and Assistive Technology</h2>
          <p>
            DevSecure's website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
            <li>Speech recognition software</li>
            <li>Screen magnification software</li>
            <li>Alternative keyboard and mouse input devices</li>
          </ul>
          <p>
            The website is compatible with recent versions of major browsers including Chrome, Firefox, Safari, and Edge.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">7. Technical Specifications</h2>
          <p>
            Accessibility of DevSecure's website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p>
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">8. Assessment Approach</h2>
          <p>
            DevSecure assessed the accessibility of this website by the following approaches:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Self-evaluation</li>
            <li>External evaluation by accessibility experts</li>
            <li>User testing with people who use assistive technologies</li>
          </ul>

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

export default AccessibilityStatement;
