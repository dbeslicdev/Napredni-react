/* eslint-disable react/prop-types */
import { ChildComponent3 } from "./ChildComponent3";

export const ChildComponent2 = ({ theme, toggleTheme }) => {
  return <ChildComponent3 theme={theme} toggleTheme={toggleTheme} />;
};
