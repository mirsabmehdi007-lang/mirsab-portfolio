import { useState } from "react";

const P = {
  name: "Mirsab Mehdi",
  email: "mirsabmehdi007@gmail.com",
  phone: "+92 321 2977199",
  linkedin: "https://linkedin.com/in/mirsab-mehdi-87531a322",
  github: "", // e.g. "https://github.com/yourname"
};

const live = [
  { t: "Stanley Paden", d: "Official website for an award-winning sci-fi author, built to showcase his books.", u: "stanlyepaden-snowy.vercel.app" },
  { t: "Adam of Dadam", d: "Story-driven landing site for the children's book Commander Adam and the Spaceship.", u: "adamofdadam.vercel.app" },
  { t: "Luke Young", d: "Website for a political reform and public accountability movement.", u: "luke-young-mai.vercel.app" },
];
const other = [
  { t: "Interactive Data Mining & ML System", y: "2025", d: "Upload a dataset and run cleaning, classification, clustering, regression and visualization from a friendly interface.", s: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"] },
  { t: "RPG Battle Arena", y: "2026", d: "GUI game with character selection, enemy battles, special attacks and score tracking, built to apply OOP: encapsulation, inheritance, polymorphism, abstraction.", s: ["Python", "Tkinter", "OOP"] },
];
const skills = {
  "Data Science & AI": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning", "SQL", "MySQL"],
  "Web Development": ["React.js", "JavaScript", "HTML5", "CSS3", "PHP", "REST APIs", "WordPress", "Elementor", "UI/UX"],
  "Programming": ["Python", "Java", "C#", "Kotlin", "OOP"],
  "Tools & Mobile": ["Git & GitHub", "VS Code", "Android Studio", "Qt Designer", "VMware", "phpMyAdmin"],
  "Also": ["Graphic Design", "Digital Marketing", "QA", "Documentation", "Report Writing"],
};
const edu = [
  ["2025 – 2029", "BS in Data Science", "Sir Syed University of Engineering & Technology, Karachi"],
  ["2023 – 2026", "Diploma in Information Technology", "SBTE, Karachi"],
  ["2023 – 2025", "Intermediate, Computer Science", "PNG Secondary Higher School, Ziauddin Board"],
  ["2021 – 2023", "Matric, Science", "St. Francis Secondary School"],
];

function Photo() {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img className="photo" src="/photo.jpg" alt="Mirsab Mehdi" onError={() => setOk(false)} />
  ) : (
    <div className="photo ph" aria-label="Photo placeholder">MM</div>
  );
}
const trusted = ["Stanley Paden", "Adam of Dadam", "Luke Young", "US Campaign", "Sir Syed University", "SBTE Karachi"];

export default function App() {
  return (
    <>
      <header className="nav wrap">
        <div className="navl">
          <a className="mono" href="#top">MM</a>
          <nav><a href="#work">project</a><a href="#about">about</a><a href="#contact">contact</a><a href="#journey">journey</a></nav>
        </div>
        <div className="navr">
          <span className="avail"><i /> available for work</span>
          <a className="btn white" href="#contact">Reach me out <b>→</b></a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="tag">🎓 BS Data Science @ Sir Syed University</p>
            <h1>I turn data into <em>insight</em> and ideas into live websites.</h1>
            <p className="lead">I write Python and scikit-learn to train models, then switch to React to ship responsive sites for real clients. I'm Mirsab Mehdi, based in Karachi, looking for an internship or junior role.</p>
          </div>
          <div className="hero-photo">
            <div className="dots" />
            <div className="frame"><Photo /></div>
            <span className="chip c1"><b>+</b> BS Data Science,<br />expected 2029</span>
            <span className="chip c2"><b>+</b> 3 live client<br />websites</span>
            <span className="chip c3"><b>+</b> Python, ML and<br />React developer</span>
          </div>
        </section>
        <div className="cta center">
          <a className="btn white" href="#work">View projects</a>
          <a className="btn dark" href="/CV-Mirsab-Updated.pdf" download>Download my resume</a>
        </div>

        <section className="trusted">
          <p>worked with</p><small>(clients, employers and schools)</small>
          <div className="marq"><div className="track">{[...trusted, ...trusted].map((t, i) => <span key={i}>{t}</span>)}</div></div>
        </section>

        <section id="work" className="wrap sec">
          <h2>Live client <em>websites</em></h2>
          <p className="sub">Designed, built and deployed with React on Vercel.</p>
          <div className="grid3">
            {live.map((p) => (
              <a key={p.t} className="card lift" href={`https://${p.u}`} target="_blank" rel="noreferrer">
                <h3>{p.t}</h3><p>{p.d}</p><span className="url">{p.u} ↗</span>
              </a>
            ))}
          </div>
          <h2 className="mt">Data and <em>software</em></h2>
          <div className="grid2">
            {other.map((p) => (
              <article key={p.t} className="card">
                <div className="row"><h3>{p.t}</h3><span className="yr">{p.y}</span></div>
                <p>{p.d}</p>
                <div className="chips">{p.s.map((s) => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="wrap sec">
          <h2>About and <em>skills</em></h2>
          <p className="sub about">Data Science student and web developer with hands-on experience in Python, machine learning and full-stack development. I build data-driven applications and deliver live client websites, combining analytical thinking with clean, responsive design.</p>
          <div className="skills">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="card"><h3>{k}</h3><div className="chips">{v.map((s) => <span key={s}>{s}</span>)}</div></div>
            ))}
          </div>
        </section>

        <section id="journey" className="wrap sec two">
          <div>
            <h2>Education</h2>
            <ol className="tl">{edu.map(([y, t, s]) => (<li key={t}><time>{y}</time><h3>{t}</h3><p>{s}</p></li>))}</ol>
          </div>
          <div>
            <h2>Experience</h2>
            <ol className="tl">
              <li><time>2025</time><h3>Sales Calling Agent</h3><p>US Campaign, Sales Department. Talked with US customers, generated leads, kept accurate records and follow-ups, and met targets in a fast-paced team.</p></li>
            </ol>
            <h2 className="mt">Soft skills</h2>
            <div className="chips">{["Communication", "Presentation", "Problem Solving", "Team Collaboration", "Time Management", "Quick Learner"].map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="wrap sec">
          <div className="contact">
            <h2>Let's work <em>together.</em></h2>
            <p>I'm looking for an internship or junior role where I can apply my skills and keep growing. Send me a message.</p>
            <div className="cta center">
              <a className="btn white" href={`mailto:${P.email}`}>{P.email}</a>
              <a className="btn dark" href={`tel:${P.phone.replace(/\s/g, "")}`}>{P.phone}</a>
              <a className="btn dark" href={P.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              {P.github && <a className="btn dark" href={P.github} target="_blank" rel="noreferrer">GitHub</a>}
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap foot">© {new Date().getFullYear()} Mirsab Mehdi · Karachi, Pakistan</footer>
    </>
  );
}
