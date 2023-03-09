// importing relevant libraries;
import { render, screen, fireEvent } from '@testing-library/react';

// import app module;
import App from './App';

// render navbar
test('renders navbar', () => {
  render(<App />);
  const navbarElement : HTMLElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

// render main component
test('renders main component', () => {
  render(<App />);
  const mainElement : HTMLElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});

// if modal is hidden by default 
test('modal is hidden by default', () => {
  render(<App />);
  const modalElement : HTMLElement | null = screen.queryByRole('dialog');
  expect(modalElement).not.toBeInTheDocument();
});

// render main component when toggle modal function is not clicked
test("renders main component with toggle modal function", () => {
    render(<App />);
    const mainElement : HTMLElement = screen.getByTestId("btn");
    expect(mainElement).toBeInTheDocument();
    fireEvent.click(mainElement);
    const modalElement : HTMLElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  // does not render modal component by default 
 test("does not render Modal component by default", () => {
    render(<App />);
    expect(screen.queryByRole("dialog", { name: "Upload Modal" })).toBeNull();
  });

  // load local storage on mount 
test("loads items from local storage on mount", () => {
    const mockStoredItems : string = '[{"name": "item 1"}, {"name": "item 2"}]';
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(mockStoredItems);
    render(<App />);
    expect(mockStoredItems).toEqual(
      mockStoredItems
    );
});







  
  
  
  
  
  
  


