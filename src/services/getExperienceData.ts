import { db } from "@/lib/firebase-admin";
import { Experience } from "@/models";

export default async function getExperienceData() {
  if (!db) {
    console.warn(
      "Firestore is not initialized. Returning empty experience list."
    );
    return [] as Array<Experience>;
  }

  const snapshot = await db.collection("experience").get();
  const experienceData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<Experience>;

  return experienceData;
}
