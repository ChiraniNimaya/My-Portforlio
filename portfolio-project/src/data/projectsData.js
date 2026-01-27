// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    p_no: "01",
    p_name: "Energy Forecasting Model",
    slug: "Energy-Forecasting-Model",
    p_desc: "Forecasting future energy consumption using distributed data processing and machine learning with PySpark on AWS EMR.",
    tags: ["PySpark", "AWS EMR", "Python", "Machine Learning"],
    featured: true,
    details: {
      title: "Energy Forecasting Model",
      description: "This project focuses on forecasting future energy consumption using distributed data processing and machine learning. Data was preprocessed and analyzed using PySpark on AWS EMR clusters for scalability.",
      techStack: ["PySpark", "AWS EMR", "Python"],
      features: [
        "Data preprocessing pipeline using PySpark",
        "Feature engineering from weather and building data",
        "Time-series forecasting using regression models",
        "AWS EMR integration for distributed computation",
        "Result analysis and demonstration graphically"
      ],
      github: "https://github.com/ChiraniNimaya/Energy-Consumption-Forecasting",
      demo: null
    }
  },
  {
    id: 2,
    p_no: "02",
    p_name: "Hotel Management System",
    slug: "Hotel-Management-System",
    p_desc: "Comprehensive solution for managing hotel reservations, customer data, billing operations and predicting future demands.",
    tags: [".NET", "C#", "ASP.NET", "SQL Server"],
    featured: true,
    details: {
      title: "Hotel Management System",
      description: "The Hotel Management System is a comprehensive solution for managing hotel reservations, customer data, billing operations and predicting future demands. It is built with the .NET framework and uses SQL Server for data storage.",
      techStack: [".NET", "C#", "ASP.NET", "SQL Server"],
      features: [
        "Room booking and management",
        "Managing room rates according to demand, weather and other factors",
        "Automated billing and invoice generation",
        "Chatbot feature to check room availabilities and predict future prices"
      ],
      github: "https://github.com/ChiraniNimaya/HotelBookingSystem",
      demo: null
    }
  },
  {
    id: 3,
    p_no: "03",
    p_name: "Personal Portfolio",
    slug: "Personal-Portfolio",
    p_desc: "A responsive personal portfolio website built with React to showcase projects, skills, education and professional experience.",
    tags: ["React", "CSS", "JavaScript", "Vite"],
    featured: false,
    details: {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website built with React to showcase projects, skills, education background, professional experience and hobbies. Designed with smooth animations and dynamic sections for a modern aesthetic.",
      techStack: ["React", "CSS", "JavaScript", "Vite"],
      features: [
        "Fully responsive design",
        "Dynamic routing using React Router",
        "Smooth scrolling and animations",
        "Project details and contact forms integrated"
      ],
      github: "https://github.com/ChiraniNimaya/My-Portforlio",
      demo: null
    }
  }
]

// Helper function to add new projects easily
export const addProject = (newProject) => {
  // Validation
  const requiredFields = ['p_name', 'p_desc', 'details']
  const missingFields = requiredFields.filter(field => !newProject[field])
  
  if (missingFields.length > 0) {
    console.error(`Missing required fields: ${missingFields.join(', ')}`)
    return false
  }

  // Add default values
  const project = {
    featured: false,
    tags: [],
    ...newProject,
    id: projectsData.length + 1,
    p_no: String(projectsData.length + 1).padStart(2, '0'),
    slug: newProject.p_name.replace(/\s+/g, '-')
  }

  projectsData.push(project)
  return true
}