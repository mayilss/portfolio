import { Timestamp } from "firebase-admin/firestore";

export function formatDate(timestamp: Timestamp | "Present") {
  if (timestamp === "Present") return timestamp;
  const date = timestamp.toDate();
  const dateString = date.toDateString();
  const dateArray = dateString.split(" ");
  return `${dateArray[1]}, ${dateArray[3]}`;
}

export const handleNavItemClick = (pageIndex: number) => {
  scrollTo({ top: pageIndex * window.innerHeight, behavior: "smooth" });
};
