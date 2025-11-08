export default function ProjectDocuments() {
  const documents = [
    { name: 'Whitepaper', type: 'PDF', size: '2.4 MB' },
    { name: 'Pitch Deck', type: 'PDF', size: '5.1 MB' },
    { name: 'Tokenomics', type: 'PDF', size: '1.2 MB' },
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">Documents</h2>
      <div className="space-y-4 max-w-2xl">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="border border-neon-lime/30 p-4 hover:border-neon-lime hover:glow-border transition-all duration-120 bg-black/50 flex items-center justify-between"
          >
            <div>
              <div className="font-semibold">{doc.name}</div>
              <div className="text-sm text-text-secondary">{doc.type} • {doc.size}</div>
            </div>
            <button className="px-4 py-2 border border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 uppercase text-sm tracking-wider">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

