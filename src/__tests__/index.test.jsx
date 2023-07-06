import React from "react";
import { render, screen } from "@testing-library/react";
import Graph from "../components/Graph/";

test("renders the Graph component without errors", () => {
  render(<Graph />);
});

test("renders the loading spinner initially", () => {
  render(<Graph />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement).toBeInTheDocument();
});
