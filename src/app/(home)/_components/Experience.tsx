import ExperienceList from "@/components/experience/ExperienceList";
import PageWrapper from "@/components/ui/PageWrapper";

const experienceData: Array<Experience> = [
  {
    id: 1,
    companyName: "Bestcomp Group",
    companyLogo: "/images/bcg-logo.png",
    companyLocation: "Baku, Azerbaijan",
    companyWebsite: "https://bestcomp.net/en",
    jobTitle: "Frontend Engineer",
    startDate: new Date(2022, 10),
    endDate: "Present",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, placeat sapiente necessitatibus molestias magni blanditiis exercitationem aperiam corporis!",
    stack: [
      "React",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
    ],
  },
  {
    id: 2,
    companyName: "Bestcomp Group",
    companyLogo: "/images/bcg-logo.png",
    companyLocation: "Baku, Azerbaijan",
    companyWebsite: "https://bestcomp.net/en",
    jobTitle: "Frontend Engineer",
    startDate: new Date(2022, 10),
    endDate: "Present",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, placeat sapiente necessitatibus molestias magni blanditiis exercitationem aperiam corporis!",
    stack: [
      "React",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
    ],
  },
  {
    id: 3,
    companyName: "Bestcomp Group",
    companyLogo: "/images/bcg-logo.png",
    companyLocation: "Baku, Azerbaijan",
    companyWebsite: "https://bestcomp.net/en",
    jobTitle: "Frontend Engineer",
    startDate: new Date(2022, 10),
    endDate: "Present",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, placeat sapiente necessitatibus molestias magni blanditiis exercitationem aperiam corporis!",
    stack: [
      "React",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
    ],
  },
];

export default function Experience() {
  return (
    <PageWrapper className="bg-gray pt-24 px-20 flex-col">
      <div className="max-w-[730px] w-full">
        <h2 className="text-6xl mb-10 text-center font-semibold">
          Professional Experience
        </h2>
        <ExperienceList experienceData={experienceData} />
      </div>
    </PageWrapper>
  );
}
