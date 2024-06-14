interface Experience {
  id: number;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  companyWebsite: string;
  startDate: Date;
  endDate: Date | "Present";
  summary: string;
  stack: Array<string>;
}
