export default function Projects() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-black">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className=" text-black text-xl font-bold mb-2">
              E-commerce Platform
            </h3>
            <p className="text-black mb-4">
              A full-featured e-commerce platform built with Next.js and Stripe.
            </p>
            <div className="text-black flex space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">Next.js</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">Stripe</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-black">
              Task Management App
            </h3>
            <p className="text-black mb-4">
              A collaborative task management application with real-time
              updates.
            </p>
            <div className="text-black flex space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                Node.js
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                Socket.io
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
