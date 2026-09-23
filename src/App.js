import './App.css';
import { useEffect, useMemo, useState } from 'react';
import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiMenu,
  FiX,
  FiExternalLink,
  FiCode,
  FiHeadphones,
  FiCpu,
  FiUsers,
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiShield,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
} from 'react-icons/si';

import profileImage from './assets/profile.png';
import aboutImage from './assets/about.webp';
import portfolioProject from './assets/project-portfolio.png';
import rbacProject from './assets/project-rbac.png';
import aiChatbotProject from './assets/project-ai-chatbot.png';
import infosys1 from './assets/certificates/infosys-1.jpg';
import infosys2 from './assets/certificates/infosys-2.jpg';
import infosys3 from './assets/certificates/infosys-3.jpg';
import infosys4 from './assets/certificates/infosys-4.jpg';
import infosys5 from './assets/certificates/infosys-5.jpg';
import infosys6 from './assets/certificates/infosys-6.jpg';
import infosys7 from './assets/certificates/infosys-7.jpg';
import infosys8 from './assets/certificates/infosys-8.jpg';
import masaiCertificate from './assets/certificates/masai-ai-ml.png';
import fullStackCertificate from './assets/certificates/full-stack-python.png';
import g20Certificate from './assets/certificates/g20-1.jpg';

const profile = {
  name: 'Kathirvel M',
  role: 'IT Support & Technology Professional',
  email: 'mkathirvelmuniraj@gmail.com',
  phone: '9626928436',
  location: 'Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/kathirvel-m-300968316/',
};

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const skills = [
  { label: 'Python', icon: SiPython, group: 'Programming' },
  { label: 'JavaScript', icon: SiJavascript, group: 'Programming' },
  { label: 'TypeScript', icon: SiTypescript, group: 'Programming' },
  { label: 'React.js', icon: SiReact, group: 'Frontend' },
  { label: 'Node.js', icon: SiNodedotjs, group: 'Backend' },
  { label: 'Express.js', icon: SiExpress, group: 'Backend' },
  { label: 'HTML & CSS', icon: FiCode, group: 'Frontend' },
  { label: 'MySQL', icon: SiMysql, group: 'Database' },
  { label: 'Git', icon: SiGit, group: 'Tools' },
  { label: 'AI/ML Evaluation', icon: FiCpu, group: 'AI / ML' },
];

const professionalSkills = [
  'Communication & Interpersonal Skills',
  'Service Request Handling & Tracking',
  'Documentation & Record Maintenance',
  'Team Collaboration & Follow-ups',
];

const projects = [
  {
    image: portfolioProject,
    number: 'PROJECT / 01',
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio built to present professional experience, technical skills, projects, certifications and contact information in a modern interface.',
    tech: ['React', 'Tailwind CSS', 'Responsive UI'],
    link: 'https://github.com/Kathirvel1202/Protfolio',
  },
  {
    image: rbacProject,
    number: 'PROJECT / 02',
    title: 'Role-Based Authentication System',
    description: 'A rule-based access control system aligned with enterprise security practices, implementing authorization logic similar to decision rules used in BPM platforms.',
    tech: ['Python', 'Django', 'REST API', 'React.js', 'RBAC'],
    link: 'https://github.com/Kathirvel1202/RBAC',
  },
  {
    image: aiChatbotProject,
    number: 'PROJECT / 03',
    title: 'AI Chatbot',
    description: 'An AI chatbot interface built with JavaScript, HTML, CSS and React, with AI integration for interactive user conversations.',
    tech: ['JavaScript', 'React', 'HTML', 'CSS', 'AI'],
    link: 'https://github.com/Kathirvel1202/AI-chabox',
  },
];

const infosysCertificates = [
  { image: infosys1, title: 'Introduction to Artificial Intelligence' },
  { image: infosys2, title: 'Introduction to Natural Language Processing' },
  { image: infosys3, title: 'Prompt Engineering' },
  { image: infosys4, title: 'Introduction to OpenAI GPT Models' },
  { image: infosys5, title: 'AI-First Software Engineering' },
  { image: infosys6, title: 'Introduction to Deep Learning' },
  { image: infosys7, title: 'Ethical AI' },
  { image: infosys8, title: 'Computer Vision 101' },
];

