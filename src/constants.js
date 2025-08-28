// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import javaLogo from './assets/tech_logo/java.png';
import mcLogo from './assets/tech_logo/mc.png';
// Skills Section Logo's
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import internpeLogo from './assets/company_logo/internpeLogo.png'





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
      { name: 'JAVA', logo: javaLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Java', logo: javaLogo },,
      { name: 'JavaScript', logo: javascriptLogo }
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
]


export const experiences = [
  {
    id: 0,
    img: internpeLogo,
    role: "Web Developer",
    company: "InternPe",
    date: "February 2024 - March 2024",
    desc: "Developed dynamic and scalable web applications using the fornt-end framework, handling frontend development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS"
    ]
  }
];
