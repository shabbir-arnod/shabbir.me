export const profile = {
  name: "Shabbir Arnod Wala",
  role: "Technical Product Manager",
  location: "London, United Kingdom",
  email: "shabbirarnod53@gmail.com",
  linkedin: "https://www.linkedin.com/in/shabbir-arnod-wala/",
  github: "https://github.com/shabbir-arnod",
  tagline:
    "I turn complex, real time platforms into product roadmaps that engineering teams can actually build and customers can actually trust.",
  summary: [
    "I'm a Technical Product Manager with 6+ years of experience across SportTech, payments, banking and cloud platforms. I work at the intersection of engineering and product, translating dense technical and business requirements into roadmaps, API contracts, user stories and outcomes that hold up when someone asks a hard question in a stakeholder review.",
    "Right now I lead product for Sportradar's Unified Odds Feed, a real time, integration heavy platform where 250+ betting operators and sportsbooks worldwide consume data through APIs, SDKs, XML and AMQP messaging. Before that I spent three years at Accenture leading cloud migration programmes on AWS and Azure for health, public sector and banking clients, and two years at Northern Trust managing cross border payments and securities settlement operations for institutional clients in London.",
    "I care about the details that make platforms work once they're live in production: clean API contracts, sensible data flows, dashboards that tell the truth about latency and uptime, and roadmaps that survive contact with an SVP's questions. In my spare time I build small products of my own, partly to stay sharp technically, partly because I enjoy shipping things end to end.",
  ],
  quickFacts: [
    { label: "Based in", value: "London, UK" },
    { label: "Currently", value: "Sportradar, Unified Odds Feed" },
    { label: "Experience", value: "6+ years, SportTech, Payments, Cloud" },
    { label: "Focus", value: "APIs, platform integrations, migrations" },
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  context: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Sportradar",
    role: "Technical Product Manager",
    period: "Sept 2024, Present",
    context:
      "London. Unified Odds Feed, a real time sports odds and data distribution platform serving 250+ betting operators worldwide through APIs, SDKs, XML and AMQP.",
    highlights: [
      "Own technical product decisions for a real time, customer facing platform where clients integrate through APIs, SDKs, XML messages and AMQP, working closely with engineering on data flows, integration behaviour and operational edge cases.",
      "Translate complex platform requirements into clear product scope, user stories and acceptance criteria, aligning integration patterns and API and message flow behaviour with customer and business needs.",
      "Created a full AWS migration blueprint for a business application and led a working group across 5 platform teams to settle a Kafka versus RabbitMQ streaming decision.",
      "Built Grafana dashboards for uptime, latency and platform KPIs and Power BI dashboards for OKRs, market coverage and feature parity, then presented roadmaps and POCs to Director, SVP and EVP stakeholders.",
    ],
  },
  {
    company: "Accenture",
    role: "Product Consultant",
    period: "Sept 2021, Sept 2024",
    context:
      "London. Cloud migration and API platform delivery for enterprise clients across health, public sector and banking, modernising legacy infrastructure onto AWS and Azure.",
    highlights: [
      "Led product delivery for AWS and Azure transformation programmes, including credit card and loan data migration to AWS and the migration of 29 production servers to Azure, impacting 7,000+ users.",
      "Mapped API endpoints and worked with S3, Lambda, DynamoDB and Step Functions teams to define product scope, technical requirements and delivery plans for legacy to cloud migration.",
      "Supervised 4 onshore developers and coordinated backlog management, sprint delivery, change control, UAT and client handover across distributed teams.",
      "Founded and hosted a monthly culture appreciation series as Head of Inclusion and Diversity, building a sense of belonging across the UK office.",
    ],
  },
  {
    company: "Northern Trust",
    role: "Product Owner",
    period: "May 2017, May 2019",
    context:
      "Pune. Securities settlement and cross border payments operations for London based institutional clients and brokers, in a compliance heavy environment.",
    highlights: [
      "Managed end to end securities settlement and cross border payment flows, resolving high priority payment instructions, reconciliation breaks and operational exceptions for London based clients.",
      "Worked across SWIFT message types (MT940, MT942, MT103, MT202, MT527) and gained hands on exposure to ISO 20022, SEPA, CHAPS and FPS payment schemes.",
      "Generated settlement and exception reports in Excel and SQL while maintaining audit trails supporting AML, KYC and sanctions screening.",
      "Built Excel macros and VBA scripts that cut manual processing time by 40%, and gathered requirements for system upgrades, supporting UAT throughout.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Pregg",
    tagline: "A pregnancy health tracker built for two",
    description:
      "A private web app for tracking a pregnancy day to day. It handles medicine and exercise reminders, blood pressure and weight readings with trend graphs, a pregnancy week and baby size tracker, a symptom log and a kick counter, all backed by an account system with row level security so data stays private to the owner.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Recharts"],
    href: "https://github.com/shabbir-arnod/Pregg",
    highlights: [
      "Dashboard with the current pregnancy week, today's reminders and the latest BP and weight readings at a glance",
      "Trend charts for blood pressure and weight with a plain language Normal, Elevated or High badge",
      "Weekly bump photo album and a kick counter that keeps running even if you switch tabs",
      "Full backup and restore to JSON, and a schema built on Supabase Postgres with per account row level security",
    ],
  },
  {
    name: "Junior Trading Analyst",
    tagline: "A research agent for AI infrastructure stocks",
    description:
      "An agent that tracks AI infrastructure stocks across chips, cloud, networking, power and the data centre supply chain, and produces a markdown research report covering price and technicals, analyst ratings, insider activity, news and financials, plus a heuristic Bullish or Bearish signal and an optional AI written narrative.",
    stack: ["Python", "Streamlit", "yfinance", "Gemini API", "GitHub Actions"],
    href: "https://github.com/shabbir-arnod/Junior_Trading_Analyst",
    highlights: [
      "Composite signal blending analyst sentiment, momentum, trend and insider activity into a Bullish, Neutral or Bearish verdict with a confidence level",
      "Point and click Streamlit dashboard alongside a CLI, both running on free data with zero required API keys",
      "Backtested signal track record so the heuristic's reliability is checkable rather than assumed",
      "Scheduled GitHub Actions job for price and signal alerts that post to Slack or Discord even when the app isn't open",
    ],
  },
];

