import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600">
              I specialize in building modern web applications using the latest
              technologies. My expertise includes React, Next.js, Node.js, and
              more.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database Management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
