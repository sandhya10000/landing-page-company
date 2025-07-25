import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Web Development Trends in 2025",
    excerpt:
      "Stay ahead in tech with the latest trends in frontend, backend, AI integration, and more.",
    image: "https://source.unsplash.com/featured/?technology",
    author: "Sandhya Kumari",
    date: "July 25, 2025",
  },
  {
    id: 2,
    title: "How to Improve Website Speed & Performance",
    excerpt:
      "A detailed guide on optimizing loading times, image compression, and lazy loading.",
    image: "https://source.unsplash.com/featured/?website",
    author: "Team Infotech",
    date: "July 20, 2025",
  },
  {
    id: 3,
    title: "UI/UX Principles You Should Never Ignore",
    excerpt:
      "Design tips that increase user engagement and keep users coming back.",
    image: "https://source.unsplash.com/featured/?design",
    author: "Infotech UI Team",
    date: "July 10, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {post.date} · by {post.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
