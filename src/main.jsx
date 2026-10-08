import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, Mail, MapPin, Download, Menu, X,
  BrainCircuit, Cpu, Eye, Radar, Code2, Database, Wifi, ChevronDown
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "EOTS Telemetry & Trajectory Analysis",
    tag: "DRDO • Computer Vision",
    icon: <Radar size={22}/>,
    description:
      "Python-based video telemetry analysis using OpenCV and Tesseract OCR to extract latitude, longitude, altitude, azimuth, elevation and range, then reconstruct 3D trajectories and calculate distance travelled.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Computer Vision", "Trajectory Analysis"],
  },
  {
    title: "ML-Based Airborne Range Prediction",
    tag: "Machine Learning",
    icon: <BrainCircuit size={22}/>,
    description:
      "Developing a regression workflow to predict airborne-object range from maximum-range measurements collected by three tracking stations across multiple flights.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Regression"],
  },
  {
    title: "Smart Driver Drowsiness Detection",
    tag: "AI • Embedded Vision",
    icon: <Eye size={22}/>,
    description:
      "Camera-based drowsiness detection using MediaPipe facial landmarks and Eye Aspect Ratio, with yawning and head-nodding cues, plus CNN eye-state classification and hardware alerts.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow Lite", "Raspberry Pi"],
  },
  {
    title: "Smart Irrigation System",
    tag: "IoT • Automation",
    icon: <Wifi size={22}/>,
    description:
      "Sensor-based irrigation automation using ESP8266 and soil-moisture sensing, with Blynk IoT for remote monitoring and water-pump control.",
    tech: ["ESP8266", "Blynk", "IoT", "Embedded C/C++", "Sensors"],
  },
];

const skills = {
  "AI / Computer Vision": ["Python", "OpenCV", "Tesseract OCR", "MediaPipe", "TensorFlow Lite", "CNNs", "NumPy", "Pandas", "Scikit-learn"],
  "Embedded Systems": ["PIC18F4550", "ESP8266", "Raspberry Pi", "Arduino", "Embedded C/C++", "GPIO", "ADC", "I²C", "USB"],
  "IoT & Control": ["Blynk", "Wi-Fi", "Real-Time Monitoring", "Automation", "Relay", "MOSFET Switching"],
  "Tools": ["MPLAB IDE", "XC8 Compiler", "Arduino IDE"],
};

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home","about","experience","projects","skills","contact"];
      const y = window.scrollY + 140;
      let current = "home";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = ["about","experience","projects","skills","contact"];

  return (
    <div className="site">
      <div className="grid-bg"/>
      <nav className="nav">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">RK</span>
          <span>RAJESHWARI<span className="dot">.</span></span>
        </a>
        <div className={`nav-links ${open ? "open":""}`}>
          {nav.map(item => (
            <a key={item} className={active === item ? "active":""} href={`#${item}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="mailto:rajeshwariiik23@gmail.com">Let's connect <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/>:<Menu/>}</button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse"/> AI • COMPUTER VISION • EMBEDDED SYSTEMS</div>
            <h1>Engineering <span>intelligence</span> into the real world.</h1>
            <p className="lead">
              I’m Rajeshwari Khobragade, a final-year Electronics & Telecommunication Engineering student
              building intelligent systems across computer vision, embedded AI, defence electronics and real-time sensing.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button ghost" href="mailto:rajeshwariiik23@gmail.com"><Mail size={17}/> Contact me</a>
            </div>
            <div className="mini-stats">
              <div><strong>DRDO–ITR</strong><span>Current internship</span></div>
              <div><strong>AI + Embedded</strong><span>Core focus</span></div>
              <div><strong>Pune</strong><span>India</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="profile-wrap">
              <div className="profile-orbit profile-orbit-a"/>
              <div className="profile-orbit profile-orbit-b"/>
              <div className="profile-card">
                <img src="/profile.jpg" alt="Rajeshwari Khobragade" />
                <div className="profile-label">
                  <span>RAJESHWARI KHOBRAGADE</span>
                  <small>AI • COMPUTER VISION • EMBEDDED</small>
                </div>
              </div>
              <span className="profile-node pn1">AI/ML</span>
              <span className="profile-node pn2">CV</span>
              <span className="profile-node pn3">DRDO</span>
              <span className="profile-node pn4">IOT</span>
            </div>
          </div>
          <a className="scroll" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15}/></a>
        </section>

        <section id="about" className="section narrow">
          <div className="section-head"><span>01</span><h2>About me</h2></div>
          <div className="about-grid">
            <div>
              <p className="big-copy">I like building systems where <em>hardware meets intelligence</em> — turning sensor signals, video and data into useful decisions.</p>
            </div>
            <div className="body-copy">
              <p>I am a final-year Electronics and Telecommunication Engineering student with a minor in Artificial Intelligence and Data Science.</p>
              <p>My work spans embedded systems, sensor interfacing, computer vision, machine learning and real-time data acquisition. At DRDO–ITR, I work with EOTS video telemetry analysis using Python, OpenCV and Tesseract OCR.</p>
              <p>I’m interested in embedded AI, defence electronics, computer vision and real-time sensing systems.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section narrow">
          <div className="section-head"><span>02</span><h2>Experience</h2></div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="time">JUL 2026 — PRESENT</div>
              <div><h3>DRDO — Integrated Test Range</h3><p className="role">Paid Intern · Chandipur, Odisha</p>
              <p>Hands-on exposure to electro-optical tracking systems and defence-grade test-range operations. Working on video telemetry extraction, trajectory analysis and ML-based airborne range prediction.</p></div>
            </article>
            <article className="timeline-item">
              <div className="time">MAR 2026 — APR 2026</div>
              <div><h3>DevAstra Technologies</h3><p className="role">Python Developer Intern · Pune</p>
              <p>Worked on Python development, software implementation, debugging and problem-solving.</p></div>
            </article>
            <article className="timeline-item">
              <div className="time">JAN 2026 — MAR 2026</div>
              <div><h3>EduSkills & Google for Developers</h3><p className="role">AI/ML Virtual Intern</p>
              <p>Completed a 10-week virtual internship focused on AI/ML concepts, problem-solving and applied project work.</p></div>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head narrow"><span>03</span><h2>Selected projects</h2></div>
          <div className="project-grid">
            {projects.map((p,i) => (
              <article className="project-card" key={p.title}>
                <div className="project-top"><span className="project-icon">{p.icon}</span><span>0{i+1}</span></div>
                <p className="tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section narrow">
          <div className="section-head"><span>04</span><h2>Technical stack</h2></div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group,items]) => (
              <div className="skill-group" key={group}>
                <div className="skill-title"><Code2 size={18}/><h3>{group}</h3></div>
                <div className="chips">{items.map(s=><span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <span className="eyebrow">05 • CONTACT</span>
            <h2>Have a problem worth solving?</h2>
            <p>I'm open to opportunities in AI, computer vision, embedded systems and defence electronics.</p>
            <a className="button primary" href="mailto:rajeshwariiik23@gmail.com">Start a conversation <ArrowUpRight size={17}/></a>
            <div className="contact-links">
              <a href="mailto:rajeshwariiik23@gmail.com"><Mail size={17}/> rajeshwariiik23@gmail.com</a>
              <a href="https://linkedin.com/in/rajeshwari-khobragade" target="_blank" rel="noreferrer"><ArrowUpRight size={17}/> LinkedIn</a>
              <span><MapPin size={17}/> Pune, Maharashtra</span>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Rajeshwari Khobragade</span><span>Built with React + Tailwind</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
