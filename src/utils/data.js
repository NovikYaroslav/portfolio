import dasboardShot from '../img/Dashboard.png';

export const portfolioRoutes = ['about', 'projects'];

export const contacts = [
  {
    type: 'Email',
    value: 'kodzima89@gmail.com',
  },
  {
    type: 'Telegram',
    value: '@Kodzima',
  },
  {
    type: 'Phone',
    value: '+393481938569',
  },
  {
    type: 'Github',
    value: '+393481938569',
  },
];

export const projectsData = [
  {
    name: 'Bibbiano (2023)',
    status: 'In progress',
    backend: 'active',
    screenshot: null,
    deploy: 'https://www.bibbiano.com',
    github: false,
    stack: ['Wordress'],
    additionalTechs: ['Jupiter 6', 'WP Bakery'],
    responsive: true,
    description:
      'Maintain page technical condition, increase page stability and security, and implement layout modifications.',
  },
  {
    name: 'Pokedex (2023)',
    status: 'Done',
    backend: 'active',
    screenshot: null,
    deploy: 'https://pokedex-two-omega.vercel.app',
    github: 'https://github.com/NovikYaroslav/fortech-test-work',
    stack: ['JavaScript', 'HTML', 'CSS', 'React', 'Redux(RTK)', 'ReactRouter'],
    additionalTechs: ['CRA', 'Rest API', 'Redux Thunk', 'Eslint'],
    responsive: true,
    description:
      'Create a Pokedex-like app using the free Pokemon API pokeapi.com. Include a separate page to display additional information about the chosen Pokemon. Ensure the app features pagination, a search box, and the ability to filter Pokemon by type (with multiple selections allowed). Store the selected filters and pagination in the URL as query parameters.',
  },

  {
    name: 'reviews manager (2023)',
    status: 'Done',
    backend: 'none',
    screenshot: null,
    deploy: 'https://dizzain-com-test.vercel.app',
    github: 'https://github.com/NovikYaroslav/dizzain.com_test',
    stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'React Context',
      'ReactRouter',
    ],
    additionalTechs: ['CRA', 'React Context', 'Ant Design'],
    responsive: true,
    description:
      'Develop a restaurant reviews section using initial data from a JSON file. Implement a form to submit reviews and create an admin page for the management of reviews, allowing for deletion or editing.',
  },

  {
    name: 'Minimalistic dashboard (2023)',
    status: 'Done',
    backend: 'none',
    screenshot: dasboardShot,
    deploy: 'https://dashboard-alpha-sand.vercel.app',
    github: 'https://github.com/NovikYaroslav/dashboard',
    stack: ['JavaScript', 'HTML', 'CSS', 'React', 'Redux(RTK)', 'ReactRouter'],
    additionalTechs: ['CRA', 'React-draggable', 'React-calendar'],
    responsive: false,
    description:
      'Develop a fullscreen, minimalistic dashboard that can be configured by the user. Include daily-use widgets that are draggable and can be placed anywhere on the screen.',
  },
  {
    name: 'Movies explorer (2023)',
    status: 'Done',
    backend: 'shutted down ',
    screenshot: null,
    deploy: 'https://2120755-what-to-watch-12.vercel.app',
    github: 'https://github.com/NovikYaroslav/2120755-what-to-watch-12',
    stack: ['TypeScript', 'CSS', 'React', 'Redux(RTK)', 'ReactRouter'],
    additionalTechs: [
      'CRA',
      'Rest API',
      'Axios',
      'JWT Token',
      'Redux Thunk',
      'Tostify',
      'Jest',
      'Eslint',
    ],
    responsive: false,
    description:
      'Implement the frontend logic for a movie explorer app, retrieving data from the backend. Integrate user authorization, incorporate a movies filter, and establish logic for a fullscreen player. Include the capability and logic for users to add movies to their favorites. Implement the logic for a review form.',
  },
  {
    name: 'Airbnb like application (2023)',
    status: 'Done',
    backend: 'shutted down ',
    screenshot: null,
    deploy: 'https://2120755-six-cities-simple-12.vercel.app',
    github: 'https://github.com/NovikYaroslav/2120755-six-cities-simple-12',
    stack: ['TypeScript', 'CSS', 'React', 'Redux(RTK)', 'ReactRouter'],
    additionalTechs: [
      'CRA',
      'Craco',
      'Leaflet',
      'Classnames',
      'JWT Token',
      'Rest API',
      'Axios',
      'Redux Thunk',
      'Tostify',
      'Jest',
      'Eslint',
    ],
    responsive: false,
    description:
      'Develop the frontend logic for an Airbnb clone app, fetching data from the backend. Implement user authorization, integrate filters and sorting for property offers, create logic for a Leaflet map, and include functionality for a review form.',
  },
  {
    name: 'Landing + movies explorer (2023)',
    status: 'Done',
    backend: 'active',
    screenshot: null,
    deploy: 'https://movies.novik.nomoredo.nomoredomains.monster',
    github: 'https://github.com/NovikYaroslav/movies-explorer-frontend',
    stack: ['JavaScript', 'HTML', 'CSS', 'React', 'Redux(RTK)', 'ReactRouter'],
    additionalTechs: ['CRA', 'JWT Token', 'Rest API', 'Eslint'],
    responsive: true,
    description:
      'Build a full-stack application featuring a projects portfolio and movie explorer pages. Retrieve data from an external backend and implement data writing to your backend. Incorporate user authorization, add movie search and filtering capabilities, and include functionality for users to add movies to their favorites. Create a profile editing page and deploy both the frontend and backend.',
  },
  {
    name: 'Simple social network (2022)',
    status: 'Done',
    backend: 'active',
    screenshot: null,
    deploy: 'https://mesto.novik.nomoredomains.work',
    github: 'https://github.com/NovikYaroslav/react-mesto-api-full-gha',
    stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'React Context',
      'ReactRouter',
    ],
    additionalTechs: ['CRA', 'JWT Token', 'Rest API', 'Eslint'],
    responsive: true,
    description:
      'Develop a full-stack social network app, utilizing data from the backend and enabling data writing to the backend. Implement user authorization, create a profile editing page, and deploy both the frontend and backend.',
  },
];
