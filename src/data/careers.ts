export interface CareerPosition {
  id: string;
  category: "Fresher" | "Experienced";
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  applicationLink: string;
  stipend: string;
  keyRequirements: string[];
}

export const fresherPositions: CareerPosition[] = [
  {
    id: "gt-corrosion-cp",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Corrosion & Cathodic Protection",
    department: "Corrosion Management",
    location: "Noida + Field Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year structured GT program immersing you in live CP survey, ICCP system commissioning, pipeline coating inspection, and client-site execution across India's biggest energy operators.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Mechanical, Chemical, Metallurgical, or Civil Engineering",
      "Passion for field work",
      "Physical fitness for site deployment",
      "No prior experience required"
    ]
  },
  {
    id: "gt-pipeline-ndt",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Pipeline Integrity & NDT",
    department: "Corrosion Management",
    location: "Noida + Field Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "Hands-on 2-year GT program covering DCVG/CIPS/CAT pipeline surveys, CUI inspection, RBI fundamentals, and coating integrity assessment on cross-country pipeline networks.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Mechanical, Chemical, or Petroleum Engineering",
      "Interest in NDT/inspection",
      "Willingness for multi-state field travel",
      "Physically demanding role"
    ]
  },
  {
    id: "gt-well-construction",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Well Construction & Completion",
    department: "Well Construction",
    location: "Noida + Rig Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program with live exposure to liner hanger running, completion tool operations, drilling fluids, and wellsite engineering on active ONGC, OIL India, and operator drilling campaigns.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Petroleum, Mechanical, or Chemical Engineering",
      "Rig/field deployment readiness",
      "28-day rotational schedule",
      "High physical and mental endurance required"
    ]
  },
  {
    id: "gt-well-intervention",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Well Intervention & Fishing",
    department: "Well Intervention",
    location: "Noida + Rig/Wellsite (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program covering thru-tubing tools, fishing operations, velocity string deployment, CT operations, and zonal isolation on ONGC/OIL India producing wells.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Petroleum or Mechanical Engineering",
      "Wellsite deployment readiness",
      "Rotational schedule",
      "Strong problem-solving under pressure"
    ]
  },
  {
    id: "gt-ai-digital",
    category: "Fresher",
    title: "Graduate Trainee Engineer — AI & Digital Oversight Systems",
    department: "Digital Oversight & AI",
    location: "Noida (Hybrid)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program building expertise in computer vision, anomaly detection, IoT-based CP monitoring, digital twin platforms, and AI-driven predictive maintenance for energy assets.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech or B.Sc. in Computer Science, Electronics, or Instrumentation",
      "Python/ML basics preferred",
      "Curiosity-driven mindset",
      "Strong analytical & logical thinking"
    ]
  },
  {
    id: "gt-iot-scada",
    category: "Fresher",
    title: "Graduate Trainee Engineer — IoT, SCADA & Remote Monitoring",
    department: "Digital Oversight & AI",
    location: "Noida + Field Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program covering IoT sensor deployment, SCADA integration, remote CP monitoring platform setup, and data analytics dashboards for live pipeline and asset monitoring.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Electronics, Instrumentation, EEE, or Computer Science",
      "Basic networking/IoT knowledge preferred",
      "Field installation readiness",
      "Data-driven thinking"
    ]
  },
  {
    id: "gt-3d-scanning",
    category: "Fresher",
    title: "Graduate Trainee Engineer — 3D Scanning & Digital Twin",
    department: "3D Scanning & Digital Twin",
    location: "Noida + Industrial Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program training you on Trimble X7/X9/X12 laser scanners, point cloud processing, scan-to-model workflows, and digital twin creation for refineries, tank farms, and industrial plants.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Civil, Mechanical, or Survey Engineering",
      "CAD/BIM software interest",
      "Site access and travel readiness",
      "Attention to millimeter-level precision"
    ]
  },
  {
    id: "gt-brownfield-retrofit",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Brownfield Retrofit & Clash Detection",
    department: "3D Scanning & Digital Twin",
    location: "Noida + Industrial Sites (On-site)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program covering 3D scan-to-model conversion, brownfield clash detection, retrofit design coordination, and as-built documentation for EPC and process industry clients.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Civil, Mechanical, or Architecture",
      "AutoCAD/Revit/Navisworks interest",
      "Detail-oriented and methodical working style",
      "Refinery/plant site exposure a plus"
    ]
  },
  {
    id: "gt-video-analytics",
    category: "Fresher",
    title: "Graduate Trainee Engineer — Video Analytics & Computer Vision",
    department: "Video Analytics & AI",
    location: "Noida + Client Sites (Hybrid)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program building hands-on expertise in video analytics solution, CV model configuration, camera deployment, PPE & safety compliance monitoring, and client site integration.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in Computer Science, ECE, or IT",
      "Interest in AI/ML and computer vision",
      "Client-facing communication skills",
      "Site installation readiness"
    ]
  },
  {
    id: "gt-hse-surveillance",
    category: "Fresher",
    title: "Graduate Trainee Engineer — HSE, Safety & Surveillance Systems",
    department: "Video Analytics & AI",
    location: "Noida + Client Sites (Hybrid)",
    type: "Full-time",
    experience: "0 years (Fresh Graduate)",
    description: "2-year GT program covering AI-based HSE compliance monitoring, lone worker safety systems, intrusion detection, fire/smoke detection, and control room integration for O&G and defense clients.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹17,000 (Yr 1) → ₹25,000 (Yr 2) → Performance-linked increment",
    keyRequirements: [
      "B.E./B.Tech in ECE, Computer Science, or EEE",
      "Passion for safety technology",
      "Strong communication",
      "Defense/industrial exposure a plus"
    ]
  },
  {
    id: "mt-og-sales",
    category: "Fresher",
    title: "Management Trainee — Oil & Gas Technical Sales",
    department: "Business Development",
    location: "Noida + Pan-India (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Structured MT program rotating across CP, well intervention, and digital solutions. Learn to map client needs to SES offerings, support technical bid preparation, and own accounts within 18 months.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹22,000 (Yr 1) → ₹30,000 (Yr 2) → ₹38,000 (post-program) + performance incentives",
    keyRequirements: [
      "B.E./B.Tech or MBA (Tech/Energy Management)",
      "Strong commercial instinct",
      "Willingness to travel extensively",
      "Articulate in Hindi and English"
    ]
  },
  {
    id: "mt-defense",
    category: "Fresher",
    title: "Management Trainee — Defense & Law Enforcement Sector",
    department: "Business Development",
    location: "Noida + Delhi NCR + Field (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "MT program focused on SES's defense and law enforcement portfolio — marine ICCP, AI surveillance, video analytics for naval/paramilitary clients. Learn sector protocols, GeM tendering, and procurement cycles.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹22,000 (Yr 1) → ₹30,000 (Yr 2) → ₹38,000 (post-program) + performance incentives",
    keyRequirements: [
      "B.E./B.Tech or MBA",
      "Interest in defense/government sector",
      "Familiarity with GeM/DGS&D preferred",
      "Discretion, integrity, and persistence are non-negotiable"
    ]
  },
  {
    id: "mt-utility",
    category: "Fresher",
    title: "Management Trainee — Utility & Infrastructure Sector",
    department: "Business Development",
    location: "Noida + Pan-India (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "MT program covering SES's utility sector offerings — city gas distribution CP, water pipeline integrity, digital monitoring for CGD and infrastructure clients. Develop technical proposals and manage client relationships.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹22,000 (Yr 1) → ₹30,000 (Yr 2) → ₹38,000 (post-program) + performance incentives",
    keyRequirements: [
      "B.E./B.Tech in Civil, Chemical, or Mechanical / MBA",
      "Knowledge of CGD/utility sector a plus",
      "Proven tenacity",
      "Travel across Tier 1, 2, and 3 cities required"
    ]
  },
  {
    id: "jsa-og",
    category: "Fresher",
    title: "Junior Sales Associate — Oil & Gas Sector",
    department: "Sales & Business Development",
    location: "Noida + Pan-India Travel (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Support technical sales of CP systems, well intervention tools, and digital solutions to ONGC, IOCL, BPCL, GAIL, and independent operators. Learn bid processes, client follow-ups, and deal closures.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹15,000 (Yr 1) → ₹20,000 (Yr 2) + performance-linked sales incentives",
    keyRequirements: [
      "Graduate in Engineering or Science",
      "Confident communicator in Hindi & English",
      "Relentless work ethic",
      "Comfort with rejection and resilience to push through"
    ]
  },
  {
    id: "jsa-defense",
    category: "Fresher",
    title: "Junior Sales Associate — Defense & Law Enforcement Sector",
    department: "Sales & Business Development",
    location: "Delhi NCR + Pan-India (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Drive sales of SES's marine ICCP, video analytics, and surveillance solutions to the Indian Navy, paramilitary forces, and defense PSUs. Learn GeM bidding, DGS&D procurement, and defense client protocols.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹15,000 (Yr 1) → ₹20,000 (Yr 2) + performance-linked sales incentives",
    keyRequirements: [
      "Graduate in any discipline",
      "Impeccable integrity and professionalism",
      "Interest in defense tech",
      "Patience for long government procurement cycles"
    ]
  },
  {
    id: "jsa-utility",
    category: "Fresher",
    title: "Junior Sales Associate — Utility & CGD Sector",
    department: "Sales & Business Development",
    location: "Noida + Pan-India Travel (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Build and manage a client base in city gas distribution, water utilities, and municipal infrastructure. Promote CP systems, pipeline surveys, and IoT monitoring solutions to CGD and utility operators.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹15,000 (Yr 1) → ₹20,000 (Yr 2) + performance-linked sales incentives",
    keyRequirements: [
      "Graduate in Engineering or Commerce",
      "Self-starter with pipeline sales drive",
      "Willing to travel to Tier 2/3 cities",
      "Local language skills are an advantage"
    ]
  },
  {
    id: "jta-tendering",
    category: "Fresher",
    title: "Junior Tendering Associate",
    department: "Contracts & Tendering",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Support end-to-end tendering operations on GeM, CPPP, and client portals. Track bid deadlines, compile technical and commercial documents, coordinate EMD/PBG submissions, and maintain the tender tracker.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹14,000 (Yr 1) → ₹18,000 (Yr 2) → performance-linked increment",
    keyRequirements: [
      "Graduate in Engineering, Commerce, or Law",
      "Extremely organised and deadline-driven",
      "GeM/e-procurement portal familiarity a plus",
      "Mental endurance for high-volume bid cycles"
    ]
  },
  {
    id: "jfa-finance",
    category: "Fresher",
    title: "Junior Finance Associate",
    department: "Finance & Accounts",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Support day-to-day accounts, invoice processing, GST filings, bank reconciliation, and expense tracking. Work closely with the senior finance team on monthly MIS, vendor payments, and project cost tracking.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹14,000 (Yr 1) → ₹18,000 (Yr 2) → performance-linked increment",
    keyRequirements: [
      "B.Com / BBA (Finance) or equivalent",
      "Tally/ERP basic knowledge preferred",
      "High numerical accuracy",
      "CA-aspirants welcome"
    ]
  },
  {
    id: "jpa-procurement",
    category: "Fresher",
    title: "Junior Procurement Associate",
    department: "Supply Chain & Procurement",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Support sourcing of technical materials — CP equipment, downhole tools, IT hardware, and consumables. Raise POs, track deliveries, maintain vendor database, and support cost-comparison analysis.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹14,000 (Yr 1) → ₹18,000 (Yr 2) → performance-linked increment",
    keyRequirements: [
      "Graduate in Engineering, Commerce, or Supply Chain",
      "Basic knowledge of procurement processes",
      "Negotiation aptitude",
      "GeM procurement experience a plus"
    ]
  },
  {
    id: "jhr-people-ops",
    category: "Fresher",
    title: "Junior HR & People Operations Associate",
    department: "Human Resources",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Support recruitment coordination, onboarding, employee records, attendance management, and HR compliance. Play a key role in building SES's culture as we scale our team across India.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹14,000 (Yr 1) → ₹18,000 (Yr 2) → performance-linked increment",
    keyRequirements: [
      "MBA (HR) / BBA / BA in Psychology or equivalent",
      "Empathetic communicator",
      "Discretion in handling confidential information",
      "Interest in building people-first culture"
    ]
  },
  {
    id: "jab-billing",
    category: "Fresher",
    title: "Junior Accounts & Billing Associate",
    department: "Finance & Accounts",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "0–1 years",
    description: "Handle client invoicing, follow up on receivables, maintain billing registers, support GST reconciliation, and assist with audit documentation for project-based contracts across ONGC, Navy, and utility clients.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹14,000 (Yr 1) → ₹18,000 (Yr 2) → performance-linked increment",
    keyRequirements: [
      "B.Com / BBA",
      "Tally/ERP knowledge",
      "High accuracy in numerical work",
      "Understanding of project-based billing cycles preferred"
    ]
  }
];

