import { render, screen } from "@testing-library/react";
import App from "./App";

test("Initial commit", () => {
  render(<App />);
  const linkElement = screen.getByText(/Logic will go brrrr here/i);
  expect(linkElement).toBeInTheDocument();
});
