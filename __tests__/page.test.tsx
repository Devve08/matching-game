import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/page";

describe("LoginPage", () => {
  it("should render properly", () => {
    render(<Page />);
    const logo = screen.getByRole('img')
    expect(logo).toBeTruthy()
  });
});
