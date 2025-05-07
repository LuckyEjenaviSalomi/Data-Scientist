// JavaScript code to dynamically generate project cards and implement scroll animations
const projects = [
  {
    title: "ETL Functions GitHub Repository",
    description: "Reusable functions written in Data Mashup language. Useful for data extraction, transformation and loading in Power BI.",
    link: "https://github.com/LuckyEjenaviSalomi/Microsoft-Power-Query"
  },


  {
    title: "Power BI Report for Audit Performance",
    description: "Built interactive visual dashboards to visualize audit performance metrics and trends.",
    link: "Projects/audit_performance.html"
  },

  {
    title: "Power BI Report for Audit Recommendations", 
    description: "Developed interactive dashboards to visualize audit recommendations and their implementation status.",
    link: "Projects/audit_recommendations.html"
  },

  {
    title: "Power BI Dashboard for Resource Allocation",
    description: "Created a dashboard to visualize resource allocation across various projects. Applied Row-Level Security to restrict data access.",
    link: "Projects/Resource Allocation Analytics.html"
  },

  {
    title: "Power BI Dashboard for Headcount Analysis",
    description: "Developed a Power BI dashboard to analyze headcount trends, Pareto Analysis of Grade levels.",
    link: "Projects/staff_headcount_analytics.html"
  },

  {
    title: "Estate Financials Dashboard",
    description: "Developed a Power BI dashboard to analyze Estate Revenue, Costs, Cash and cash equivalents.",
    link: "Projects/Estate financials.html"
  },
];

const container = document.getElementById("projectList");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Projects</a>
  `;
  container.appendChild(div);
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  observer.observe(section);
});
