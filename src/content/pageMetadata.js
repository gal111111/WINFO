export const pageMetadata = {
  '/': ['WINFO | Hong Kong Business Solutions', 'Company setup, BUD Fund applications and practical business support for Hong Kong and cross-border founders.'],
  '/company-registration/hong-kong-resident': ['Set up a Hong Kong company | WINFO', 'A clear company incorporation process for Hong Kong founders.'],
  '/company-registration/mainland-resident': ['Hong Kong company setup for mainland founders | WINFO', 'Cross-border incorporation preparation, company secretarial and banking readiness.'],
  '/start/company-registration': ['Start a Hong Kong company enquiry | WINFO', 'Share the general details WINFO needs to review your Hong Kong company registration enquiry.'],
  '/bud-fund': ['BUD Fund application support | WINFO', 'Initial BUD Fund assessment, project planning, document preparation and coordination.'],
  '/pricing': ['Pricing | WINFO', 'WINFO service scope and pricing framework.'],
  '/cases': ['Engagement scenarios | WINFO', 'Illustrative WINFO business service scenarios.'],
  '/about': ['About WINFO | Hong Kong Business Solutions', 'How WINFO supports Hong Kong and cross-border businesses.'],
  '/contact': ['Contact WINFO', 'Contact WINFO for Hong Kong business service enquiries.'],
  '/services/compliance': ['Compliance and operations | WINFO', 'Ongoing company maintenance, accounting and tax coordination.'],
  '/services/cross-border': ['Cross-border and technology landing | WINFO', 'Cross-border expansion and technology landing preparation.'],
  '/services/science-park': ['Science Park funding and tenancy | WINFO', 'HKSTP programme fit, funding routes and self-application preparation.'],
  '/privacy-policy': ['Privacy policy | WINFO', 'WINFO privacy policy draft and personal-data handling information.'],
  '/terms-of-use': ['Terms of use | WINFO', 'WINFO website terms of use.'],
};

export function canonicalUrl(path) {
  const normalized = path.replace(/\/$/, '') || '/';
  return `https://winfo.hk${normalized === '/' ? '/' : `${normalized}/`}`;
}
