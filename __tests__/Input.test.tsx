import { render, screen } from "@testing-library/react";
import Input from "../src/components/Input";

describe("input", () => {
  const inputId = 'input';

  it('Should render', () => {
    render(
      <Input
        label="Jest test"
      />
    );
    expect(screen.getByTestId(inputId)).toBeInTheDocument();
  });
});