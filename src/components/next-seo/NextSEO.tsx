"use client";
import { OrganizationJsonLd } from "next-seo";

type Canonical = {
  canonical: {
    [key: string]: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
    areaServed: string;
  }[];
};

const NextSEOComponent = (props: Canonical) => {
  const { address, canonical, contactPoint } = props;
  console.log({ address, canonical, contactPoint });
  return (
    <OrganizationJsonLd
      useAppDir={true}
      type={canonical.type}
      id={canonical.id}
      logo={canonical.logo}
      legalName={canonical.legalName}
      name={canonical.name}
      address={address}
      contactPoint={contactPoint}
      url={canonical.url}
    />
  );
};

export default NextSEOComponent;
