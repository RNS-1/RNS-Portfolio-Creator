import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedMinimalistTemplate = ({ data, onback }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('header');

  // Handle scroll position for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (position >= top && position < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section when clicked in navbar
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Function to download the portfolio as HTML
  const downloadPortfolio = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.fullName}'s Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 1200px; margin: auto; padding: 20px; }
          header, section, footer { margin-bottom: 40px; }
          h1, h2, h3 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>${data.fullName}</h1>
            <p>${data.title}</p>
            <p>${data.about.split('.')[0]}.</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Location: ${data.location}</p>
            ${data.github ? `<p>GitHub: <a href="${data.github}" target="_blank">${data.github}</a></p>` : ''}
            ${data.linkedin ? `<p>LinkedIn: <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>` : ''}
          </header>
          <section>
            <h2>About Me</h2>
            <p>${data.about}</p>
          </section>
          <section>
            <h2>Skills</h2>
            <p>${data.skills}</p>
          </section>
          <section>
            <h2>Projects</h2>
            ${data.projectTitle1 ? `<h3>${data.projectTitle1}</h3><p>${data.projectDesc1}</p>` : ''}
            ${data.projectTitle2 ? `<h3>${data.projectTitle2}</h3><p>${data.projectDesc2}</p>` : ''}
            ${data.projectTitle3 ? `<h3>${data.projectTitle3}</h3><p>${data.projectDesc3}</p>` : ''}
          </section>
          <section>
            <h2>Experience</h2>
            ${data.experience1 ? `<h3>${data.experience1}</h3><p>${data.experienceDesc1}</p>` : ''}
            ${data.experience2 ? `<h3>${data.experience2}</h3><p>${data.experienceDesc2}</p>` : ''}
          </section>
          <section>
            <h2>Education</h2>
            ${data.education1 ? `<h3>${data.education1}</h3>` : ''}
            ${data.education2 ? `<h3>${data.education2}</h3>` : ''}
          </section>
          <footer>
            <p>&copy; ${new Date().getFullYear()} ${data.fullName}. All rights reserved.</p>
          </footer>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.fullName}_Portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-indigo-600"
          >
            {data.fullName.split(' ')[0]}
          </motion.div>

          <div className="hidden md:flex space-x-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-600 transition-colors`}
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-600 transition-colors`}
            >
              Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('projects')}
              className={`${activeSection === 'projects' ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-600 transition-colors`}
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('experience')}
              className={`${activeSection === 'experience' ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-600 transition-colors`}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection('education')}
              className={`${activeSection === 'education' ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-600 transition-colors`}
            >
              Education
            </motion.button>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={downloadPortfolio}
            className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Download Portfolio
          </motion.button>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header id="header" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-3/5"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">{data.fullName}</h1>
              <p className="text-xl md:text-2xl text-indigo-600 mt-3 font-light">{data.title}</p>
              <p className="mt-6 text-gray-600 text-lg max-w-xl">{data.about.split('.')[0]}.</p>

              <div className="flex flex-wrap mt-8 gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`mailto:${data.email}`}
                  className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700"
                >
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {data.email}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`tel:${data.phone}`}
                  className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700"
                >
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.036 11.036 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {data.phone}
                </motion.a>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700"
                >
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {data.location}
                </motion.span>
              </div>

              <div className="flex mt-6 space-x-4">
                {data.github && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </motion.a>
                )}
                {data.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                {data.fullName.split(' ').map(name => name[0]).join('')}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-indigo-600 mb-10"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed max-w-3xl text-center"
            >
              {data.about}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-indigo-600 mb-10"
            ></motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.skills && data.skills.split(',').map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium text-gray-700">{skill.trim()}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-indigo-600 mb-10"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projectTitle1 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="h-56 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{data.projectTitle1.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle1}</h3>
                  <p className="text-gray-600 mb-6">{data.projectDesc1}</p>
                  <div className="flex justify-end">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Project</button>
                  </div>
                </div>
              </motion.div>
            )}

            {data.projectTitle2 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="h-56 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{data.projectTitle2.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle2}</h3>
                  <p className="text-gray-600 mb-6">{data.projectDesc2}</p>
                  <div className="flex justify-end">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Project</button>
                  </div>
                </div>
              </motion.div>
            )}

            {data.projectTitle3 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="h-56 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{data.projectTitle3.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle3}</h3>
                  <p className="text-gray-600 mb-6">{data.projectDesc3}</p>
                  <div className="flex justify-end">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Project</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div id="experience">
              <div className="flex flex-col items-center md:items-start mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  Experience
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-1 bg-indigo-600 mb-10"
                ></motion.div>
              </div>

              {data.experience1 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-12 pl-8 border-l-2 border-indigo-200"
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-1"></div>
                  <h3 className="text-xl font-bold text-gray-800">{data.experience1}</h3>
                  <p className="text-gray-600 mt-3">{data.experienceDesc1}</p>
                </motion.div>
              )}

              {data.experience2 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-12 pl-8 border-l-2 border-indigo-200"
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-1"></div>
                  <h3 className="text-xl font-bold text-gray-800">{data.experience2}</h3>
                  <p className="text-gray-600 mt-3">{data.experienceDesc2}</p>
                </motion.div>
              )}
            </div>

            <div id="education">
              <div className="flex flex-col items-center md:items-start mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  Education
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-1 bg-indigo-600 mb-10"
                ></motion.div>
              </div>

              {data.education1 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-12 pl-8 border-l-2 border-indigo-200"
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-1"></div>
                  <h3 className="text-xl font-bold text-gray-800">{data.education1}</h3>
                </motion.div>
              )}

              {data.education2 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-12 pl-8 border-l-2 border-indigo-200"
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-1"></div>
                  <h3 className="text-xl font-bold text-gray-800">{data.education2}</h3>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="w-20 h-1 bg-indigo-600 mb-10"
            ></motion.div>
          </div>

          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-600 mb-8 text-center max-w-2xl"
            >
              Interested in working together? Feel free to reach out to me directly via email or phone.
            </motion.p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`mailto:${data.email}`}
                className="flex items-center justify-center bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Me
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={`tel:${data.phone}`}
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.036 11.036 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Me
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-4">
              {data.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </motion.a>
              )}
              {data.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center md:text-left">Created with Portfolio Generator</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all ${scrollPosition > 500 ? 'opacity-100' : 'opacity-0'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </motion.button>
    </div>
  );
};

export default EnhancedMinimalistTemplate;
