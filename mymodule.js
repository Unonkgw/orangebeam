// for home page
const companyInfo = {
    name: "OrangeBeam Construction",
    tagline: "Building strong foundations for a brighter future.",
    mission: "We provide innovative civil engineering solutions with quality, safety, and sustainability at the core of every project.",
    address: "Nabunturan City",
    phone: "09091234567",
    email: "info@orangebeam.com"
};

// for error page
const errorMessages = {
    notFound: "Oops! The page you're looking for doesn't exist.",
    serverError: "Something went wrong on our end. Please try again later."
};

// team members
const team = [
    { name: "Jed Mearns", engr: "Specializes in designing, planning, and supervising construction projects to ensure structural integrity and compliance with safety standards. He oversees site operations, manages resources, and implements innovative engineering solutions to deliver projects on time and within budget. He ensures every project is built to last while meeting the highest quality standards." },
    { name: "Geah Igtanloc", engr: "Focuses on optimizing processes, improving efficiency, and reducing waste across all project operations. She designs systems that integrate people, technology, and resources to maximize productivity and sustainability. Her expertise ensures that projects run smoothly, cost-effectively, and with minimal environmental impact." },
    { name: "Yssa Nakagawa", engr: "Responsible for conceptualizing and designing functional, aesthetically pleasing, and sustainable spaces. She collaborates with clients and engineers to translate ideas into innovative architectural solutions that meet both practical and artistic goals. Her designs prioritize efficiency, and long-term usability while enhancing the built environment." }
];

// services page

const services = [
  { icon: "🏠", title: "Residential Construction", desc: "From custom homes to large housing developments, we create living spaces tailored to clients’ needs and lifestyles. Our team ensures every project meets the highest standards of quality, safety, and durability. We focus on designing homes that are not only functional but also comfortable and aesthetically pleasing." },
  { icon: "🏢", title: "Commercial Construction", desc: "We build dynamic commercial spaces designed to support business growth and operational efficiency. Each project is carefully planned to meet industry standards while reflecting the client’s brand and vision. Our goal is to deliver functional and sustainable environments that stand the test of time." },
  { icon: "🛣️", title: "Infrastructure Development", desc: "We construct essential infrastructure that forms the backbone of thriving communities. From roads and bridges to utilities, we prioritize safety, efficiency, and long-term durability. Our projects enhance connectivity, support economic growth, and improve the quality of life for residents." },
  { icon: "📋", title: "Project Management", desc: "Our comprehensive project management services ensure smooth execution from start to finish. We coordinate resources, schedules, and stakeholders to keep projects on time and within budget. By proactively identifying and solving challenges, we deliver results that exceed expectations." },
  { icon: "📐", title: "Design-Build Services", desc: "We provide a streamlined approach that integrates design and construction into a single process. This ensures better communication, faster timelines, and cohesive project outcomes. Our team delivers innovative, functional, and sustainable solutions tailored to each client’s goals." },
  { icon: "🔧", title: "Maintenance & Repair", desc: "We keep properties in peak condition through proactive maintenance and expert repairs. Our services minimize downtime, extend asset life, and maintain safety and performance standards. We address issues efficiently to ensure your buildings remain functional, safe, and visually appealing." }
];

const specialties = [
  { icon: "🌱", title: "Green Building", desc: "Eco-friendly and sustainable construction practices." },
  { icon: "⚡", title: "Smart Technology", desc: "Integrating modern technology into every project." },
  { icon: "🛡️", title: "Safety First", desc: "Uncompromising commitment to worker and client safety." }
];

const processSteps = [
  "Consultation & Planning",
  "Design & Engineering",
  "Construction & Development",
  "Quality Assurance",
  "Project Delivery"
];

const aboutPage = {
  mission: "At OrangeBeam, we are dedicated to delivering reliable, innovative, and sustainable engineering solutions. With over 15 years of expertise, our mission is to build projects that stand the test of time while meeting the highest standards of quality, safety, and environmental responsibility.",
  vision: "At OrangeBeam, our vision is to be the leading construction company in the region, recognized for our excellence, innovation, and sustainable practices. We aspire to create projects that inspire progress while fostering trust and long-term partnerships with our clients and communities. Through integrity and environmental stewardship, we aim to shape a built environment that benefits both present and future generations.",
  approach: "We combine traditional craftsmanship with modern technology to deliver projects that stand out for their quality, safety, and sustainability. Our team emphasizes collaboration and precision, ensuring every structure reflects the shared goals of our clients and stakeholders. By embracing innovation and eco-conscious methods, we build solutions that exceed expectations and endure the test of time.",

  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team Members" },
    { number: "100%", label: "Client Satisfaction" }
  ],

  values: [
    { icon: "🏗️", title: "Quality Excellence", desc: "We never compromise on quality." },
    { icon: "🤝", title: "Integrity & Trust", desc: "Honesty and transparency are the foundations." },
    { icon: "🌱", title: "Sustainability", desc: "We prioritize environmentally responsible practices." },
    { icon: "💡", title: "Innovation", desc: "We embrace new technologies." },
    { icon: "🛡️", title: "Safety First", desc: "The safety of our team and clients is our top priority." },
    { icon: "⏰", title: "Timely Delivery", desc: "We understand the importance of deadlines." }
  ]
};


module.exports = { companyInfo, errorMessages, team, services, specialties, processSteps, aboutPage };
