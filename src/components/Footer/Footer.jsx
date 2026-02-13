function Footer() {
  // Current site URL - used for webring navigation
  // Strip www. prefix as webring expects domain without www
  const getCurrentSite = () => {
    if (typeof window === 'undefined') return ''
    let hostname = window.location.hostname
    // Remove www. prefix if present
    if (hostname.startsWith('www.')) {
      hostname = hostname.substring(4)
    }
    return hostname
  }
  
  const currentSite = getCurrentSite()
  const prevUrl = `https://otu-ring.com/prev.html?from=${encodeURIComponent(currentSite)}`
  const nextUrl = `https://otu-ring.com/next.html?from=${encodeURIComponent(currentSite)}`

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    transition: 'background-color 0.2s ease',
  }

  const navButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#71717a',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  }

  return (
    <footer style={{
      marginTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '2rem',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}>
        <a href="https://github.com/VinceKLW" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/vinceklwong" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://x.com/vinceklwong" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="mailto:vinceklwong@gmail.com" style={linkStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
          </svg>
        </a>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#71717a' }}>
        2026 © VW
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        marginTop: '1rem',
      }}>
        <a
          href={prevUrl}
          style={navButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fafafa'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#71717a'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
          title="Previous site"
        >
          ←
        </a>
        
        <a href="https://otu-ring.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', border: 'none' }}>
          <img src="https://otu-ring.com/assets/ontariotech.svg" alt="OTU Webring" style={{ height: '20px', width: 'auto', opacity: 0.7, transition: 'opacity 0.2s ease' }} />
        </a>

        <a
          href={nextUrl}
          style={navButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fafafa'
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#71717a'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
          title="Next site"
        >
          →
        </a>
      </div>
    </footer>
  )
}

export default Footer
