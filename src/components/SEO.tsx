import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  ogType = "website",
  ogImage = "https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg"
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://www.psylife.shop${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update Description
    updateMetaTag("name", "description", description);

    // 3. Update Keywords
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // 4. Update Open Graph details
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:type", ogType);
    if (ogImage) {
      updateMetaTag("property", "og:image", ogImage);
    }

    // 5. Update Twitter details
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:url", canonicalUrl);
    if (ogImage) {
      updateMetaTag("name", "twitter:image", ogImage);
    }

    // 6. Update Canonical Link
    updateCanonicalLink(canonicalUrl);

  }, [title, description, keywords, ogType, ogImage, canonicalUrl]);

  return null;
};

// Helper to find or create meta tags
const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

// Helper to find or create canonical link
const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};
