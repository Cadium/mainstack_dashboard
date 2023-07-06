import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./index.style";

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer data-testid="spinner" />
  </SpinnerOverlay>
);

export default Spinner;
