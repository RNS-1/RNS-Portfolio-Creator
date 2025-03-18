import React from 'react';

const ModernTemplate = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={onBack}
        className="fixed top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 z-50"
      >
        Back to Generator
      </button>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold">{data.fullName}</h1>
              <p className="text-xl mt-4 text-blue-100">{data.title}</p>

              <div className="flex mt-6">
                {data.github && (
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className="mr-4 text-white hover:text-blue-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-10 md:mt-0 flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">{data.fullName.split(' ').map(n => n[0]).join('')}</span>
              </div>

              <div className="mt-4 text-center">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {data.email}
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.036 11.036 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {data.phone}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {data.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* About Section */}
          <section className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{data.about}</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Skills</h2>
              <div className="flex flex-wrap">
                {data.skills && data.skills.split(',').map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {data.projectTitle1 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="h-56 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{data.projectTitle1}</h3>
                    <p className="text-gray-600">{data.projectDesc1}</p>
                  </div>
                </div>
              )}

              {data.projectTitle2 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="h-56 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{data.projectTitle2}</h3>
                    <p className="text-gray-600">{data.projectDesc2}</p>
                  </div>
                </div>
              )}

              {data.projectTitle3 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="h-56 bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{data.projectTitle3}</h3>
                    <p className="text-gray-600">{data.projectDesc3}</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience Section */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Experience</h2>

                {data.experience1 && (
                  <div className="mb-6 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800">{data.experience1}</h3>
                    <p className="text-gray-600 mt-2">{data.experienceDesc1}</p>
                  </div>
                )}

                {data.experience2 && (
                  <div className="mb-6 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800">{data.experience2}</h3>
                    <p className="text-gray-600 mt-2">{data.experienceDesc2}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Education</h2>

                {data.education1 && (
                  <div className="mb-6 border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800">{data.education1}</h3>
                  </div>
                )}

                {data.education2 && (
                  <div className="mb-6 border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-bold text-gray-800">{data.education2}</h3>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="flex justify-center space-x-4 mb-6">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
          <p>&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
          <p className="mt-2 text-blue-200">Made with Portfolio Generator</p>
        </div>
      </footer>
    </div>
  );
};

export default ModernTemplate;
