import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm from "./SignupForm.jsx";

describe("SignupForm", () => {
  it("shows an error when submitted empty", async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    await user.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(screen.getByRole("alert")).toHaveTextContent("Email is required");
  });

  it("shows an error for an invalid email", async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    await user.type(screen.getByLabelText(/email address/i), "notanemail");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(screen.getByRole("alert")).toHaveTextContent("valid email");
  });

  it("succeeds for a valid email", async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(screen.getByRole("status")).toHaveTextContent("Subscribed!");
  });
});