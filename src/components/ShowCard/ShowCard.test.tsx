import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShowCard } from "./ShowCard";

describe("ShowCard", () => {
  it("should render a show card with valid props", () => {
    const props = {
      id: 1,
      name: "The Good Doctor",
      genres: ["Drama", "Medical"],
      rating: 7.7,
      thumbnail:
        "https://static.tvmaze.com/uploads/images/original_untouched/424/1061046.jpg",
    };
    render(<ShowCard {...props} />);
    expect(screen.getByRole("heading", { level: 5 })).toHaveTextContent(
      "The Good Doctor"
    );
  });
});
