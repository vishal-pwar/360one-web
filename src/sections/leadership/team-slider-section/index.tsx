import { getTeamLeadersSection } from "@/services/leadership";
import TeamSliderSection from "./team-section";

const TeamLeadersWrapper = async () => {
  const response = await getTeamLeadersSection();
  const { cards, cardText, cardTitle, title, text } =
    response?.data?.attributes?.team;
  const content = {
    sectionTitle: title,
    sectionText: text,
    text: cardText,
    title: cardTitle,
  };
  return <TeamSliderSection cards={cards} content={content} />;
};

export default TeamLeadersWrapper;
