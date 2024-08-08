import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";

// Pepperoni checkbox tests
test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
  userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});

// Size select element test
test("size select element is rendered and functional", () => {
  render(<App />);
  const sizeSelect = screen.getByRole('combobox', { name: /size/i });
  expect(sizeSelect).toBeInTheDocument();
  
  // Optionally, test interaction
  userEvent.selectOptions(sizeSelect, screen.getByRole('option', { name: /large/i }));
  expect(sizeSelect.value).toBe('large');
});

// Contact Info text box test
test("contact info text box is rendered", () => {
  render(<App />);
  const contactInfoInput = screen.getByLabelText(/contact info/i);
  expect(contactInfoInput).toBeInTheDocument();
});

// Submit Order button test
test("submit order button is rendered", () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /submit order/i });
  expect(submitButton).toBeInTheDocument();
});
