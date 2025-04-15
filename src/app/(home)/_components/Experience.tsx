import ExperienceList from "@/components/experience/ExperienceList";
import PageWrapper from "@/components/ui/PageWrapper";
import { db } from "@/lib/firebase-admin";
import { type Experience } from "@/models";

export default async function Experience() {
  const snapshot = await db.collection("experience").get();
  const experienceData: Array<Experience> = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<Experience>;

  return (
    <PageWrapper className="bg-gray pt-32 px-20 flex-col justify-start pb-8">
      <div className="max-w-[730px] w-full">
        <h2 className="text-35 lg:text-6xl mb-10 text-center font-semibold">
          Professional Experience
        </h2>
        <ExperienceList experienceData={experienceData} />
      </div>
    </PageWrapper>
  );
}
