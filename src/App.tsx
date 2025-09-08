import './index.css'
import { useCallback } from 'react'
import type { FormEvent } from 'react'

function App() {
  const onSubmitContact = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')
    const subject = encodeURIComponent(`Portfolio Contact — ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:shettymeghana273@gmail.com?subject=${subject}&body=${body}`
    form.reset()
  }, [])
  return (
    <main>
      <header className="container-px sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[rgb(11,16,32,0.65)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight hover:text-primary-300 transition-colors">Shetty Meghana</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary-300 transition-colors">About</a>
            <a href="#achievements" className="hover:text-primary-300 transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-primary-300 transition-colors">Projects</a>
            <a href="#certs" className="hover:text-primary-300 transition-colors">Certifications</a>
            <a href="#leadership" className="hover:text-primary-300 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
          </nav>
          <a href="/resume/Shetty-Meghana-Resume.pdf" target="_blank" rel="noreferrer" className="text-sm rounded-full px-4 py-2 bg-primary-600 hover:bg-primary-500 shadow-glow transition-colors">Resume</a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient -z-10" aria-hidden="true" />
        <div className="container-px mx-auto max-w-7xl pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
              <p className="text-primary-300 text-sm tracking-wider uppercase">CSE • DS @ VNR VJIET</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white/80">
                Crafting experiences, not just products
              </h1>
              <p className="mt-5 max-w-xl text-white/80">
                Passionate about problem‑solving and building end‑to‑end experiences that feel simple and work reliably.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1">GPA 9.06</span>
                <span className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1">Amazon ML School '25</span>
                <span className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1">Top Performer</span>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#projects" className="rounded-lg px-5 py-3 bg-primary-600 hover:bg-primary-500 shadow-glow transition">View Projects</a>
                <a href="#contact" className="rounded-lg px-5 py-3 border border-white/10 hover:border-primary-400/60 transition">Contact Me</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-64 sm:w-72 lg:w-80 mx-auto rounded-2xl bg-gradient-to-tr from-primary-500/30 to-primary-300/10 border border-white/10 shadow-glow overflow-hidden float-soft">
                <img src="/images/profile-alt.jpg" alt="Shetty Meghana" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
      </div>
      </section>

      <section id="about" className="container-px mx-auto max-w-7xl py-16 lg:py-24 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
        <p className="mt-4 text-white/80 max-w-3xl leading-relaxed">
          I’m Meghana — someone who believes curiosity is the engine of growth. I love exploring
          ideas that shape the future and finding meaning at the intersection of people, stories,
          and innovation.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-sm text-white/60">What I do</div>
            <div className="mt-1 font-medium">Analyse, design, build, iterate</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-sm text-white/60">How I think</div>
            <div className="mt-1 font-medium">Data‑driven, strategic, user‑focused</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-sm text-white/60">What matters</div>
            <div className="mt-1 font-medium">Consistency, efficiency, integrity</div>
          </div>
        </div>
      </section>

      {/* Resume section removed; use header button to open in new tab */}

      <section id="achievements" className="container-px mx-auto max-w-7xl py-16 lg:py-24 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Achievements</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-5">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-primary-500/30 to-white/10 grid place-items-center border border-white/10">
                <span className="text-sm">🏁</span>
              </div>
              <div>
                <h3 className="font-medium tracking-tight">Flipkart GRID — Semi Finalist</h3>
                <p className="text-white/60 text-xs">National-level tech challenge</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-5">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-primary-500/30 to-white/10 grid place-items-center border border-white/10">
                <span className="text-sm">🎓</span>
              </div>
              <div>
                <h3 className="font-medium tracking-tight">Google Girl Hackathon — Appreciation</h3>
                <p className="text-white/60 text-xs">Performance goodies & recognition</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-5">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-primary-500/30 to-white/10 grid place-items-center border border-white/10">
                <span className="text-sm">🤖</span>
              </div>
              <div>
                <h3 className="font-medium tracking-tight">Amazon ML Challenge</h3>
                <p className="text-white/60 text-xs">Competitive ML problem-solving</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-5">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-primary-500/30 to-white/10 grid place-items-center border border-white/10">
                <span className="text-sm">🏅</span>
              </div>
              <div>
                <h3 className="font-medium tracking-tight">ANTSO Olympiad — Winner</h3>
                <p className="text-white/60 text-xs">Academics & problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container-px mx-auto max-w-7xl py-16 lg:py-24 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://github.com/shettymeghnaa/HRMS" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img src="/projects/hrms.jpeg" alt="HRMS" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">HRMS Platform</h3>
              <p className="text-white/70 text-sm mt-1">React, Node.js, PostgreSQL</p>
              <p className="text-white/60 text-xs mt-2">Full-stack HR with dashboards and RBAC.</p>
            </div>
          </a>
          <a href="https://github.com/shettymeghnaa/Eventures" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img src="/projects/eventures.jpg" alt="Eventures" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Eventures</h3>
              <p className="text-white/70 text-sm mt-1">JavaScript</p>
              <p className="text-white/60 text-xs mt-2">Event management web app.</p>
            </div>
          </a>
          <a href="https://github.com/shettymeghnaa/FaceRecognition_System" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img src="/projects/attendance.jpg" alt="Smart Attendance" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Smart Attendance System</h3>
              <p className="text-white/70 text-sm mt-1">Python, OpenCV, Firebase</p>
              <p className="text-white/60 text-xs mt-2">Face recognition attendance app.</p>
            </div>
          </a>
          <a href="https://github.com/shettymeghnaa/Alpaca-Recognition" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img src="/projects/alpaca.jpg" alt="Alpaca Recognition" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Alpaca Recognition</h3>
              <p className="text-white/70 text-sm mt-1">TensorFlow, EfficientNet-B3</p>
              <p className="text-white/60 text-xs mt-2">Deep learning for alpaca images.</p>
            </div>
          </a>
        </div>
      </section>

      <section id="certs" className="container-px mx-auto max-w-7xl py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Google Data Analytics (Coursera)</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Python Programming (Udemy)</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">ChatGPT Prompt Engineering (DeepLearning.AI)</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Udemy — Full‑Stack Development</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Codegnan — Python Bootcamp</span>
        </div>
      </section>

      <section id="leadership" className="container-px mx-auto max-w-7xl py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Leadership & Volunteering</h2>
        <div className="mt-8 relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
          <div className="relative mb-8">
            <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-primary-500 shadow-glow" />
            <h3 className="font-medium">NSS — VNR VJIET</h3>
            <p className="text-white/70 text-sm mt-1">Led drives: 4.3 tons rice collection, 700+ blood units, 1500+ seed balls.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-primary-500 shadow-glow" />
            <h3 className="font-medium">Stentorian Club — VNR VJIET</h3>
            <p className="text-white/70 text-sm mt-1">Led events, mentored juniors, helped run inter‑college competitions.</p>
          </div>
        </div>
      </section>

      <section id="interests" className="container-px mx-auto max-w-7xl py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">Interests & Personality</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">🧭 Leadership</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">📚 Books & Research</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">🧩 Problem Solving</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">✍️ Creative Writing / Blogging</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">🚀 Hackathons & Tech Events</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">💡 Innovation</span>
          <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">🎶 Music</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Optimistic</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Creative thinker</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Collaborative</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Adaptable</span>
        </div>
      </section>

      <section id="contact" className="container-px mx-auto max-w-7xl py-16 lg:py-24 border-t border-white/10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a className="underline underline-offset-4 hover:text-primary-300" href="mailto:shettymeghana273@gmail.com">shettymeghana273@gmail.com</a>
          <a className="underline underline-offset-4 hover:text-primary-300" href="https://www.linkedin.com/in/meghana-shetty-045819257/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="underline underline-offset-4 hover:text-primary-300" href="https://github.com/shettymeghnaa" target="_blank" rel="noreferrer">GitHub</a>
      </div>
        <form className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto" onSubmit={onSubmitContact}>
          <input aria-label="Your name" name="name" required className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/60" placeholder="Your name" />
          <input aria-label="Your email" name="email" required className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/60" placeholder="Your email" type="email" />
          <textarea aria-label="Message" name="message" required className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/60" placeholder="Message" rows={4} />
          <button aria-label="Send message" type="submit" className="sm:col-span-2 rounded-md px-4 py-2 bg-primary-600 hover:bg-primary-500 shadow-glow">Send</button>
        </form>
      </section>

      <footer className="container-px mx-auto max-w-7xl py-10 text-xs text-white/50 border-t border-white/10">
        © {new Date().getFullYear()} Shetty Meghana
      </footer>
    </main>
  )
}

export default App
