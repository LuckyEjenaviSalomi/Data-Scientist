// JavaScript code to dynamically generate project cards and implement scroll animations
const projects = [

  {
    title: "Sales Forecasting with Machine Learning",
    description: "Used Python, pandas, and scikit-learn to forecast future sales for an FMCG company.",
    link: "Projects/SalesForecasting_ML.html"
  },

  {
    title: "Recommendation System for E-commerce ✅",
    description: "Developed a recommendation system using collaborative filtering to enhance user experience.",
    link: "Projects/3. Lucky_Salomi_Recommendation_Systems_Learner_Notebook_Full_Code.html"
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
    link: "Projects/2. Potential-Customers-Prediction.html"
  },

  {
    title: "FoodHub Data ✅",
    description: "Analyzed sales data for a food delivery service to identify trends and improve marketing strategies.",
    link: "Projects/Foundation in Data Science/FDS Analysis/FoodHub Data Analysis.html"
  },

  {
    title: "City of Melbourne Housing Analysis ✅",
    description: "Analyzed housing data to identify trends and provide insights for urban planning.",
    link: "Projects/Foundation in Data Science/City of Melbourne/City_of_Melbourne_ExploratoryDataAnalysis.html"
  },

  {
    title: "Cardio Good Fitness SLR Model ✅",
    description: "Developed a simple linear regression model to predict cardio fitness levels based on various features.",
    link: "Projects/Foundation in Data Science/Cardio Good Fitness/Notebook_CardioGood_Fitness_Data_Analysis.html"
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
