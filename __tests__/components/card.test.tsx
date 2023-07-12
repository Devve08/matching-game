import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@/app/components/card";

describe("CardComponent", () => {
  it("should render properly", () => {
    render(
      <Card
        cardImage={""}
        handleCardClick={() => {}}
        flipped={false}
        index={0}
      />
    );
    expect(screen.getByTestId("frontimage")).toBeInTheDocument();
    expect(screen.getByTestId("backimage")).toBeInTheDocument();
  });
});
