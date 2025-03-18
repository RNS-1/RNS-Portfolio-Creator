import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import MinimalistTemplate from './templates/MinimalistTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        setPortfolioData(jsonData[0]); // Assuming first row contains all the data
        setShowPortfolio(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error parsing Excel file:", error);
        setIsLoading(false);
        alert("Error parsing the Excel file. Please make sure it's in the correct format.");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const downloadSampleExcel = () => {
    const sampleData = [{
      fullName: "John Doe",
      title: "Full Stack Developer",
      email: "john@example.com",
      phone: "123-456-7890",
      location: "New York, USA",
      about: "Passionate developer with 5+ years of experience building web applications.",
      skills: "React, Node.js, JavaScript, TypeScript, HTML, CSS, MongoDB",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      projectTitle1: "E-commerce Platform",
      projectDesc1: "Built a full-stack e-commerce platform with React and Node.js",
      projectImg1: "placeholder",
      projectTitle2: "Portfolio Generator",
      projectDesc2: "Created a tool that generates portfolios from Excel data",
      projectImg2: "placeholder",
      projectTitle3: "Task Management App",
      projectDesc3: "Developed a task management application with drag and drop features",
      projectImg3: "placeholder",
      experience1: "Senior Developer at Tech Co (2020-Present)",
      experienceDesc1: "Leading front-end development team for enterprise applications",
      experience2: "Web Developer at StartUp Inc (2018-2020)",
      experienceDesc2: "Developed responsive websites and improved performance",
      education1: "Master's in Computer Science, Tech University (2018)",
      education2: "Bachelor's in Software Engineering, State University (2016)"
    }];

    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Portfolio Data");
    XLSX.writeFile(workbook, "portfolio_template.xlsx");
  };

  // Template details for preview cards
  const templateDetails = [
    {
      id: 1,
      name: "Minimalist",
      description: "Clean, elegant design with focus on content",
      color: "from-gray-900 to-black",
      accentColor: "purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      id: 2,
      name: "Modern",
      description: "Bold, vibrant design with dynamic layouts",
      color: "from-gray-900 via-purple-900 to-black",
      accentColor: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      id: 3,
      name: "Creative",
      description: "Unique, artistic design for creative professionals",
      color: "from-black via-blue-900 to-black",
      accentColor: "pink",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    }
  ];

  // Animation for background gradient
  const bgAnimation = `
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div className={`min-h-screen bg-black relative overflow-hidden transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <style>{bgAnimation}</style>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {!showPortfolio ? (
        <div className="container mx-auto py-12 px-4 relative z-10">
          <div className={`max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl p-8 border border-gray-800 transform transition-all duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl font-bold text-center mb-8 text-white bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Portfolio Generator</h1>

            <div className={`mb-10 transform transition-all duration-700 delay-100 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-xl font-semibold mb-4 text-gray-200">How it works:</h2>
              <ol className="space-y-2 text-gray-400 list-decimal pl-5">
                <li className="transition-all duration-300 hover:text-white">Download our sample Excel template</li>
                <li className="transition-all duration-300 hover:text-white">Fill it with your information</li>
                <li className="transition-all duration-300 hover:text-white">Choose a portfolio design</li>
                <li className="transition-all duration-300 hover:text-white">Upload your filled Excel file</li>
                <li className="transition-all duration-300 hover:text-white">Get your personalized portfolio instantly!</li>
              </ol>
            </div>

            <div className={`mb-8 transform transition-all duration-700 delay-200 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={downloadSampleExcel}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Sample Excel Template
              </button>
            </div>

            <div className={`mb-10 transform transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-xl font-semibold mb-4 text-gray-200">Choose a Design:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templateDetails.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                      selectedTemplate === template.id ? 'ring-2 ring-white scale-105' : ''
                    }`}
                  >
                    <div 
                      className={`bg-gradient-to-br ${template.color} h-48 relative overflow-hidden`}
                    >
                      {/* Template preview elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 right-4 h-2 bg-gray-700 rounded-full"></div>
                        <div className="absolute top-10 left-4 w-12 h-12 bg-gray-700 rounded-full"></div>
                        <div className="absolute top-10 left-20 right-4 h-2 bg-gray-700 rounded-full"></div>
                        <div className="absolute top-14 left-20 right-10 h-2 bg-gray-700 rounded-full"></div>
                        <div className="absolute top-24 left-4 right-4 h-20 bg-gray-700 rounded-lg"></div>
                      </div>

                      {/* Accent effect */}
                      <div className={`absolute -right-12 -top-12 w-24 h-24 rounded-full bg-${template.accentColor}-500 blur-xl opacity-30`}></div>
                      
                      {/* Template name */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm p-4">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg bg-${template.accentColor}-900 bg-opacity-50 mr-3`}>
                            {template.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{template.name}</h3>
                            <p className="text-xs text-gray-300">{template.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Selection indicator */}
                      {selectedTemplate === template.id && (
                        <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-lg">
                          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Interactive footer */}
                    <div className={`p-3 bg-gradient-to-br from-black to-gray-900 border-t border-gray-800 flex justify-between items-center`}>
                      <div className={`h-2 w-12 rounded-full bg-${template.accentColor}-500`}></div>
                      <button 
                        className={`text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 hover:bg-${template.accentColor}-800 hover:text-white transition-colors duration-300`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTemplate(template.id);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mb-8 transform transition-all duration-700 delay-400 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <label className="block text-xl font-semibold mb-4 text-gray-200">Upload Your Excel File:</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-white transition-all duration-300 bg-gray-800 bg-opacity-50">
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer group">
                  <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-white transition-colors duration-300" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    <span className="font-medium text-gray-300 group-hover:text-white">
                      Click to upload
                    </span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    Excel files only (.xlsx, .xls)
                  </p>
                </label>
              </div>
            </div>

            {isLoading && (
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <PortfolioTemplate
          data={portfolioData}
          templateId={selectedTemplate}
          onBack={() => setShowPortfolio(false)}
        />
      )}
    </div>
  );
};

// Portfolio Templates
const PortfolioTemplate = ({ data, templateId, onBack }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  if (!data) return null;

  return (
    <div className={`transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={onBack}
          className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center border border-gray-700"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back
        </button>
      </div>
      
      {templateId === 1 && <MinimalistTemplate data={data} />}
      {templateId === 2 && <ModernTemplate data={data} />}
      {templateId === 3 && <CreativeTemplate data={data} />}
    </div>
  );
};

// Need to add these CSS classes to your global styles or Tailwind config
// Add to your tailwind.config.js:
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         blob: "blob 7s infinite",
//       },
//       keyframes: {
//         blob: {
//           "0%": {
//             transform: "translate(0px, 0px) scale(1)",
//           },
//           "33%": {
//             transform: "translate(30px, -50px) scale(1.1)",
//           },
//           "66%": {
//             transform: "translate(-20px, 20px) scale(0.9)",
//           },
//           "100%": {
//             transform: "translate(0px, 0px) scale(1)",
//           },
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {
//       animation: ["responsive", "motion-safe", "motion-reduce"],
//     },
//   },
// };

export default App;