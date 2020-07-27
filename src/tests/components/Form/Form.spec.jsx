import React from "react";
import { render } from "@testing-library/react";

import Form from "../../../components/Form";

describe("<Form>", () => {

  test("should have name input", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="name"]`)
    ).toBeInTheDocument();
  });

  test("should have email input", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="email"]`)
    ).toBeInTheDocument();
  });

  test("should have telephone input", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="telephone"]`)
    ).toBeInTheDocument();
  });

  test("should have message input", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="message"]`)
    ).toBeInTheDocument();
  });

  test("should have attachedFile input", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="attachedFile"]`)
    ).toBeInTheDocument();
  });

  test("should have submit button", () => {
    const { container } = render(<Form />);
  
    expect(
      container.querySelector(`[data-testid="submitButton"]`)
    ).toBeInTheDocument();
  });
});
