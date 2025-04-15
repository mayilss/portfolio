import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { MapPin, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import Image from "next/image";
import { formatDate } from "@/lib/helpers";
import { Experience } from "@/models";

type IProps = {
  experience: Experience;
};

export default function ExperienceItem({ experience }: IProps) {
  return (
    <AccordionItem value={String(experience.id)} className="border-0">
      <AccordionTrigger className="bg-purple px-5 rounded-lg">
        <div className="flex justify-around items-center w-full">
          <h5 className="font-bold text-12 sm:text-14 md:text-18">
            {experience.jobTitle} @ {experience.companyName}
          </h5>
          <p className="font-bold text-12 sm:text-14 md:text-18">
            {`${formatDate(experience.startDate)} - ${formatDate(
              experience.endDate
            )}`}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-purple-darker mt-3 rounded-lg p-5">
        <div className="flex justify-between items-center gap-x-2">
          <div className="space-y-4 flex-auto">
            <div className="flex items-center space-x-8">
              <p className="flex items-center space-x-2">
                <MapPin width="1rem" />
                <span className="text-12 md:text-16">
                  {experience.companyLocation}
                </span>
              </p>
              <a
                className="flex items-center space-x-2"
                href={experience.companyWebsite}
                target="_blank"
              >
                <SquareArrowOutUpRight width="1rem" />
                <span className="text-12 md:text-16 hover:underline">
                  {experience.companyWebsite}
                </span>
              </a>
            </div>
            <p className="text-12 md:text-16">{experience.summary}</p>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-blue px-3 py-1 text-12 md:text-14"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex-auto hidden sm:block">
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
