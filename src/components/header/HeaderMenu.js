const menu = [
  {
    headerElem: "Why Spring",

    articles: [
      {
        headerSubElem: "Overview",
      },
      {
        headerSubElem: "Microservices",
      },
      {
        headerSubElem: "Reactive",
      },
      {
        headerSubElem: "Event Driven",
      },
      {
        headerSubElem: "Cloud",
      },
      {
        headerSubElem: "Web Applications",
      },
      {
        headerSubElem: "Serverless",
      },
      {
        headerSubElem: "Batch",
      },
    ],
  },
  {
    headerElem: "Learn",

    articles: [
      {
        headerSubElem: "Overview",
      },
      {
        headerSubElem: "Quickstart",
      },
      {
        headerSubElem: "Guides",
      },
      {
        headerSubElem: "Blog",
      },
    ],
  },

  {
    headerElem: "Projects",

    articles: [
      {
        headerSubElem: "Overview",
      },
      {
        headerSubElem: "Spring Boot",
      },
      {
        headerSubElem: "Spring Framework",
      },
      {
        headerSubElem: "Spring Cloud",
      },
      {
        headerSubElem: "Spring Cloud Data Flow",
      },
      {
        headerSubElem: "Spring Data",
      },
      {
        headerSubElem: "Spring Integration",
      },
      {
        headerSubElem: "Spring Batch",
      },
      {
        headerSubElem: "Spring Security",
      },
      {
        headerSubElem: "View all projects",
      },
      {
        headerSubElem: "Development tools",
      },
      {
        headerSubElem: "Spring Tools 4",
      },
      {
        headerSubElem: "Spring Initializr",
      },
    ],
  },
  {
    headerElem: "Training",
  },
  {
    headerElem: "Support",
  },
  {
    headerElem: "Community",

    articles: [
      {
        headerSubElem: "Overview",
      },
      {
        headerSubElem: "Events",
      },
      {
        headerSubElem: "Team",
      },
    ],
  },
];

const NewMenu = menu.map((e, index) => {
  return { ...e, id: index };
});

export default NewMenu;
