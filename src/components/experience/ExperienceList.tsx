import ExperienceItem from "./ExperienceItem";
import { Accordion } from "../ui/Accordion";

type IProps = {
  experienceData: Array<Experience>;
};

export default function ExperienceList({ experienceData }: IProps) {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {experienceData.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </Accordion>
  );
}
