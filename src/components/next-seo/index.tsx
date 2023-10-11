"use client";
import { OrganizationJsonLd } from "next-seo";

export interface OrganizationCanonicalData {
  canonicalData: any;
}
type OrganizationCanonical = {
  id: number;
  attributes: Canonical;
};

export interface Canonical {
  logo: string;
  legalName: string;
  name: string;
  page: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  url: string;
  address: Address;
  sameAs: SameAs[];
  availableLanguage: AvailableLanguage[];
}

export interface Address {
  id: number;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface AvailableLanguage {
  id: number;
  availableLanguage: string;
}

export interface SameAs {
  id: number;
  sameAs: string;
}

const NextSEOComponent = (props: OrganizationCanonicalData) => {
  const { canonicalData: data } = props;
  return (
    <OrganizationJsonLd
      useAppDir={true}
      type="Corporation"
      logo={data?.logo}
      legalName={data?.legalName}
      name={data?.name}
      address={data?.address}
      contactPoint={data?.contactPoint}
      url={data.url}
      sameAs={data?.sameAs?.map((s: SameAs) => s.sameAs)}
    />
  );
};

export default NextSEOComponent;
