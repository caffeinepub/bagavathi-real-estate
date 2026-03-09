import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  exactTitle?: boolean;
}

export function usePageMeta({
  title,
  description,
  exactTitle = false,
}: PageMetaOptions) {
  useEffect(() => {
    // Set document title - use exact title if specified, otherwise append site name
    document.title = exactTitle ? title : `${title} | Bagavathi Real Estate`;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Cleanup function to reset to default
    return () => {
      document.title = "Bagavathi Real Estate";
    };
  }, [title, description, exactTitle]);
}
