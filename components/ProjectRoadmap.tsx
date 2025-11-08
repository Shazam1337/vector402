interface RoadmapItem {
  quarter: string
  milestone: string
}

export default function ProjectRoadmap({ roadmap }: { roadmap: RoadmapItem[] }) {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">Roadmap</h2>
      <div className="max-w-3xl">
        <div className="border-l-2 border-neon-lime pl-8 space-y-8">
          {roadmap.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-12 top-0 w-4 h-4 bg-neon-lime rounded-full border-4 border-bg-dark"></div>
              <div className="text-neon-lime font-semibold mb-2 uppercase tracking-wider">{item.quarter}</div>
              <div className="text-text-secondary">{item.milestone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

