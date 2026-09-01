/* ============================================================
   Muhammad Taimoor Mansha — Portfolio (Vanilla JS, ES6+)
   Three.js hero + GSAP ScrollTrigger + interactions
   ============================================================ */

/* ---------------- DATA ---------------- */
const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: "fa-solid fa-desktop",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Tailwind CSS", "Redux / Context API"],
  },
  {
    title: "Backend Development",
    icon: "fa-solid fa-server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JSON Web Tokens (JWT)", "Authentication & Authorization"],
  },
  {
    title: "Databases & State",
    icon: "fa-solid fa-database",
    skills: ["MongoDB", "Mongoose ODM", "Relational / NoSQL Database Design", "Data Modeling"],
  },
  {
    title: "Tools & Deployment",
    icon: "fa-solid fa-screwdriver-wrench",
    skills: ["Git & GitHub", "Postman", "Vercel", "Render", "npm / yarn", "VS Code"],
  },
];

const CERTIFICATES = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", link: "https://drive.google.com/file/d/1AcaPoyL53dRwcsTgrUWyXaApKphkOgFm/view?usp=drivesdk" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", link: "https://drive.google.com/file/d/1n17k_nU0X0TsEVmnsLavauRgrllj6sab/view?usp=drivesdk" },
  { title: "Information Security", issuer: "The Open University", link: "https://drive.google.com/file/d/13A-Ul7XrWFDLDHNa3geSz7Zi4je-Jsjf/view?usp=drivesdk" },
  { title: "HTML, CSS and JavaScript for Web Developers", issuer: "Coursera", link: "https://drive.google.com/file/d/1EIIwJkCiqs3pWtfPRSwxJQ2mJsAL-sTg/view?usp=drivesdk" },
  { title: "Full Stack Web Development", issuer: "Udemy", link: "https://drive.google.com/file/d/1sHwLo9UAeGqomaKm11tA8WCCEJfo7Cir/view?usp=drivesdk" },
  { title: "Cybersecurity", issuer: "ADB Institute", link: "https://drive.google.com/file/d/1QkiVvi4IWFZpN3ebDAaNBLdSIPMfI5A7/view?usp=drivesdk" },
  { title: "Cryptocurrency and Blockchain", issuer: "Coursera", link: "https://drive.google.com/file/d/1iC7Y053rt3ijH2nP4uwWO_unB2x4u_e1/view?usp=drivesdk" },
  { title: "Network Security", issuer: "The Open University", link: "https://drive.google.com/file/d/137meLuLePJJxK8zRyOFoQGLnC73k0EGK/view?usp=drivesdk" },
  { title: "Python Data Structures", issuer: "Coursera", link: "https://drive.google.com/file/d/1oSoki7vos_xIzu4VtSGZOdQo2a4cmoO_/view?usp=drivesdk" },
  { title: "Python for Everybody", issuer: "Coursera", link: "https://drive.google.com/file/d/1bfYJbK8t29P24df8hBHE_nS0UDYQ6_i_/view?usp=drivesdk" },
  { title: "Tools for Data Science", issuer: "Coursera", link: "https://drive.google.com/file/d/1acJwQRPdHaLRFqqWyF7Nt5YQd3kXbK9Z/view?usp=drivesdk" },
];

