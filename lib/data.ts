export const profile = {
  firstName: "Shabbir",
  name: "Shabbir Arnod Wala",
  initials: "SW",
  role: "Technical Product Manager",
  location: "London, United Kingdom",
  email: "shabbirarnod53@gmail.com",
  linkedin: "https://www.linkedin.com/in/shabbir-arnod-wala/",
  github: "https://github.com/shabbir-arnod",
  heroHeadline: "I build platforms that scale.",
  tagline:
    "Technical Product Manager turning complex, real time platforms into roadmaps engineering teams can build and customers can trust.",
  bio: [
    "I'm a technical product manager who works at the intersection of engineering and product, across SportTech, payments, banking and cloud. I translate dense technical requirements into roadmaps, API contracts and outcomes that hold up under a hard question in a stakeholder review.",
    "At Sportradar, I lead product for the Unified Odds Feed, a real time, integration heavy platform where 250+ betting operators worldwide consume data through APIs, SDKs, XML and AMQP. I created a full AWS migration blueprint for a business application and led a cross team working group that settled a Kafka versus RabbitMQ decision across five platform teams.",
    "Before that, I spent three years at Accenture leading AWS and Azure cloud migration programmes for health, public sector and banking clients, and two years at Northern Trust managing cross border payments and securities settlement for institutional clients in London.",
    "When I'm not in a roadmap review, I build small products of my own. Pregg started as a way to track a pregnancy day to day for two people. Junior Trading Analyst started as a way to stop refreshing stock charts by hand. Both taught me things about shipping software that a product role alone doesn't.",
    "I also founded a culture appreciation series at Accenture UK as Head of Inclusion and Diversity, hosting monthly events celebrating traditions from around the world.",
  ],
};

export type ResumeItem = {
  id: string;
  kind: "work" | "education";
  org: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  related: string[];
  gradient: string;
  accent: string;
};

