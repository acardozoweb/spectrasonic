import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

afterEach(cleanup);

describe("About component", () => {
  // First Test
  it("renders", () => {
    render(<Header />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<Header />);
      expect(asFragment()).toMatchSnapshot();
  })
});
