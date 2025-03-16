import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    material,
    wergo,
    tinfit,
    iim,
    ln,
    foxatab,
    vista,
    cbth,
    askdoc,
    sangeetha,
    western,
    wlms,
    kidwizz,
    chelva
  } from "../assets";
  
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
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "material ui",
      icon: material
    }
  ];
  
  const experiences = [
    {
      title: "Junior Developer",
      company_name: "IJSE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - March 2019",
      points: [
        "Developing java related Fx and Swing apps",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer",
      company_name: "Zegates",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2019 - Jul 2020",
      points: [
        "Developing and maintaining web applications mobile application and back end application",
        "Implementing responsive design and ensuring cross-browser and cross-origin compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Lead React Native Developer",
      company_name: "Archnix",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Present",
      points: [
        "Lead Mobile Developer and Front-End Developer for multiple React Native and react.js projects.",
        "Cross-functional collaboration with UI/UX designers, backend developers, and project managers.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Deployment & Release Management (Android, iOS)"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wergo",
      description:
        "A cross-platform mobile application that allows users to search, book, and manage clubs, restaurants, and their events, as well as find new friends through the Wergo app. The app primarily targets European nightlife.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: wergo,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tinfit",
      description:
        "TinFit is Cross-platform Mobile application, a comprehensive app designed for both gym owners and fitness enthusiasts, stands out as a remarkable venture. With a strong focus on delivering an exceptional user experienc",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        }
      ],
      image: tinfit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Invest In Moi",
      description:
        "A cross-platform mobile application that allows users to buy gold based on the current market price, collect it, or sell it through the app at the prevailing market rate. It serves as a platform for investing in gold.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: iim,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ask Doc",
      description:
        "A cross-platform mobile application that helps users analyze their mental health. Based on the provided courses, users can assess their current mental state, and if it is critical, they can follow the app's guided instructions for support.",
      tags: [
        {
          name: "React-Nativet",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      
      ],
      image: askdoc,
      source_code_link: "https://github.com/",
    },

    {
      name: "Cross Border Tele Health",
      description:
        "A cross-platform mobile application that  is a telemedicine platform designed to bridge the gap between patients and healthcare professionals across borders. It consists of two apps: one for patients and another for doctors",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Agora",
          color: "white-text-gradient",
        },
      ],
      image: cbth,
      source_code_link: "https://github.com/",
    },

    {
      name: "Kidwizz",
      description:
        "A cross-platform mobile application and web application developed for school management, providing a seamless communication platform between schools, teachers, and parents. The app aims to streamline school operations .",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: kidwizz,
      source_code_link: "https://github.com/",
    },

    {
      name: "Sangeetha Jewellers",
      description:
        "Cross-platform mobile application designed to provide a seamless and convenient shopping experience for customers of Sangeetha Jewellers. The app allows users to explore a wide range of high-quality jewelry, from traditional to modern designs, including gold, diamonds, and silver pieces.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
      ],
      image: sangeetha,
      source_code_link: "https://github.com/",
    },
    {
      name: "Western Jewelleres",
      description:
        "Cross-platform mobile application designed to provide a seamless and convenient shopping experience for customers of Sangeetha Jewellers. The app allows users to explore a wide range of high-quality jewelry, from traditional to modern designs, including gold, diamonds, and silver pieces.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
      ],
      image: western,
      source_code_link: "https://github.com/",
    },
    {
      name: "Winspert LMS",
      description:
        "Web-based platform that Winspert LMS is a comprehensive Learning Management System (LMS) designed to streamline and enhance the learning experience for both educators and learners. It offers a robust platform for organizations, institutions, and businesses to manage, deliver, and track online training programs, courses, and educational content.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Chart.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Zoom",
          color: "blue-text-gradient",
        },
      ],
      image: wlms,
      source_code_link: "https://github.com/",
    },
    {
      name: "Vista HRM",
      description:
        "A cross-platform mobile application designed to manage HR operations within an organization.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
      ],
      image: vista,
      source_code_link: "https://github.com/",
    },
    {
      name: "Foxatab",
      description:
        "A cross-platform mobile application for online shopping, offering fast delivery of goods within a few minutes.",
      tags: [
        {
          name: "reac-Nativet",
          color: "blue-text-gradient",
        },
        {
          name: "Geo-coords",
          color: "pink-text-gradient",
        },
        // {
        //   name: "Stripe",
        //   color: "#69B6E3-gradient",
        // },
      ],
      image: foxatab,
      source_code_link: "https://github.com/",
    },
    {
      name: "LN Sports",
      description:
        "A cross-platform mobile application for LN Sport Channel in Sri Lanka, enabling the broadcasting of sports events through the app.",
      tags: [
        {
          name: "react-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "VideoSDKstream-io",
          color: "green-text-gradient",
        },
      ],
      image: ln,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chelvaa Homes",
      description:
        "A cross-platform mobile application for users to view and check the status of Chelvaa Group's real estate projects, including completed and ongoing projects.",
      tags: [
        {
          name: "reac-Nativet",
          color: "blue-text-gradient",
        },
       
        // {
        //   name: "Stripe",
        //   color: "#69B6E3-gradient",
        // },
      ],
      image: chelva,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };