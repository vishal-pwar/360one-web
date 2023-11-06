export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return `${getStrapiURL()}`;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

export function identifyFilename(urlString: string) {
  const url = new URL(urlString);
  const filename = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);
  return filename ?? "doc.pdf";
}

export const downloadFiles = async (urls: string[]) => {
  if (!urls) return;
  for (const url of urls) {
    if (url.length === 0) continue;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = identifyFilename(url);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time));
