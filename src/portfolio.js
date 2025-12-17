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
    name: 'Bulkmart E-commerce Platform',
    description:`A practical business management and ecommerce tool built specifically for Ugandan business owners and buyers. It helps sellers track their sales, expenses, inventory, and product performance while giving buyers an easy and reliable way to discover and purchase products. The platform creates a simple two-way marketplace where both sellers and buyers benefit.`,
    stack: ['React Native', 'Typescript', 'Tailwind Css', 'Material UI', 'design theme', 'Postgres SQL', 'NodeJS', 'Express', 'Expo'],
    sourceCode: 'https://github.com/nansikom/bulkmart',
    livePreview: 'https://youtu.be/UHYLNafJRy0Links to an external site.',
    image: 'https://cdn.prod.website-files.com/62722382edf1ccb5a513cf38/651fda1ffdd81b215b8f3ecf_sales-monitoring-systems-a-complete-guide.png'

  },
    {
    name: 'Enobase Simulation LLM Powered Business Tool',
    description: `A lightweight, Airtable-style tool that organizes business records, runs PLV8-powered calculations, and offers simple regression forecasting. It also includes AI agents that answer data questions for non-technical users, built as a team group project with Alex, Micheal, Anthony and Ibrahim`,
    sourceCode: 'https://github.com/vibrahim09/enobase_osu',
    image:'https://cdn.getmidnight.com/50062ddd13358c02dea31c6e82a524c5/2023/09/AdobeStock_600314909.jpeg',
    stack: ['React', 'NodeJS', 'Express', 'Postgres SQL', 'PLV8','Langchain','Shadcn, Open AI API'],
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
    name: '🏠 Fruit Classification Model',
    description:
    `This project showcases use of Python to build a machine learning model using Tensor flow for fruit classification and yield prediction for different types of fruits`,
    stack: ['Python','Scikit learn', 'Pandas', 'Tensorflow','Flask Api'],
    sourceCode: 'https://github.com/nansikom/Fruit-classifier-',
    image:'http://image.slidesharecdn.com/fruits-140110071235-phpapp02/95/fruits-5-638.jpg?'
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
