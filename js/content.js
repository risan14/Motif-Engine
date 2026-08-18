/*
  CONTENT CONTROL PANEL
  ---------------------
  Edit your portfolio content here.
  Images can be local paths such as "images/project-01.jpg"
  or full image URLs.

  You can ask ChatGPT to change ANY section of this file.
*/

const SITE_CONTENT = {
  brand: {
    name: "Your Name",
    role: "Visual Designer & WordPress Designer"
  },

  hero: {
    eyebrow: "Independent designer · Available for selected projects",
    title: "I create <em>visual experiences</em> that people remember.",
    description: "Graphic design, brand communication and thoughtful WordPress websites for organizations, businesses and people with something worth saying.",
    image: "images/hero.jpg",
    note: "Currently accepting new projects"
  },

  work: {
    intro: "A selection of identity, editorial, campaign and digital work. Each project is designed around a clear idea—not decoration for decoration's sake."
  },

  about: {
    title: "Design that looks good.<br><em>Design that works better.</em>",
    paragraph1: "I'm a multidisciplinary designer focused on turning ideas into clear, engaging visual communication. My work spans graphic design, editorial design, social campaigns and WordPress websites.",
    paragraph2: "I care about the details—from typography and composition to how a visitor experiences a website on a phone. The goal is always the same: make the message clearer and the experience better.",
    stats: [
      { value: "5+", label: "Years creating" },
      { value: "50+", label: "Projects delivered" },
      { value: "3", label: "Core disciplines" }
    ]
  },

  services: [
    {
      number: "01",
      title: "Graphic Design",
      description: "Visual communication that gives your message clarity, character and consistency.",
      items: ["Brand & identity", "Editorial & publications", "Social media", "Campaign design", "Print materials"]
    },
    {
      number: "02",
      title: "WordPress Web Design",
      description: "Responsive, polished websites designed around your content, audience and goals.",
      items: ["Website design", "WordPress builds", "Landing pages", "Responsive layouts", "Content structure"]
    },
    {
      number: "03",
      title: "Digital Experience",
      description: "A connected visual system across websites, campaigns and digital communication.",
      items: ["UI direction", "Creative systems", "Digital campaigns", "Visual storytelling", "Content presentation"]
    }
  ],

  process: [
    { number: "01", title: "Discover", text: "Understand the audience, goals, content and problem before designing." },
    { number: "02", title: "Define", text: "Build the visual direction, structure and design language around the idea." },
    { number: "03", title: "Design", text: "Develop the details, refine the experience and make every element earn its place." },
    { number: "04", title: "Deliver", text: "Prepare polished final files or a responsive website ready for real-world use." }
  ],

  projects: [
    {
      id: "annual-planner",
      title: "Annual Planner",
      category: "Editorial",
      categories: ["All", "Editorial", "Print"],
      year: "2026",
      client: "Non-profit organization",
      image: "images/project-01.jpg",
      description: "A nature-inspired annual planner created to make organizational communication feel warm, human and connected to everyday village life.",
      details: ["Art direction", "Editorial design", "Print production"],
      link: "#"
    },
    {
      id: "newsletter",
      title: "Newsletter Design",
      category: "Editorial",
      categories: ["All", "Editorial", "Print"],
      year: "2026",
      client: "Non-profit organization",
      image: "images/project-02.jpg",
      description: "A refreshed publication system combining storytelling, illustration and editorial hierarchy into a clear, approachable newsletter.",
      details: ["Cover design", "Editorial layout", "Visual direction"],
      link: "#"
    },
    {
      id: "humanitarian-campaign",
      title: "Humanitarian Campaign",
      category: "Campaign",
      categories: ["All", "Campaign", "Digital"],
      year: "2026",
      client: "Humanitarian organization",
      image: "images/project-03.jpg",
      description: "A digital campaign concept using illustration and strong visual storytelling to communicate humanitarian values.",
      details: ["Campaign concept", "Social media", "Illustration direction"],
      link: "#"
    },
    {
      id: "wordpress-project",
      title: "WordPress Website",
      category: "Web Design",
      categories: ["All", "Web Design", "Digital"],
      year: "2026",
      client: "Client project",
      image: "images/project-04.jpg",
      description: "A responsive WordPress website designed around a clean content structure, strong typography and an easy visitor journey.",
      details: ["UX structure", "UI design", "WordPress"],
      link: "#"
    }
  ],

  contact: {
    title: "Let's make something <em>worth seeing.</em>",
    description: "Have a design problem, a new website or a project that needs a stronger visual direction? Tell me about it.",
    email: "hello@yourdomain.com",
    location: "Available worldwide · Bangladesh",
    availability: "Open for selected freelance projects"
  },

  footer: {
    copyright: "© 2026 · All rights reserved."
  },

  marquee: [
    "Graphic Design",
    "Brand Identity",
    "Editorial Design",
    "WordPress",
    "Web Design",
    "Digital Campaigns"
  ]
};