import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the portfolio name", () => {
    render(<Footer />);
    const portfolioName = screen.getByText("My Portfolio");
    expect(portfolioName).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Footer />);

    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");

    const certificatesLink = screen.getByRole("link", {
      name: /certificates/i,
    });
    expect(certificatesLink).toBeInTheDocument();
    expect(certificatesLink).toHaveAttribute("href", "/certificates");

    const blogLink = screen.getByRole("link", { name: /blog/i });
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");

    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/projects");
  });

  it("renders the homepage link", () => {
    render(<Footer />);

    // Find the 'My Portfolio' link which points to home
    const homeLink = screen.getByRole("link", { name: "My Portfolio" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders the copyright text with current year", () => {
    // Mock the Date to provide a consistent year for testing
    const originalDate = global.Date;
    const mockDate = class extends Date {
      getFullYear() {
        return 2025; // Hardcoded for testing purposes
      }
    };
    global.Date = mockDate as DateConstructor;

    render(<Footer />);

    const copyrightText = screen.getByText(/© 2025 My Portfolio/i);
    expect(copyrightText).toBeInTheDocument();

    // Restore original Date
    global.Date = originalDate;
  });
});
