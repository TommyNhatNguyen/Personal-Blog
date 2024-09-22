import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type buttonType = {
  children: ReactNode;
  link?: any;
};

const Button = ({ link, children }: buttonType) => {
  return (
    <Link
      className="h-[32px] bg-[var(--black-cl)] text-[var(--white-cl)] flex items-center justify-center px-2 rounded-lg hover:text-white hover:bg-[var(--blue-dark-cl)]"
      to={link}
    >
      {children}
    </Link>
  );
};

export default Button;
