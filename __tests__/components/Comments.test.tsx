import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Comments from "@/components/Comments";

// Mock fetch API
global.fetch = jest.fn();

describe("Comments", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock successful fetch for comments
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            comments: [
              {
                id: "1",
                name: "Test User",
                content: "This is a test comment",
                createdAt: "2025-04-01T12:00:00Z",
              },
            ],
          }),
      })
    );
  });

  it("renders the comments section with title", () => {
    render(<Comments slug="test-slug" />);
    expect(screen.getByText("Comments")).toBeInTheDocument();
  });

  it("displays loading state initially", () => {
    render(<Comments slug="test-slug" />);
    expect(screen.getByText("Loading comments...")).toBeInTheDocument();
  });

  it("renders fetched comments", async () => {
    render(<Comments slug="test-slug" />);

    await waitFor(() => {
      expect(screen.queryByText("Loading comments...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("This is a test comment")).toBeInTheDocument();
    expect(screen.getByText("April 1, 2025")).toBeInTheDocument();
  });

  it("displays form validation errors", async () => {
    render(<Comments slug="test-slug" />);

    const submitButton = screen.getByRole("button", {
      name: /submit comment/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Comment is required")).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    // Mock successful post request
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );

    render(<Comments slug="test-slug" />);

    await waitFor(() => {
      expect(screen.queryByText("Loading comments...")).not.toBeInTheDocument();
    });

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Jane Doe" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/comment/i), {
      target: { value: "This is a test comment submission." },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /submit comment/i }));

    // Check if fetch was called correctly
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Jane Doe",
          email: "jane@example.com",
          content: "This is a test comment submission.",
          slug: "test-slug",
        }),
      });
    });

    // Check for success message
    await waitFor(() => {
      expect(
        screen.getByText(/your comment has been submitted/i)
      ).toBeInTheDocument();
    });
  });
});
