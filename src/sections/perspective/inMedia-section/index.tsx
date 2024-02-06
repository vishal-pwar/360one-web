import InMediaCards from "@/components/slider-perspective/media";
import { getInMediaSection } from "@/services/perspective/index";

const Media = async () => {
  const response = await getInMediaSection();

  const mediaData = response?.data?.attributes?.media;
  return (
    <>
      {mediaData?.title === null &&
      mediaData?.subtitle === null &&
      mediaData?.media_cards?.data?.length == 0 ? null : (
        <InMediaCards response={response} />
      )}
    </>
  );
};
export default Media;