const PROJECTS = [
  {
    name: "FlowForge Project",
    subtitle: "Interactive Visual Workflow & Node Builder",
    description: "A node-based visual workflow editor for building, managing, and visualizing step-by-step automation logic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stack: ["React", "Node.js", "Canvas API"],
    repo: "https://github.com/M-Taimoor-Mansha/FlowForge-Project",
    featured: true,
  },
  {
    name: "Amazon Clone Project",
    subtitle: "E-Commerce Platform & Shopping Cart",
    description: "Full-featured e-commerce web app featuring product catalogs, cart management, search filtering, and checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    stack: ["React", "Firebase", "Stripe"],
    repo: "https://github.com/M-Taimoor-Mansha/Amazon-Clone-Project",
    featured: true,
  },
  {
    name: "Luxury Car Rental",
    subtitle: "Vehicle Reservation & Fleet Showcase",
    description: "High-end vehicle booking interface with date pickers, class filtering, and interactive rental fleet cards.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    stack: ["React", "Tailwind CSS", "Booking UI"],
    repo: "https://github.com/M-Taimoor-Mansha/Luxury-Car-Rental",
    featured: true,
  },
  {
    name: "Spotify Clone Project",
    subtitle: "Web Audio Streaming Player",
    description: "Media player UI replicating music streaming functionality, dynamic play/pause state controls, track progress, and custom volume seek bars.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    stack: ["JavaScript", "HTML5 Audio", "CSS3"],
    repo: "https://github.com/M-Taimoor-Mansha/Spotify-Clone-Project",
    featured: true,
  },
  {
    name: "Password Generator App",
    subtitle: "Security Utility & Strength Evaluator",
    description: "Custom password generation tool featuring real-time strength indicators, dynamic character rules, and one-click copy.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    stack: ["JavaScript", "CSS3", "Clipboard API"],
    repo: "https://github.com/M-Taimoor-Mansha/password-generator-app",
    featured: false,
  },
  {
    name: "Pomodoro Timer App",
    subtitle: "Productivity & Focus Session Timer",
    description: "Time-management application featuring work/break intervals, session tracking, and audio-visual notifications.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    stack: ["JavaScript", "CSS3", "Web Audio"],
    repo: "https://github.com/M-Taimoor-Mansha/build-a-pomodoro-timer",
    featured: false,
  },
];

/* ---------------- RENDER ---------------- */
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILL_CATEGORIES.map(
  (c) => `
  <article class="glass skill-card reveal-item">
    <span class="halo"></span>
    <div class="skill-icon"><i class="${c.icon}"></i></div>
    <h3>${c.title}</h3>
    <ul class="skill-list">
      ${c.skills.map((s) => `<li><i class="dot"></i>${s}</li>`).join("")}
    </ul>
  </article>`
).join("");

const certGrid = document.getElementById("certGrid");
certGrid.innerHTML = CERTIFICATES.map(
  (c, i) => `
  <a class="glass cert-card reveal-item" href="${c.link}" target="_blank" rel="noopener noreferrer">
    <div class="cert-top">
      <i class="fa-solid fa-award"></i>
      <span class="cert-num">${String(i + 1).padStart(2, "0")}</span>
    </div>
    <div>
      <h4>${c.title}</h4>
      <p>${c.issuer}</p>
      <span class="cert-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Certificate</span>
    </div>
  </a>`
).join("");

const projectCard = (p) => `
  <div class="tilt reveal-item">
    <article class="glass project-card${p.featured ? " featured" : ""}">
      <div class="project-media">
        <img src="${p.image}" alt="${p.name} project preview" loading="lazy" />
        <span class="fade"></span>
        ${p.featured ? '<span class="badge-featured">Featured</span>' : ""}
      </div>
      <div class="project-body">
        <h3>${p.name}</h3>
        <p class="project-sub">${p.subtitle}</p>
        <p class="project-desc">${p.description}</p>
        <div class="stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
        <a class="repo-btn" href="${p.repo}" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i> View Code on GitHub
          <i class="fa-solid fa-arrow-right arrow"></i>
        </a>
      </div>
    </article>
  </div>`;

document.getElementById("featuredGrid").innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("");
document.getElementById("secondaryGrid").innerHTML = PROJECTS.filter((p) => !p.featured).map(projectCard).join("");

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- LOADER ---------------- */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 900);
});
setTimeout(() => document.getElementById("loader").classList.add("hidden"), 2600);

/* ---------------- NAVBAR ---------------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40));

const navLinks = document.getElementById("navLinks");
document.getElementById("navToggle").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ---------------- CUSTOM CURSOR ---------------- */
const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const ringPos = { ...pointer };

