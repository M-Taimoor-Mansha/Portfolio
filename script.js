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
          <span class="btn-arrow-disc" aria-hidden="true"><i class="fa-solid fa-arrow-right arrow"></i></span>
        </a>
      </div>
    </article>
  </div>`;

document.getElementById("featuredGrid").innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("");
document.getElementById("secondaryGrid").innerHTML = PROJECTS.filter((p) => !p.featured).map(projectCard).join("");

document.getElementById("year").textContent = new Date().getFullYear();

//* ---------------- THREE.JS HERO SCENE ---------------- */
(function heroScene() {
  const container = document.getElementById("heroCanvas");
  if (!container || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Particle sphere — beige-adapted muted tones
  const count = 1100;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const blue = new THREE.Color("#356B8C");
  const warm = new THREE.Color("#C19A6B");

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2.6 + Math.random() * 0.15;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = blue.clone().lerp(warm, Math.random());
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
      size: 0.028,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })
  );
  scene.add(particles);

  // Wireframe torus knot — subtle accent wireframe
  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.5, 0.28, 140, 20),
    new THREE.MeshBasicMaterial({ color: 0x356B8C, wireframe: true, transparent: true, opacity: 0.08 })
  );
  scene.add(torus);

  const glow = new THREE.PointLight(0xC19A6B, 1.2, 20);
  glow.position.set(3, 2, 4);
  scene.add(glow);

  // Expose for coordinated GSAP entrance timeline
  window.__heroScene = { scene, camera, particles, torus };

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);
    if (prefersReduced.matches) {
      renderer.render(scene, camera);
      return;
    }
    const t = clock.getElapsedTime();

    mouse.x += (target.x - mouse.x) * 0.05;
    mouse.y += (target.y - mouse.y) * 0.05;

    particles.rotation.y = t * 0.06 + mouse.x * 0.4;
    particles.rotation.x = mouse.y * 0.3;

    torus.rotation.y = t * 0.16 + mouse.x * 0.4;
    torus.rotation.x = t * 0.10 + mouse.y * 0.4;
    torus.scale.setScalar(1 + Math.sin(t * 0.7) * 0.03);

    camera.position.x = mouse.x * 0.4;
    camera.position.y = mouse.y * 0.3;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };
  animate();

  let resizeTimer;
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 150);
  });
})();

/* ---------------- GSAP ANIMATION ENGINE & MATCHMEDIA ---------------- */
if (window.gsap) {
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // 1. Mouse Follower using gsap.quickTo() (GSAP Performance skill)
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  if (dot && ring && window.matchMedia("(hover: hover)").matches) {
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power2.out" });

    window.addEventListener("mousemove", (e) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    });

    document.addEventListener("mouseover", (e) => {
      const interactive = e.target.closest("a, button, input, textarea, .skill-card, .cert-card, .project-card, .emblem");
      ring.classList.toggle("grow", Boolean(interactive));
    });
  }

  // 2. Coordinated Hero Entrance Timeline
  let heroEntranceRan = false;
  window.playHeroEntrance = function () {
    if (heroEntranceRan) return;
    heroEntranceRan = true;

    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([".navbar", ".hero-content .reveal"], { autoAlpha: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate navbar softly down into place
    tl.from(".navbar", { y: -25, autoAlpha: 0, duration: 0.7 });

    // Hero staggered content entrance
    tl.from(
      ".hero-content .reveal",
      {
        y: 35,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
        clearProps: "transform",
      },
      "-=0.4"
    );

    // Three.js entrance scale & opacity
    if (window.__heroScene && window.__heroScene.particles) {
      tl.from(
        window.__heroScene.particles.scale,
        { x: 0.5, y: 0.5, z: 0.5, duration: 1.5, ease: "power2.out" },
        "-=0.9"
      );
      tl.from(
        window.__heroScene.particles.material,
        { opacity: 0, duration: 1.2 },
        "-=1.2"
      );
    }
  };

  // 3. Responsive & Reduced-Motion handling via gsap.matchMedia()
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { reduceMotion } = context.conditions;

      if (reduceMotion) {
        gsap.set(".reveal, .reveal-item, .navbar", { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      if (window.ScrollTrigger) {
        // Section Headings (excluding hero)
        gsap.utils.toArray("section:not(.hero) .section-head.reveal").forEach((head) => {
          gsap.from(head, {
            scrollTrigger: {
              trigger: head,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
            y: 28,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform",
          });
        });

        // About Highlights & Body
        gsap.utils.toArray("#about .about-grid .reveal").forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none none",
              once: true,
            },
            y: 30,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform",
          });
        });

        // Skill cards & Certificate cards & Project grids (staggered)
        gsap.utils.toArray(".grid, .contact-grid").forEach((group) => {
          const items = group.querySelectorAll(".reveal-item, .contact-form, .contact-link");
          if (!items.length) return;
          gsap.from(items, {
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            y: 35,
            autoAlpha: 0,
            scale: 0.98,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "transform,scale",
          });
        });

        // Education card
        const edu = document.querySelector(".edu-card.reveal");
        if (edu) {
          gsap.from(edu, {
            scrollTrigger: {
              trigger: edu,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "transform",
          });
        }

        // Parallax on decorative background orbs (restrained, scrub: 1)
        gsap.to(".orb-1", {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".orb-2", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Unified navbar scroll trigger
        const navbarEl = document.getElementById("navbar");
        if (navbarEl) {
          ScrollTrigger.create({
            start: "top -40",
            onUpdate: (self) => {
              navbarEl.classList.toggle("scrolled", self.scroll() > 40);
            },
          });
        }
      }
    }
  );

  // 4. GSAP Magnetic Buttons (with spring elastic return)
  document.querySelectorAll(".magnetic, .btn-primary").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
      gsap.to(btn, {
        x: x,
        y: y,
        scale: 1.04,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    });
  });

  // 5. GSAP 3D Card Tilt (Project cards & Cert cards)
  document.querySelectorAll(".tilt").forEach((wrap) => {
    const card = wrap.querySelector(".project-card");
    if (!card) return;
    wrap.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      gsap.to(card, {
        rotateY: (px - 0.5) * 12,
        rotateX: (0.5 - py) * 12,
        y: -6,
        duration: 0.25,
        ease: "power1.out",
        overwrite: "auto",
      });
    });
    wrap.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });

  document.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      gsap.to(card, {
        rotateY: (px - 0.5) * 10,
        rotateX: (0.5 - py) * 10,
        y: -5,
        duration: 0.25,
        ease: "power1.out",
        overwrite: "auto",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });
}

/* ---------------- LOADER LIFECYCLE ---------------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    if (window.playHeroEntrance) window.playHeroEntrance();
  }, 600);
});
setTimeout(() => {
  if (window.playHeroEntrance) window.playHeroEntrance();
}, 2200);

/* ---------------- NAVBAR MOBILE TOGGLE ---------------- */
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });
}

/* ---------------- TYPING TEXT ---------------- */
(function typing() {
  const words = ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Three.js"];
  const el = document.getElementById("typingText");
  if (!el) return;
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

/* ---------------- CONTACT FORM ---------------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const subject = document.getElementById("cSubject").value.trim();
    const message = document.getElementById("cMessage").value.trim();
    const subj = encodeURIComponent(subject || `Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:taimoorc067@gmail.com?subject=${subj}&body=${body}`;
  });
}

/* ---------------- LOADER PERCENT COUNTER ---------------- */
(function loaderCount() {
  const el = document.getElementById("loaderPercent");
  if (!el) return;
  let v = 0;
  const id = setInterval(() => {
    v = Math.min(100, v + Math.random() * 9 + 3);
    el.textContent = Math.floor(v);
    if (v >= 100) clearInterval(id);
  }, 90);
})();

/* ---------------- AMBIENT PARTICLE CANVAS + SPOTLIGHT ---------------- */
(function ambient() {
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
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
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

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const draw = () => {
    if (prefersReduced.matches) return;
    ctx.clearRect(0, 0, w, h);
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(53,107,140,0.25)";
      ctx.fill();
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x,
          dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(193,154,107,${0.08 * (1 - d / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
})();

/* ---------------- EXPLODING EMBLEM ---------------- */
(function emblem() {
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
      p.style.background = i % 2 ? "#C19A6B" : "#356B8C";
      btn.appendChild(p);
      setTimeout(() => p.remove(), 850);
    }
    const isExpanded = badge.classList.toggle("show");
    btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });
})();
