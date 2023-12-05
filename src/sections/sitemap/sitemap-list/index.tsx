"use client";

import Link from "next/link";

type Props = {
  pages: {
    id: number;
    attributes: {
      [key: string]: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
};

const SitemapList = (props: Props) => {
  const { pages } = props;
  return (
    <div className="mt-[100px] max-sm:p-[calc(20*var(--scale))calc(22*var(--scale))] max-md:p-[calc(34*var(--scale))calc(62*var(--scale))] max-lg:p-[calc(34*var(--scale))calc(80*var(--scale))] w-full p-[calc(50*var(--scale))calc(125*var(--scale))]">
      <h1 className="font-bold text-2xl">360 ONE</h1>
      <div className="flex flex-wrap gap-5 mt-10">
        {pages?.map((p) => (
          <Link
            key={p?.attributes?.url}
            className="md:basis-[28%] basis-[100%]"
            href={p?.attributes?.url}
          >
            {p?.attributes?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SitemapList;
