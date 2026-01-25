function Header() {
  const logoStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '3px',
    verticalAlign: 'middle',
    marginRight: '4px',
    flexShrink: 0,
  }

  return (
    <header style={{ marginBottom: '0.75rem' }}>
      <h1>vincent wong</h1>
      <h2 style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
        cs @
        <a href="https://ontariotechu.ca" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', border: 'none', marginLeft: '6px' }}>
          <img src="/ontariotech.png" alt="Ontario Tech" style={logoStyle} />
          otu
        </a>
      </h2>
    </header>
  )
}

export default Header
