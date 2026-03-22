import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Shivi Energy Solutions";
const BASE_URL = "https://www.shivienergy.com";
const DEFAULT_DESCRIPTION =
  "Shivi Energy Solutions delivers engineering-led execution systems for integrity management, corrosion control, rigless intervention, and operational risk reduction across the energy sector.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_KEYWORDS = "oilfield services, corrosion management, cathodic protection, rigless intervention, well integrity, plug and abandonment, downhole tools, pipeline integrity, energy solutions India";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  jsonLd,
}: SEOProps) => {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Engineering-Led Execution Systems`;

  const pageUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={pageUrl} />
      <meta name="author" content="Shivi Energy Solutions Pvt. Ltd." />

      {/* Robots - allow large snippets for AI */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
};

// Reusable JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shivi Energy Solutions",
  alternateName: ["SSES", "Shivi Energy Solutions Pvt. Ltd."],
  url: "https://www.shivienergy.com",
  logo: "https://www.shivienergy.com/logo-main.png",
  description: "Engineering-led execution systems for integrity management, corrosion control, rigless intervention, and digital oversight in the energy sector.",
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 200,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99588-08368",
    contactType: "customer service",
    email: "info@shivienergy.com",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7th Floor, Platina Heights, C12, Sector 62",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Cathodic Protection",
    "Corrosion Management",
    "Well Integrity Management",
    "Rigless Intervention",
    "Plug and Abandonment",
    "Pipeline Integrity",
    "AI Pipeline Monitoring",
    "Digital Twin Technology",
    "3D Laser Scanning",
  ],
  sameAs: [
    "https://www.linkedin.com/company/shivi-energy-solutions",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shivi Energy Solutions",
  url: "https://www.shivienergy.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.shivienergy.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://www.shivienergy.com${item.url}`,
  })),
});

export default SEO;
