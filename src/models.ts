import { Timestamp } from "firebase-admin/firestore";

export interface Experience {
  id: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  companyWebsite: string;
  startDate: Timestamp;
  endDate: Timestamp | "Present";
  summary: string;
  stack: Array<string>;
}
