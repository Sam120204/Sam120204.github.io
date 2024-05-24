/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jiayou's Portfolio",
  description:
    "I'm a Third-Year Computer Science Student at University of Waterloo, Canada. Primarily interested in AI, Back-end development, Game Design Machine Learning and Data Science.",
  og: {
    title: "Sam Zhong Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Jiayou Zhong",
  logo_name: "钟佳有",
  nickname: "Sam - sports enthusiast",
  subTitle:
    "Hi! I'm a Third-Year Computer Science Student at University of Waterloo. Primarily interested in AI, Back-end development, Game Design, Machine Learning and Data Science. Feel free to connect with me through Linkedln!",
  resumeLink:
    "https://drive.google.com/file/d/14LyhMJeac0DfgbPMTbfWL5rXMrAIaCh8/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/14LyhMJeac0DfgbPMTbfWL5rXMrAIaCh8/view?usp=sharing",
  githubProfile: "https://github.com/Sam120204",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Sam120204",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jiayouz/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zhongjiayou1202@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/samzjy_1204/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Learning and using cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/zhongjiayou1202/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Waterloo",
      subtitle: "Bachelor of Computer Science, specilization in Business",
      logo_path: "UW.png",
      alt_name: "University of Waterloo",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Object-Oriented Software Development",
        "⚡ Algorithms",
        "⚡ Data Structure",
        "⚡ Operating System",
        "⚡ Machine Learning",
        "⚡ SQL Data Base",
        "⚡ Intro to AI",
        "⚡ Introduction to Combinatorics",
        "⚡ Introduction to Optimiaztion",
      ],
      website_link:
        "https://uwaterloo.ca/future-students/programs/computer-science",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Pracitioner CLF-C02",
      subtitle: "- Amazon Web Service",
      logo_path: "google_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ae9c6b65-319f-43a3-938c-e8d7c503ad88.pdf",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Python for Data Science and Machine Learning",
      subtitle: "- Udemy",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c7297cf4-4f7c-4a4f-8891-01baab7942ae.pdf",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "SQL for Data Science",
      subtitle: "- UCDAVIS",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6F8RVPHF7S3X",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "AKHNY SOLUTIONS INC.",
          company_url: "https://www.akhnysolutions.ca/",
          logo_path: "AK.png",
          duration: "May 2024 - Present",
          location: "Milton, ON, Canada",
          description: `
          Develop custom data models and algorithms to apply to data sets;
          Develop custom web pages and UI elements using JavaScript, HTML and CSS;
          Combine and onboard datasets, client information, and required data using the REACT framework;
          Develop processes and tools to monitor and analyze model performance and data accuracy;
          Assist in developing applications for clients according to the business needs as required.
        `,
          color: "#000000",
        },
        {
          title: "Software Developer",
          company: "Junior Kids",
          company_url: "https://juniorkids.ca/",
          logo_path: "JK.png",
          duration: "January 2024 - April 2024",
          location: "Montreal, Québec, Canada",
          description:
            "Design and implement AI algorithms and models that make learning engaging and effective for young children; Utilize data and insights from competitive companies to inform and enhance our AI solutions, ensuring our products remain at the cutting edge of technology and education; Leverage AI and machine learning to offer innovative suggestions for children's clothing designs, incorporating trends and preferences identified through data analysis.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Part-time positions",
      experiences: [
        {
          title: "Software Developer",
          company: "WAT.ai",
          company_url: "https://watai.ca/",
          logo_path: "WAT.png",
          duration: "May 2024 - Present",
          location: "Waterloo, ON, Canada",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Algorithm Developer",
          company: "Laurier Fintech Club Fintech Club",
          company_url: "https://wlufintech.com/",
          logo_path: "FT.png",
          duration: "May 2023 - Present",
          location: "Waterloo, ON, Canada",
          description:
            "Implemented the backend algorithm of OpenFintech, a stock trading simulation tool in Python, leveraging the API for stock data integration, facilitating accurate backtesting of trading strategies; Boosted trading accuracy by refining trend-following stock trading algorithms to integrate data, predicate stock price and generate various stock trend charts based on different requirements",
          color: "#D83B01",
        },
        {
          title: "Computer Science part-time Instructor",
          company: "Uforse Education",
          company_url: "https://uforse.com/en",
          logo_path: "UF.png",
          duration: "May 2023 - PRESENT",
          location: "Toronto, ON, Canada | Work From Home",
          description:
            "Guided and mentored several high school students using an online teaching platform, which aims to enhance their understanding of fundamental computer science concepts, algorithms, and to prepare for computing contests; helping them securing positions within the top 25% for the CCC competition (junior division).",
          color: "#181717",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Sales Representative",
          company: "NBA Retail Store",
          company_url: "https://store.nba.com/",
          logo_path: "NBA.png",
          duration: "June 2022 - August 2022",
          location: "Wuhan, Hubei, China",
          description:
            "Spearheaded inventory management and merchandising efforts, which included enhancing the inventory database, ensuring accurate stock levels, and optimizing product displays to maximize customer satisfaction.",
          color: "#4285F4",
        },
        {
          title: "Engineering Club Developer",
          company: "Mentor College",
          company_url: "https://www.mentorcollege.edu/",
          logo_path: "MC.png",
          duration: "Nov 2021 - Mar 2022",
          location: "Mississauga, ON, Canada",
          description:
            "Constructed a paperboard racing car powered by four small motors and adhesive. Our collective efforts culminated in a triumphant first-place victory in the racing car competition.",
          color: "#181717",
        },
        {
          title: "NoteTaker",
          company: "Wilfrid Laurier University",
          company_url: "https://www.wlu.ca/",
          logo_path: "WLU.png",
          duration: "May 2023 - August 2023",
          location: "Waterloo, ON, Canada",
          description:
            "Recorded detailed and accurate notes for core Business courses, delivering meticulous documentation and maintaining accuracy information to fellow classmates registered with Accessible Learning.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create AI/ML/DS and gaming projects. I have done lots of projects related to Stock:)",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zjy.png",
    description: "Feel free to message me even just say HI :)",
  },
  blogSection: {
    title: "Hackathon",
    subtitle:
      "I like participating Hackathons and creat some CRAZY proejcts with INNOVATIVE IDEAS",
    link:
      "https://devpost.com/zhongjiayou1202?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "255 Sunview Street, Waterloo",
    locality: "Waterloo",
    country: "Canada",
    region: "ON",
    postalCode: "N2L3V8",
    streetAddress: "255 Sunview Street, Waterloo",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir//255+Sunview+St,+Waterloo,+ON+N2L+3V8,+Canada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x882bf5f676458efd:0x38450bf3d00829c5?sa=X&ved=1t:707&ictx=111",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 647-687-9221(Canada) or +86 18907114217(China)",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