export const resumeItems: ResumeItem[] = [
  {
    id: "sportradar",
    kind: "work",
    org: "Sportradar",
    title: "Technical Product Manager",
    period: "Sept 2024, Present",
    description:
      "Own technical product decisions for the Unified Odds Feed, a real time sports data platform serving 250+ betting operators worldwide through APIs, SDKs, XML and AMQP. Created a full AWS migration blueprint and led a 5 team working group on Kafka versus RabbitMQ, plus Grafana and Power BI dashboards presented up to SVP and EVP stakeholders.",
    highlights: [
      "Own technical product decisions for a real time, customer facing platform where clients integrate through APIs, SDKs, XML messages and AMQP.",
      "Translate complex platform requirements into product scope, user stories and acceptance criteria, aligning API and message flow behaviour with customer needs.",
      "Created a full AWS migration blueprint and led a working group across 5 platform teams to settle a Kafka versus RabbitMQ streaming decision.",
      "Built Grafana dashboards for uptime and latency and Power BI dashboards for OKRs and market coverage, presenting roadmaps to Director, SVP and EVP stakeholders.",
    ],
    related: ["Unified Odds Feed", "AWS Migration Blueprint", "Grafana & Power BI"],
    gradient: "linear-gradient(135deg, #241454 0%, #4b2fb0 100%)",
    accent: "#b9a6ff",
  },
  {
    id: "accenture",
    kind: "work",
    org: "Accenture",
    title: "Product Consultant",
    period: "Sept 2021, Sept 2024",
    description:
      "Led cloud migration and API platform delivery for enterprise clients across health, public sector and banking. Migrated credit card and loan data to AWS and 29 production servers to Azure, impacting 7,000+ users, while supervising 4 onshore developers.",
    highlights: [
      "Led product delivery for AWS and Azure transformation programmes, including credit card and loan data migration to AWS and the migration of 29 production servers to Azure, impacting 7,000+ users.",
      "Mapped API endpoints and worked with S3, Lambda, DynamoDB and Step Functions teams to define product scope and delivery plans for legacy to cloud migration.",
      "Supervised 4 onshore developers and coordinated backlog management, sprint delivery, change control, UAT and client handover.",
      "Founded and hosted a monthly culture appreciation series as Head of Inclusion and Diversity, UK.",
    ],
    related: ["AWS Certified Solutions Architect", "AWS Certified Cloud Practitioner"],
    gradient: "linear-gradient(135deg, #063a3a 0%, #0d8a86 100%)",
    accent: "#7fe9de",
  },
  {
    id: "northern-trust",
    kind: "work",
    org: "Northern Trust",
    title: "Product Owner",
    period: "May 2017, May 2019",
    description:
      "Managed securities settlement and cross border payment operations for London based institutional clients and brokers in a compliance heavy environment, working across SWIFT, ISO 20022, SEPA, CHAPS and FPS.",
    highlights: [
      "Managed end to end securities settlement and cross border payment flows, resolving high priority payment instructions, reconciliation breaks and operational exceptions.",
      "Worked across SWIFT message types (MT940, MT942, MT103, MT202, MT527) and gained hands on exposure to ISO 20022, SEPA, CHAPS and FPS payment schemes.",
      "Generated settlement and exception reports in Excel and SQL while maintaining audit trails supporting AML, KYC and sanctions screening.",
      "Built Excel macros and VBA scripts that cut manual processing time by 40%, and supported UAT for payment system upgrades.",
    ],
    related: ["PSPO I Certified Product Owner", "ICAgile Certified Product Owner"],
    gradient: "linear-gradient(135deg, #3d0f1f 0%, #8a1f3d 100%)",
    accent: "#ff9fb3",
  },
  {
    id: "msc",
    kind: "education",
    org: "University of Hertfordshire",
    title: "MSc International Business",
    period: "Sept 2019, Sept 2021",
    description:
      "Hatfield, United Kingdom. 2:1 Merit. Modules covered global e-commerce, marketing across culture, financial data analysis and the global economy.",
    highlights: [],
    related: ["Global E-Commerce", "Financial Data Analysis", "Global Economy"],
    gradient: "linear-gradient(135deg, #3a2e05 0%, #8a6d10 100%)",
    accent: "#ffd75e",
  },
  {
    id: "bsc",
    kind: "education",
    org: "University of Pune",
    title: "BSc Business Management, International Business",
    period: "June 2014, April 2017",
    description: "Pune, Maharashtra. 2:1 Merit.",
    highlights: [],
    related: ["Business Management", "International Business"],
    gradient: "linear-gradient(135deg, #0b3a22 0%, #1f8a52 100%)",
    accent: "#6bf0a0",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  highlights: string[];
  icon: "baby" | "chart";
  tileGradient: string;
  badgeColor: string;
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
    icon: "baby",
    tileGradient: "linear-gradient(135deg, #ff9fc8 0%, #ff6fa0 100%)",
    badgeColor: "#ff6fa0",
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
    icon: "chart",
    tileGradient: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
    badgeColor: "#22c55e",
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
    skills: ["AWS", "Azure", "Apache Kafka", "RabbitMQ", "XML", "JSON", "SQL", "Python"],
  },
  {
    title: "Reporting & Tools",
    skills: ["Grafana", "Power BI", "Splunk", "JIRA", "Confluence", "Miro", "Figma"],
  },
];

export type WorkItem = {
  id: string;
  org: string;
  product: string;
  role: string;
  summary: string;
  stats: { label: string; value: string }[];
  links: { label: string; href: string }[];
  gradient: string;
  accent: string;
};

export const workItems: WorkItem[] = [
  {
    id: "unified-odds-feed",
    org: "Sportradar",
    product: "Unified Odds Feed",
    role: "Technical Product Manager",
    summary:
      "Product manager for Sportradar's Unified Odds Feed, a real time sports odds and data distribution platform. My team owns the REST APIs and the RabbitMQ (AMQP) message feeds that stream live odds, scores and fixture data to every client integration.",
    stats: [
      { label: "Betting operators served", value: "250+" },
      { label: "Delivery", value: "REST API & AMQP" },
      { label: "Messaging", value: "RabbitMQ feeds" },
    ],
    links: [
      {
        label: "Product documentation",
        href: "https://docs.sportradar.com/uof",
      },
      {
        label: "Interactive API docs",
        href: "https://iodocs.betradar.com/?urls.primaryName=Unified%20Feed",
      },
    ],
    gradient: "linear-gradient(135deg, #241454 0%, #4b2fb0 100%)",
    accent: "#b9a6ff",
  },
];
