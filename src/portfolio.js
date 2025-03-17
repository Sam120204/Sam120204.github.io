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
  nickname: "Sam Zhong",
  subTitle:
    "Hi! I'm a 3B Year Computer Science Student at University of Waterloo. Primarily interested in Machine Learning, Fintech, Application Development, and Full Stack Development. Feel free to connect with me through Linkedln!",
  resumeLink:
    "https://drive.google.com/file/d/1h0Ms8pZQf_Fe7Cor44oE6edit2oIalEm/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1h0Ms8pZQf_Fe7Cor44oE6edit2oIalEm/view?usp=sharing",
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
      subtitle: "Bachelor of Computer Science",
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
    {
      title: "Wilfrid Laurier University",
      subtitle: "Specilization in Business",
      logo_path: "Laurier.png",
      alt_name: "Wilfrid Laurier University",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Business Environment",
        "⚡ Business Operation",
        "⚡ Business Finance",
        "⚡ Business Accounting",
        "⚡ Business Organization",
      ],
      website_link:
        "https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/index.html",
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
    "I am doing internships with many evolving startups as ML Developer and Full Stack Developer. I have also worked with some well established school clubs mostly as Software Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Health Canada",
          company_url:
            "https://www.canada.ca/en/health-canada/corporate/about-health-canada/branches-agencies/pest-management-regulatory-agency.html",
          logo_path: "health_canada_logo.jpg",
          duration: "Jan 2025 - Present",
          location: "Ottawa, ON, Canada",
          description: `
          Building a production-ready RAG (Retrieval-Augmented Generation) pipeline, implementing hybrid search with vector embeddings and reranking techniques to optimize information retrieval. Developed an interactive front-end interface using Streamlit for easy system interaction and deployed the complete solution on Azure VM for reliable, scalable access.`,
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "AKHNY SOLUTIONS INC.",
          company_url: "https://www.akhnysolutions.ca/",
          logo_path: "AK.png",
          duration: "May 2024 - August 2024",
          location: "Milton, ON, Canada",
          description: `
          Utilized React Native for cross-platform compatibility, Kotlin for native features, with Figma for UI/UX design; 
          Setup backend architecture for the Android app using MongoDB for efficient user sign-up data management; 
          Integrated Google Authentication - OAuth 2.0 setup with Firebase to enhance security and streamline login; 
          Used Postman to test API endpoints, ensuring account registration data retrieval and submission; 
          Tested the app using JUnit for unit testing, Espresso for UI testing, and manual testing to ensure functionality`,
          color: "#000000",
        },
        {
          title: "Software Developer",
          company: "JuniorKids",
          company_url: "https://juniorkids.ca/",
          logo_path: "JK.png",
          duration: "January 2024 - November 2024",
          location: "Montreal, Québec, Canada",
          description: `
          Utilized the Python Reddit API Wrapper to gather posts and comments, filtered with the Named Entity; 
          Recognition and spaCy model, and performed sentiment analysis with OpenAI's LLMs; 
          Deployed functions on AWS to fetch stock ticker prices from Yahoo Finance, storing the data in PostgreSQL; 
          Fine-tuned a BERT model using sentiment scores and time series prices as labels, training it to analyze and predict stock trends; 
          Integrated a chatbot using GPT-4 with RAG to fetch additional papers and provide users with analysis based on the correlation between time series prices and sentiment analysis; 
          Utilized Streamlit, Docker, and Google Cloud for website deployment.
          `,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research Assistants",
      experiences: [
        {
          title: "Human Computer Interaction Research Assistant",
          company: "University of Waterloo",
          company_url: "https://edithlaw.ca/",
          logo_path: "uwaterloo.png",
          duration: "September 2024 - Now",
          location: "Waterloo, Ontario, Canada",
          description:
            "Conducting research in Human-Computer Interaction alongside PhD student Henry Yang under the supervision of Professor Edith. The project focuses on building a knowledge graph that tracks users' online learning to ensure they stay aligned with their areas of interest.",
          color: "#4285F4",
        },
        {
          title: "Machine Learning Research Assistant",
          company: "",
          // company_url: "https://www.mentorcollege.edu/",
          logo_path: "macquarie_university_logo.jpg",
          duration: "September 2024 - Now",
          location: "Macquarie University, Remotely",
          description:
            "Conducting research in ML/AI with Professor Usman Naseem, focusing on Modular Pluralism—exploring how community-driven language models contribute to the interpretability of black-box AI systems by generating meaningful and culturally diverse responses.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Part-time positions",
      experiences: [
        {
          title: "Director of Technology",
          company: "The GoldenHack",
          company_url: "https://www.thegoldenhack.ca/",
          logo_path: "thegoldenhack_logo.jpg",
          duration: "June 2024 - Present",
          location: "Waterloo, ON, Canada",
          description:
            "Develop and manage the technology infrastructure, including the hackathon website. Collaborate with team members to innovate and improve event experiences.",
          color: "#4285F4",
        },
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
      title: "Volunteers",
      experiences: [
        {
          title: "Hackathon Volunteer",
          company: "Hack the North",
          company_url: "https://hackthenorth.com/",
          logo_path: "HTN.png",
          duration: "September 2024",
          location: "Waterloo, ON, Canada",
          description:
            "Volunteered at Hack the North, the largest hackathon in Canada, where I assisted in organizing the event, setting up the venue, and providing technical support to participants.",
          color: "#4285F4",
        },
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