const certificates = [
  {
    id: 'infosys',
    icon: FiCpu,
    issuer: 'Infosys Springboard',
    title: 'Artificial Intelligence & Python Track',
    description: 'AI and Python learning track. Preview includes the supplied Infosys Springboard certificate collection.',
    type: 'gallery',
    gallery: infosysCertificates,
  },
  {
    id: 'masai',
    icon: FiAward,
    issuer: 'Vishlesan i-Hub, IIT Patna × Masai',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Certificate of Excellence in Evaluation · 2026',
    type: 'image',
    image: masaiCertificate,
  },
  {
    id: 'fullstack',
    icon: FiCode,
    issuer: 'Appteknow Careers',
    title: 'Full Stack Python Development Training Program',
    description: 'Training program · July 2024 – January 2025',
    type: 'image',
    image: fullStackCertificate,
  },
  {
    id: 'g20',
    icon: FiAward,
    issuer: 'Periyar University · G20 Event',
    title: 'Winner – Game Development Competition',
    description: 'Certificate of Appreciation for the Tamilargame Game Festival competition.',
    type: 'image',
    image: g20Certificate,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeGallery = useMemo(() => {
    if (!selectedCertificate || selectedCertificate.type !== 'gallery') return [];
    return selectedCertificate.gallery;
  }, [selectedCertificate]);

  useEffect(() => {
    const preventContextMenu = (event) => {
      if (event.target.closest('.certificate-protected')) event.preventDefault();
    };
    const preventDrag = (event) => {
      if (event.target.closest('.certificate-protected')) event.preventDefault();
    };
    const preventPrintShortcut = (event) => {
      const certificateOpen = document.querySelector('.certificate-modal');
      if (!certificateOpen) return;
      if ((event.ctrlKey || event.metaKey) && (event.key === 'p' || event.key === 's')) {
        event.preventDefault();
      }
      if (event.key === 'PrintScreen') {
        event.preventDefault();
        document.body.classList.add('certificate-screenshot-block');
        window.setTimeout(() => document.body.classList.remove('certificate-screenshot-block'), 700);
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDrag);
    document.addEventListener('keydown', preventPrintShortcut);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('keydown', preventPrintShortcut);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCertificate ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCertificate]);

  const closeMenu = () => setMenuOpen(false);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setGalleryIndex(0);
  };

  const closeCertificate = () => setSelectedCertificate(null);

  const nextCertificate = () => {
    setGalleryIndex((index) => (index + 1) % activeGallery.length);
  };

  const previousCertificate = () => {
    setGalleryIndex((index) => (index - 1 + activeGallery.length) % activeGallery.length);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-photo-wrap">
              <img src={profileImage} alt="Kathirvel M" className="brand-photo" draggable="false" />
            </span>
            <span className="brand-name">Kathirvel M<span className="brand-dot">.</span>
              <small>{profile.role}</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-resume" href="/resume.pdf" download onClick={closeMenu}>
              <FiDownload /> CV
            </a>
          </nav>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> Available for technology opportunities</div>
              <p className="hero-kicker">Hello, I'm</p>
              <h1>{profile.name}</h1>
              <h2>{profile.role}</h2>
              <p className="hero-description">
                Detail-oriented technology professional experienced in user support, service request handling,
                operational issue resolution, team coordination, and practical software development.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">Explore My Work <FiArrowUpRight /></a>
                <a href="/resume.pdf" download className="button button-secondary"><FiDownload /> Download CV</a>
              </div>

              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
                <a href={`tel:${profile.phone}`} aria-label="Phone"><FiPhone /></a>
              </div>
            </div>

            <div className="hero-visual hero-visual-clean reveal-delay">
              <div className="hero-about-visual">
                <div className="hero-about-window-bar" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <div className="hero-about-image-wrap">
                  <img
                    src={aboutImage}
                    alt="Technology and software development illustration"
                    className="hero-about-image"
                    draggable="false"
                  />
                </div>
                <div className="hero-about-caption">
                  <span><FiCode /> Software Development</span>
                  <span><FiCpu /> AI / ML</span>
                  <span><FiHeadphones /> IT Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">Scroll to explore <span>↓</span></div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <div><strong>IT Support</strong><span>User &amp; operational support</span></div>
            <div><strong>Full Stack</strong><span>React, Node &amp; Python</span></div>
            <div><strong>AI / ML</strong><span>Growing practical foundation</span></div>
            <div><strong>BCA</strong><span>Computer Applications</span></div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div className="section-intro">
              <p className="section-label">01 / ABOUT</p>
              <h2>Technology, support &amp; practical problem solving.</h2>
            </div>
            <div className="about-content">
              <p className="lead">I am a detail-oriented IT Support and Technology professional with experience in handling user requests, resolving operational issues, coordinating with teams, and maintaining smooth workflows.</p>
              <p>Alongside my professional experience, I have developed practical skills in Python, JavaScript, TypeScript, React.js, Node.js, Express.js, HTML, CSS, MySQL and Git, with a growing foundation in Artificial Intelligence and Machine Learning.</p>
              <p>I enjoy solving practical problems, learning new technologies, and applying technical skills to projects that improve user experience and workflow efficiency.</p>
              <div className="focus-box"><div className="focus-icon"><FiCpu /></div><div><span>Currently focused on</span><strong>Practical software development, AI/ML and technology support.</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-label">02 / SKILLS</p>
              <h2>A toolkit built around real-world work.</h2>
              <p>Technical capabilities and professional strengths from my current profile.</p>
            </div>
            <div className="skills-layout">
              <div className="skill-panel">
                <div className="panel-title"><FiCode /> Technical Skills</div>
                <div className="skill-grid">
                  {skills.map(({ label, icon: Icon, group }) => (
                    <div className="skill-card" key={label}><Icon className="skill-icon" /><div><strong>{label}</strong><span>{group}</span></div></div>
                  ))}
                </div>
              </div>
              <div className="skill-panel professional-panel">
                <div className="panel-title"><FiUsers /> Professional Skills</div>
                <div className="professional-list">
                  {professionalSkills.map((skill, index) => (
                    <div key={skill}><span>0{index + 1}</span><p>{skill}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">03 / EXPERIENCE</p>
              <h2>Professional journey.</h2>
              <p>Experience centered on support, workflow efficiency and practical technology.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker"><FiHeadphones /></div>
                <div className="timeline-card">
                  <div className="timeline-top"><span className="timeline-date">July 2025 – September 2026</span><span className="timeline-tag">Support</span></div>
                  <h3>Support Associate</h3><h4>Tetrarays Pvt Ltd</h4>
                  <ul>
                    <li>Assisted users by resolving day-to-day operational issues and ensuring smooth workflow.</li>
                    <li>Provided guidance for system-related challenges and helped users complete tasks efficiently.</li>
                    <li>Handled and tracked service requests with timely response and follow-up.</li>
                    <li>Coordinated with internal teams on complex issues through closure.</li>
                    <li>Maintained issue and resolution records to support service quality and internal processes.</li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker"><FiBriefcase /></div>
                <div className="timeline-card">
                  <div className="timeline-top"><span className="timeline-date">October 2024 – January 2025</span><span className="timeline-tag">Trainee</span></div>
                  <h3>Trainee – Grid R&amp;D</h3><h4>Bangalore</h4>
                  <ul>
                    <li>Assisted in developing workflow-based solutions to improve process efficiency and support business operations.</li>
                    <li>Supported the creation of interactive systems to enhance user engagement and decision-making processes.</li>
                    <li>Contributed to designing user-friendly interfaces aligned with business requirements.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">04 / PROJECTS</p>
              <h2>Selected practical work.</h2>
              <p>Three projects carried forward from the original portfolio, presented in a modern responsive layout.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <span className="project-index">{project.number}</span>
                  </div>
                  <div className="project-card-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-pills">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View Project <FiArrowUpRight /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-label">05 / CERTIFICATIONS</p>
              <h2>Learning that keeps moving.</h2>
              <p>Click any certificate to preview it. Certificate previews are intentionally view-only.</p>
            </div>
            <div className="cert-grid">
              {certificates.map(({ id, icon: Icon, issuer, title, description, image }) => (
                <button type="button" className="cert-card certificate-trigger" key={id} onClick={() => openCertificate(certificates.find((item) => item.id === id))}>
                  <div className="cert-icon"><Icon /></div>
                  <span>{issuer}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="cert-view"><FiEye /> Preview certificate</div>
                  {image && <img src={image} alt="" className="cert-thumb" />}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="education">
          <div className="container education-grid">
            <div className="section-intro"><p className="section-label">06 / EDUCATION</p><h2>Academic foundation.</h2></div>
            <div className="education-list">
              <article className="education-card"><div className="education-icon"><FiBookOpen /></div><div><span>June 2021 – May 2024</span><h3>Bachelor of Computer Applications (BCA)</h3><p>M.G.R College of Arts and Science, Hosur</p><strong>CGPA: 8.2 / 10</strong><small>Relevant coursework: Software Engineering, DBMS, Web Technologies, Basics of AI &amp; ML</small></div></article>
              <article className="education-card"><div className="education-icon"><FiBookOpen /></div><div><span>2021</span><h3>Higher Secondary Certificate (HSC)</h3><p>R.V Government Boys Higher Secondary School</p><strong>78%</strong></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div><p className="section-label">07 / CONTACT</p><h2>Let's connect.</h2><p className="contact-lead">Have a technology opportunity, project discussion or professional conversation? Feel free to reach out.</p></div>
            <div className="contact-cards">
              <a href={`mailto:${profile.email}`} className="contact-card"><FiMail /><div><span>Email</span><strong>{profile.email}</strong></div><FiExternalLink /></a>
              <a href={`tel:${profile.phone}`} className="contact-card"><FiPhone /><div><span>Phone</span><strong>{profile.phone}</strong></div><FiExternalLink /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card"><FiLinkedin /><div><span>LinkedIn</span><strong>Connect with Kathirvel</strong></div><FiExternalLink /></a>
              <div className="contact-card"><FiMapPin /><div><span>Location</span><strong>{profile.location}</strong></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><div><strong>Kathirvel<span className="brand-dot">.</span></strong><span>IT Support &amp; Technology Professional</span></div><div>© 2026 Kathirvel M · Built with React</div><a href="#home" aria-label="Back to top">↑</a></div>
      </footer>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Certificate preview" onMouseDown={(event) => { if (event.target === event.currentTarget) closeCertificate(); }}>
          <div className="certificate-modal-panel certificate-protected">
            <div className="certificate-modal-head">
              <div><span>PREVIEW ONLY</span><h3>{selectedCertificate.title}</h3><p>{selectedCertificate.issuer}</p></div>
              <button type="button" className="certificate-close" onClick={closeCertificate} aria-label="Close certificate preview"><FiX /></button>
            </div>

            <div className="certificate-viewer">
              {selectedCertificate.type === 'gallery' ? (
                <>
                  <button type="button" className="gallery-arrow gallery-left" onClick={previousCertificate} aria-label="Previous certificate"><FiChevronLeft /></button>
                  <div className="certificate-image-stage">
                    <img src={activeGallery[galleryIndex].image} alt={activeGallery[galleryIndex].title} draggable="false" />
                    <div className="certificate-watermark">KATHIRVEL M · PREVIEW ONLY</div>
                  </div>
                  <button type="button" className="gallery-arrow gallery-right" onClick={nextCertificate} aria-label="Next certificate"><FiChevronRight /></button>
                </>
              ) : (
                <div className="certificate-image-stage certificate-single-stage">
                  <img src={selectedCertificate.image} alt={selectedCertificate.title} draggable="false" />
                  <div className="certificate-watermark">KATHIRVEL M · PREVIEW ONLY</div>
                </div>
              )}
            </div>

            {selectedCertificate.type === 'gallery' && (
              <div className="certificate-thumbs">
                {activeGallery.map((item, index) => (
                  <button type="button" key={item.title} className={index === galleryIndex ? 'active' : ''} onClick={() => setGalleryIndex(index)} aria-label={`Preview ${item.title}`}>
                    <img src={item.image} alt="" draggable="false" />
                  </button>
                ))}
              </div>
            )}

            <div className="certificate-modal-note">Certificate preview is view-only. Download controls are not provided.</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
