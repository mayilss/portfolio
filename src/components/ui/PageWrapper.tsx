import React from "react";

type IProps = { children: React.ReactNode } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export default function PageWrapper({ className, children, ...props }: IProps) {
  return (
    <section
      className={`h-screen flex justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
