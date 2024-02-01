import ViewpointSlider from "@/components/slider-perspective/viewpoint";
import { getViewpointSection } from "@/services/perspective";

const Viewpoint = async () => {
  const response = await getViewpointSection();

  return (
    <div className="bg-[#F4F0EF]">
      <ViewpointSlider response={response?.data?.attributes?.viewpoint} />
    </div>
  );
};

export default Viewpoint;
