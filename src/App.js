import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-100">
      {!showPortfolio ? (
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Portfolio Generator</h1>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">How it works:</h2>
              <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                <li>Download our sample Excel template</li>
                <li>Fill it with your information</li>
                <li>Choose a portfolio design</li>
                <li>Upload your filled Excel file</li>
                <li>Get your personalized portfolio instantly!</li>
              </ol>
            </div>
            
            <div className="mb-8">
              <button 
                onClick={downloadSampleExcel}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Sample Excel Template
              </button>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Choose a Design:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((templateId) => (
                  <div 
                    key={templateId}
                    onClick={() => setSelectedTemplate(templateId)}
                    className={`border-2 rounded-lg overflow-hidden cursor-pointer transition duration-200 ${selectedTemplate === templateId ? 'border-indigo-600 ring-2 ring-indigo-300' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="bg-gray-200 h-40 flex items-center justify-center">
                      <span className="text-lg font-medium">Template {templateId}</span>
                    </div>
                    <div className="p-3 bg-white">
                      <div className={`h-4 w-16 rounded-full ${selectedTemplate === templateId ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-xl font-semibold mb-4">Upload Your Excel File:</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition duration-200">
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      Click to upload
                    </span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Excel files only (.xlsx, .xls)
                  </p>
                </label>
              </div>
            </div>

            {isLoading && (
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-700"></div>
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
  if (!data) return null;
  
  switch (templateId) {
    case 1:
      return <MinimalistTemplate data={data} onBack={onBack} />;
    case 2:
      return <ModernTemplate data={data} onBack={onBack} />;
    case 3:
      return <CreativeTemplate data={data} onBack={onBack} />;
    default:
      return <MinimalistTemplate data={data} onBack={onBack} />;
  }
};

// Template 1: Minimalist Design
const MinimalistTemplate = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 z-50"
      >
        Back to Generator
      </button>
      
      {/* Header */}
      <header className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-bold text-gray-800">{data.fullName}</h1>
          <p className="text-xl text-indigo-600 mt-2">{data.title}</p>
          
          <div className="flex flex-wrap mt-6 text-gray-600">
            <div className="mr-8 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {data.email}
            </div>
            <div className="mr-8 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.036 11.036 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {data.phone}
            </div>
            <div className="mr-8 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {data.location}
            </div>
          </div>
          
          <div className="flex mt-4">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-600 hover:text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </header>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{data.about}</p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills</h3>
            <div className="flex flex-wrap">
              {data.skills && data.skills.split(',').map((skill, index) => (
                <span key={index} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projectTitle1 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle1}</h3>
                  <p className="text-gray-600">{data.projectDesc1}</p>
                </div>
              </div>
            )}
            
            {data.projectTitle2 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle2}</h3>
                  <p className="text-gray-600">{data.projectDesc2}</p>
                </div>
              </div>
            )}
            
            {data.projectTitle3 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{data.projectTitle3}</h3>
                  <p className="text-gray-600">{data.projectDesc3}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Experience & Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
              
              {data.experience1 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{data.experience1}</h3>
                  <p className="text-gray-600 mt-2">{data.experienceDesc1}</p>
                </div>
              )}
              
              {data.experience2 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{data.experience2}</h3>
                  <p className="text-gray-600 mt-2">{data.experienceDesc2}</p>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
              
              {data.education1 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{data.education1}</h3>
                </div>
              )}
              
              {data.education2 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{data.education2}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p>&copy; {new Date().getFullYear()} {data.fullName}. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Made with Portfolio Generator</p>
        </div>
      </footer>
    </div>
  );
};

// Template 2: Modern Design
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

// Template 3: Creative Design
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

export default App;