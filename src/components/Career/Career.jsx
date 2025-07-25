import React from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer (React.js)",
    type: "Full Time",
    location: "Remote / Bangalore",
    description:
      "We are looking for a skilled React developer to build modern web apps with an eye for design and performance.",
  },
  {
    id: 2,
    title: "Node.js Backend Developer",
    type: "Full Time",
    location: "Remote / Mumbai",
    description:
      "Join our team to develop robust backend services and REST APIs using Node.js and MongoDB.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Contract / Freelance",
    location: "Remote",
    description:
      "Design modern, intuitive user experiences and interfaces that delight users.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Join Our Team</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          We're always looking for passionate and talented individuals to be a
          part of our growing team. Explore our current openings below.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {job.type} · {job.location}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {job.description}
              </p>
              <a
                href="mailto:hr@infotechsolutions.com?subject=Application for Job Opening"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-medium">
            Don’t see a role that fits?{" "}
            <a
              href="mailto:hr@infotechsolutions.com"
              className="text-blue-600 hover:underline"
            >
              Email us your resume
            </a>{" "}
            and we’ll keep you in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
