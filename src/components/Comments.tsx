"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type Comment = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
};

type CommentsProps = {
  slug: string;
};

type FormData = {
  name: string;
  email: string;
  content: string;
};

export default function Comments({ slug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Fetch comments when component mounts
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/comments?slug=${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data.comments || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          slug,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      // Success - clear form and show success message
      reset();
      setSubmitStatus({
        type: "success",
        message:
          "Your comment has been submitted and is pending approval. Thank you!",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          type: null,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Error submitting comment:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit comment. Please try again.",
      });
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* Comments List */}
      <div className="mb-10">
        {isLoading ? (
          <p className="text-gray-500">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{comment.name}</h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Form */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Leave a comment</h3>

        {submitStatus.type && (
          <div
            className={`p-4 mb-4 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={`w-full p-3 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email <span className="text-red-500">*</span>{" "}
              <span className="text-gray-500 text-xs">
                (will not be published)
              </span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block mb-2 text-sm font-medium">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              rows={5}
              className={`w-full p-3 border rounded-md ${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
              {...register("content", {
                required: "Comment is required",
                minLength: {
                  value: 3,
                  message: "Comment must be at least 3 characters",
                },
              })}
            />
            {errors.content && (
              <span className="text-sm text-red-500">
                {errors.content.message}
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Comment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
