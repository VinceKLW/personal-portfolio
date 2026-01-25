const experiences = [
  {
    role: 'swe',
    company: 'ontario tech racing',
    date: '2025 - present',
    logo: '/ontariotechracing.png',
    description: 'web development & internal filing system',
    url: null
  },
  {
    role: 'it architect',
    company: 'fidelity investments',
    date: '2025',
    logo: '/fidelity.webp',
    description: 'design blueprints & developer portal',
    url: 'https://www.fidelity.ca/en/'
  },
  {
    role: 'data engineer',
    company: 'fidelity investments',
    date: '2025',
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
  }

  return (
    <section>
      <h3>experience:</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} onClick={() => exp.url && window.open(exp.url, '_blank')}>
            <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem' }}>
              <img src={exp.logo} alt={exp.company} style={logoStyle} />
              <span className="main">
                {exp.role} <span style={{ color: '#71717a' }}>at</span>{' '}
                <span style={{ fontWeight: 400 }}>{exp.company}</span>
                <span style={{ color: '#71717a' }}> ({exp.date})</span>
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
