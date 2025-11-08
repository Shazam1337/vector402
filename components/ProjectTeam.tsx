interface TeamMember {
  name: string
  role: string
  bio: string
}

export default function ProjectTeam({ team }: { team: TeamMember[] }) {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="border border-neon-lime/30 p-6 bg-black/50 hover:border-neon-lime hover:glow-border transition-all duration-120"
          >
            <div className="w-20 h-20 border-2 border-neon-lime mb-4 bg-black flex items-center justify-center text-neon-lime text-2xl font-bold">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <div className="text-neon-lime text-sm mb-2 uppercase tracking-wider">{member.role}</div>
            <p className="text-text-secondary text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