window.addEventListener("mousemove", (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

(function followRing() {
  ringPos.x += (pointer.x - ringPos.x) * 0.16;
  ringPos.y += (pointer.y - ringPos.y) * 0.16;
  ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
  requestAnimationFrame(followRing);
})();

document.addEventListener("mouseover", (e) => {
  const interactive = e.target.closest("a, button, input, textarea, .skill-card, .cert-card, .project-card");
  ring.classList.toggle("grow", Boolean(interactive));
});

/* ---------------- TYPING TEXT ---------------- */
(function typing() {
  const words = ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Three.js"];
  const el = document.getElementById("typingText");
  let index = 0;
  let text = "";
  let deleting = false;

  const tick = () => {
    const full = words[index % words.length];
    const done = !deleting && text === full;
    const empty = deleting && text === "";

    if (done) deleting = true;
    else if (empty) {
      deleting = false;
      index = (index + 1) % words.length;
    } else {
      text = deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1);
      el.textContent = text;
    }
    setTimeout(tick, done ? 1400 : empty ? 250 : deleting ? 45 : 90);
  };
  tick();
})();

/* ---------------- 3D TILT (projects) ---------------- */
document.querySelectorAll(".tilt").forEach((wrap) => {
  const card = wrap.querySelector(".project-card");
  wrap.addEventListener("mousemove", (e) => {
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `rotateY(${(px - 0.5) * 14}deg) rotateX(${(0.5 - py) * 14}deg) translateY(-8px) scale(1.02)`;
  });
  wrap.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
  });
});

/* ---------------- GSAP SCROLL REVEALS ---------------- */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      }
    );
  });

  document.querySelectorAll(".grid, .pill-row, .contact-links").forEach((group) => {
    const items = group.querySelectorAll(".reveal-item, .pill");
    if (!items.length) return;
    gsap.fromTo(
      items,
      { y: 55, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 85%", toggleActions: "play none none none" },
      }
    );
  });

  // Hero staggered entrance
  gsap.fromTo(
    ".hero-content .reveal",
    { y: 26, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.14, delay: 1.1 }
  );

  // Parallax on hero orbs
  gsap.to(".orb-1", { yPercent: 30, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true } });
  gsap.to(".orb-2", { yPercent: -25, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true } });
}

/* ---------------- THREE.JS HERO ---------------- */
(function heroScene() {
  const container = document.getElementById("heroCanvas");
  if (!container || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Particle sphere
  const count = 2600;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const cyan = new THREE.Color("#0ceada");
  const magenta = new THREE.Color("#d64df5");

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2.6 + Math.random() * 0.15;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = cyan.clone().lerp(magenta, Math.random());
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  scene.add(particles);

  // Wireframe torus knot
  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.5, 0.28, 140, 20),
    new THREE.MeshBasicMaterial({ color: 0x0ceada, wireframe: true, transparent: true, opacity: 0.16 })
  );
  scene.add(torus);

  const glow = new THREE.PointLight(0xd64df5, 2, 20);
  glow.position.set(3, 2, 4);
  scene.add(glow);

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  window.addEventListener("mousemove", (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });

  const clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (target.x - mouse.x) * 0.05;
    mouse.y += (target.y - mouse.y) * 0.05;

    particles.rotation.y = t * 0.08 + mouse.x * 0.5;
    particles.rotation.x = mouse.y * 0.4;

    torus.rotation.y = t * 0.22 + mouse.x * 0.6;
    torus.rotation.x = t * 0.15 + mouse.y * 0.6;
    torus.scale.setScalar(1 + Math.sin(t * 0.9) * 0.04);

    camera.position.x = mouse.x * 0.6;
    camera.position.y = mouse.y * 0.4;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();

/* ---------------- CONTACT FORM ---------------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const subject = document.getElementById("cSubject").value.trim();
  const message = document.getElementById("cMessage").value.trim();
  const subj = encodeURIComponent(subject || `Portfolio message from ${name || "a visitor"}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}`);
  window.location.href = `mailto:taimoorc067@gmail.com?subject=${subj}&body=${body}`;
});

/* ---------------- ADDED: LOADER PERCENT COUNTER ---------------- */
(function loaderCount(){
  const el = document.getElementById("loaderPercent");
  if (!el) return;
  let v = 0;
  const id = setInterval(() => {
    v = Math.min(100, v + Math.random() * 9 + 3);
    el.textContent = Math.floor(v);
    if (v >= 100) clearInterval(id);
  }, 90);
})();

/* ---------------- ADDED: AMBIENT PARTICLE CANVAS + SPOTLIGHT ---------------- */
(function ambient(){
  const canvas = document.getElementById("ambientCanvas");
  const spot = document.getElementById("ambientSpotlight");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, nodes = [];

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor(w / 26));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6,
    }));
  };
  resize();
  window.addEventListener("resize", resize);

  if (spot) {
    window.addEventListener("mousemove", (e) => {
      spot.style.setProperty("--mx", e.clientX + "px");
      spot.style.setProperty("--my", e.clientY + "px");
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    nodes.forEach((n) => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(12,234,218,0.55)";
      ctx.fill();
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(214,77,245,${0.16 * (1 - d / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
})();

/* ---------------- ADDED: MAGNETIC BUTTONS ---------------- */
document.querySelectorAll(".magnetic, .btn-primary").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
    btn.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
  btn.addEventListener("mouseleave", () => { btn.style.transform = "translate(0,0) scale(1)"; });
});

/* ---------------- ADDED: 3D TILT ON CERT CARDS ---------------- */
document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 12}deg) rotateX(${(0.5 - py) * 12}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  });
});

