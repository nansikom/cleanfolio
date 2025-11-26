import employeeImg from './img/employee.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nansikom.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mary Nansikombi',
  role: 'Full Stack Developer and ML Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'A results-driven Computer Science (Honors) student graduating from Oregon State University with expertise across full-stack development, AI/ML, and low-level systems programming. I architect and build scalable applications using modern stacks like React, Node.js, and Python, while also possessing a deep understanding of core concepts from developing multi-threaded C applications and analyzing network traffic. An award-winning innovator, I have hands-on experience integrating technologies like LLMs and RAG, machine learning models to create intelligent, user-centric solutions.',
  resume: 'https://drive.google.com/file/d/1LIk02rQInzDW0Ny2eocQSnNOIQfMFNm5/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/mary-nansikombi/',
    github: 'https://github.com/nansikom/',
  },
}


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
 
   {
    name: '📄💼 Resume Job Application Assistance Tool',
    description:
      `An intelligent tool designed to help users optimize their resumes for specific job applications. This project extracts text from both resumes and job descriptions to perform keyword matching and analysis, providing tailored recommendations to increase a resume's relevance and impact. It features a user-friendly web interface with multi-format file support (PDF, DOCX), showcasing a practical application of data extraction and text processing.`,
    stack: ['HTML','Python', 'Flask', 'Pillow'],
    sourceCode: 'https://github.com/nansikom/Resume-Application-assistance',
    livePreview: 'https://youtu.be/rp8lTPCU4-g',
    image :'https://resumeoptimizerpro.com/images/blog-tailoring-resumes-to-jobs.jpg',
    



  },
  {
    name: '🏆 ELearn: An AI-Powered Educational Game',
    description:`ELearn is a gamified learning platform built with JavaScript, Python, Node.js, and a REST API. Developed collaboratively with Faith, John and Jiya, it won first place at an Oregon State University hackathon. The app uses Google’s Gemini AI to generate real-time, subject-specific questions and supports both single-player and multiplayer modes, combining generative AI with simple game mechanics to create an engaging learning experience.`,
    stack: ['Python', 'Javascript', 'HTML', 'Gemini Api'],
    sourceCode: 'https://github.com/nansikom/educationgame-',
    livePreview: 'https://devpost.com/software/elearn-6mbn10',
    image:'https://www.proprofs.com/c/wp-content/uploads/2019/12/role-of-ML-AI-in-the-education-system.jpg'
  },
  {
    name: '🏠 Predictive Housing Analytics',
    description:
      `This project is a work-in-progress, data-driven application designed to predict real estate sale prices. It involves building a machine learning model using Python to analyze complex relationships within housing data. The project leverages SQL for robust data management and storage, and Tableau for creating insightful visualizations that reveal key trends and patterns in the real estate market. This project demonstrates strong skills in data analysis, predictive modeling, and data visualization..`,
    stack: ['Python', 'SQL', 'Tableau', 'Pandas', 'Tensorflow','Flask Api'],
    sourceCode: 'https://github.com/nansikom/housingpredictor',
    livePreview: 'https://github.com',
    image:'https://miro.medium.com/v2/resize:fit:1358/1*smf9XOCYX-7NuQSkE4m84g.jpeg'
  },
  {
    name: 'Document Agent: Gemini-powered Q&A',
    description:`An intelligent document agent that uses Google's Gemini API with prompt engineering to answer user questions based on a local directory of documents. It reads files, sends their content to the Gemini model, and provides context-aware answers. This project showcases the ability to leverage a powerful generative AI model to build a practical, context-aware application, demonstrating skills in API integration and AI-driven data processing.`,
    stack: ['Google Gemini API:', 'NodeJS', 'Prompt Engineering:'],
    sourceCode: 'https://github.com/nansikom/Documentagent/',
    image: 'https://assets-global.website-files.com/64be86eaa29fa71f24b00685/6627961053c159e9c390ffef_What%20is%20Document%20Analysis_.png'
  },
  {
    name: 'LLM Powered Business Tool',
    description:`An intelligent business tool designed by a business user for business users to assist business users in getting insights from their records(sales, expenditures costs) using AI-driven data processing.`,
    stack: ['NodeJS', 'Prompt Engineering, Postgres SQL, PLV8', 'Open AI API', 'Langchain'],
    sourceCode: 'https://github.com/nansikom/Enobasepublic',
    livePreview: 'https://github.com',
    image: ''
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Material UI',
  'Git',
  'CI/CD',
  'C',
  'C++',
  'Python',
  'Tensorflow',
  'NextJS',
  'Gemini API',
  'Power BI',
  'SQL'
]
console.log(employeeImg);

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nansikom@oregonstate.edu',
}

export { header, about, projects, skills, contact }
