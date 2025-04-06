/* eslint-disable react/prop-types */
export const ChildComponent3 = ({ theme, toggleTheme }) => {
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>
        The current theme is: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
