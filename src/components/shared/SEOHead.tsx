import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
  currentPage: string;
}

const SEOHead = ({
  title,
  description,
  keywords = '',
  canonicalUrl = 'https://devsecure.com',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData,
  currentPage,
}: SEOHeadProps) => {
  // Add the company name in the title to improve keyword relevance
  const fullTitle = `${title} | DevSecure Technology Solutions`;
  const fullCanonicalUrl = `${canonicalUrl}${currentPage}`;
  
  // Common keywords that should appear on all pages
  const baseKeywords = 'DevSecure, DevSecure innovation, DevSecure development, technology solutions, secure development';
  const allKeywords = keywords ? `${baseKeywords}, ${keywords}` : baseKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
