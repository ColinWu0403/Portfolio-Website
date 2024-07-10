// src/data/projects.js
export const projects = [
  {
    dateRange: "May 2024 - July 2024",
    title: "ECG AFib Detection",
    description:
      "This project contains a collection of 6 classification models that predict if a patient has Atrial Fibrillation (AFib) based on the given Electrocardiography (ECG) signals of the patient.\n\nThe models are written in Python using Scikit-learn and TensorFlow Keras and use Neurokit2 to process and analyze ECG signals.",
    technologies: [
      { name: "TensorFlow", color: "secondary" },
      { name: "Scikit-learn", color: "lime" },
      { name: "Neurokit2", color: "magenta" },
      { name: "Pandas", color: "red" },
      { name: "Python", color: "tertiary" },
    ],
    githubLink: "https://github.com/ColinWu0403/ECG_AFIB",
    demoLink: "https://github.com/ColinWu0403/ECG_AFIB",
    imageSrc: "./ecg_afib.png",
  },
  {
    dateRange: "Jan 2024 - June 2024",
    title: "Artikulate -  BoilerMake 2024",
    description:
      "Artikulate is a video-editing and content-generation platform that creates text-to-speech caption videos from either web-scraped or AI-Generated Reddit threads.\nUsers can choose between several different subreddits, and Artikulate can generate a fully edited, captioned, and text-to-speech voiced video over a chosen background video.",
    technologies: [
      { name: "Django", color: "secondary" },
      { name: "Python", color: "tertiary" },
      { name: "Selenium", color: "lime" },
      { name: "OpenAI", color: "orange" },
      { name: "FFmpeg", color: "magenta" },
    ],
    githubLink: "https://github.com/SamDuprey/boilermake2024",
    demoLink: "https://devpost.com/software/artikulate",
    imageSrc:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/725/812/datas/original.png",
  },
  {
    dateRange: "Aug 2023 - May 2024",
    title: "Mixtape",
    description:
      "Collaborative music-sharing app for iOS, Android, and the web, representing ACM SigApp’s official project for 2023-2024. This cross-platform application, developed using React Native and Rust (Actix Web), empowers users to collectively create and share playlists, fostering a collaborative music experience.",
    technologies: [
      { name: "Rust", color: "violet" },
      { name: "React Native", color: "blueish" },
      { name: "MongoDB", color: "lime" },
    ],
    githubLink:
      "https://github.com/orgs/Purdue-ACM-SIGAPP/teams/mixtape/repositories",
    demoLink:
      "https://github.com/orgs/Purdue-ACM-SIGAPP/teams/mixtape/repositories",
    imageSrc:
      "https://raw.githubusercontent.com/Purdue-ACM-SIGAPP/mixtape-frontend/dev/mixtape-rn-app-v0/assets/mixtape.png",
  },
  {
    dateRange: "Feb 2024 - Apr 2024",
    title: "Shell Project - CS 252",
    description:
      "Fully functional shell interpreter similar to bash and csh using C and C++. Supports executing commands, file redirection, piping, background processes, subshells, environment variable expansion, wildcards, and control statements (if, while, and for loops).\n\nNote: no public code available for this project.",
    technologies: [
      { name: "C", color: "secondary" },
      { name: "C++", color: "magenta" },
      { name: "Lex", color: "light_blue" },
      { name: "Yacc", color: "tertiary" },
      { name: "Shell", color: "lime" },
      { name: "Linux", color: "purple" },
    ],
    githubLink: "https://github.com/",
    demoLink: "https://github.com/",
    imageSrc: "./shell.jpg",
  },
  {
    dateRange: "Oct 2023 - Feb 2024",
    title: "Ascend Purdue Website",
    description:
      "Ascend Purdue Business Club's official website, developed using React and TypeScript. AscendPurdue.com is fully responsive and has a mobile-friendly interface used by over 100 members of the club.",
    technologies: [
      { name: "React", color: "light_blue" },
      { name: "TypeScript", color: "blueish" },
      { name: "Tailwind CSS", color: "secondary" },
      { name: "Vercel", color: "lime" },
    ],
    githubLink: "https://github.com/ColinWu0403/AscendWebsiteDev",
    demoLink: "https://www.ascendpurdue.com/",
    imageSrc: "./AscendPurdue.jpg",
  },
  {
    dateRange: "Jul 2024 - Present",
    title: "Portfolio Website",
    description:
      "This is the website you are currently viewing! I made it completely from scratch. It has many performance improvements and a better design than my previous website.\nI also decided to learn Vue to make this since I'm tired of using React lol.",
    technologies: [
      { name: "Vue", color: "lime" },
      { name: "JavaScript", color: "tertiary" },
      { name: "Tailwind CSS", color: "secondary" },
    ],
    githubLink: "https://github.com/ColinWu0403/Portfolio-Website-Vue",
    demoLink: "/",
    imageSrc: "/",
  },
  {
    dateRange: "Jul 2023 - Jun 2024",
    title: "Portfolio Website (Old)",
    description: "My previous personal website, built with React and ThreeJS.",
    technologies: [
      { name: "React", color: "light_blue" },
      { name: "JavaScript", color: "tertiary" },
      { name: "ThreeJS", color: "orange" },
      { name: "Tailwind CSS", color: "secondary" },
    ],
    githubLink: "https://github.com/ColinWu0403/Portfolio-Website-ReactJS",
    demoLink: "https://colinwu.me/",
    imageSrc: "https://colinwu.me/assets/logo-42c1a2dd.svg",
  },
  // Add more projects as needed
];
