import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { MapPin, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="h-screen bg-gray pt-24 px-20 flex flex-col justify-center items-center">
      <div className="max-w-[730px] w-full">
        <Accordion type="single" collapsible className="space-y-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-between items-center w-full">
                <h5 className="font-bold text-18">
                  Frontend Engineer @ Bestcomp Group
                </h5>
                <p className="font-bold text-18">2022, Nov - Present</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-8">
                    <p className="flex items-center space-x-2">
                      <MapPin width="1rem" />
                      <span className="text-16">Baku, Azerbaijan</span>
                    </p>
                    <a
                      className="flex items-center space-x-2"
                      href="https://bestcomp.net/en"
                      target="_blank"
                    >
                      <SquareArrowOutUpRight width="1rem" />
                      <span className="text-16 hover:underline">
                        https://bestcomp.net/en
                      </span>
                    </a>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero, placeat sapiente necessitatibus molestias magni
                    blanditiis exercitationem aperiam corporis!
                  </p>
                  <div className="flex space-x-2">
                    <Badge className="bg-blue px-3 py-1 text-14">React</Badge>
                    <Badge className="bg-blue px-3 py-1 text-14">
                      TypeScript
                    </Badge>
                  </div>
                </div>
                <div className="w-20">
                  <Image
                    src={"/images/bcg-logo.png"}
                    alt="bestcomp"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