export const skillGroups = [
  {
    title: "Product & Delivery",
    skills: [
      "Technical Product Management",
      "Product Roadmaps",
      "User Stories & Acceptance Criteria",
      "Backlog Prioritisation",
      "Stakeholder Management",
      "Agile / Scrum",
      "UAT",
    ],
  },
  {
    title: "Platforms & Integration",
    skills: [
      "API Contracts & Mapping",
      "Integration Requirements",
      "Localisation & Regional Readiness",
      "Payments & Reconciliation",
      "Fiscal & Compliance Requirements",
    ],
  },
  {
    title: "Cloud & Data",
    skills: [
      "AWS",
      "Azure",
      "Lambda",
      "S3",
      "DynamoDB",
      "Step Functions",
      "Kafka",
      "RabbitMQ",
      "AMQP",
      "XML",
      "JSON",
      "SQL",
      "Python",
    ],
  },
  {
    title: "Reporting & Tools",
    skills: ["Grafana", "Power BI", "Splunk", "JIRA", "Confluence", "Miro", "Figma"],
  },
];

export const education = [
  {
    degree: "Master of Science, International Business",
    school: "University of Hertfordshire, Hatfield, United Kingdom",
    period: "Sept 2019, Sept 2021",
    detail: "Global E-Commerce, Marketing Across Culture, Financial Data Analysis, Global Economy. 2:1 Merit.",
  },
  {
    degree: "Bachelor of Science, Business Management (International Business)",
    school: "University of Pune, Pune, Maharashtra",
    period: "June 2014, April 2017",
    detail: "2:1 Merit.",
  },
];

export const certifications = [
  "PSPO I Certified Product Owner",
  "ICAgile Certified Product Owner",
  "AWS Certified Solutions Architect, Associate",
  "AWS Certified Cloud Practitioner",
];
