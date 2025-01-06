export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Hello! I'm John Doe, a passionate web developer with over 5 years of
            experience in creating digital solutions. I love turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-bold">Senior Developer - Tech Company</h3>
              <p>2020 - Present</p>
              <p>
                Lead development of various web applications and mentored junior
                developers.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Web Developer - Digital Agency</h3>
              <p>2018 - 2020</p>
              <p>
                Developed responsive websites and e-commerce solutions for
                clients.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
