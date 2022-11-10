import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ShowDetail from "./ShowDetail";

describe("ShowDetail", () => {
  it("should render a show detail view witha not found message", () => {
    render(<ShowDetail />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Not Found - 404"
    );
  });
});
