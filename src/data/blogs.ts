import blogRigless from "@/assets/blog/blog-rigless-intervention.jpg";
import blogCorrosion from "@/assets/blog/blog-corrosion-management.jpg";
import blogPlugAbandonment from "@/assets/blog/blog-plug-abandonment.jpg";
import blogThruTubing from "@/assets/blog/blog-thru-tubing.jpg";
import blogAiPipeline from "@/assets/blog/blog-ai-pipeline.jpg";
import blogCapillary from "@/assets/blog/blog-capillary-injection.jpg";
import blogProjectMgmt from "@/assets/blog/blog-project-management.jpg";
import blogWellIntegrity from "@/assets/blog/blog-well-integrity.jpg";
import blogDrilling from "@/assets/blog/blog-drilling-support.jpg";
import blogConsulting from "@/assets/blog/blog-engineering-consulting.jpg";

export const blogPosts = [
  {
    id: 1,
    slug: "rigless-intervention-mature-well-restimulation",
    title: "Why Rigless Intervention Is Now the Default Choice for Mature Well Restimulation",
    excerpt: "An engineering consultant's perspective on cost, risk, and operational efficiency in the modern oilfield.",
    content: `
      <p>For decades, bringing a conventional drilling rig to perform a well workover was the industry default. Today, that calculus has fundamentally shifted. Engineering teams and asset managers who insist on full rig mobilization for every intervention job are leaving significant value on the table — in schedule time, cost, and HSE exposure. At Shivi Energy Solutions, we have consistently recommended rigless execution paths as the first-option strategy, and the results across global operator portfolios validate that position.</p>

      <h2>The Economics Are Unambiguous</h2>
      <p>A conventional workover rig mobilisation for an onshore well typically runs 3–7 days of rig-up alone, before a single downhole tool is deployed. Spread costs in Asia-Pacific and the Middle East range from USD 15,000 to USD 80,000 per day depending on rig class and geography. Against this, a well-scoped rigless operation using coiled tubing, slickline, or hydraulic workover (HWO) systems can be mobilised in hours to a day, with spread costs a fraction of the conventional rig rate.</p>
      <p>The cumulative savings — across a portfolio of mature wells requiring periodic restimulation — run into millions of dollars per year. This is not theoretical; Shivi's engineers have repeatedly demonstrated this on projects supported for operators including Maersk, Shell, ADNOC, Qatar Petroleum, Dragon Oil, and Dubai Petroleum.</p>

      <h2>Engineering Recommendation: A Tiered Decision Framework</h2>
      <p>Rather than a blanket rig-or-no-rig debate, we recommend a tiered decision framework for every intervention candidate:</p>
      <ul>
        <li><strong>Tier 1 — Slickline/Wireline:</strong> Suitable for gauge runs, plug-setting, fluid sampling, and simple mechanical tasks. Lowest cost and fastest mobilisation. Always evaluate this first.</li>
        <li><strong>Tier 2 — Coiled Tubing (CT):</strong> Ideal for scale/wax removal, acid stimulation, sand cleanouts, gas kicks, and cement squeezes. Continuous pipe eliminates connection time; real-time downhole data is available through e-CT.</li>
        <li><strong>Tier 3 — Hydraulic Workover (HWO):</strong> Appropriate for tubing pulls, ESP changes, and more complex mechanical interventions. Still rigless, maintains live-well capability, and preserves reservoir pressure.</li>
        <li><strong>Tier 4 — Conventional Rig:</strong> Reserved for casing repair, sidetrack drilling, or situations where Tier 1–3 tools physically cannot achieve the objective.</li>
      </ul>

      <h2>Well Integrity Must Drive the Conversation</h2>
      <p>Rigless execution is not simply about cost reduction. It is about matching the right tool to the well's specific challenge while maintaining — and in many cases improving — well integrity.</p>
      <p>Before any rigless programme is approved, our team insists on a current well status report covering casing integrity, completion profile, historic intervention data, and tubular condition. Skipping this step is where operators get into trouble. A poorly scoped rigless job that escalates to a full workover costs more than if the rig had been called from the start. The front-end engineering assessment is not overhead — it is the single highest-return-on-investment activity in the entire programme.</p>

      <h2>The Make-in-India Advantage</h2>
      <p>Shivi Energy actively supports India's domestic manufacturing ecosystem. Where internationally qualified rigless tools and equipment can be sourced through local Indian manufacturers under our tie-up network, we prioritise that path. This reduces lead times, lowers import duties, and supports the broader national energy infrastructure. For operators working in India's upstream sector — ONGC, Oil India, and private E&P companies — this translates directly into faster mobilisation and lower total cost of ownership.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Always conduct a structured well candidate screening exercise before mobilising any asset. The right intervention technology for the right well pays for itself many times over. Contact Shivi Energy to discuss a rigless candidate assessment for your portfolio.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Engineering Consultants",
    date: "2026-03-01",
    readTime: "8 min read",
    category: "Well Operations",
    image: blogRigless,
    featured: true,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 2,
    slug: "corrosion-oil-gas-silent-asset-killer",
    title: "Corrosion in Oil & Gas: The Silent Asset Killer and How to Fight It Systematically",
    excerpt: "Engineering-led corrosion management is not a maintenance task — it is a strategic imperative.",
    content: `
      <p>Corrosion is responsible for an estimated 25–30% of all equipment failures in the oil and gas industry globally. It erodes margins through unplanned downtime, environmental liabilities, emergency repairs, and — in the worst cases — catastrophic structural failure. Yet it remains chronically under-managed on many assets, treated as a maintenance line item rather than a core engineering discipline. That must change.</p>

      <h2>Understanding the Corrosion Threat Landscape</h2>
      <p>Industrial equipment in upstream and midstream oil and gas faces an exceptionally hostile operating environment: high-pressure CO₂ and H₂S in produced fluids, high-temperature process streams, saline water, micro-organisms, and mechanical stress acting simultaneously. The result is a portfolio of corrosion mechanisms — uniform corrosion, pitting, crevice corrosion, stress corrosion cracking (SCC), microbiologically induced corrosion (MIC), and galvanic corrosion — often occurring concurrently on the same asset.</p>
      <p>Identifying which mechanism is dominant, and why, requires a disciplined Root Cause Failure Analysis (RCFA) programme. Without this foundation, corrosion management becomes a game of whack-a-mole: operators apply inhibitors and coatings without understanding whether they are addressing the actual mechanism.</p>

      <h2>The Four Pillars of Effective Corrosion Management</h2>
      <ul>
        <li><strong>Pillar 1 — Monitoring & Inspection:</strong> Deploy a combination of intrusive monitoring (corrosion coupons, ER probes, electrochemical sensors) and non-intrusive inspection (UT scanning, digital radiography, guided wave testing) to establish corrosion rates on a continuous or periodic basis.</li>
        <li><strong>Pillar 2 — Chemical Treatment:</strong> Apply corrosion inhibitors, biocides, oxygen scavengers, and scale inhibitors based on actual fluid chemistry, not generic industry recipes. Chemical selection must be reviewed when produced fluid composition changes.</li>
        <li><strong>Pillar 3 — Protective Coatings & Linings:</strong> Select coatings appropriate for the operating temperature, pressure, and fluid chemistry. Epoxy-based internal linings for carbon steel pipelines, thermal spray coatings for high-temperature equipment, and cathodic protection for buried or submerged infrastructure.</li>
        <li><strong>Pillar 4 — Design & Material Selection:</strong> The cheapest corrosion mitigation happens at the design stage. Specifying corrosion-resistant alloys (CRA) or selecting appropriate carbon steel grades with adequate corrosion allowances prevents years of operational headaches.</li>
      </ul>

      <h2>The Cost of Inaction</h2>
      <p>A single corroded flowline failure can result in a spill event, regulatory shutdown, cleanup costs, and reputational damage that far exceeds the multi-year cost of a comprehensive corrosion management programme. NACE International estimates the global annual cost of corrosion at over USD 2.5 trillion — and the oil and gas sector bears a disproportionately large share. Operators in the Indian subcontinent, Gulf region, and Southeast Asia face particularly aggressive corrosion environments driven by high ambient humidity, saline groundwater, and CO₂-rich reservoirs.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Conduct a corrosion risk assessment (CRA) on your critical assets annually. Map all identified corrosion threats to a risk matrix, assign mitigation owners, and track leading indicators — not just lagging failure events. Shivi Energy's corrosion management team is available for site assessments and programme design.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Asset Integrity Team",
    date: "2026-02-25",
    readTime: "9 min read",
    category: "Asset Integrity",
    image: blogCorrosion,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 3,
    slug: "plug-abandonment-engineering-discipline",
    title: "Getting Plug & Abandonment Right: Engineering Discipline in an Underrated Discipline",
    excerpt: "P&A is not the end of a well's story — it is the beginning of your liability management programme.",
    content: `
      <p>Plug and abandonment (P&A) operations are among the most consequential — and most frequently underestimated — activities in the upstream oilfield. A well that is improperly abandoned does not simply go silent; it becomes a long-term source of environmental risk, regulatory liability, and financial exposure. Getting P&A right requires the same engineering rigour applied to the most complex drilling and completion projects.</p>

      <h2>The Regulatory Stakes</h2>
      <p>Regulators across every major producing nation have tightened P&A requirements significantly over the past decade. In India, the Directorate General of Hydrocarbons (DGH) requires documented barrier verification and a permanent plug philosophy consistent with international standards. Middle Eastern regulators under ADNOC and Qatar Energy frameworks have similarly elevated the technical bar. Non-compliance is not merely a fine; it can result in licence revocation and compulsory remediation at the operator's expense.</p>

      <h2>Engineering First: The Barrier Philosophy</h2>
      <p>Every P&A programme must be anchored in a documented barrier philosophy. A well is considered permanently abandoned only when two independent, pressure-tested barriers isolate all hydrocarbon-bearing zones from surface and from the surrounding formation. Those barriers must be verifiable — through pressure testing, logging, or cement evaluation tools — and they must be durable over geological timescales.</p>
      <p>The sequence of operations matters: cement evaluation before plug placement, pressure testing after each plug, and verification of zonal isolation before rigless operations are approved. Cutting corners on barrier verification is the most common source of P&A re-entry — the most expensive outcome possible.</p>

      <h2>Rigless P&A: When It Works and When It Does Not</h2>
      <p>Rigless P&A operations are increasingly viable for shallow wells, onshore assets with intact tubing and casing, and wells where barrier survey data confirms integrity. Shivi Energy has executed and supported rigless P&A scopes using slickline mechanical plugs, CT-conveyed cement, and HWO systems for tubing retrieval. The cost savings versus conventional rig-based P&A are substantial — often 40–60% — when the well is suitable.</p>
      <p>However, rigless P&A is not universally applicable. Wells with corroded casing, collapsed tubing, missing wellhead components, or uncemented casing strings require conventional rig intervention to establish safe barriers. The evaluation of P&A method suitability must be based on actual well data, not optimistic assumptions.</p>

      <h2>Data Before Execution</h2>
      <p>The most effective P&A programmes begin with a comprehensive data room exercise: original completion records, cement bond logs, casing inspection logs, production chemistry history, and any prior workover data. Wells without adequate documentation require an assessment programme before any abandonment operation begins. Attempting to abandon a well without understanding what is downhole is a recipe for cost overruns and technical failure.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Treat P&A planning as a 12–18 month programme, not a reactive exercise. Early scoping, barrier philosophy documentation, data acquisition, and regulatory pre-engagement reduce the cost and risk of execution. Shivi Energy provides end-to-end P&A project management from candidate assessment through final certification.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Well Decommissioning Team",
    date: "2026-02-18",
    readTime: "10 min read",
    category: "Well Operations",
    image: blogPlugAbandonment,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 4,
    slug: "thru-tubing-precision-downhole-engineering",
    title: "Thru Tubing Operations: Precision Downhole Engineering Without Disturbing the Completion",
    excerpt: "When the well won't come off production and the problem is below the packer — thru tubing is your answer.",
    content: `
      <p>Thru tubing (TT) technology represents one of the most elegant engineering disciplines in the oilfield: performing complex downhole interventions through the existing production tubing string, without killing the well or pulling the completion. When executed correctly, thru tubing operations preserve reservoir energy, maintain production continuity, and solve problems that would otherwise require an expensive and disruptive workover.</p>

      <h2>When Thru Tubing Makes Engineering Sense</h2>
      <p>The case for thru tubing is strongest when: the existing completion is structurally sound and pulling it would destroy its integrity; the production uplift from intervention is time-sensitive; the well has a complex multilateral or intelligent completion that would take months to replace; or when operational constraints — platform weight limits, wellbay spacing, or seasonal weather windows — make conventional rig access impractical.</p>
      <p>In all these scenarios, the constraint is the internal diameter of the production tubing. Modern TT tools have been engineered to deliver enormous capability through IDs as small as 1.5 inches. Shivi Energy's network of global intervention equipment partners gives our clients access to the latest generation TT tools on short lead times — a critical advantage when production deferral costs are mounting.</p>

      <h2>Core Thru Tubing Applications</h2>
      <ul>
        <li><strong>Scale & Wax Removal:</strong> CT-conveyed jetting tools and coiled tubing cleanouts are the workhorse of TT production restoration. Regular CT cleanout programmes, budgeted proactively, avoid the costly escalation to full workover.</li>
        <li><strong>Sand Control & Cleanout:</strong> Sand ingress is the silent production killer in many unconsolidated reservoirs. TT sand screens and CT sand cleanout maintain productivity without pulling existing screens.</li>
        <li><strong>Re-perforation & Zone Isolation:</strong> Accessing bypassed pay or shutting off high-water intervals through TT perforating and plug-setting tools is one of the highest-value TT applications.</li>
        <li><strong>Downhole Chemical Treatment:</strong> CT-conveyed acid stimulation, scale squeeze, and biocide treatments target near-wellbore damage with precision, minimising chemical volumes and maximising effectiveness.</li>
        <li><strong>Logging & Diagnostics:</strong> Memory production logging tools (PLTs), casing inspection tools (CITs), and downhole cameras deployed on slickline through existing tubing provide well status data without disturbing the completion.</li>
      </ul>

      <h2>The Tool Selection Imperative</h2>
      <p>Selecting the wrong TT tool for the wellbore geometry is one of the most common and costly mistakes in rigless operations. Restrictions, deviations, collapsed tubing, and scaled profiles all affect tool passage. Shivi Engineering's pre-job simulation process — including wellbore profile modelling and tool string force analysis — eliminates tool-conveying failures before they occur. Our approach is to never commit to a TT execution plan without a current wellbore survey and restriction check.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Build a TT intervention calendar into your well management programme — not just reactive responses to decline curves. Proactive TT intervention at defined production thresholds delivers better NPV than waiting for the well to reach emergency status.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Downhole Tools Team",
    date: "2026-02-10",
    readTime: "9 min read",
    category: "Technical",
    image: blogThruTubing,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 5,
    slug: "ai-computer-vision-pipeline-monitoring",
    title: "AI and Computer Vision in Pipeline Monitoring: From Reactive Patrolling to Predictive Intelligence",
    excerpt: "How Shivi Energy is applying next-generation sensing and machine learning to transform pipeline safety.",
    content: `
      <p>Pipelines are the arteries of the energy system — and they are under assault from corrosion, third-party interference, geotechnical movement, and aging infrastructure. Traditional pipeline surveillance — periodic manual patrol, aerial inspections, and time-based maintenance cycles — is increasingly inadequate for the risk profiles of modern midstream and upstream networks. Shivi Energy Solutions has invested in AI and computer vision capabilities specifically to address this gap.</p>

      <h2>The Limitations of Conventional Pipeline Monitoring</h2>
      <p>Manual patrol cadences, even at weekly intervals, leave enormous windows of undetected threat exposure. A geotechnical event, third-party excavation, or corrosion-accelerated perforation can develop and manifest in hours. By the time it is identified through conventional inspection, the spill, pressure loss, or structural failure has already occurred.</p>
      <p>Instrumented monitoring — pressure transmitters, flow meters, and SCADA systems — provides real-time leak detection through mass balance and pressure transient analysis. These systems are necessary but insufficient: they detect events after they have occurred, with detection sensitivity declining for slow, gradual leaks in large-diameter, high-pressure lines.</p>

      <h2>Computer Vision as a Continuous Watchman</h2>
      <p>Distributed camera systems, drone-based inspection fleets, and thermal imaging arrays — when coupled with trained machine learning models — provide continuous visual surveillance of pipeline rights-of-way. Shivi Energy's AI pipeline monitoring systems are trained to detect:</p>
      <ul>
        <li>Third-party encroachment and unauthorised excavation near pipeline corridors</li>
        <li>Surface expression of subsurface leaks (discoloration, vegetation kill zones, pooling)</li>
        <li>Geotechnical threats: slope instability, erosion, landslide precursors</li>
        <li>Corrosion and coating damage on above-ground sections</li>
        <li>Hot spots and thermal anomalies on process equipment using infrared imaging</li>
      </ul>

      <h2>The AI Advantage: Pattern Recognition at Scale</h2>
      <p>Manual review of camera footage from a multi-hundred-kilometre pipeline corridor is operationally impossible. AI models process this data continuously, flagging only the events that match threat signatures — reducing alert noise by orders of magnitude compared to threshold-based alarm systems. Operators receive actionable notifications with GPS location, event classification, and confidence level — not raw video streams.</p>

      <h2>Integration with Integrity Management Systems</h2>
      <p>AI monitoring data does not sit in isolation. Shivi Energy's implementation framework integrates computer vision threat detections with existing SCADA, GIS, and integrity management systems. Threat events are geo-referenced, time-stamped, and linked to pipeline segment records — creating a rich, searchable dataset that feeds risk-based inspection scheduling and regulatory reporting.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Pilot AI pipeline monitoring on your highest-consequence segments first — typically those crossing populated areas, water bodies, or ecologically sensitive zones. The ROI case based on incident prevention alone typically justifies full corridor deployment within 18 months. Contact Shivi Energy to discuss a proof-of-concept deployment.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "AI & Digital Systems Team",
    date: "2026-02-03",
    readTime: "10 min read",
    category: "AI & Technology",
    image: blogAiPipeline,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 6,
    slug: "capillary-injection-downhole-chemical-treatment",
    title: "Capillary Injection Systems: The Precision Tool for Downhole Chemical Treatment",
    excerpt: "When surface injection fails to reach the problem zone, capillary technology delivers chemistry where it is needed most.",
    content: `
      <p>Production chemistry challenges — scale deposition, paraffin wax, asphaltene precipitation, hydrate formation, and corrosion — are responsible for an enormous share of unplanned production deferral in mature oil and gas fields. Conventional surface chemical injection systems are often inadequate for these problems, particularly in high-deviation wells, gas-lifted completions, and deep high-temperature reservoirs. Capillary injection technology addresses this limitation with elegant engineering precision.</p>

      <h2>Why Surface Injection Falls Short</h2>
      <p>Surface-applied corrosion inhibitors, scale inhibitors, and demulsifiers rely on the produced fluid stream to carry chemistry downhole and into the near-wellbore region. In high-rate gas wells, the annular velocity strips chemistry before it reaches the target zone. In waxy oil wells, surface injection temperatures mean the chemical reaches the cold deepwater section as a degraded product. In horizontal wells with multiple completion intervals, chemistry preferentially enters high-productivity zones — completely bypassing the intervals where treatment is most needed.</p>

      <h2>How Capillary Systems Work</h2>
      <p>A capillary injection string is a small-diameter (typically 1/4 to 3/8 inch OD) continuous tube run inside or alongside the production tubing to the target depth. Chemical is injected from surface at controlled rates and pressures, delivered directly to the intervention point. The engineering advantages are significant:</p>
      <ul>
        <li>Chemical concentration at the treatment point is orders of magnitude higher than surface injection equivalent</li>
        <li>Treatment volumes are dramatically lower — reducing chemical cost and disposal volumes</li>
        <li>Different chemicals can be injected simultaneously through dedicated capillary strings</li>
        <li>Real-time injection monitoring at surface confirms delivery without well intervention</li>
      </ul>

      <h2>Applications Across the Production Lifecycle</h2>
      <ul>
        <li><strong>Scale Inhibitor Squeeze Alternative:</strong> Capillary continuous injection eliminates the need for periodic, costly scale inhibitor squeeze treatments in scale-prone reservoirs.</li>
        <li><strong>Downhole Corrosion Inhibition:</strong> For wells producing corrosive H₂S or CO₂-rich fluids, capillary injection of corrosion inhibitor directly to the fluid entry point dramatically reduces internal corrosion in the tubing string.</li>
        <li><strong>Wax & Asphaltene Control:</strong> Continuous injection of wax dispersants and asphaltene inhibitors at the cold-zone entry depth prevents blockage formation before it begins.</li>
        <li><strong>Hydrate Inhibition:</strong> In gas wells and wet gas gathering systems, capillary injection of methanol or MEG at the hydrate-prone section prevents hydrate plug formation.</li>
      </ul>

      <h2>Installation and Integration</h2>
      <p>Capillary strings can be installed on new completions or added to existing wells via live-well rigless operations. Shivi Energy's team has delivered capillary installation projects on wells operated by major international operators in the Gulf, Southeast Asia, and the Indian subcontinent, integrating with existing chemical injection infrastructure and SCADA systems for remote monitoring and control.</p>

      <blockquote><strong>Shivi Recommendation:</strong> If your corrosion or scale management programme is consuming significant chemistry at surface with marginal downhole results, a capillary injection feasibility study should be your next step. The economics of capillary vs. squeeze treatment typically favour capillary after the first year of operation.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Production Chemistry Team",
    date: "2026-01-27",
    readTime: "9 min read",
    category: "Technical",
    image: blogCapillary,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 7,
    slug: "engineering-discipline-project-management",
    title: "Why Engineering Discipline in Project Management Is the Difference Between a Smooth Job and a Costly Lesson",
    excerpt: "In complex downhole operations, project management is not administrative overhead — it is risk mitigation.",
    content: `
      <p>The oilfield is an unforgiving environment for under-engineered project management. A coiled tubing job that runs out of window because the rig site accommodation wasn't pre-mobilised. A plug-and-abandonment campaign delayed three weeks because the downhole data needed for barrier design was never requested. A corrosion inhibitor programme that fails because the chemical compatibility test was skipped to save two days of laboratory time. These are not hypothetical scenarios — they are the recurring realities of oilfield projects managed to a task checklist rather than an engineering plan.</p>

      <h2>The Shivi Approach: Engineering-Led Project Execution</h2>
      <p>Shivi Energy Solutions describes its operating model as "Engineering-Led Execution Systems" — and this phrase reflects a deliberate philosophy. Every project begins with an engineering assessment, not a mobilisation order. The sequence is: understand the well, understand the objective, design the solution, scope the execution, then mobilise.</p>
      <p>This sounds obvious. It is frequently not followed. Commercial pressure to get tools on site and 'get started' is one of the most pervasive sources of avoidable cost and risk in well operations.</p>

      <h2>Critical Pre-Job Elements That Operators Often Skip</h2>
      <ul>
        <li><strong>Well Data Verification:</strong> Current well status, recent PLT data, casing inspection reports, and wellhead pressure ratings must be verified against documented records — not assumed from memory or verbal communication.</li>
        <li><strong>Hazard & Operability Studies (HAZOP):</strong> For complex rigless operations — particularly those involving live-well HWO, CT under pressure, or chemical injection at depth — a formal HAZOP or job safety analysis is not optional.</li>
        <li><strong>Contingency Planning:</strong> Every downhole operation plan must include a detailed contingency plan: what happens if the tool cannot pass the restriction? What is the stuck-pipe procedure? What is the blowout contingency?</li>
        <li><strong>Equipment Qualification:</strong> Tools and equipment sourced through Shivi's global network are subjected to documented qualification against job requirements — pressure rating, temperature rating, ID compatibility, and material compatibility with well fluids.</li>
      </ul>

      <h2>Measuring Project Performance</h2>
      <p>Shivi project managers track a defined set of key performance indicators on every engagement:</p>
      <ul>
        <li>First-attempt job success rate</li>
        <li>Non-productive time (NPT) as a percentage of total operational time</li>
        <li>Cost performance index (CPI) against approved AFE</li>
        <li>Schedule performance index (SPI) against approved programme</li>
      </ul>
      <p>These metrics are reported transparently to clients and used internally to identify process improvements. An industry-leading first-attempt job success rate is not an accident — it is the result of disciplined front-end engineering applied consistently across a project portfolio.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Evaluate your well intervention programme's non-productive time data. If NPT exceeds 10% of operational time, the root cause is almost always insufficient pre-job engineering — not operational incompetence. Invest in the planning phase first.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Project Management Team",
    date: "2026-01-20",
    readTime: "8 min read",
    category: "Well Operations",
    image: blogProjectMgmt,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 8,
    slug: "well-integrity-management-engineering-foundation",
    title: "Well Integrity Management: The Engineering Foundation Every Operator Must Build",
    excerpt: "A single well integrity failure can cost more than a decade of prevention. Build the management system before you need it.",
    content: `
      <p>Well integrity is not a certificate issued at the end of a workover. It is a living management system — continuously updated, regularly audited, and directly linked to operational decision-making. In jurisdictions from the North Sea to the Gulf of Mexico to India's NELP blocks, regulators and operators alike are converging on a common understanding: wells that are not actively managed for integrity are wells that will eventually fail.</p>

      <h2>Defining Well Integrity in Engineering Terms</h2>
      <p>A well is 'in integrity' when it has a verified set of independent barriers — mechanical and/or cement — that prevent uncontrolled flow of reservoir fluids to surface or to unintended subsurface formations. The NORSOK D-010 standard, widely applied internationally including on Indian upstream assets, defines a minimum of two independent barriers for any live well. Barrier elements include: wellhead and tree components; casing and tubing strings; cement sheaths; packers and downhole safety valves; and surface isolation valves.</p>
      <p>The key word is 'verified'. A barrier that has not been tested or inspected since original installation is a barrier of assumed integrity — which is not the same thing at all.</p>

      <h2>The Well Integrity Management System (WIMS) Framework</h2>
      <ul>
        <li><strong>Well Status Classification:</strong> All wells in the portfolio are assigned an integrity classification — typically a colour-coded risk tier — based on the status of defined barrier elements. This classification drives intervention priority.</li>
        <li><strong>Inspection & Testing Programme:</strong> Defined intervals for SCSSV function testing, tubing pressure tests, casing annulus monitoring, and wellhead valve testing — with documented pass/fail criteria and escalation procedures for anomalies.</li>
        <li><strong>Anomaly Management:</strong> A formal process for logging, assessing, and closing integrity anomalies. Every anomaly must have an owner, a risk assessment, and a time-bound resolution plan.</li>
        <li><strong>Well Records Management:</strong> Complete, accessible well files are a non-negotiable foundation. Cement bond logs, casing inspection data, pressure test records, and workover reports must be maintained in a searchable system.</li>
      </ul>

      <h2>Common Integrity Failure Modes in Mature Wells</h2>
      <p>Experience across hundreds of mature well assessments identifies the same recurring failure modes: corroded wellhead flanges leaking to annulus; SCSSV failures on wells that haven't had a function test in years; tubing-to-casing annulus pressure build-up indicating a tubing leak; and lost cement integrity in annular spaces that were never properly designed. Each of these is manageable — if detected early. Each is catastrophically expensive if left unmanaged.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Commission a well integrity screening exercise on any portfolio of wells older than 15 years, or any wells where integrity records are incomplete. Shivi Energy provides integrity assessment and WIMS implementation services aligned to NORSOK D-010 and applicable regional regulatory requirements.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Well Integrity Team",
    date: "2026-01-13",
    readTime: "10 min read",
    category: "Asset Integrity",
    image: blogWellIntegrity,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 9,
    slug: "drilling-support-well-construction-cost-risk",
    title: "Drilling Support Services: How the Right Engineering Partner Reduces Well Construction Cost and Risk",
    excerpt: "From bit selection to BHA design to mud programme optimisation — engineering decisions made at the planning stage determine rig-time efficiency.",
    content: `
      <p>Well construction cost is dominated by rig time. In India's upstream sector, a medium-complexity onshore well can consume 30–60 rig-days across drilling, completion, and testing phases. Every day saved through better engineering and better equipment selection represents hundreds of thousands to millions of dollars returned to the project economics. The opportunity is real — and it is almost entirely in the engineering domain.</p>

      <h2>Where Drilling Cost Is Actually Determined</h2>
      <p>The common misconception is that drilling efficiency is primarily a function of crew competence and rig technology. These matter — but the largest single determinant of drilling efficiency is well design quality. Specifically:</p>
      <ul>
        <li>Casing programme design that avoids unnecessary casing strings</li>
        <li>BHA configuration matched to actual formation characteristics, not copied from the previous well</li>
        <li>Mud programme designed for the anticipated pore pressure and temperature profile — not the last well's mud programme</li>
        <li>Bit selection driven by current offset well data and formation hardness profiles — not brand preference</li>
      </ul>
      <p>Shivi Energy's drilling support services address exactly these design decisions — providing independent engineering recommendations that are not influenced by equipment or consumables sales incentives.</p>

      <h2>The Value of Independent Engineering Advisory</h2>
      <p>The oilfield services market is populated by large integrated companies whose drilling engineering teams are, by structural incentive, motivated to recommend their own tools and fluids. Independent engineering advisors like Shivi Energy provide a counterbalance: recommendations made purely on technical merit and client interest.</p>

      <h2>Key Drilling Support Service Areas</h2>
      <ul>
        <li><strong>Well Programme Review:</strong> Independent technical review of proposed well programmes before AFE approval — identifying design risks, inconsistencies with offset well data, and opportunities to reduce cost.</li>
        <li><strong>BHA & Bit Optimisation:</strong> BHA design and bit selection supported by offset well performance data, formation evaluation data, and real-time drilling parameters analysis.</li>
        <li><strong>Mud Programme Optimisation:</strong> Drilling fluids programme review and on-site advisory to maintain wellbore stability, control formation pressures, and minimise formation damage in productive intervals.</li>
        <li><strong>Stuck Pipe & Lost Circulation Response:</strong> Engineering decision support for stuck pipe events and lost circulation incidents — where non-productive time compounds rapidly.</li>
        <li><strong>Post-Well Analysis:</strong> Systematic well performance benchmarking against plan and versus offset wells, with documented lessons learned fed directly into the next well's planning cycle.</li>
      </ul>

      <h2>The Make-in-India Opportunity in Drilling Services</h2>
      <p>India's upstream sector — led by ONGC and Oil India but increasingly joined by private operators — represents a significant and growing market for drilling support services. Shivi Energy's commitment to the Make-in-India initiative extends to drilling services: where qualified Indian manufacturers produce drilling tools, consumables, and measurement equipment that meet technical specifications, we prioritise and support their deployment.</p>

      <blockquote><strong>Shivi Recommendation:</strong> Before approving the AFE on your next well, commission an independent well programme review. The cost of the review is trivial relative to the potential savings identified — and the risk reduction benefit is difficult to overstate.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Drilling Engineering Team",
    date: "2026-01-06",
    readTime: "9 min read",
    category: "Well Operations",
    image: blogDrilling,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  },
  {
    id: 10,
    slug: "engineering-consulting-independent-technical-voices",
    title: "The Engineering Consulting Advantage: Why the Oil & Gas Sector Needs Independent Technical Voices",
    excerpt: "In a market shaped by large integrated service companies, independent engineering consulting delivers accountability, objectivity, and results.",
    content: `
      <p>The modern oilfield is extraordinarily complex. Multi-stage completions, intelligent fields, digital twins, AI-driven predictive maintenance, rigless intervention campaigns managed across dozens of concurrent wells — the technical decision landscape facing an upstream asset manager today would have been unrecognisable to a previous generation. Against this backdrop, the need for independent, objective engineering guidance has never been greater.</p>
      <p>Shivi Energy Solutions was founded on a specific conviction: that operators in India and across the Asia-Pacific and Gulf regions deserve access to world-class engineering capability that is not tied to product or equipment sales. That conviction shapes everything we do.</p>

      <h2>What 'Independent' Actually Means</h2>
      <p>Independence in engineering consulting means that our recommendations are determined by what is technically correct and commercially optimal for the client — not by what generates the largest sale for Shivi Energy or our supply chain partners. This is a meaningful distinction in an industry where the dominant players are integrated service companies with deep financial interests in the equipment and fluids they recommend.</p>
      <p>Our engineers have accumulated their experience working on real projects for operators including Maersk, Shell, Inpex, ADNOC, Qatar Petroleum, Dragon Oil, and Dubai Petroleum. This is not theoretical knowledge — it is field-tested judgement applied in high-stakes, high-cost operational environments.</p>

      <h2>The Four Engagement Principles</h2>
      <ul>
        <li><strong>Technical Integrity First:</strong> We will never recommend an approach we do not believe is technically sound. If the right answer is to call a rig, we will say so, even when a rigless option would generate a larger Shivi scope.</li>
        <li><strong>Full Transparency:</strong> Our project reports, risk assessments, and post-job analyses are documented in full — including the assumptions we made and the areas of residual uncertainty. No engineered optimism.</li>
        <li><strong>Knowledge Transfer:</strong> Our engagements are designed to build client capability, not client dependency. Where clients have in-house engineering teams, we work alongside them — transferring skills and frameworks, not just delivering reports.</li>
        <li><strong>Adherence to International Standards:</strong> All Shivi engineering work is referenced to applicable international standards: NORSOK D-010 for well integrity, API and NACE for corrosion management, ISO standards for management systems.</li>
      </ul>

      <h2>The Scope of Shivi's Engineering Capabilities</h2>
      <p>Shivi Energy's technical capabilities span the full well lifecycle — from drilling support and completion design through rigless intervention, production chemistry management, pipeline monitoring, and plug and abandonment. We offer both project-based engagements and retained advisory arrangements, calibrated to the needs of the client.</p>
      <p>Our network of exclusive tie-ups with intervention equipment and service companies worldwide means that where execution support is needed alongside engineering advisory, Shivi can mobilise equipment and crews — typically on shorter lead times than operators can achieve independently.</p>

      <h2>A Note on the Indian Market</h2>
      <p>India's oil and gas sector is at an inflection point. Domestic production is declining in legacy fields while the government pushes for enhanced recovery and new exploration activity. The Make-in-India initiative creates real opportunities for technology localisation in oilfield services. Shivi Energy is positioned at this intersection — combining international technical capability with deep understanding of the Indian operating environment and a genuine commitment to supporting domestic industry.</p>

      <blockquote><strong>Shivi Recommendation:</strong> If you are an asset manager, production engineer, or well services lead looking for an independent technical perspective on your oilfield challenges — whether a single well intervention, a corrosion management overhaul, or a portfolio-level P&A programme — we would welcome the conversation. Reach us at info@ShiviEnergy.com or visit www.shivienergy.com.</blockquote>
    `,
    author: "Shivi Energy Solutions",
    authorRole: "Engineering Consulting Team",
    date: "2025-12-30",
    readTime: "10 min read",
    category: "Strategy",
    image: blogConsulting,
    linkedinUrl: "https://www.linkedin.com/company/shivi-energy-solutions"
  }
];

export const blogCategories = [
  { name: "All Posts", count: 10 },
  { name: "Well Operations", count: 4 },
  { name: "Asset Integrity", count: 2 },
  { name: "Technical", count: 2 },
  { name: "AI & Technology", count: 1 },
  { name: "Strategy", count: 1 }
];
