const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "7-Bedroom Luxury Villa for Sale in Dubai Hills Grove",
  description:
    "Exclusive 7BR villa in Dubai Hills Grove, Dubai Hills Estate. 29,000 sq.ft mansion with private pool, cinema, gym, and smart home features.",
  url: "https://www.dubaihillsgrovevilla.com/",
  image: [
    "https://www.dubaihillsgrovevilla.com/images/dubai-hills-grove-villa-exterior.jpg",
    "https://www.dubaihillsgrovevilla.com/images/dubai-villa-swimming-pool.jpg",
    "https://www.dubaihillsgrovevilla.com/images/dubai-hills-villa-living-room.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai Hills Estate",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  category: "For Sale",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock",
  },
  areaServed: {
    "@type": "Place",
    name: "Dubai",
  },
  seller: {
    "@type": "RealEstateAgent",
    name: "Hills Grove Royal Estate",
    url: "https://www.dubaihillsgrovevilla.com/",
  },
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