export const experiencedPositions: CareerPosition[] = [
  {
    id: "sr-tendering",
    category: "Experienced",
    title: "Senior Tendering Associate",
    department: "Contracts & Tendering",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "1–3 years",
    description: "Own the full tender lifecycle — from IFB analysis and bid strategy to submission, post-bid negotiations, and contract handover. Lead junior associates and coordinate with technical and finance teams.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹20,000–₹28,000 based on experience → performance increment",
    keyRequirements: [
      "1–3 years of tendering/contracts experience in O&G, EPC, or utilities",
      "GeM, CPPP, and e-procurement expertise",
      "Strong commercial writing",
      "Ability to handle 30+ concurrent tenders"
    ]
  },
  {
    id: "eng-corrosion",
    category: "Experienced",
    title: "Engineer — Corrosion Management & Cathodic Protection",
    department: "Corrosion Management",
    location: "Noida + Field Sites (On-site)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Execute and lead CP surveys (CIPS/DCVG/CAT), ICCP system commissioning, anode bed installations, and corrosion failure investigations for ONGC, IOCL, GAIL, and naval clients across India.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in CP/corrosion engineering",
      "NACE CP Level 1 preferred",
      "Hands-on ICCP/SACP field experience",
      "Proven ability to troubleshoot complex CP failures"
    ]
  },
  {
    id: "eng-well-construction",
    category: "Experienced",
    title: "Engineer — Well Construction & Completion",
    department: "Well Construction",
    location: "Noida + Rig/Wellsite (On-site, Rotational)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Support and lead liner hanger running, cementing operations, completion tool deployment, and wellbore integrity sign-off on ONGC and OIL India drilling campaigns. Rotational wellsite role.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in well construction/drilling",
      "Liner hanger or completion tool experience preferred",
      "Rig-ready with 28-day rotation comfort",
      "Team player who leads by doing"
    ]
  },
  {
    id: "eng-well-intervention",
    category: "Experienced",
    title: "Engineer — Well Intervention & Fishing Operations",
    department: "Well Intervention",
    location: "Noida + Wellsite (On-site, Rotational)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Design and execute thru-tubing interventions, fishing operations, velocity string installations, coiled tubing cleanouts, and bridge plug deployments on live producing wells for ONGC and OIL India.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in well intervention, wireline, or CT operations",
      "Fishing tool experience a strong plus",
      "Thrives under unpredictable field conditions",
      "Engineering acumen to troubleshoot in real time"
    ]
  },
  {
    id: "eng-ai-digital",
    category: "Experienced",
    title: "Engineer — AI, Digital Oversight & Anomaly Detection",
    department: "Digital Oversight & AI",
    location: "Noida (Hybrid)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Configure, deploy, and optimise AI-based anomaly detection, computer vision models, predictive maintenance platforms, and IoT monitoring systems for O&G and industrial clients across India.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in AI/ML, computer vision, or IoT systems",
      "Python and model configuration experience",
      "Proven ability to deliver solutions end-to-end",
      "Open to learning new platforms rapidly"
    ]
  },
  {
    id: "eng-iot-scada",
    category: "Experienced",
    title: "Engineer — IoT, SCADA & Remote Monitoring Systems",
    department: "Digital Oversight & AI",
    location: "Noida + Field Sites (Hybrid)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Lead deployment and integration of IoT data loggers, SCADA systems, remote CP monitoring platforms, and OT/IT network setups for cross-country pipeline and facility monitoring projects.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in SCADA/IoT/instrumentation",
      "Modbus, MQTT, or DNP3 protocol experience",
      "OT network commissioning experience preferred",
      "Collaborative and documentation-disciplined"
    ]
  },
  {
    id: "eng-3d-scanning",
    category: "Experienced",
    title: "Engineer — 3D Scanning, Modelling & Digital Twin",
    department: "3D Scanning & Digital Twin",
    location: "Noida + Industrial Sites (On-site)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Lead on-site 3D laser scanning campaigns using Trimble X7/X9/X12, manage scan registration and point cloud processing, and deliver scan-to-model digital twins for brownfield refinery and plant clients.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in 3D laser scanning or BIM/CAD",
      "Trimble, FARO, or Leica scanner experience",
      "Navisworks/Revit/AutoCAD proficiency",
      "Able to lead scan campaigns independently at client sites"
    ]
  },
  {
    id: "eng-video-analytics",
    category: "Experienced",
    title: "Engineer — Video Analytics & Computer Vision Deployment",
    department: "Video Analytics & AI",
    location: "Noida + Client Sites (Hybrid)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Configure and deploy video analytics solution modules — PPE detection, fire/smoke, intrusion, lone worker, and vehicle analytics — at refinery, terminal, defense, and utility client sites.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in video analytics, computer vision, or IP surveillance",
      "Milestone or similar VMS platform experience",
      "Camera network commissioning skills",
      "Collaborative problem-solver"
    ]
  },
  {
    id: "bde-tech-sales",
    category: "Experienced",
    title: "Business Development Engineer — Technical Sales (O&G / Defense / Utility)",
    department: "Business Development",
    location: "Noida + Pan-India Travel (On-site)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Own and grow a client portfolio across O&G, defense, and utility sectors. Lead technical presentations, manage bid submissions, and close contracts for SES's CP, digital, well intervention, and scanning solutions.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance-linked sales incentives",
    keyRequirements: [
      "2–3 yrs in technical B2B sales or business development",
      "Proven deal-closure track record",
      "Engineering graduate preferred",
      "Relentless follow-through and team spirit"
    ]
  },
  {
    id: "cte-tendering",
    category: "Experienced",
    title: "Contracts & Tendering Engineer",
    department: "Contracts & Tendering",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Independently manage the full tendering lifecycle across GeM, CPPP, and private portals — from IFB analysis and bid strategy to submission, evaluation, negotiation, and contract award handover.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in tendering/contracts in O&G, EPC, or government procurement",
      "GeM/e-procurement portal expertise",
      "Strong commercial and legal document drafting",
      "Can manage 30+ concurrent bids"
    ]
  },
  {
    id: "fao-finance",
    category: "Experienced",
    title: "Finance & Accounts Officer",
    department: "Finance & Accounts",
    location: "Noida (On-site)",
    type: "Full-time",
    experience: "2–3 years",
    description: "Own monthly MIS, GST filing, vendor payments, AR/AP reconciliation, project cost tracking, and audit support for SES's multi-project operations. Work directly with the CFO and project teams.",
    applicationLink: "careers@shivienergy.com",
    stipend: "₹25,000/month + performance increment after annual review",
    keyRequirements: [
      "2–3 yrs in accounts/finance",
      "Tally/ERP proficiency",
      "GST and TDS working knowledge",
      "Organised, deadline-driven, and a collaborative finance partner"
    ]
  }
];

export const allPositions = [...fresherPositions, ...experiencedPositions];
