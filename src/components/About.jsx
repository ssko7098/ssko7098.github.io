import React from "react";

const About = () => (
  <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16 px-8 md:px-20 lg:px-40">
    <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">About Me</h2>
    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-6 text-center">
    I love tackling projects that challenge me to think critically and push the boundaries of what technology can do. Whether it’s coding, exploring new technologies, or solving complex problems, I’m always looking for ways to create meaningful impact.
    </p>
    <div className="text-center">
      <a
        href="/25.01 CV Sebastian Skontos.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 text-sm md:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Download My Resume
      </a>
    </div>
  </section>
);

export default About;