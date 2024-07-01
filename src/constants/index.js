import {
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    bootstrap,
    tailwind,
    git,
    mysql,
    converse,
    weatherapp,
    mcqgame,
    movix,
  } from "../assets/index.js";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
     name:"Bootstrap",
     icon:bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name:"My SQL",
      icon:mysql,

    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  
  
  const projects = [
    {
      name: "Weather app",
      description:
        "weather web app built using html,bootstrap and javascript.It is a simple weather forecasting application that uses weather API to fetch relevant data and display on front-end.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/KhurshidShaikh/weather-web-app",
    },
    {
      name: "Movix",
      description:
        "Web application that allows user search about movies & tv shows and showcase its related data. It also displays popular shows/movies weekly and daily.Developed using react,redux,scss and TMDB API for fetching data .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: movix,
      source_code_link: "https://github.com/KhurshidShaikh/movix",
    },
    {
      name: "Converse Chatbot",
      description:
        "A  chatbot that responds to user's prompt in text format.It uses gemini API to get response for prompts and display it in a presentable format.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: converse,
      source_code_link: "https://github.com/KhurshidShaikh/Converse-Chatbot",
    },
    {
      name: "MCQ Game",
      description:
        "A  Multiple choice question game that enables user to select option and also allows navigation between questions and the final score is displayed on end of the game",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: mcqgame,
      source_code_link: "https://github.com/KhurshidShaikh/MCQ-Game",
    },


  ];
  
  export { services, technologies, projects };
