import { ReactNode } from "react";
import { Link } from "react-router-dom";

type buttonType = {
  children: ReactNode;
  link?: any;
};

const Button = ({ link, children }: buttonType) => {
  return (
    <Link
      className="h-[42px] bg-[var(--black-cl)] text-[var(--white-cl)] flex items-center justify-center px-6 rounded-lg hover:text-white hover:bg-[var(--blue-dark-cl)]"
      to={link}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default Button;
