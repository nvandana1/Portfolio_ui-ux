// import { useState } from 'react'
import './project.css'
// import profileImage from './../assets/profile2.jpg';
// import portfolio from './../assets/portfolio.png';

// const projects: any[] = [
//   {
//     id: 1,
//     name: 'Portfolio using AI',
//     description:
//       'A personal website built with React, TypeScript, and CSS. Using AI to generate style and html.',
//     image: portfolio,
//   },
//   {
//     id: 2,
//     name: 'Todo List',
//     description:
//       'A simple and intuitive todo list app built with React, Redux, and TypeScript.',
//       image: profileImage,
//     },
//   {
//     id: 3,
//     name: 'Weather App',
//     description:
//       'A weather app built with Next.js, OpenWeatherMap API, and Tailwind CSS. It displays the current weather and forecast for a given location.',
//       image: profileImage,
//     },
//     {
//       id: 4,
//       name: 'Weather App',
//       description:
//         'A weather app built with Next.js, OpenWeatherMap API, and Tailwind CSS. It displays the current weather and forecast for a given location.',
//         image: profileImage,
//       },
// ]

export default function Projects() {
  // const [activeProject, setActiveProject] = useState(1)

  return (
    <section className="projects">
      <h2 className="sr-only">Projects</h2>
      <div className="projects-grid">
      <iframe src="https://www.behance.net/embed/project/221262887?ilo0=1" style={{
    borderRadius: '20px',
  }} height="316" width="404"  allowFullScreen  allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
  <iframe src="https://www.behance.net/embed/project/221423631?ilo0=1" style={{
    borderRadius: '20px',
  }} height="316" width="404"  allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>

      </div>
      {/* <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`projects-grid-item ${
              activeProject === project.id ? 'active' : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              onClick={() => setActiveProject(project.id)}
            />
            <div className="projects-grid-item-description">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

