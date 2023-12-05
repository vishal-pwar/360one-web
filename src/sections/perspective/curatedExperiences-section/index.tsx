import { getCuratedExperienceSection } from "@/services/perspective";
import CuratedExperienceSlider from "@/components/slider-perspective/curated-experiences";

const CuratedExperence = async () => {
  const response = await getCuratedExperienceSection();
  return (
    <section className="p-6 phablet:p-12 tablet:p-0 tablet:container tablet:mt-20">
      <CuratedExperienceSlider
        response={response?.data?.attributes?.experiences}
      />
    </section>
  );
};
export default CuratedExperence;
