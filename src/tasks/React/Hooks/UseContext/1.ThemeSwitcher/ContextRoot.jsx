/* eslint-disable no-unused-vars */
import { useState } from "react";

import { ChildComponent1 } from "./ChildComponent1";
import { ChildComponent5 } from "./ChildComponent5";

export const ContextRoot = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    city: "New York",
    id: 3,
  };

  return (
    <>
      <ChildComponent1 theme={theme} toggleTheme={toggleTheme} />
      <ChildComponent5 user={user} />
    </>
  );
};
