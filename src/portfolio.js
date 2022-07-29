/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Samarth's Portfolio",
  description:
    "I am someone who finds joy in making life easier, by finding solutions to everyday problems. I like incorporating technology with accessibility, and this defines my style. I take inspiration from nature and believe in roots of simplicity.",
  og: {
    title: "Samarth Singh's Portfolio",
    type: "website",
    url: "https://github.com/samarth1301",
  },
};

//Home Page
const greeting = {
  title: "Samarth Singh",
  logo_name: "Samarth Singh",
  nickname: "Bard of JSON 📝",
  subTitle:
    "I am someone who finds joy in making life easier, by finding solutions to everyday problems. I like incorporating technology with accessibility, and this defines my style. I take inspiration from nature and believe in roots of simplicity.",
  resumeLink:
    "https://drive.google.com/file/d/1odgcEOBRKnL5sVTpm8-6RqzOBPu8Id3a/view?usp=sharing",
  portfolio_repository: "https://github.com/samarth1301y",
  githubProfile: "https://github.com/samarth1301",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/samarth1301",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samarth-singh-a22247181/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:samarthsingh890.ss@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Capable of developing complicated applications using advanced technologies",
        "⚡ Creating application backend in Node, MongoDB",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
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
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/samarthsingh8901",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/samarthsingh890.ss",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#000000",
      },
      profileLink: "https://leetcode.com/user6542P/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology, Vellore",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "logo.png",
      alt_name: "VIT Vellore",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on DEV OPs and Full Stack Development.",
      ],
      website_link: "https://vit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've Worked with couple of companies, and has helped me alot to explore all the skillset I posses.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Front End Web Developer Intern",
          company: "Dhandolat",
          company_url: "https://dhandolat.in/",
          logo_path: "logoNew.svg",
          duration: "December 2021 - January 2022",
          location: "Remote",
          description:
            "Worked on UI of the project, Integrated candle-bar chart using apex-charts, Carousel using react-slick SEO optimization and prefetching was achieved while using NextJS",
          color: "#0879bf",
        },
        {
          title: "Front End Lead",
          company: "Coach-Budy",
          company_url: "http://coachbudy.com/",
          logo_path: "coachbuddy.svg",
          duration: "December 2021 - February 2022",
          location: "Remote",
          description:
            "Managed the front-end team and helped in its coordination with the backend team.My team was also able to complete the UI and  API integration of the project.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Web Developer Intern",
          company: "DevTown",
          company_url: "https://www.devtown.in/",
          logo_path: "ICON.svg",
          duration: "December 2021 - Present",
          location: "Remote",
          description:
            "Created the entire UI and integrated API for the mentor as well as the student side of the web app along with integrating Zoom SDK in it.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technical Lead",
          company: "Skillship Vellore",
          company_url: "",
          logo_path: "logoSkillship.svg",
          duration: "April 2022 - Present",
          location: "VIT, Vellore",
          description:
            "Technical lead in the community mentoring 10+ student in web dev domain",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create projects with React and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React , Flutter, Cloud and Opensource Development.",
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
  publicationsHeader,
  contactPageData,
};
