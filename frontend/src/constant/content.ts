export const IMAGES_PATH = {
  about: "/images/about-img.jpg",
  icons: [
    "/images/html-icon.svg",
    "/images/css-icon.svg",
    "/images/javascript-icon.svg",
    "/images/react-icon.svg",
    "/images/redux-icon.svg",
    "/images/typescript-icon.svg",
    "/images/sass-icon.svg",
    "/images/tailwind-icon.svg",
    "/images/github-icon.svg",
  ],
};

export const SKILLS: any = {
  techstacks: {
    html: "/images/html-icon.svg",
    css: "/images/css-icon.svg",
    javascript: "/images/javascript-icon.svg",
    react: "/images/react-icon.svg",
    redux: "/images/redux-icon.svg",
    typescript: "/images/typescript-icon.svg",
    sass: "/images/sass-icon.svg",
    tailwind: "/images/tailwind-icon.svg",
    github: "/images/github-icon.svg",
    vite: "/images/vite-icon.svg",
    postgres: "/images/postgres-icon.svg",
    mui: "/images/mui-icon.svg",
    axios: "/images/axios-icon.svg",
  },
  otherskills: {
    toeic: "/images/toeic-icon.png",
    figma: "/images/figma-icon.svg",
    photoshop: "/images/photoshop-icon.svg",
    word: "/images/word-icon.svg",
    excel: "/images/excel-icon.svg",
    powerpoint: "/images/ppt-icon.svg",
  },
};

export const EDUCATION: any = [
  {
    place: "CFD Circle",
    course: "Front-End Master Course",
    timeline: "02/2024 - Present",
  },
  {
    place: "Informatics Center – University of Science",
    course: "Data Science and Machine Learning Certificate",
    timeline: "03/2022 - 04/2023",
  },
  {
    place: "University of Economics HCMC",
    course: "Bachelor in Business Administration",
    timeline: "2018 - 2021",
  },
];

export const CERTIFICATION: any = [
  {
    place: "Informatics Center – HCMUS",
    name: "Data Science & Machine Learning Certificate",
    timeline: "04/2023",
  },
  {
    place: "Coder School",
    name: "Data Analysis Online Course Certificate",
    timeline: "2021",
  },
];

export const PAGE_CONTENT: any = {
  home: {
    aboutsc: {
      title: "About me",
      description:
        "Aspiring front-end developer with a finance background and skills in ReactJs, HTML, CSS, and JavaScript. I offer strong analytical and problem-solving abilities to create user-friendly, visually appealing web solutions. Excited to contribute fresh perspectives in a dynamic tech environment.",
    },
  },
  contact: {
    email: "nguyenanhnhat123456@gmail.com",
    phone: "0909284493",
    address: "District 7, HCMC",
    github: "https://github.com/TommyNhatNguyen",
  },
  projects: [
    {
      title: "Streamvibe",
      description:
        "I developed a movie website using a free Figma template and integrated TMDB APIs. The tech stack includes ReactJS, Redux Toolkit, ContextAPI, react-router-dom, Axios, Yarn, GitHub, and SASS/SCSS with styled-components. Key features include routing, movie displays, and a login/register system with multi-factor authentication for managing favorites and watchlists. Users can search, filter, and sort movies, with form validation via the useForm hook. I followed the Presentational/Container Component design pattern for maintainability. The site is deployed on Vercel for easy updates and accessibility.",
      image: "/images/streamvibe.png",
      srcLink: "https://github.com/TommyNhatNguyen/StreamVibe",
      webLink: "https://stream-vibe-tommynguyen.vercel.app/",
    },
    {
      title: "FinanceFlow",
      description:
        "I created a fully responsive website using a Figma template from CFD Circle, leveraging technologies such as HTML, CSS, JavaScript ES6, SCSS/SASS, NPM, and Grunt. The project involved translating the Figma design into a functional website, incorporating simple form validation with plain JavaScript. Additionally, I implemented animations and interactive sections using JavaScript libraries like Flickity for carousels and AoS for scroll animations, ensuring an engaging user experience.",
      image: "/images/financeflow.png",
      srcLink: "https://github.com/TommyNhatNguyen/FinanceFlow",
      webLink: "https://finance-flow-rho.vercel.app/",
    },
    {
      title: "CFD Shop",
      description:
        "I developed a React website using a template and APIs from CFD Circle, employing technologies like ReactJS, Redux Toolkit, Axios, and Ant Design. The project features JWT authentication for user login and registration, along with product searching, filtering, and cart management (add, remove, update). Users can review products, check out, search blogs, paginate content, and manage profiles. My role involved converting an HTML/CSS/JavaScript project into a React app, utilizing Redux Toolkit and ContextAPI for state management, and implementing Axios for REST API calls. I also used the useForm hook for client-side validation and styled components with styled-components for a reusable UI, optimizing performance with useMemo and lazy loading techniques.",
      image: "/images/cfdshop.png",
      srcLink: "https://github.com/TommyNhatNguyen/CFD-SHOP",
      webLink: "https://cfd-shop-nhatnguyen.vercel.app/",
    },
    {
      title: "DQH Architecture",
      description:
        "I built this website using a Figma template provided by my colleague, employing a range of technologies including HTML, CSS, JavaScript ES6, SCSS/SASS, NPM, and Grunt. My tasks included creating a fully responsive website that adheres closely to the Figma design specifications, utilizing plain JavaScript for simple form validation alongside SCSS/SASS for styling.",
      image: "/images/dqharchitecture.png",
      srcLink: "https://github.com/TommyNhatNguyen/DQH-Architecture",
      webLink: "https://dqh-architecture.vercel.app/",
    },
  ],
};
