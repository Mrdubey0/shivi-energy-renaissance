import { ScanLine, Eye, Shield, Search, Wrench, Settings, Package } from "lucide-react";

// Reality Capture images
import imgVolumetricIronMine from "@/assets/projects/volumetric-survey-iron-mine.jpg";
import imgVolumetricCoalMine from "@/assets/projects/volumetric-survey-coal-mine.jpg";
import imgBoiler3dScanning from "@/assets/projects/boiler-3d-scanning.jpg";
import imgSubstationCapture from "@/assets/projects/substation-reality-capture.jpg";
import imgTankCalibration from "@/assets/projects/tank-calibration.jpg";
import imgTankVerticalityTest from "@/assets/projects/tank-verticality-test.jpg";

// Computer Vision images
import imgForestSurveillance from "@/assets/projects/forest-surveillance-ai.jpg";

// Cathodic Protection Retrofitting images
import imgAcMitigation from "@/assets/projects/ac-mitigation-pipeline.jpg";
import imgCpRepair from "@/assets/projects/cp-repair-pipeline.jpg";

// Pipeline Surveys images
import imgCipsSurvey from "@/assets/projects/cips-pipeline-survey.jpg";
import imgDcvgCips from "@/assets/projects/dcvg-cips-survey.jpg";
import imgAcInterference from "@/assets/projects/ac-interference-survey.jpg";

// ICCP Monitoring & Maintenance images
import imgZincAnodeSupply from "@/assets/projects/zinc-anode-supply.jpg";
import imgIccpMonitoring from "@/assets/projects/iccp-monitoring-ongc.jpg";

// CP System Installation images
import imgTcpPcpInstall from "@/assets/projects/tcp-pcp-installation.jpg";

// Well Completions images
import imgBridgePlugSetting from "@/assets/projects/bridge-plug-setting.jpg";
import imgFracPlugSupply from "@/assets/projects/frac-plug-supply.jpg";
import imgFracPlugCtHpht from "@/assets/projects/frac-plug-ct-hpht.jpg";
import imgPackerLinerHanger from "@/assets/projects/packer-liner-hanger.jpg";
import imgFracPlugsToeSleeves from "@/assets/projects/frac-plugs-toe-sleeves.jpg";
import imgCasingPatchTools from "@/assets/projects/casing-patch-tools.jpg";
import imgCrossoversSupply from "@/assets/projects/crossovers-supply.jpg";

// Well Interventions images
import imgBridgePlugMilling from "@/assets/projects/bridge-plug-milling.jpg";
import imgFishingMiningWell from "@/assets/projects/fishing-mining-well.jpg";
import imgChemicalInjectionMandrel from "@/assets/projects/chemical-injection-mandrel.jpg";
import imgVelocityStringInstall from "@/assets/projects/velocity-string-install.jpg";
import imgDiamondMills from "@/assets/projects/diamond-mills.jpg";
import imgCrossoverJarTools from "@/assets/projects/crossover-jar-tools.jpg";

