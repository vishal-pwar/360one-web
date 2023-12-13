import { getTeamLeadersSection } from "@/services/leadership";
import TeamSliderSection from "./team-section";

const TeamLeadersWrapper = async () => {
  const response = await getTeamLeadersSection();
  const cards = response?.data?.attributes?.team?.cards;
  const cardText = response?.data?.attributes?.team?.cardText;
  const cardTitle = response?.data?.attributes?.team?.cardTitle;
  const title = response?.data?.attributes?.team?.title;
  const text = response?.data?.attributes?.team?.text;
  const content = {
    sectionTitle: title,
    sectionText: text,
    text: cardText,
    title: cardTitle,
  };
  return <TeamSliderSection cards={cards} content={content} />;
};

export default TeamLeadersWrapper;
