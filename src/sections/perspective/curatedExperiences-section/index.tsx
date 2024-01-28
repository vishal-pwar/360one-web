import CuratedExperienceSlider from "@/components/slider-perspective/curated-experiences";
import { getCuratedExperienceSection } from "@/services/perspective";

const CuratedExperence = async () => {
  const response = await getCuratedExperienceSection();
  return (
    <section className="bg-black">
      <CuratedExperienceSlider
        response={response?.data?.attributes?.experiences}
      />
    </section>
  );
};
export default CuratedExperence;
