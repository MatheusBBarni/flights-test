import { render, screen } from "@testing-library/react";
import AlertModal from "../src/components/AlertModal";

describe("AlertModal", () => {
  const alertTitleId = 'alert-title';
  const typeError = 'type-error';
  const typeSuccess = 'type-success';
  const typeWarning = 'type-warning';

  it("Should render type 'SUCCESS' without crashing", () => {
    render(
      <AlertModal
        show={true}
        onClose={console.log}
        title="Jest test success"
        type="SUCCESS"
      />
    );
    expect(screen.getByTestId(typeSuccess)).toBeInTheDocument();
  });
  it("Should render type 'ERROR' without crashing", () => {
    render(
      <AlertModal
        show={true}
        onClose={console.log}
        title="Jest test error"
        type="ERROR"
      />
    );
    expect(screen.getByTestId(typeError)).toBeInTheDocument();
  });
  it("Should render type 'WARNING' without crashing", () => {
    render(
      <AlertModal
        show={true}
        onClose={console.log}
        title="Jest test warning"
        type="WARNING"
      />
    );
    expect(screen.getByTestId(typeWarning)).toBeInTheDocument();
  });
});