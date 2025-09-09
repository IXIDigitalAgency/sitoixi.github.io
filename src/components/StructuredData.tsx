'use client';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'IXI',
    telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+39',
    address: {
      '@type': 'PostalAddress',
      streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET,
      addressLocality: process.env.NEXT_PUBLIC_BUSINESS_LOCALITY,
      addressRegion: process.env.NEXT_PUBLIC_BUSINESS_REGION,
      postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL,
      addressCountry: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: Number(process.env.NEXT_PUBLIC_BUSINESS_LAT || 0),
      longitude: Number(process.env.NEXT_PUBLIC_BUSINESS_LNG || 0)
    },
    url: process.env.NEXT_PUBLIC_SITE_URL
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
