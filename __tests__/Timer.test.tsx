import { render, screen } from "@testing-library/react";
import Timer from "../src/components/Timer";

describe("Timer", () => {
  const countdownValue = 'countdown-value';
  const alertTitleId = 'alert-title';

  it('Should render', () => {
    render(<Timer />);
    expect(screen.getByTestId(countdownValue)).toBeInTheDocument();
  });
  it('Should render warning modal', () => {
    render(<Timer minutes="1" seconds="00" />);
    setTimeout(() => {
      expect(screen.getByTestId(alertTitleId)).toBeInTheDocument();
    }, 10000);
  });
});