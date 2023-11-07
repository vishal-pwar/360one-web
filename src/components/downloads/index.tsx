"use client";

import DownloadIcon from "@/public/assets/icons/download.svg";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/api-helpers";
import { downloadFiles } from "@/utils/api-helpers";

interface Props {
  res: any;
}
export default function Download(props: Props) {
  const { res } = props;

  return (
    <div className="mx-12 my-48 p-4">
      {res?.data?.map((data: any) => {
        return (
          <div key={data?.id} className="mt-12">
            <div className="font-semibold text-2xl">
              {data?.attributes?.title?.length > 0
                ? data?.attributes?.title
                : null}
            </div>
            <div>
              {data?.attributes?.file?.map((d: any) => {
                return (
                  <div
                    key={d.id}
                    className="flex flex-row justify-between items-center cursor-pointer"
                    onClick={() =>
                      downloadFiles([
                        getStrapiMedia(d.files.data.attributes?.url),
                      ])
                    }
                  >
                    <div className="mt-4 flex-1 bg-white flex justify-between flex-col p-3 gap-3 md:gap-0 md:flex-row rounded-xl">
                      <div className="font-medium text-base">
                        {d?.subtitle?.length > 0 ? d?.subtitle : null}
                      </div>
                      <div key={d?.id} className="flex gap-5">
                        <div className="font-medium text-base flex-1 text-[#707070]">
                          {d?.file_title}
                        </div>
                        <Image
                          className="hidden md:block"
                          src={DownloadIcon}
                          width={25}
                          height={25}
                          alt="Download File"
                        />
                      </div>
                    </div>
                    <Image
                      className="block md:hidden ml-[-40px] mt-2"
                      src={DownloadIcon}
                      width={25}
                      height={25}
                      alt="Download File"
                      onClick={() =>
                        downloadFiles([
                          getStrapiMedia(d.files.data.attributes?.url),
                        ])
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
