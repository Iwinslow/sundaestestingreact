import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("summary form", () => {
  test("checkbox is unchecked by default and button disabled", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
    const button = screen.getByRole("button", { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();

    expect(button).toBeDisabled();
  });

  test("checking checkbox enables button and unchecking checkbox again, disables button", async () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
    const button = screen.getByRole("button", { name: /confirm order/i });
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
    await userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

  test("when mouse over 'Terms and conditions' display a pharagraph with the message 'No ice cream will actually be delivered'", async () => {
    render(<SummaryForm />);
    const nullPopMessage = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopMessage).not.toBeInTheDocument();

    const popOver = screen.getByText(/terms and conditions/i);
    await userEvent.hover(popOver);
    const popMessage = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popMessage).toBeVisible();
    await userEvent.unhover(popOver);
    expect(popMessage).not.toBeVisible();
  });
});
