import PageWrapper from "@/components/ui/PageWrapper";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <PageWrapper className="justify-center px-3 md:px-20 py-24 bg-contact bg-cover bg-start">
      <div className="w-full h-full flex flex-col justify-between space-y-8 xl:space-y-0">
        <div className="text-center lg:text-end space-y-5 lg:space-y-0">
          <h3 className="text-35 font-bold">
            Available for freelance opportunities
          </h3>
          <p className="text-20">
            Have an exciting project you need help with?
          </p>
          <p className="text-20">
            Send me an email or contact me via direct message!
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-end h-1 hover:h-9 duration-300 bg-purple w-min my-4">
            <a
              href="mailto:mayilsafarzada@gmail.com"
              className="text-20 lg:text-25 mx-1"
            >
              mayilsafarzada@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Linkedin width={20} />
            <a
              href="https://www.linkedin.com/in/mayil-safarzada"
              target="_blank"
              className="text-20"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Github width={20} />
            <a
              href="https://github.com/mayilss"
              target="_blank"
              className="text-20"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