/* ---------------- ADDED: EXPLODING EMBLEM ---------------- */
(function emblem(){
  const btn = document.getElementById("emblem");
  const badge = document.getElementById("emblemBadge");
  if (!btn) return;
  btn.addEventListener("click", () => {
    btn.classList.add("boom");
    setTimeout(() => btn.classList.remove("boom"), 300);
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("span");
      p.className = "emblem-particle";
      const ang = (Math.PI * 2 * i) / 18;
      const dist = 60 + Math.random() * 60;
      p.style.setProperty("--tx", `${Math.cos(ang) * dist}px`);
      p.style.setProperty("--ty", `${Math.sin(ang) * dist}px`);
      p.style.background = i % 2 ? "#d64df5" : "#0ceada";
      btn.appendChild(p);
      setTimeout(() => p.remove(), 850);
    }
    badge.classList.toggle("show");
  });
})();

/* ============================================================
   SCROLL-UP ONLY REVEAL ANIMATION  (Vanilla JS, ~1KB)
   ------------------------------------------------------------
   - Detects scroll direction (up vs down)
   - Adds .animate-up ONLY when the user scrolls UP and the
     element is inside the viewport
   - Removes it while scrolling DOWN so it can replay
   Usage:  <div data-scroll-up>...</div>   or class="scroll-up"
   ============================================================ */
(function scrollUpReveal() {
  const targets = document.querySelectorAll("[data-scroll-up], .scroll-up");
  if (!targets.length) return;

  let lastY = window.scrollY;
  let direction = "down";     // current scroll direction
  const visible = new Set();  // elements currently in viewport
  let ticking = false;

  // 1) Track which elements are in view (cheap, no scroll math)
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      apply();
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => io.observe(el));

  // 2) Add / remove the animation class based on direction
  function apply() {
    targets.forEach((el) => {
      if (direction === "up" && visible.has(el)) {
        el.classList.remove("scroll-normal");
        el.classList.add("animate-up");
      } else if (direction === "down") {
        el.classList.remove("animate-up"); // reset so it can replay
        if (visible.has(el)) el.classList.add("scroll-normal"); // stay normal going down
      }
    });
  }

  // 3) Detect scroll direction (rAF-throttled for 60fps)
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) > 4) {           // ignore micro jitter
          direction = y < lastY ? "up" : "down";
          lastY = y;
          apply();
        }
        ticking = false;
      });
    },
    { passive: true }
  );
})();
