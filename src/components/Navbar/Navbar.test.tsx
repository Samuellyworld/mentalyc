// import relevant module
import { render, screen } from "@testing-library/react";

// import component
import Navbar from "./Navbar";

// Navbar test
describe("Navbar", () => {
    // render the component
  it("renders the Navbar component", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("mentalyc logo");
    expect(logo).toBeInTheDocument();
  });
});
