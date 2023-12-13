import { getTeamLeadersSection } from "@/services/leadership";
import TeamSliderSection from "./team-section";

const TeamLeadersWrapper = async () => {
  const response = await getTeamLeadersSection();
  const cards = response?.data?.attributes?.team;
  const cardText = response?.data?.attributes?.team;
  const cardTitle = response?.data?.attributes?.team;
  const title = response?.data?.attributes?.team;
  const text = response?.data?.attributes?.team;
  const content = {
    sectionTitle: title,
    sectionText: text,
    text: cardText,
    title: cardTitle,
  };
  return <TeamSliderSection cards={cards} content={content} />;
};

export default TeamLeadersWrapper;
