import React from "react";
import { childrenType } from "../../utilities/types";

const Container = ({ children }: childrenType) => {
  return <div className="container">{children}</div>;
};

export default Container;
