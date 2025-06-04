import React from "react";
import { cn } from "@/lib/utils";

type IProps = { children: React.ReactNode } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default function PageWrapper({ className, children, ...props }: IProps) {
  return (
    <section
      className={cn("min-h-screen flex flex-col items-center", className)}
      {...props}
    >
      {children}
    </section>
  );
}
