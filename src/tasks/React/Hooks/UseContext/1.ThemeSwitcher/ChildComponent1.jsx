/* eslint-disable react/prop-types */
import { ChildComponent2 } from "./ChildComponent2";

export const ChildComponent1 = ({ theme, toggleTheme }) => {
  return <ChildComponent2 theme={theme} toggleTheme={toggleTheme} />;
};
