import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginModal from "@/app/components/modals/loginModal";

describe("LoginModal", () => {
  it("should render properly", () => {
    render(<LoginModal handleModalStateChange={undefined} />);
    expect(screen.getByTestId("loginbtn")).toBeInTheDocument();
    expect(screen.getByTestId("logininput")).toBeInTheDocument();

    const input = screen.getByTestId("logininput");
    const btn = screen.getByTestId("loginbtn");

    fireEvent.change(input, { target: { value: "mo" } });
    btn.click();
    expect(screen.getByTestId("errormessage")).toBeInTheDocument();
    expect(screen.getByTestId("errormessage")).toHaveTextContent(
      "Name should be at least 3 characters"
    );
  });
});
