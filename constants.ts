import { Terminal, Database, Cloud, Code, Server, Shield, Layers, Cpu } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Nishant Sharma",
  role: "Senior Backend Engineer",
  location: "Noida, India",
  phone: "8920129041",
  email: "nisshar502@gmail.com",
  linkedin: "linkedin.com/in/nisshar",
  bio: "Results-driven back-end engineer with 3.7+ years of experience designing, developing, and optimizing scalable systems. Proficient in Java, Spring Boot, and database technologies, with a strong focus on performance tuning, security, and distributed systems."
};

export const SKILLS_DATA = [
  { subject: 'Backend (Java/Spring)', A: 95, fullMark: 100 },
  { subject: 'Databases (SQL/NoSQL)', A: 90, fullMark: 100 },
  { subject: 'System Design', A: 85, fullMark: 100 },
  { subject: 'Cloud (AWS)', A: 75, fullMark: 100 },
  { subject: 'DevOps (Docker/K8s)', A: 70, fullMark: 100 },
  { subject: 'Messaging (Kafka)', A: 85, fullMark: 100 },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Frameworks",
    icon: Code,
    skills: ["Spring Boot (Java 21+)", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "JUnit", "Mockito"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB", "Firestore", "DynamoDB", "Elastic Search"]
  },
  {
    category: "Messaging & Caching",
    icon: Server,
    skills: ["Apache Kafka", "WebSockets", "Hazelcast", "Redis"]
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    skills: ["Docker", "AWS Lambda", "ECS (EC2, EKS, Fargate)", "Jenkins"]
  },
  {
    category: "Architecture",
    icon: Layers,
    skills: ["Microservices", "Distributed Systems", "REST APIs", "Database Design"]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Assistant Tech Lead",
    company: "Sparx IT Solutions",
    location: "Noida, India",
    period: "Sep 2025 - Present",
    highlights: [
      "Led project for Tres Health (US-based InsurTech), overseeing development and delivery.",
      "Optimized REST APIs using Spring Boot, Redis, and MySQL reducing latency by 30%.",
      "Closed 100% of code vulnerabilities flagged by Jenkins/SonarQube.",
      "Enhanced system scalability through strategic rate limiting."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Navyug InfoSolutions",
    location: "Noida, India",
    period: "Oct 2022 - Feb 2025",
    highlights: [
      "Developed internal control center for Terra Dotta (EdTech SaaS) with RBAC and feature toggles, boosting productivity by 30%.",
      "Implemented dynamic dashboards with Elastic Search & Redis; improved API performance by 50% via S3 image migration.",
      "Integrated Kafka for email delivery, reducing latency by 40%.",
      "Led monolithic to microservices migration for BirchStreet, handling 20% traffic increase with better fault isolation.",
      "Improved API performance up to 50% via DB indexing, caching, and materialized views."
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "VectoScalar",
    location: "Noida, India",
    period: "July 2021 - Sep 2022",
    highlights: [
      "Backend developer for BuyStars (Fantasy Cricket) with 2M+ active users.",
      "Implemented Hazelcast caching layer, minimizing latency by nearly 50%.",
      "Optimized batch jobs using Sequelize ORM & AWS Lambda, improving data retrieval speed by 20%.",
      "Helped team adopt Agile principles for high-quality iterative releases."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "ICPC Asia Kanpur-Mathura Online Contest 2020",
    rank: "Team Rank 63",
    description: "Competitive programming achievement demonstrating strong algorithmic problem-solving skills."
  },
  {
    title: "Education",
    rank: "B.Tech Computer Science",
    description: "ABES Institute of Technology (2017 - 2021), Ghaziabad, India"
  }
];