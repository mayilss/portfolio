import { db } from "@/lib/firebase-admin";
import { Experience } from "@/models";

export default async function getExperienceData() {
  const snapshot = await db.collection("experience").get();
  const experienceData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<Experience>;

  return experienceData;
}
