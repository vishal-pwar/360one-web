import InMediaCards from "@/components/slider-perspective/media";
import { getInMediaSection } from "@/services/perspective/index";

const Media = async () => {
  const response = await getInMediaSection();

  const mediaData = response?.data?.attributes?.media;
  console.log(mediaData);
  return (
    <>
      {mediaData?.title !== null &&
        mediaData?.subtitle !== null &&
        mediaData?.articles?.data?.length !== 0 && (
          <InMediaCards response={response} />
        )}
    </>
  );
};
export default Media;
