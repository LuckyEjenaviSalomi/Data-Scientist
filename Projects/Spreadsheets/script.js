// JavaScript code to dynamically generate project cards and implement scroll animations
const projects = [
  {
    title: "A collection of Re-usable functions, Models, Designs, and Templates",
    description: "A compedium of my ML and AI projects",
    link: "https://github.com/LuckyEjenaviSalomi/Microsoft-Excel"
  },

  {
    title: "Excel Data Visualization",
    description: "A compelling glossary of my data storytelling visuals",
    link: "#"
  },

  {
    title: "Management Report",
    description: "A management report financial model",
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
