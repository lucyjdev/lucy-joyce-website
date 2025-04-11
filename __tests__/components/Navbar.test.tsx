import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the logo text", () => {
    render(<Navbar />);
    const logoText = screen.getByText("Lucy Joyce");
    expect(logoText).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

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
});
