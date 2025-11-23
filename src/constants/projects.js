// src/data/projects.js
export const projects = [
  {
    dateRange: "Feb 2025 - Present",
    title: "StonkSensei",
    description:
      "AI-Powered Stock Market Analysis Platform leveraging pre-trained BERT models for sentiment analysis on Reddit posts on r/wallstreetbets and financial news, integrating real market data to assess stock hype and risk.",
    technologies: [
      { name: "FastAPI", color: "tertiary" },
      { name: "React", color: "light_blue" },
      { name: "MongoDB", color: "secondary" },
      { name: "Selenium", color: "lime" },
      { name: "Next.js", color: "blueish" },
      { name: "Auth0", color: "orange" },
    ],
    githubLink: "https://github.com/ColinWu0403/StonkSensei",
    demoLink: "https://github.com/ColinWu0403/StonkSensei",
    imageSrc: "./stonks.png",
  },
  {
    dateRange: "Sep 2024 - Present",
    title: "Bucketlist",
    description:
      "A commissioned mobile app where each bucket serves as a community, allowing users to connect, share tips, and collaborate on achieving specific goals.\n\nNote: Source code not public.",
    technologies: [
      { name: "Node.js", color: "tertiary" },
      { name: "React Native", color: "blueish" },
      { name: "PostgreSQL", color: "lime" },
      { name: "Express.js", color: "violet" },
      { name: "AWS (RDS and S3)", color: "orange" },
    ],
    githubLink: "https://github.com/Purdue-ACM-SIGAPP/bucketlist",
    demoLink: "https://github.com/Purdue-ACM-SIGAPP/bucketlist",
    imageSrc: "./adaptive-icon.png",
  },
  {
    dateRange: "Aug 2024 - Present",
    title: "BoilerRooms",
    description:
      "ACM SIGAPP's annual project for 2024-2025. It is an interactive map of campus intended for university students to explore campus dorms, view detailed information, and access user-generated reviews, including ratings, images, and comments.",
    technologies: [
      { name: "ASP.NET", color: "lime" },
      { name: "React Native", color: "blueish" },
      { name: "MongoDB", color: "secondary" },
    ],
    githubLink: "https://github.com/Purdue-ACM-SIGAPP/housing-frontend",
    demoLink: "https://github.com/Purdue-ACM-SIGAPP/housing-frontend",
    imageSrc: "./purduepaths.png",
  },
  {
    dateRange: "May 2024 - Present",
    title: "APO Online",
    description:
      "Full-stack website for the Alpha Phi Omega chapter at Purdue, enabling users to manage accounts, join events, and track volunteer hours, providing comprehensive insights for both users and administrators.\n\nUtilized React for frontend, Django REST framework for backend, and PostgreSQL for the database to implement the platform’s features ensuring efficient data handling and seamless user experiences.",
    technologies: [
      { name: "Django", color: "secondary" },
      { name: "React", color: "light_blue" },
      { name: "PostgreSQL", color: "tertiary" },
      { name: "Tailwind CSS", color: "lime" },
    ],
    githubLink: "https://github.com/katelync12/APO-Website",
    demoLink: "https://github.com/katelync12/APO-Website",
    imageSrc: "./APOBadge.svg",
  },
  {
    dateRange: "July 2024 - Present",
    title: "Heart BPM Music",
    description:
      "Heart BPMusic is a website that recommends songs based on your heart's BPM (beats per minute) and mood. The project integrates a Django REST API with a Vue.js Single Page Application frontend to deliver a seamless user experience. It uses a KNN Machine Learning model with scikit-learn and Spotify's Web API to provide personalized music recommendations.",
    technologies: [
      { name: "Django", color: "secondary" },
      { name: "Spotify Web API", color: "red" },
      { name: "Vue", color: "lime" },
      { name: "Scikit-learn", color: "tertiary" },
      { name: "Neurokit2", color: "magenta" },
    ],
    githubLink: "https://github.com/ColinWu0403/heartBPMusic",
    demoLink: "https://heart-bpm-music.vercel.app/",
    imageSrc: "./HeartBPMusic.png",
  },
  {
    dateRange: "May 2024 - Aug 2024",
    title: "LLaMA-2-hf-Chatbot",
    description:
      "Chatbot from pretrained LLaMA-2 LLM model from HuggingFace, fine-tuned with medical research papers using RAG (Retrieval-Augmented Generation). This chatbot can run on both Google Collab and on a demo web app built with Django and React.",
    technologies: [
      { name: "LLaMA-2", color: "blueish" },
      { name: "Transformers", color: "magenta" },
      { name: "Langchain", color: "lime" },
      { name: "Pytorch", color: "tertiary" },
      { name: "Django", color: "secondary" },
      { name: "React", color: "light_blue" },
    ],
    githubLink: "https://github.com/ColinWu0403/LLaMA-2-hf-Chatbot",
    demoLink:
      "https://colab.research.google.com/drive/1ittu4zTPqlZF0MFNlG_86_z_DN2kyZ9G?usp=sharing",
    imageSrc: "./chatbot.png",
  },
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
    imageSrc: "./icon_small.svg",
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
    demoLink: "https://colinwu0403.github.io/ ",
    imageSrc: "https://colinwu0403.github.io/assets/logo-42c1a2dd.svg",
  },
  // Add more projects as needed
];
