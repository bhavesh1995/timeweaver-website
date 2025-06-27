export default function Contact() {
  return (
    <main className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p>You can reach me via email at: <a href="mailto:your@email.com" className="text-blue-600 underline">your@email.com</a></p>
      <p className="mt-4">Or follow me on:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li><a href="https://twitter.com/YOUR_HANDLE" target="_blank" className="text-blue-600 underline">Twitter</a></li>
        <li><a href="https://github.com/YOUR_USERNAME" target="_blank" className="text-blue-600 underline">GitHub</a></li>
        <li><a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="text-blue-600 underline">LinkedIn</a></li>
      </ul>
    </main>
  )
}
