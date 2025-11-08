export default function Footer() {
  return (
    <footer className="border-t border-neon-lime/30 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">VECTOR402</h3>
            <p className="text-sm text-text-secondary">
              Verifiable Startup Flow
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="/portal" className="text-text-secondary hover:text-neon-lime transition-colors">
              Portal
            </a>
            <a href="#projects" className="text-text-secondary hover:text-neon-lime transition-colors">
              Projects
            </a>
            <a href="#faq" className="text-text-secondary hover:text-neon-lime transition-colors">
              FAQ
            </a>
            <a href="/docs" className="text-text-secondary hover:text-neon-lime transition-colors">
              Docs
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neon-lime/10 text-center text-xs text-text-secondary">
          <p>STATUS: ACTIVE | NEXT EVENT: PROJECT LISTING | SIGNAL: STABLE</p>
        </div>
      </div>
    </footer>
  )
}

