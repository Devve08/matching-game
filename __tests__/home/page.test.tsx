import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/home/page";

describe("GamePage", () => {
  it("should render properly", () => {
    render(<Page />);
  });

  
});
