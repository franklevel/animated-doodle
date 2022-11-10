import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should render a not found", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Not Found - 404"
    );
  });
});
