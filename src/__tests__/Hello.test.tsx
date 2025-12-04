import { render, screen } from "@testing-library/react";
import Hello from "../components/testing/Hello";

describe("Hello Component", () => {
  test("renders name correctly", () => {
    render(<Hello name="Jiyong" />);

    const heading = screen.getByText(/Hello, Jiyong!/i);

    expect(heading).toBeInTheDocument();
  });
});
