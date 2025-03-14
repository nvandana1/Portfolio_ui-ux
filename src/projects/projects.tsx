import './project.css'

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="sr-only">Projects</h2>
      <div className="projects-grid">
        <iframe src="https://www.behance.net/embed/project/221262887?ilo0=1" style={{
          borderRadius: '20px',
        }} height="316" width="404" allowFullScreen allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        <iframe src="https://www.behance.net/embed/project/221423631?ilo0=1" style={{
          borderRadius: '20px',
        }} height="316" width="404" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>
  )
}

