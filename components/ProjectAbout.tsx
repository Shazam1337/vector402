export default function ProjectAbout({ about }: { about: string }) {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">About</h2>
      <div className="max-w-3xl">
        <p className="text-text-secondary leading-relaxed text-lg">
          {about}
        </p>
      </div>
    </section>
  )
}

