import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Derrick`", () => {
  render(<App />);
  const topHeading = screen.getByRole("heading", {
    name: /hi, i'm derrick/i,
    level: 1
  });
  expect(topHeading).toBeInTheDocument();
});
