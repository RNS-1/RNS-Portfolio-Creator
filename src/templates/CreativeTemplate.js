import React from 'react';

const CreativeTemplate = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900 via-black to-indigo-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 opacity-80"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 tracking-tight">{data.fullName}</h1>
            <p className="text-2xl text-purple-100 mb-10 font-light">{data.title}</p>

            <div className="inline-flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-6 py-3 rounded-full border border-white border-opacity-20">
                <span className="text-purple-100">{data.email}</span>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-6 py-3 rounded-full border border-white border-opacity-20">
                <span className="text-purple-100">{data.location}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer" 
                  className="bg-white text-purple-800 rounded-full p-4 hover:bg-purple-100 hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" 
                  className="bg-white text-purple-800 rounded-full p-4 hover:bg-purple-100 hover:scale-110 transition duration-300 shadow-lg">
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
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-700 transform hover:shadow-cyan-900/20 hover:shadow-2xl transition duration-500">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About Me
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">{data.about}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills && data.skills.split(',').map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-purple-700 to-indigo-800 text-purple-100 px-6 py-4 rounded-full text-lg font-medium shadow-lg transform hover:scale-105 transition duration-300 border border-purple-500/30">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {data.projectTitle1 && (
              <div className="group relative overflow-hidden rounded-3xl transform hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{data.projectTitle1}</h3>
                    <p className="text-indigo-100 group-hover:text-indigo-50 transition-colors duration-300">{data.projectDesc1}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 text-sm group-hover:bg-white group-hover:bg-opacity-30 transition duration-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.projectTitle2 && (
              <div className="group relative overflow-hidden rounded-3xl transform hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{data.projectTitle2}</h3>
                    <p className="text-pink-100 group-hover:text-pink-50 transition-colors duration-300">{data.projectDesc2}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 text-sm group-hover:bg-white group-hover:bg-opacity-30 transition duration-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.projectTitle3 && (
              <div className="group relative overflow-hidden rounded-3xl transform hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{data.projectTitle3}</h3>
                    <p className="text-cyan-100 group-hover:text-cyan-50 transition-colors duration-300">{data.projectDesc3}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 text-sm group-hover:bg-white group-hover:bg-opacity-30 transition duration-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Experience Section */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-gray-700 shadow-xl">
              <h2 className="text-4xl font-bold mb-12 text-cyan-400 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experience
              </h2>

              {data.experience1 && (
                <div className="mb-12 relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:shadow-lg">
                  <div className="before:content-[''] before:absolute before:left-2 before:top-6 before:w-0.5 before:h-full before:bg-gray-700"></div>
                  <h3 className="text-2xl font-bold text-white">{data.experience1}</h3>
                  <p className="text-gray-300 mt-3">{data.experienceDesc1}</p>
                </div>
              )}

              {data.experience2 && (
                <div className="mb-10 relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.experience2}</h3>
                  <p className="text-gray-300 mt-3">{data.experienceDesc2}</p>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-gray-700 shadow-xl">
              <h2 className="text-4xl font-bold mb-12 text-cyan-400 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                Education
              </h2>

              {data.education1 && (
                <div className="mb-12 relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:shadow-lg">
                  <div className="before:content-[''] before:absolute before:left-2 before:top-6 before:w-0.5 before:h-full before:bg-gray-700"></div>
                  <h3 className="text-2xl font-bold text-white">{data.education1}</h3>
                </div>
              )}

              {data.education2 && (
                <div className="mb-10 relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:shadow-lg">
                  <h3 className="text-2xl font-bold text-white">{data.education2}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">Let's Connect</h2>
            <p className="text-gray-300 text-xl">{data.email} · {data.phone}</p>
          </div>

          <div className="flex justify-center space-x-8 mb-10">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
            <p className="mt-2 text-gray-600">Made with Portfolio Generator</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativeTemplate;