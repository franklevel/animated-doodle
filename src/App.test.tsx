import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("NotFound", () => {
  it("should render a not found", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Welcome to Movie Finder"
    );
  });
});
