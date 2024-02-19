import React from "react";

const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <button type="button">{children}</button>;
};

export default Button;
