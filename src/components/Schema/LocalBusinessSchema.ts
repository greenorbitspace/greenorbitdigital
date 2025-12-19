export interface LocalBusinessSchemaProps {
  url?: string;
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string;
  parentOrganization?: {
    name: string;
    url: string;
  };
  priceRange?: string;
  sameAs?: string[];
}

/**
 * Returns LocalBusiness JSON-LD for Green Orbit Digital
 */
export default function getLocalBusinessSchema({
  url = "https://greenorbit.digital",
  name = "Green Orbit Digital",
  description = "Green Orbit Digital is a sustainable digital marketing agency delivering SEO, content systems, analytics, and strategy for the space and technology sectors. Part of Impact Orbit Creative Group.",
  image = "https://greenorbit.digital/logos/organisations/greenorbit.png",
  telephone = "+44 116 4830155",
  email = "hello@greenorbit.digital",
  address = {
    streetAddress: "Leicester",
    addressLocality: "Leicester",
    addressRegion: "Leicestershire",
    postalCode: "LE4 5NU",
    addressCountry: "GB"
  },
  geo = { latitude: 52.6369, longitude: -1.1398 },
  openingHours = "Mo-Fr 09:00-17:00",
  parentOrganization = {
    name: "Impact Orbit Creative Group",
    url: "https://impactorbit.co.uk"
  },
  priceRange = "$$",
  sameAs = [
    "https://www.linkedin.com/company/greenorbitdigital/",
    "https://x.com/greenorbitspace",
    "https://www.instagram.com/greenorbitspace/"
  ]
}: LocalBusinessSchemaProps = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name,
    description,
    url,
    image,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHours,
    parentOrganization: {
      "@type": "Organization",
      name: parentOrganization.name,
      url: parentOrganization.url
    },
    priceRange,
    sameAs
  };
}

export { getLocalBusinessSchema, LocalBusinessSchemaProps };