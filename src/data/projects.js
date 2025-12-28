export const projects = [
  {
    slug: "fundi-products-store",
    title: "Fundi Products Store",
    subtitle: "E-commerce template with routing, search params, cart flow",
    screenshot: "/images/projects/fundi-store.png",
    stack: ["React", "Vite", "React Router", "Context API"],
    liveUrl: "https://YOUR_LIVE_LINK_HERE",
    githubUrl: "https://github.com/YOUR_GITHUB_HERE",

    caseStudy: {
      problem:
        "Small businesses need a fast, clean online store template that can be customized quickly without building from scratch.",
      solution:
        "Built a reusable React + Vite store with a clean structure, /store routing, product search via URL params, and cart flow.",
      results: [
        "Clean two-section site: Portfolio (/) + Store (/store)",
        "Search deep-links to /store/products?search=…",
        "Reusable base template for future client projects",
      ],
    },
  },
  {
    slug: "node-express-rest-api",
    title: "Node/Express REST API",
    subtitle: "REST foundation with validation + error handling (auth-ready)",
    screenshot: "/images/projects/node-api.png",
    stack: ["Node.js", "Express", "MongoDB", "Postman"],
    liveUrl: "",
    githubUrl: "https://github.com/YOUR_GITHUB_HERE",

    caseStudy: {
      problem:
        "Apps often fail due to insecure APIs, inconsistent error handling, and missing validation.",
      solution:
        "Built a REST API structure with clean routes, validation patterns, and consistent error responses (JWT-ready next).",
      results: [
        "Cleaner API contracts and safer input handling",
        "Easy to extend with JWT + roles",
        "Developer-friendly structure for scaling endpoints",
      ],
    },
  },
];
