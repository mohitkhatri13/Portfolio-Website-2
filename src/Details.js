// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/myprofile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/tic tac toe image.png";
import projectImage2 from "./assets/projects/Weatherapp image.png";
import projectImage3 from "./assets/projects/tourism project.png";
import projectImage4 from "./assets/projects/Razorpay Ui clone.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mohit Khatri",
  tagline: "I build and learning new things",
  img: profile,
  about: `Hello there! 👋 I'm Mohit Khatri, a passionate and ambitious Information Technology undergraduate currently in my third year of the B.Tech program. I thrive on challenges and am driven by a deep curiosity about the world of technology.`,
  
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohit-khatri-138588220/",
  github: "https://github.com/mohitkhatri13",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Executive in Competative Programming Department",
    Company: `Google Developer Student Club`,
    Location: "College",
    Duration: "Oct-2023 - current",
  },
  {
    Position: "Executive in Tech Team ",
    Company: `BVPINC`,
    Location: "College",
    Duration: "Oct-2023 - current",
  },
  {
    Position: "Executive",
    Company: `BVPIEEE`,
    Location: "College",
    Duration: "Sep-2022 Sep-2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "MERN STACK ",
    Company: "CodeHelp, YouTube, Google, W3Schools",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Data Structure And Algorithm",
    Company: `CodeHelp , YouTube , GFG`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Nov 2021 - Present",
  },
  { 
    Position: "Bachelor in Information Technology",
    Company: `Bharati Vidyapeeth Collge Of Engineering `,
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "Nov 2021 - Present",

  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  
  
  {
    title: "Tourism Project",
    image: projectImage3,
    description: `In this Project We just creating a Simple Ui for Selecting a Trip From A Tour Company from 
    avaiable Trips`,
    techstack: "HTML,CSS, React.Js",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mohitkhatri13/Tourism-Project.git",
  },
  {
    title: "Razorpay Clone",
    image: projectImage4,
    description: `This is the Ui of the official Razorpay website fully responsive `,
    techstack: "HTML , Tailwind Css",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mohitkhatri13/Razorpay-Clone.git",
  },
  {
    title: "Weather App",
    image: projectImage2,
    description: `A dynamic weather application used Css , Js 
    incorporating the Geolocation API for real-time location tracking and weather updates. Implemented a user-friendly interface allowing users to either grant permission for live location sharing or input city names for weather forecasts.`,
    techstack: "HTML  ,CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mohitkhatri13/weather-app.git",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage1,
    description: `This is a popular game since childhood "Tic Tac Toe". using Javascript to implement 
    game machaenism and user interaction, while css provided customized styling for a visual
    experience `,
    techstack: "HTML ,CSS, JavaScript",
    previewLink: "",
    githubLink: "https://github.com/mohitkhatri13/Tic-Tac-Toe.git",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "khatrimohit2002@gmail.com",
  phone: "9166893687",
};
