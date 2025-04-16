/**
 * SEO Constants for DevSecure Website
 * 
 * This file contains consistent SEO information used across the site for better
 * search engine optimization and maintaining keyword consistency.
 */

// Company primary information
export const COMPANY_NAME = 'DevSecure';
export const COMPANY_FULL_NAME = 'DevSecure Technology Solutions';
export const COMPANY_DOMAIN = 'devsecure.com';
export const COMPANY_URL = `https://${COMPANY_DOMAIN}`;

// Primary keywords to be used across the site for SEO
export const PRIMARY_KEYWORDS = [
  'DevSecure',
  'DevSecure innovation',
  'DevSecure development',
  'DevSecure technology',
  'secure development services',
  'technology innovation partners',
  'quantum-inspired development',
  'custom software development'
];

// Company description variants for different contexts
export const SHORT_DESCRIPTION = 'Empowering innovation through cutting-edge technology solutions and secure development services.';

export const MEDIUM_DESCRIPTION = 'DevSecure offers innovative technology solutions including AI integration, cybersecurity, machine learning, and quantum-inspired development services to transform your digital presence.';

export const LONG_DESCRIPTION = 'DevSecure delivers cutting-edge technology solutions with a focus on security, innovation, and performance. Our expertise spans web development, mobile applications, AI integration, cybersecurity, and cloud infrastructure, all delivered with our quantum-inspired approach to digital transformation.';

// Social media profiles for consistency in structured data
export const SOCIAL_PROFILES = {
  twitter: 'https://twitter.com/devsecure',
  linkedin: 'https://www.linkedin.com/company/devsecure',
  github: 'https://github.com/devsecure',
  facebook: 'https://facebook.com/devsecure',
};

// Common structured data for the organization
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': COMPANY_NAME,
  'alternateName': COMPANY_FULL_NAME,
  'url': COMPANY_URL,
  'logo': `${COMPANY_URL}/logo.png`,
  'description': MEDIUM_DESCRIPTION,
  'sameAs': [
    SOCIAL_PROFILES.twitter,
    SOCIAL_PROFILES.linkedin,
    SOCIAL_PROFILES.github,
    SOCIAL_PROFILES.facebook
  ]
});

// Get common keywords plus additional page-specific keywords
export const getKeywords = (additionalKeywords: string[] = []) => {
  const allKeywords = [...PRIMARY_KEYWORDS, ...additionalKeywords];
  return allKeywords.join(', ');
};
