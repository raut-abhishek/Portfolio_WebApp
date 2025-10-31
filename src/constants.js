// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import javaLogo from './assets/tech_logo/java.png';
import mcLogo from './assets/tech_logo/mc.png';
import sqlLogo from './assets/tech_logo/mySql.png';
// Skills Section Logo's
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import nodejsLogo from './assets/tech_logo/Nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import firebaseLogo from './assets/tech_logo/firebase.png'

// Experience Section Logo's
import interpeLogo from './assets/company_logo/interpeLogo.png'


// education section logo's
import sppuLogo from './assets/education_logo/sppu.png'
import msbteLogo from './assets/education_logo/msbte.png'
import tenthLogo from './assets/education_logo/shivajiuniversity.png'

// project
import mernauthLogo from './assets/work_logo/mernAuth.png'
import portfolioLogo from './assets/work_logo/portfolio.png'
import clouddriveLogo from './assets/work_logo/drive.png'





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Java', logo: javaLogo },,
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: sqlLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },,
      { name: 'Compass', logo: mcLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'JAVA', logo: javaLogo },
    ],
  }
]


export const experiences = [
  {
    id: 0,
    img: interpeLogo,
    role: "Web Developer",
    company: "InternPe",
    date: "February 2024 - March 2024",
    desc: "Developed dynamic and scalable web applications using the front-end framework, handling frontend development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS"
    ]
  }
];


export const projects = [
    {
      id: 0,
      title: "MERN Auth System",
      description:"A secure authentication system built using the MERN stack, featuring user registration, login, JWT-based authentication, and protected routes. The app ensures smooth user experience with form validation and responsive design, making it a solid foundation for full-stack applications.",
      image: mernauthLogo,
      tags: ["MongoDB", "Express", "React JS", "Node.js", "JWT", "Tailwindcss"],
      github: "https://github.com/raut-abhishek/MERN-Authentication",
      webapp: "https://mern-authentication-client-wlnz.onrender.com",
    },
    {
      id: 1,
      title: "Cloud Drive",
      description: "A cloud-based file management platform allowing users to upload, store, and access files securely from anywhere. Built with the MERN stack, it includes authentication, cloud storage integration, and a clean UI to enhance productivity and accessibility.",
      image: clouddriveLogo,
      tags: ["MongoDB", "Express", "React JS", "Node.js", "Firebase", "JWT"],
      github: "https://github.com/raut-abhishek/Drive_Project",
      webapp: "https://drive-project-7ccj.onrender.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A visually appealing and interactive personal portfolio built using modern frontend technologies. It highlights projects, skills, and achievements with smooth GSAP animations and Shery.js effects, delivering an engaging and dynamic user experience.",
      image: portfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "GSAP", "Shery.js"],
      github: "https://github.com/raut-abhishek/Portfolio_WebApp",
      webapp: "https://portfolio-web-app-bice.vercel.app/",
    }     
]

 export const education = [
    {
      id: 0,
      img: sppuLogo,
      school: "Savitribai Phule University, Pune",
      date: "November 2022 - July 2025",
      grade: "7.6  SGPA",
      desc: "I have completed my Bachelor’s degree (BE) in Information Technology from Dhole Patil Collage of Engineering. During my time there, I built a strong foundation in programming, software development, and core IT concepts. I studied courses such as Data Structures, Algorithms, Database Management Systems, Web Development, Networking, and Software Engineering. I actively participated in workshops, technical events, and projects, which helped me enhance my practical skills and problem-solving abilities. My experience during my BE has been instrumental in shaping both my technical expertise and professional growth.",
      degree: "BE in Information Technology",
    },
    {
      id: 1,
      img: msbteLogo,
      school: "Government Polytechnic Karad",
      date: "August 2018 - Aug 2021",
      grade: "85.39%",
      desc: "I have completed my Diploma in Mechanical Engineering from Government Polytechnic Karad. During my studies, I gained a strong foundation in mechanical principles, design, and manufacturing processes, including Thermodynamics, Mechanics of Materials, and CAD/CAM. Participation in workshops and hands-on projects enhanced my practical skills and problem-solving abilities, preparing me for technical roles in the industry.",
      degree: "Diploma in Mechanical Engineering",
    },
    {
      id: 2,
      img: tenthLogo,
      school: "Mudhoji high school, Phaltan",
      date: "Apr 2017 - March 2018",
      grade: "80.60%",
      desc: "I completed my class 10 education from Mudhoji high school, Phaltan, under the SSC board, where I studied Science with Computer.",
      degree: "SSC(X), Science with Computer Application",
    },
  ];

  // {
//       id: 2,
//       title: "Movie Recommendation App",
//       description:
//         "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
//       image: movierecLogo,
//       tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
//       github: "https://github.com/codingmastr/Movie-Recommendation-App",
//       webapp: "https://movie-recommendation-app-jet.vercel.app/",
//     },
//     {
//       id: 3,
//       title: "Email Validator NPM Package",
//       description:
//         "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
//       image: npmLogo,
//       tags: ["React JS", "Node.js", "NPM", "Validation"],
//       github: "https://github.com/codingmastr/cmtk-email-validator",
//       webapp: "https://www.npmjs.com/package/cmtk-email-validator",
//     },
//     {
//       id: 4,
//       title: "Task Reminder Chrome Extension Tool",
//       description:
//         "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
//       image: taskremLogo,
//       tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
//       github: "https://github.com/codingmastr/Task-Reminder-Tool",
//       webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
//     },
//     {
//       id: 5,
//       title: "Webverse Digital",
//       description:
//         "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
//       image: webverLogo,
//       tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
//       github: "https://github.com/codingmastr/Webverse-Digital",
//       webapp: "https://webversedigital.com/",
//     },
//     {
//       id: 6,
//       title: "Coding Master",
//       description:
//         "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
//       image: cmLogo,
//       tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
//       github: "https://codingmasterweb.in/",
//       webapp: "https://codingmasterweb.in/",
//     },
//     {
//       id: 7,
//       title: "Image Search App",
//       description:
//         "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
//       image: imagesearchLogo,
//       tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
//       github: "https://github.com/codingmastr/Image-Search-App",
//       webapp: "https://imagsearch.netlify.app/",
//     },
//     {
//       id: 8,
//       title: "Image Background Remover",
//       description:
//         "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
//       image: removebgLogo,
//       tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
//       github: "https://github.com/codingmastr/Image-Background-Remover",
//       webapp: "https://removeyourbg.netlify.app/",
//     },