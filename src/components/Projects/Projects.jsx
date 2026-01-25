const projects = [
  {
    name: 'cutos',
    description: 'cursor for video editing',
    url: 'https://github.com/shamsharoon/CutOS',
    hover: 'ai-powered video editing made simple',
    logo: '/cutos_icon.svg'
  },
  {
    name: 'volt!',
    description: 'ai-powered file system',
    url: 'https://v0lt.ca',
    hover: 'enable talking to your documents',
    logo: '/volt_logo.jpeg'
  },
]

function Projects() {
  const logoStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '3px',
    marginRight: '6px',
    verticalAlign: 'middle',
    flexShrink: 0,
  }

  return (
    <section>
      <h3>projects:</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index} onClick={() => window.open(project.url, '_blank')}>
            <div className="title" style={{ fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              {project.logo && <img src={project.logo} alt={project.name} style={logoStyle} />}
              <span className="main">
                <span style={{ fontWeight: 400, color: '#fafafa' }}>{project.name}</span>
                <span style={{ color: '#71717a' }}> — {project.description}</span>
              </span>
              <span className="desc">{project.hover}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
