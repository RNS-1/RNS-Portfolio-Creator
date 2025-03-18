import React from 'react';

const CreativeTemplate = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <button
        onClick={onBack}
        className="fixed top-4 left-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 z-50"
      >
        Back to Generator
      </button>

      {/* Header */}
      <header className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-700 to-red-600 opacity-90"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">{data.fullName}</h1>
            <p className="text-2xl text-purple-200 mb-8">{data.title}</p>

            <div className="inline-flex space-x-4 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-full">
                <span className="text-purple-100">{data.email}</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-full">
                <span className="text-purple-100">{data.location}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="bg-white text-purple-800 rounded-full p-3 hover:bg-purple-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white text-purple-800 rounded-full p-3 hover:bg-purple-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-60">
            <h2 className="text-4xl font-bold mb-8 text-green-400">About Me</h2>
            <p className="text-xl leading-relaxed text-gray-300">{data.about}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Skills</h2>
          <div className="flex flex-wrap justify-center">
            {data.skills && data.skills.split(',').map((skill, index) => (
              <span key={index} className="bg-purple-800 text-purple-100 px-6 py-3 rounded-full text-lg font-medium m-2 shadow-lg transform hover:scale-110 transition duration-300">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {data.projectTitle1 && (
              <div className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{data.projectTitle1}</h3>
                    <p className="text-purple-200">{data.projectDesc1}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm">View Project</span>
                  </div>
                </div>
              </div>
            )}

            {data.projectTitle2 && (
              <div className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{data.projectTitle2}</h3>
                    <p className="text-pink-200">{data.projectDesc2}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm">View Project</span>
                  </div>
                </div>
              </div>
            )}

            {data.projectTitle3 && (
              <div className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-2 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-yellow-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{data.projectTitle3}</h3>
                    <p className="text-red-200">{data.projectDesc3}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm">View Project</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-green-400">Experience</h2>

              {data.experience1 && (
                <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.experience1}</h3>
                  <p className="text-gray-400 mt-2">{data.experienceDesc1}</p>
                </div>
              )}

              {data.experience2 && (
                <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.experience2}</h3>
                  <p className="text-gray-400 mt-2">{data.experienceDesc2}</p>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-green-400">Education</h2>

              {data.education1 && (
                <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.education1}</h3>
                </div>
              )}

              {data.education2 && (
                <div className="mb-10 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-green-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.education2}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-2">Let's Connect</h2>
            <p className="text-gray-400">{data.email} · {data.phone}</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>

          <p className="text-gray-500">&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
          <p className="mt-2 text-gray-600">Made with Portfolio Generator</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeTemplate;
