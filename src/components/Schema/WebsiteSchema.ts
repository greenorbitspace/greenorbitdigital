import { WebPageSchemaProps } from "./WebPageSchema";

export interface WebsiteSchemaProps {
  url: string;
  title: string;
  description?: string;
  featuredImage?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: { name: string; url: string }[];
}

/**
 * Returns full Website JSON-LD object including LocalBusiness node
 * for Green Orbit Digital, part of Impact Orbit Creative Group
 */
export default function getWebsiteSchema({
  url,
  title,
  description = "Green Orbit Digital is a Leicester-based sustainable digital marketing agency, part of Impact Orbit Creative Group, specialising in SEO, content, analytics, and digital strategy for the space and technology sectors.",
  featuredImage = "https://greenorbit.digital/logos/organisations/greenorbit.png",
  datePublished = "2023-10-12",
  dateModified = new Date().toISOString().split("T")[0],
  breadcrumbs
}: WebsiteSchemaProps) {
  const breadcrumbList = breadcrumbs?.length
    ? breadcrumbs.map((bc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: bc.name,
        item: bc.url
      }))
    : [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://greenorbit.digital"
        }
      ];

  const baseOrganization = {
    "@type": "Organization",
    "@id": "https://greenorbit.digital/#organization",
    name: "Green Orbit Digital",
    legalName: "Green Orbit Digital",
    url: "https://greenorbit.digital",
    parentOrganization: {
      "@type": "Organization",
      name: "Impact Orbit Creative Group",
      url: "https://impactorbit.co"
    },
    logo: { "@id": "https://greenorbit.digital/#logo" },
    image: "https://greenorbit.digital/logos/organisations/greenorbit.png",
    description: "Green Orbit Digital is a sustainable digital marketing agency delivering SEO, analytics, content systems, and strategy for the space and technology sectors. Part of Impact Orbit Creative Group.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Leicester",
      addressLocality: "Leicester",
      postalCode: "LE4 5NU",
      addressCountry: "GB"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@greenorbit.digital",
        telephone: "+44 116 4830155",
        availableLanguage: ["en"]
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/greenorbitdigital/",
      "https://facebook.com/greenorbit.digital",
      "https://www.instagram.com/greenorbit.digital/"
    ]
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://greenorbit.digital/#website",
        url: "https://greenorbit.digital",
        name: "Green Orbit Digital",
        publisher: { "@id": baseOrganization["@id"] },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://greenorbit.digital/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbList
        }
      },
      baseOrganization,
      {
        "@type": "LocalBusiness",
        "@id": "https://greenorbit.digital/#localbusiness",
        name: "Green Orbit Digital",
        url: "https://greenorbit.digital",
        image: featuredImage,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Leicester",
          addressRegion: "Leicestershire",
          addressCountry: "GB"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 52.6369,
          longitude: -1.1398
        },
        openingHours: "Mo-Fr 09:00-17:00",
        parentOrganization: { "@id": baseOrganization["@id"] }
      },
      {
        "@type": "ImageObject",
        "@id": "https://greenorbit.digital/#logo",
        url: "https://greenorbit.digital/logos/organisations/greenorbit.png",
        caption: "Green Orbit Digital Logo"
      }
    ]
  };
}

export { getWebsiteSchema, WebsiteSchemaProps };