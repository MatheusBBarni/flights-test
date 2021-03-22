import { render, screen } from "@testing-library/react";
import Modal from "../src/components/Modal";

describe("Modal", () => {
  const modalId = 'modal';

  it('Should render', () => {
    render(
      <Modal show={true} />
    );
    expect(screen.getByTestId(modalId)).toBeInTheDocument();
  });
});