export interface Project {
  id: number;
  title: string;
  client: string;
  location: string;
  duration: string;
  category: string;
  status: string;
  image: string;
  riskContext: string;
  intervention: string;
  outcomes: string;
  lifecycleAssessment: string;
  parentCategory: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: "reality-capture", name: "Reality Capture", icon: ScanLine, color: "bg-blue-500" },
  { id: "computer-vision", name: "Computer Vision", icon: Eye, color: "bg-purple-500" },
  { id: "cp-retrofitting", name: "Cathodic Protection Retrofitting", icon: Shield, color: "bg-orange-500" },
  { id: "pipeline-surveys", name: "Pipeline Surveys", icon: Search, color: "bg-green-500" },
  { id: "iccp-monitoring", name: "ICCP Monitoring & Maintenance", icon: Settings, color: "bg-cyan-500" },
  { id: "cp-installation", name: "Cathodic Protection System Installation", icon: Wrench, color: "bg-amber-500" },
  { id: "well-completions", name: "Well Completions", icon: Package, color: "bg-red-500" },
  { id: "well-interventions", name: "Well Interventions", icon: Wrench, color: "bg-indigo-500" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Volumetric Survey – Talabira Iron Mine (2023)",
    client: "Integrated Mining Operations Group",
    location: "Kurmitar, Odisha",
    duration: "2023 (Executed by Group Company)",
    category: "Mine Surveying",
    status: "Completed",
    image: imgVolumetricIronMine,
    riskContext: "Absence of precision volumetric data across active stockpiles and overburden benches posed direct risk to production reporting accuracy, mine scheduling integrity, and regulatory reconciliation.",
    intervention: "Executed full-site 3D laser scanning with total-station geodetic control, processing high-density point clouds into calibrated surface models to compute cut/fill volumes with survey-grade precision.",
    outcomes: "Delivered survey-grade volumetric statements and CAD/3D surface models, enabling faster reconciliation cycles and audit-ready, data-driven mine strategy decisions.",
    lifecycleAssessment: "Established a repeatable volumetric baseline that reduces reliance on estimation, supports audit-ready production reporting, and enables year-on-year trend tracking.",
    parentCategory: "reality-capture"
  },
  {
    id: 2,
    title: "Volumetric Survey – Talabira Coal Mine (2024)",
    client: "Integrated Mining Operations Group",
    location: "Talabira, Sambalpur district, Odisha",
    duration: "2024 (Executed by Group Company)",
    category: "Mine Surveying",
    status: "Completed",
    image: imgVolumetricCoalMine,
    riskContext: "Rapid production-cycle turnover across active benches and stockyards demanded timely, accurate volumetric updates to prevent year-on-year reconciliation discrepancies and scheduling gaps.",
    intervention: "Conducted repeat reality capture with geodetic control surveys, updated digital terrain models, and delivered comparative volumetric computations with year-on-year deviation reporting.",
    outcomes: "Achieved consistent annual reconciliation with audit-ready as-built surfaces, directly supporting contractor billing verification and forward scheduling accuracy.",
    lifecycleAssessment: "Sustained the mine's volumetric tracking framework, reducing reconciliation turnaround and reinforcing data continuity across successive scheduling cycles.",
    parentCategory: "reality-capture"
  },
  {
    id: 3,
    title: "Boiler Internal 3D Scanning",
    client: "Heavy Industrial Equipment Services",
    location: "Kochi (Cochin), Kerala",
    duration: "2023 (Executed by Group Company)",
    category: "Industrial 3D Scanning",
    status: "Completed",
    image: imgBoiler3dScanning,
    riskContext: "Inaccessible boiler internals masked potential deformation and fouling accumulation—conditions that risk unsafe operation, undetected structural failure, and extended shutdown exposure.",
    intervention: "Deployed high-resolution 3D scanning of boiler internals to generate precise as-built geometry models and critical-clearance measurement reports without intrusive disassembly.",
    outcomes: "Delivered as-built geometry data enabling proactive maintenance and retrofit strategy, directly reducing shutdown turnaround time and rework exposure.",
    lifecycleAssessment: "Provided a reliable geometric baseline supporting ongoing condition assessment and reducing inspection-driven downtime through early detection of degradation.",
    parentCategory: "reality-capture"
  },
  {
    id: 4,
    title: "Reality Capture & 3D Image Survey of Substations",
    client: "Power Transmission & Substation Engineering",
    location: "Multiple substation sites (India)",
    duration: "2024 (Executed by Group Company)",
    category: "Reality Capture",
    status: "Completed",
    image: imgSubstationCapture,
    riskContext: "Reliance on outdated drawings for substation upgrade design introduced significant clash risk, safety exposure, and engineering rework potential across multiple sites.",
    intervention: "Executed LiDAR and photogrammetry reality capture with georeferenced geodetic control across multiple substation sites, delivering integrated 3D models and 360° immersive imagery for remote engineering review.",
    outcomes: "Enabled clash-free retrofit design and remote engineering review, significantly reducing site visits and improving documentation accuracy across all substation locations.",
    lifecycleAssessment: "Created a persistent digital twin baseline supporting future upgrade strategy and remote condition assessment without repeated physical surveys.",
    parentCategory: "reality-capture"
  },
  {
    id: 5,
    title: "Underground Tank Dipstick & Volume Calibration",
    client: "Petroleum Retail Infrastructure Services",
    location: "Manesar, Haryana",
    duration: "2024 (Executed by Group Company)",
    category: "Tank Calibration & Metrology",
    status: "Completed",
    image: imgTankCalibration,
    riskContext: "Uncalibrated dipstick measurements generated inventory variance, product loss exposure, and compliance gaps in underground tank operations—creating financial and regulatory risk.",
    intervention: "Performed precision dipstick calibration and developed tank strapping tables and volume charts using established volumetric calibration methodology in line with regulatory standards.",
    outcomes: "Achieved improved inventory accuracy with fully audit-ready calibration records, reducing product loss exposure and strengthening compliance posture.",
    lifecycleAssessment: "Calibration records provide a durable compliance foundation, reducing retest frequency and supporting ongoing inventory assurance with minimal operational disruption.",
    parentCategory: "reality-capture"
  },
  {
    id: 6,
    title: "Verticality & Bulging Test – Underground Storage Tanks",
    client: "Fuel Distribution & Storage Operations",
    location: "Palam, New Delhi",
    duration: "2022 (Executed by Group Company)",
    category: "Tank Integrity Testing",
    status: "Completed",
    image: imgTankVerticalityTest,
    riskContext: "Undetected tilt or bulging in underground storage tanks poses direct risk to structural integrity, with potential for progressive leakage, environmental contamination, and regulatory non-compliance.",
    intervention: "Applied precision surveying and 3D measurement techniques to assess verticality, roundness, and bulge deviation across all tank structures, delivering detailed deviation plots and engineering reports.",
    outcomes: "Identified early-stage deformation with actionable engineering recommendations, providing documented assurance of safe continued operation and regulatory compliance.",
    lifecycleAssessment: "Early deformation data enables condition-based maintenance scheduling, extending operational life and deferring structural remediation costs.",
    parentCategory: "reality-capture"
  },
  {
    id: 7,
    title: "AI Video Analytics for Forest Surveillance & Animal Monitoring",
    client: "Wildlife & Forest Conservation Authority",
    location: "Bonaigarh, Odisha",
    duration: "2025 (Executed by Group Company)",
    category: "Smart AI Video Analytics",
    status: "Ongoing",
    image: imgForestSurveillance,
    riskContext: "Remote terrain and insufficient patrol coverage create critical blind spots for wildfire detection, poaching, illegal intrusion, and animal-rail collision risk—resulting in delayed emergency response and preventable losses.",
    intervention: "Deployed AI-powered video analytics platform integrating fire/smoke detection, human intrusion and poaching indicators, weapon detection, and animal monitoring dashboards with automated alert workflows across forest monitoring infrastructure.",
    outcomes: "Enabled earlier fire detection and faster response to poaching and intrusion events, while providing continuous wildlife monitoring data that enhances situational awareness and optimizes patrol resource allocation.",
    lifecycleAssessment: "Continuous AI monitoring scales patrol coverage without proportional headcount increases, sustaining protection across expanding operational areas over the asset's service life.",
    parentCategory: "computer-vision"
  },
  {
    id: 8,
    title: "AC Mitigation using Anode Flex",
    client: "Hydrocarbon Transmission Pipeline Operations",
    location: "Rajasthan, Haryana",
    duration: "2026 Ongoing",
    category: "Cathodic Protection / AC Mitigation / Flex Anode",
    status: "Active",
    image: imgAcMitigation,
    riskContext: "Elevated AC interference levels from proximate high-voltage infrastructure drove accelerated electrochemical corrosion on buried pipelines, threatening coating integrity and long-term asset serviceability.",
    intervention: "Installed AC mitigation systems with flex anode technology, fully integrated with the existing cathodic protection infrastructure to suppress AC-induced corrosion currents and restore pipeline protection performance.",
    outcomes: "Restored pipeline integrity through measurable reduction in AC-induced corrosion exposure, with improved operational safety confirmed across all affected pipeline sections.",
    lifecycleAssessment: "Integrated AC mitigation extends effective CP system life and reduces pipeline inspection and repair frequency in high-interference corridors.",
    parentCategory: "cp-retrofitting"
  },
  {
    id: 9,
    title: "CP System Repair & AC Mitigation – 42\" Pipeline",
    client: "Strategic Petroleum Reserve Infrastructure",
    location: "Padur, Udupi District, Karnataka",
    duration: "6 Months",
    category: "Cathodic Protection / Coating Repair / AC Mitigation",
    status: "Completed",
    image: imgCpRepair,
    riskContext: "DCVG survey findings confirmed localized coating damage and cathodic protection deficiencies on the 42-inch crude oil pipeline, creating quantified corrosion exposure that threatened long-term pipeline containment integrity.",
    intervention: "Executed targeted repair of moderate and severe coating defects with full excavation and reinstatement. Installed polarization cells with zinc grounding anodes, implemented AC mitigation measures, and conducted end-to-end CP system testing and verification.",
    outcomes: "Fully restored coating integrity and improved cathodic protection performance across all defect sites, with AC interference mitigated and documented extension of pipeline service life.",
    lifecycleAssessment: "Targeted defect remediation combined with enhanced CP and AC mitigation eliminated primary corrosion drivers, directly extending pipeline service life and deferring major rehabilitation costs.",
    parentCategory: "cp-retrofitting"
  },
  {
    id: 10,
    title: "CIPS, CAT & DCVG/ACVG Surveys – KG Basin Pipeline Network",
    client: "GAIL (India) Limited",
    location: "KG Basin Pipeline Network, Rajahmundry (Andhra Pradesh)",
    duration: "1 Year (Dec 2024 – Dec 2025)",
    category: "Cathodic Protection Surveys",
    status: "Completed",
    image: imgCipsSurvey,
    riskContext: "Aging cathodic protection infrastructure across the KG Basin Pipeline Network required systematic performance evaluation to identify protection gaps before coating degradation and corrosion could escalate to integrity-threatening levels.",
    intervention: "Executed comprehensive Close Interval Potential Surveys (CIPS), Current Attenuation Tests (CAT), and DCVG/ACVG coating defect surveys across all pipeline sections, with GAIL-witnessed validation surveys and structured reporting from draft through final sign-off.",
    outcomes: "Delivered a comprehensive integrity data set covering CP effectiveness assessment, coating defect mapping, and compliance-ready reporting that enables data-driven pipeline management and prioritized maintenance decisions.",
    lifecycleAssessment: "Systematic survey data establishes a repeatable integrity baseline, enabling prioritized maintenance scheduling and providing documented regulatory compliance across the full network.",
    parentCategory: "pipeline-surveys"
  },
  {
    id: 11,
    title: "DCVG, CIPS & Soil Resistivity Surveys",
    client: "Indian Oil Corporation Limited (IOCL – SRPL)",
    location: "RTPL & EMPL Sections of ETBPL, Tamil Nadu",
    duration: "Nov 2023 – Mar 2024",
    category: "Cathodic Protection & Coating Integrity Surveys",
    status: "Completed",
    image: imgDcvgCips,
    riskContext: "Unverified cathodic protection effectiveness and coating condition across RTPL and EMPL sections of the ETBPL system created unquantified corrosion risk and compliance exposure requiring structured field assessment.",
    intervention: "Executed DCVG coating surveys, CIPS with ON/OFF potential logging, and soil resistivity surveys across both pipeline sections. Delivered full data validation, structured defect classification, and compliance-ready reporting in accordance with IOCL standards.",
    outcomes: "Produced comprehensive coating defect identification and CP adequacy verification, delivering actionable repair strategy inputs fully compliant with IOCL cathodic protection standards.",
    lifecycleAssessment: "Survey outputs provide the data foundation for targeted repair prioritization, directly reducing inspection costs and extending pipeline operational confidence across the ETBPL system.",
    parentCategory: "pipeline-surveys"
  },
  {
    id: 12,
    title: "AC Interference Survey & TLP Installation",
    client: "Indian Oil Corporation Limited (IOCL – NRPL)",
    location: "MJPL, Una Jurisdiction, Himachal Pradesh",
    duration: "Jun 2024 – Sep 2024",
    category: "AC Interference Survey & Mitigation",
    status: "Completed",
    image: imgAcInterference,
    riskContext: "Proximity of high-voltage transmission line crossings and parallel routes to the MJPL pipeline introduced significant AC interference risk, with potential for accelerated corrosion and personnel safety exposure at test points.",
    intervention: "Conducted AC interference surveys using data loggers at all test lead points, installed corrosion coupons and IP55-rated TLPs, performed 24-hour continuous AC voltage monitoring, and delivered quantified interference analysis with targeted mitigation recommendations.",
    outcomes: "Quantified AC interference levels across the pipeline corridor, established permanent monitoring infrastructure, and delivered a documented mitigation roadmap fully compliant with IOCL AC interference requirements.",
    lifecycleAssessment: "Permanent TLP and coupon infrastructure enables continuous AC interference monitoring, providing early warning capability and reducing the risk of undetected corrosion escalation over the pipeline's operating life.",
    parentCategory: "pipeline-surveys"
  },
  {
    id: 13,
    title: "Supply of Zinc Anodes",
    client: "Indian Naval Base Infrastructure",
    location: "",
    duration: "28-Oct-2024 to 27-Dec-2024",
    category: "Cathodic Protection Materials Supply",
    status: "Completed",
    image: imgZincAnodeSupply,
    riskContext: "Naval infrastructure required verified sacrificial anode supply to maintain active cathodic protection and prevent accelerated corrosion of critical assets in a high-salinity marine environment.",
    intervention: "Supplied 7 specification-compliant zinc anodes per GeM Contract, meeting all buyer and seller specification requirements with verified delivery to the designated consignee location.",
    outcomes: "Delivered CP consumables on schedule, maintaining corrosion protection readiness and supporting uninterrupted cathodic protection system performance for naval base infrastructure.",
    lifecycleAssessment: "Reliable anode supply ensures sustained sacrificial protection activity, preventing costly corrosion damage to naval infrastructure assets and maintaining operational readiness.",
    parentCategory: "iccp-monitoring"
  },
  {
    id: 14,
    title: "TCP & PCP System Installation",
    client: "Water & Sanitation Infrastructure Contractor",
    location: "Sawai Madhopur, Rajasthan",
    duration: "18 Months",
    category: "Temporary & Permanent Cathodic Protection (TCP & PCP)",
    status: "Ongoing",
    image: imgTcpPcpInstall,
    riskContext: "Buried pipeline networks at HT line crossings faced compounded risk from external corrosion and AC interference—conditions demanding both temporary protection during construction and a robust permanent CP system for long-term operational assurance.",
    intervention: "Delivered full-scope design, supply, installation, testing, and commissioning of Temporary and Permanent CP systems incorporating Mg and Zn sacrificial anodes, deep well ICCP anode beds, TR units, polarization cells, surge diverters, and test stations. Executed CIPS, DCVG, and CAT surveys, and prepared complete as-built documentation and O&M manuals.",
    outcomes: "Achieved effective corrosion protection across all pipeline sections with safe, compliant operation at HT crossings, delivering improved CP monitoring capability fully aligned with NACE and IS standards.",
    lifecycleAssessment: "Comprehensive TCP-to-PCP handover with full as-built documentation and O&M manuals ensures operational teams can sustain CP performance throughout the pipeline's design service life.",
    parentCategory: "cp-installation"
  },
  {
    id: 15,
    title: "Monitoring & Maintenance of ICCP System",
    client: "Oil and Natural Gas Corporation Limited (ONGC)",
    location: "",
    duration: "15-Mar-2025 to 13-Apr-2028 (3 Years)",
    category: "ICCP Monitoring & Maintenance (AMC)",
    status: "Ongoing",
    image: imgIccpMonitoring,
    riskContext: "Critical offshore-to-onshore bay pipelines demanded continuous ICCP system oversight; any lapse in monitoring or preventive maintenance carried risk of undetected CP degradation, corrosion escalation, and potential pipeline containment failure.",
    intervention: "Providing continuous monitoring and maintenance of ICCP systems covering weekly TR unit checks, monthly pipe-to-soil potential surveys, AGB monitoring, CJB and diode box inspections, ROW patrolling, cable fault identification, and vegetation clearance—with full compliance reporting under GeM Contract.",
    outcomes: "Sustained ICCP system availability and measurable CP performance improvement across all pipeline sectors, supported by a structured preventive maintenance and compliance reporting framework.",
    lifecycleAssessment: "Proactive monitoring and maintenance regime sustains CP system effectiveness throughout the contract term, deferring corrosion-related remediation and extending bay pipeline asset life.",
    parentCategory: "iccp-monitoring"
  },
  {
    id: 16,
    title: "Supply & Services for Setting of Bridge Plugs on HST",
    client: "OILEX/ Synergia Energies",
    location: "Gujarat",
    duration: "2023",
    category: "Frac Operation",
    status: "Completed",
    image: imgBridgePlugSetting,
    riskContext: "Absence of a verified downhole barrier created direct risk of inter-zonal crossflow, uncontrolled pressure communication, and fluid/gas migration—conditions that compromise containment integrity and well control during treatment operations.",
    intervention: "Executed bridge plug setting operations per approved program and SOPs, achieving positive zonal isolation and maintaining well integrity throughout high-stress treatment operations.",
    outcomes: "Achieved verified well isolation, eliminating inter-zonal crossflow risk and enabling safe, uninterrupted continuation of treatment operations.",
    lifecycleAssessment: "Reliable downhole barrier placement reduced containment risk and protected wellbore structural integrity for subsequent operational phases.",
    parentCategory: "well-completions"
  },
  {
    id: 17,
    title: "Supply Of Mills & Services for Bridge Plug Milling",
    client: "Joshi Technologies International",
    location: "Gujarat",
    duration: "2023",
    category: "Milling Operation",
    status: "Completed",
    image: imgBridgePlugMilling,
    riskContext: "Bridge plug obstruction presented compounded risk: restricted wellbore access, potential stuck pipe under excessive torque and drag, debris pack-off, and casing damage—each capable of extending NPT and compromising completion integrity.",
    intervention: "Mobilized fit-for-purpose milling tools matched to plug metallurgy and deployed a customized milling BHA. Executed controlled milling with optimized RPM and minimal WOB while maintaining active circulation to manage debris and protect casing integrity.",
    outcomes: "Drilled out cast iron bridge plug in 20 minutes with minimal WOB, fully restoring wellbore access through efficient, controlled execution with no casing or completion damage.",
    lifecycleAssessment: "Efficient plug removal with casing protection preserved wellbore geometry and eliminated the risk of remedial workover requirements.",
    parentCategory: "well-interventions"
  },
  {
    id: 18,
    title: "Supply of Frac Plugs",
    client: "ONGC",
    location: "Rajahmundry",
    duration: "2023",
    category: "Frac Operation",
    status: "Completed",
    image: imgFracPlugSupply,
    riskContext: "Upper-zone fracturing operations carried direct risk of treatment fluid and pressure communication into the lower interval, threatening unintended stimulation, frac efficiency loss, and well integrity exposure.",
    intervention: "Supplied frac/pack plugs to full tender specification—OD/ID, pressure/temperature, and differential ratings—deployed as temporary barriers across the lower interval to enable controlled, stage-isolated upper-zone fracturing.",
    outcomes: "Achieved effective lower zone isolation throughout upper-zone fracturing, enabling scheduled treatment execution with controlled pressure containment and zero out-of-zone fluid communication.",
    lifecycleAssessment: "Verified zonal isolation during multi-stage fracturing preserved reservoir architecture and maximized stimulation efficiency per stage.",
    parentCategory: "well-completions"
  },
  {
    id: 19,
    title: "Services For Setting Of Frac Plugs on Coil Tubing in HP-HT Well",
    client: "Oilfield Services Technology Provider",
    location: "Rajahmundry",
    duration: "2023",
    category: "HPHT Frac Operation",
    status: "Completed",
    image: imgFracPlugCtHpht,
    riskContext: "HPHT well conditions amplified plug-setting risk across multiple failure modes—premature setting, element extrusion, plug slip, CT fatigue, stuck pipe, and pressure control exposure—any of which could compromise stage isolation and generate significant NPT.",
    intervention: "Delivered CT plug-setting services per program and SOPs—validated full tool-plug compatibility and HPHT rating compliance, executed controlled RIH and setting sequences, monitored surface indications through setting confirmation, and pressure-tested isolation as required.",
    outcomes: "Successfully set frac plugs on coiled tubing under HPHT conditions, achieving scheduled stage isolation and enabling all treatment operations to proceed safely and on program.",
    lifecycleAssessment: "Reliable HPHT isolation preserved multi-stage treatment integrity and protected the wellbore from pressure-related damage across the completion interval.",
    parentCategory: "well-completions"
  },
  {
    id: 20,
    title: "Supply of Fishing Tools & Services for Stuck/Parted String Recovery – Mining Well",
    client: "Raise Borer Mining & Directional Drilling Contractor",
    location: "Rajasthan",
    duration: "2023",
    category: "RigLess Interventions",
    status: "Completed",
    image: imgFishingMiningWell,
    riskContext: "Loss of directional tooling in hole presented compound risk: extended downtime, wellbore access denial, and potential casing damage or safety exposure from aggressive retrieval attempts without a structured fishing program.",
    intervention: "Engineered a complete fishing program encompassing BHA design, tool selection, and operational procedure. Dressed the fish top through controlled milling to ensure reliable engagement, then executed the structured fishing sequence to latch and recover the lost NOV directional tool.",
    outcomes: "Successfully recovered the lost directional tool, restoring full-bore wellbore access and enabling safe resumption of drilling operations with well integrity fully maintained.",
    lifecycleAssessment: "Structured fishing program minimized NPT and preserved casing integrity, avoiding the remedial costs and schedule impact of a sidetrack.",
    parentCategory: "well-interventions"
  },
  {
    id: 21,
    title: "Services for Setting Hydraulic Packers & Liner Hangers",
    client: "Specialist Well Intervention Company",
    location: "India",
    duration: "2023-Ongoing",
    category: "Liner Hanger",
    status: "Completed",
    image: imgPackerLinerHanger,
    riskContext: "Incorrect packer and liner hanger setting carries direct consequences: compromised barrier integrity, pressure communication, and zonal isolation failure—each creating downstream completion and cementing complications requiring costly remedial intervention.",
    intervention: "Ran and set hydraulic packers and liner hangers per approved program and SOPs, confirming all setting parameters, achieving positive wellbore isolation, and verifying tool performance throughout all operations.",
    outcomes: "Delivered verified, reliable packer and liner hanger installations that strengthened well integrity, supported cementing operations, and provided a sound foundation for subsequent intervention programs.",
    lifecycleAssessment: "Accurately set barriers reduce the probability of remedial workover requirements and extend the productive intervention interval, lowering total well lifecycle cost.",
    parentCategory: "well-completions"
  },
  {
    id: 22,
    title: "Services for Installation of Chemical Injection Mandrels",
    client: "Specialist Well Intervention Company",
    location: "India",
    duration: "2023-Ongoing",
    category: "Artificial Lift",
    status: "Completed",
    image: imgChemicalInjectionMandrel,
    riskContext: "Incorrectly placed chemical injection mandrels in SRP wells result in ineffective chemical dosing—directly accelerating corrosion and scale deposition, increasing pump loads, degrading run life, and shortening overall asset productive life.",
    intervention: "Executed mandrel installation per program—verified well configuration and optimal placement depth, ran and installed mandrels with confirmed connection fit-up and pressure integrity, and function-tested the injection path to validate reliable chemical dosing delivery.",
    outcomes: "Delivered accurate chemical placement and verified injection performance, reducing corrosion and scale accumulation risk while extending SRP pump run life and optimizing production chemistry.",
    lifecycleAssessment: "Optimized chemical injection placement reduces intervention frequency and extends artificial lift run life, lowering total production operating costs and protecting asset productivity.",
    parentCategory: "well-interventions"
  },
  {
    id: 23,
    title: "Services for Installation of Velocity String",
    client: "Artificial Lift & Completion Services Provider",
    location: "Barmer",
    duration: "2024",
    category: "Artificial Lift",
    status: "Completed",
    image: imgVelocityStringInstall,
    riskContext: "Liquid loading in gas wells creates unstable flow regimes, rising backpressure, progressive production decline, and potential well kill—requiring timely rigless intervention to restore stable, sustained production without rig mobilization.",
    intervention: "Provided specialist field personnel to execute velocity string installation per program and SOPs, supervising running operations, confirming correct placement and landing depth, and verifying connection integrity at surface.",
    outcomes: "Successfully installed velocity string, improving liquid unloading capacity and stabilizing gas production through measurable reduction in liquid loading and backpressure.",
    lifecycleAssessment: "Velocity string installation restores well deliverability without rig mobilization, extending productive well life and deferring well abandonment.",
    parentCategory: "well-interventions"
  },
  {
    id: 24,
    title: "Supply of Diamond Impregnated Mills",
    client: "Global Oilfield Services Corporation",
    location: "Mumbai",
    duration: "2025",
    category: "RigLess Interventions",
    status: "Completed",
    image: imgDiamondMills,
    riskContext: "Milling operations in hard or abrasive materials carry risk of excessive torque and WOB, BHA failure, and casing or completion damage—direct consequences of deploying incorrectly specified milling tools.",
    intervention: "Supplied diamond impregnated mills to full program specification—OD, connection type, and application-specific material compatibility—with QA-verified tool readiness confirmed prior to deployment.",
    outcomes: "Delivered specification-correct mills enabling efficient, controlled milling execution with protected wellbore integrity and no BHA or casing damage.",
    lifecycleAssessment: "Application-matched milling tools reduce operational time, BHA wear, and casing damage risk, preserving wellbore geometry for subsequent operations.",
    parentCategory: "well-interventions"
  },
  {
    id: 25,
    title: "Supply Of Crossover & Special Tools For Jar",
    client: "Production & Completion Equipment Supplier",
    location: "Assam",
    duration: "2025",
    category: "Fishing Interventions",
    status: "Completed",
    image: imgCrossoverJarTools,
    riskContext: "Thread mismatch or undersized crossovers on jar assemblies risk connection failure, reduced jarring efficiency, and inability to transmit required tensile and compressive loads—generating NPT and placing downhole equipment at risk.",
    intervention: "Manufactured custom crossovers and special jar tools to exact customer specifications including thread profiles, OD/ID, metallurgy, and load ratings. Completed full dimensional and thread gauging QA/QC and delivered as ready-to-run with supporting documentation.",
    outcomes: "Delivered fit-for-purpose custom tools with verified thread compatibility and certified load capacity, enabling reliable jar operation with zero connection-related NPT.",
    lifecycleAssessment: "Custom-engineered tools with verified load ratings eliminate field modification risk and ensure consistent jarring performance across the tool's operational life.",
    parentCategory: "well-interventions"
  },
  {
    id: 26,
    title: "Supply of Frac Plugs & Toe Sleeves for HPHT Wells",
    client: "Completion & Production Technology Provider",
    location: "Barmer",
    duration: "2025",
    category: "Frac Completions",
    status: "Completed",
    image: imgFracPlugsToeSleeves,
    riskContext: "HPHT operating conditions drive elevated risk of seal extrusion, plug deformation, and rating failure in completion hardware—any of which results in loss of stage isolation, uncontrolled pressure communication, and significant NPT.",
    intervention: "Supplied Weatherford frac plugs and toe sleeves to full HPHT program requirements—pressure/temperature ratings, metallurgy compatibility, OD/ID and connection specifications—with complete QA/QC documentation confirming compliance and field-deployment readiness.",
    outcomes: "Delivered HPHT-rated plugs and toe sleeves fit-for-purpose, supporting scheduled frac execution with reliable isolation and confirmed pressure containment under demanding downhole conditions.",
    lifecycleAssessment: "HPHT-compliant completion hardware protects stage isolation integrity, maximizing stimulation efficiency and protecting completion investment across the full well life.",
    parentCategory: "well-completions"
  },
  {
    id: 27,
    title: "Supply Of Special Tools & Crossovers For Casing Patch",
    client: "Completion & Production Technology Provider",
    location: "Barmer",
    duration: "2025",
    category: "Casing Patch",
    status: "Completed",
    image: imgCasingPatchTools,
    riskContext: "Casing patch operations demand precise tool and thread compatibility; mismatched special tools or crossovers risk run-in failure, compromised patch landing, poor pressure integrity, and NPT with direct well integrity exposure.",
    intervention: "Supplied special tools and crossovers to exact casing patch program requirements—thread profiles, OD/ID, metallurgy, and load ratings—with full dimensional and thread gauging QA/QC, delivered ready-to-run with supporting documentation.",
    outcomes: "Delivered verified, fit-for-purpose tools enabling smooth casing patch deployment, maintaining pressure integrity throughout and eliminating connection-related operational delays.",
    lifecycleAssessment: "Precision-matched tools ensure successful patch placement, restoring casing integrity and deferring well abandonment or costly alternative remediation.",
    parentCategory: "well-completions"
  },
  {
    id: 28,
    title: "Supply Of Crossovers",
    client: "Completion & Production Technology Provider",
    location: "Barmer",
    duration: "2026",
    category: "Casing Patch",
    status: "Completed",
    image: imgCrossoversSupply,
    riskContext: "Incorrect crossover specification or thread mismatch prevents reliable rig-up, risks connection failure and leaks under operational loads, and generates NPT with direct well integrity exposure during completion and intervention operations.",
    intervention: "Supplied crossovers to exact customer specifications—thread type, OD/ID, connection length, metallurgy, and load rating—with full thread gauging and dimensional verification, delivered ready-to-run with complete documentation.",
    outcomes: "Delivered crossovers with verified thread compatibility, enabling seamless assembly and rig-up with reliable load transfer and zero connection-related operational delays.",
    lifecycleAssessment: "Specification-verified crossovers eliminate assembly risk and ensure connection integrity across the full operational load range throughout the tool's service life.",
    parentCategory: "well-completions"
  }
];
