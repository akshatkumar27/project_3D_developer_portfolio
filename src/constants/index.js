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
  exploredgoa,
  threejs,
  postman, 
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
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
    name: "postman",
    icon: postman,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "VSAL",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
     "Created a completely responsive admin panel for the management of data from mongodb database.",   
     "Responsiveness is achieved using tailwind CSS. User interface was optimized and enhanced.",
      "Data visualization-Using chart.js for representing data in format of graph",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Bohfy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2022 - Nov 2022",
    points: [
      "Api's for cart item,otp verification,Distance between your current location and restaurant (Google API).",
      "App contains feature of scanning restaurant QR and placing order without requirement of any waiter. Restaurant tables are booked using QR present on restaurant table.",
      "People in same restaurant have feature of chat. Users are filter bases on their distance.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Fanstox",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Select of different crypto-currency to enter in contest. Animating the selection process to enhance the user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.", 
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
    name: "Logistic Management",
    description:
      "A React-based web app facilitating one on one chat, order creation, and payment processing between a Manufacturer and a Transporter.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: exploredgoa,
    source_code_link: "https://github.com/",
  },
  {
    name: "HooBank",
    description:
      "A single page website for displaying the features of a bank. Completely responsive for all devices. It is just the UI each section is component based",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/akshatkumar27/Hoobank-UI",
  },
  {
    name: "Ecommers Website",
    description:
      "A full stack ecommers website with complete functionality like flipkart and amazon.Payment process is made using braintree payment gateway.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "Render",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ecommers-frontend.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
