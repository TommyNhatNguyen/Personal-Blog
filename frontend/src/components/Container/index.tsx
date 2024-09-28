import { childrenType } from "../../utilities/types";

const Container = ({ children }: childrenType) => {
  return <div className="container relative">{children}</div>;
};

export default Container;
