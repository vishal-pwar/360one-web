import { getViewpointSection } from "@/services/perspective";
import MediaCard from "@/components/perspective-mediaCard";

const Viewpoint = async () => {
  const response = await getViewpointSection();
  const title = response?.data?.attributes?.viewpoint?.title;
  const description = response?.data?.attributes?.viewpoint?.description;

  const firstCard = response?.data?.attributes?.viewpoint?.cards?.[0];
  const secondCard = response?.data?.attributes?.viewpoint?.cards?.[1];
  const thirdCard = response?.data?.attributes?.viewpoint?.cards?.[2];
  const fourthCard = response?.data?.attributes?.viewpoint?.cards?.[3];
  const fifthCard = response?.data?.attributes?.viewpoint?.cards?.[4];

  return (
    <section className="mt-10 phablet:mt-7 tablet:mt-12 desktop:mt-24 container">
      <div className="font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
        {title}
      </div>
      <div className="font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-10 tablet:mt-4 tablet:max-w-4xl">
        {description}
      </div>
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-3 phablet:gap-4 tablet:flex-row tablet:gap-3 desktop:gap-6 w-full">
          {firstCard?.title?.length > 0 ? (
            <article className="flex tablet:flex-[7] flex-col bg-black">
              <p className="flex z-10 justify-center items-center font-semibold text-xs phablet:text-sm text-white bg-orange-400 p-2 tablet:py-4 tablet:px-8 absolute mt-3 phablet:mt-6 tablet:mt-8">
                {firstCard?.title}
              </p>
              <MediaCard
                mediaType={firstCard?.mediaType}
                media={firstCard?.media?.data}
                href={firstCard?.href}
                className="object-cover w-full h-[140px] phablet:h-[380px] tablet:h-[400px]"
              />
              <div className="flex items-center text-white bg-[#333333] font-medium phablet:font-bold text-sm phablet:text-base tablet:text-xl p-3 phablet:p-6 tablet:p-9 desktop:p-12">
                {firstCard?.subtitle}
              </div>
            </article>
          ) : null}
          {secondCard?.title?.length > 0 ? (
            <article className="flex tablet:flex-[5] flex-col bg-black">
              <p className="flex z-10 justify-center items-center font-semibold text-xs phablet:text-sm text-white bg-orange-400 p-2 tablet:py-4 tablet:px-8 absolute mt-3 phablet:mt-6 tablet:mt-8">
                {secondCard?.title}
              </p>
              <MediaCard
                mediaType={secondCard?.mediaType}
                media={secondCard?.media}
                href={secondCard?.href}
                className="object-cover w-full h-[140px] phablet:h-[380px] tablet:h-[400px]"
              />
              <div className="flex items-center text-black bg-white font-medium phablet:font-bold text-sm phablet:text-base tablet:text-xl p-3 phablet:p-6 tablet:p-9 desktop:p-12">
                {secondCard?.subtitle}
              </div>
            </article>
          ) : null}
        </div>
        <div className="hidden desktop:flex gap-6 w-full">
          {thirdCard?.title?.length > 0 ? (
            <article className="flex flex-[4] flex-col">
              <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                {thirdCard?.title}
              </p>
              <MediaCard
                mediaType={thirdCard?.mediaType}
                media={thirdCard?.media}
                href={thirdCard?.href}
                className="object-cover w-full h-[310px]"
              />
              <div className="flex items-center font-bold text-xl text-white bg-[#404546] p-9 h-full">
                {thirdCard?.subtitle}
              </div>
            </article>
          ) : null}
          <div className="flex flex-col flex-[8] gap-6">
            {fourthCard?.title?.length > 0 ? (
              <article className="flex">
                <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                  {fourthCard?.title}
                </p>
                <MediaCard
                  mediaType={fourthCard?.mediaType}
                  media={fourthCard?.media}
                  href={fourthCard?.href}
                  className="object-cover w-[400px] h-[230px]"
                />
                <div className="flex items-center font-bold text-3xl text-white bg-[#404546] p-12 h-full w-full">
                  {fourthCard?.subtitle}
                </div>
              </article>
            ) : null}
            {fifthCard?.title?.length > 0 ? (
              <article className="flex">
                <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                  {fifthCard?.title}
                </p>
                <MediaCard
                  mediaType={fifthCard?.mediaType}
                  media={fifthCard?.media}
                  href={fifthCard?.href}
                  className="object-cover w-[400px] h-[230px]"
                />
                <div className="flex items-center font-bold text-3xl text-black bg-white p-12 h-full w-full">
                  {fifthCard?.subtitle}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex phablet:justify-end mt-3 phablet:mt-9 desktop:mt-12">
        <button className="py-3 phablet:py-4 w-full phablet:w-auto phablet:px-20 font-bold text-sm bg-black text-white border-white border-2 tracking-wide">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default Viewpoint;
