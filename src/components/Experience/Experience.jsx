const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Shopify',
    date: 'S26',
    logo: '/shopify.png',
    description: 'pricing & agentic payments',
    url: 'https://www.shopify.com/'
  },
  {
    role: 'IT Architect Intern',
    company: 'Fidelity Investments',
    date: 'S25',
    logo: '/fidelity.webp',
    description: 'design blueprints & developer portal',
    url: 'https://www.fidelity.ca/en/'
  },
  {
    role: 'Data Engineer Intern',
    company: 'Fidelity Investments',
    date: 'W25',
    logo: '/fidelity.webp',
    description: 'developed data pipelines & python scripts',
    url: 'https://www.fidelity.ca/en/'
  },
]

function Experience() {
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
      <h3>experience:</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} onClick={() => exp.url && window.open(exp.url, '_blank')}>
            <div className="title" style={{ fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src={exp.logo} alt={exp.company} style={logoStyle} />
              <span className="main">
                {exp.role} <span style={{ color: '#71717a' }}>@</span>{' '}
                <span style={{ fontWeight: 400 }}>{exp.company}</span>
                <span style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  color: '#a78bfa',
                  borderRadius: '3px',
                  padding: '1px 6px',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  marginLeft: '6px',
                  letterSpacing: '0.02em',
                }}>{exp.date}</span>
              </span>
              <span className="desc">{exp.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
