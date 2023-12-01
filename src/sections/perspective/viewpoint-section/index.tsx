import { getPerspectiveSection } from "@/services/perspective";
import MediaCard from "@/components/perspective-mediaCard";

const Viewpoint = async () => {
  const response = await getPerspectiveSection();
  const title = response?.data?.attributes?.viewpoint?.title;
  const description = response?.data?.attributes?.viewpoint?.description;

  const firstCard = response?.data?.attributes?.viewpoint?.cards?.[0];
  const secondCard = response?.data?.attributes?.viewpoint?.cards?.[1];
  const thirdCard = response?.data?.attributes?.viewpoint?.cards?.[2];
  const fourthCard = response?.data?.attributes?.viewpoint?.cards?.[3];
  const fifthCard = response?.data?.attributes?.viewpoint?.cards?.[4];

  return (
    <section>
      <div className="font-bold text-4xl">{title}</div>
      <div className="font-normal text-xl leading-6 mt-4 mb-10 max-w-4xl">
        {description}
      </div>
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row lg:gap-3 xl:gap-6 w-full">
          {firstCard?.title?.length > 0 ? (
            <article className="flex flex-[7] flex-col bg-black">
              <p className="flex z-10 justify-center items-center font-semibold text-sm text-white bg-orange-400 p-1 sm:p-2 md:py-4 md:px-8 absolute mt-6">
                {firstCard?.title}
              </p>
              <MediaCard
                mediaType={firstCard?.mediaType}
                media={firstCard?.media?.data}
                href={firstCard?.href}
                className="object-cover w-full h-[140px] sm:h-[180px] md:h-[380px] lg:h-[400px]"
              />
              <div className="flex items-center text-white bg-[#404546] p-3 font-medium text-sm sm:p-6 sm:font-bold sm:text-base md:p-12 md:text-xl">
                {firstCard?.subtitle}
              </div>
            </article>
          ) : null}
          {secondCard?.title?.length > 0 ? (
            <article className="flex flex-[5] flex-col bg-black">
              <p className="flex justify-center items-center font-semibold text-sm text-white bg-orange-400 p-1 sm:p-2 md:py-4 md:px-8 absolute mt-6">
                {secondCard?.title}
              </p>
              <MediaCard
                mediaType={secondCard?.mediaType}
                media={secondCard?.media}
                href={secondCard?.href}
                className="object-cover w-full h-[140px] sm:h-[180px] md:h-[380px] lg:h-[400px]"
              />
              <div className="flex items-center text-white bg-[#363A45] p-3 font-medium text-sm sm:p-6 sm:font-bold sm:text-base md:p-12 md:text-xl">
                {secondCard?.subtitle}
              </div>
            </article>
          ) : null}
        </div>
        <div className="gap-6 w-full hidden xl:flex">
          {thirdCard?.title?.length > 0 ? (
            <article className="flex flex-[4] flex-col">
              <p className="flex justify-center items-center font-semibold text-sm  text-white bg-orange-400 py-4 px-9 absolute mt-6">
                {thirdCard?.title}
              </p>
              <MediaCard
                mediaType={thirdCard?.mediaType}
                media={thirdCard?.media}
                href={thirdCard?.href}
                className="object-cover w-full h-[300px]"
              />
              <div className="flex items-center font-semibold text-xl text-white bg-black p-9 h-full">
                {thirdCard?.subtitle}
              </div>
            </article>
          ) : null}
          <div className="flex flex-col flex-[8] gap-6">
            {fourthCard?.title?.length > 0 ? (
              <article className="flex">
                <p className="flex justify-center items-center font-semibold text-sm text-white bg-orange-400 py-4 px-9 absolute mt-6">
                  {fourthCard?.title}
                </p>
                <MediaCard
                  mediaType={fourthCard?.mediaType}
                  media={fourthCard?.media}
                  href={fourthCard?.href}
                  className="object-cover w-[400px] h-[230px]"
                />
                <div className="flex items-center font-bold text-2xl  text-white bg-black p-11 h-full w-full">
                  {fourthCard?.subtitle}
                </div>
              </article>
            ) : null}
            {fifthCard?.title?.length > 0 ? (
              <article className="flex">
                <p className="flex justify-center items-center font-semibold text-sm text-white bg-orange-400 py-4 px-9 absolute mt-6">
                  {fifthCard?.title}
                </p>
                <MediaCard
                  mediaType={fifthCard?.mediaType}
                  media={fifthCard?.media}
                  href={fifthCard?.href}
                  className="object-cover w-[400px] h-[230px]"
                />
                <div className="flex items-center font-bold text-2xl text-white bg-black p-11 h-full w-full">
                  {fifthCard?.subtitle}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex sm:justify-end mt-3 md:mt-11">
        <button className="py-4 w-full sm:w-auto px-20 font-semibold text-sm bg-black text-white border-white tracking-wide">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default Viewpoint;
