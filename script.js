// JavaScript code to dynamically generate project cards and implement scroll animations
const projects = [
  {
    title: "Sales Forecasting with Machine Learning",
    description: "Used Python, pandas, and scikit-learn to forecast future sales for an FMCG company.",
    link: "SalesForecasting_ML.html"
  },

  {
    title: "Recommendation System for E-commerce ✅",
    description: "Developed a recommendation system using collaborative filtering to enhance user experience.",
    link: "ML Projects/3. Lucky_Salomi_Recommendation_Systems_Learner_Notebook_Full_Code.html"
  },

  {
    title: "Fraud Detection in Financial Data",
    description: "Implemented anomaly detection using isolation forest and Benford’s Law to detect potential fraud.",
    link: "#"
  },

  {
    title: "Customer Segmentation with K-Means",
    description: "Analyzed customer data to build marketing personas using clustering techniques.",
    link: "#"
  },

  {
    title: "Potential Customers Prediction ✅",
    description: "Analyzed customer data to build marketing personas using clustering techniques.",
    link: "ML Projects/2. Potential-Customers-Prediction.html"
  },

  {
    title: "FoodHub Data ✅",
    description: "Analyzed sales data for a food delivery service to identify trends and improve marketing strategies.",
    link: "ML Projects/Foundation in Data Science/FDS Analysis/FoodHub Data Analysis.html"
  },

  {
    title: "City of Melbourne Housing Analysis ✅",
    description: "Analyzed housing data to identify trends and provide insights for urban planning.",
    link: "ML Projects/Foundation in Data Science/City of Melbourne/City_of_Melbourne_ExploratoryDataAnalysis.html"
  },

  {
    title: "Cardio Good Fitness SLR Model ✅",
    description: "Developed a simple linear regression model to predict cardio fitness levels based on various features.",
    link: "ML Projects/Foundation in Data Science/Cardio Good Fitness/Notebook_CardioGood_Fitness_Data_Analysis.html"
  },

  {
    title: "Power BI Dashboard for Audit Performance",
    description: "Built interactive visual dashboards to visualize audit performance metrics and trends.",
    link: "audit_performance.html"
  },

  {
    title: "Power BI Dashboard for Audit Recommendations", 
    description: "Developed interactive dashboards to visualize audit recommendations and their implementation status.",
    link: "audit_recommendations.html"
  },

  {
    title: "Power BI Dashboard for Resource Allocation",
    description: "Created a dashboard to visualize resource allocation across various projects. Applied Row-Level Security to restrict data access.",
    link: ""
  },

  {
    title: "Power BI Dashboard for Headcount Analysis",
    description: "Developed a Power BI dashboard to analyze headcount trends, Pareto Analysis of Grade levels.",
    link: "#"
  },

  {
    title: "Invoicing and Receipting System in Ms Access",
    description: "Developed a system to manage invoicing and receipting processes using MS Access.",
    link: "#"
  },

  {
    title: "Custom M-Functions for Power Query",
    description: "Created custom M-functions to enhance data transformation capabilities in Power Query.",
    link: "#"
  },

  {
    title: "Custom Python Functions for Data Science Projects", 
    description: "Developed custom Python functions to streamline data processing and analysis.",
    link: "#"
  },
];

const container = document.getElementById("projectList");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
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
