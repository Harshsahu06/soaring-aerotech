import React from "react";

export default function SEO({
  title,
  description,
  keywords,
  ogImage = "/opengraph.jpg",
  ogType = "website",
  canonicalUrl,
  robots = "index, follow",
}) {
  const siteName = "Soaring Aerotech";
  const defaultDescription = "Soaring Aerotech Pvt. Ltd. is a leading company in drone technology, aerospace engineering, UAV manufacturing, and training in India.";
  const defaultKeywords = "drone, UAV, aerospace engineering, drone training, drone services, Soaring Aerotech, UAV manufacturing, drone startup India";

  const seoTitle = title ? `${title} | ${siteName}` : `${siteName} | India's Premier UAV & Drone Technology Ecosystem`;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Derive canonical and image URLs
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const seoCanonical = canonicalUrl || `https://soaringaerotech.com${currentPath}`;
  const seoImage = ogImage.startsWith("http") ? ogImage : `https://soaringaerotech.com${ogImage}`;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </>
  );
}
