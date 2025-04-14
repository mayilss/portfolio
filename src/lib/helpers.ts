export function formatDate(date: Date | "Present") {
  if (date === "Present") return date;
  const dateString = date.toDateString();
  const dateArray = dateString.split(" ");
  return `${dateArray[1]}, ${dateArray[3]}`;
}

export const handleNavItemClick = (pageIndex: number) => {
  scrollTo({ top: pageIndex * window.innerHeight, behavior: "smooth" });
};
