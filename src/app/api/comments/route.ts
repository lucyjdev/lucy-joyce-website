import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET handler to fetch comments for a specific blog post
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Missing slug parameter" },
      { status: 400 }
    );
  }

  try {
    // Get the blog post by slug
    const blogPost = await prisma.blogPost.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!blogPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Get approved comments for the blog post
    const comments = await prisma.comment.findMany({
      where: {
        blogPostId: blogPost.id,
        isApproved: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        content: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ comments });
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST handler to add a new comment
export async function POST(req: NextRequest) {
  try {
    const { name, email, content, slug } = await req.json();

    // Simple validation
    if (!name || !email || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get or create blog post
    let blogPost = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (!blogPost) {
      // Create the blog post if it doesn't exist yet
      blogPost = await prisma.blogPost.create({
        data: {
          slug,
          title: slug.replace(/-/g, " "), // Simple title generation from slug
        },
      });
    }

    // Create the comment
    const comment = await prisma.comment.create({
      data: {
        name,
        email,
        content,
        blogPostId: blogPost.id,
        // You can set isApproved: true if you don't want moderation
        // For now, it defaults to false requiring approval
      },
    });

    return NextResponse.json(
      {
        message: "Comment submitted successfully and pending approval",
        commentId: comment.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
