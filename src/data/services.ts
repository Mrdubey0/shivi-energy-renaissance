import { Shield, Wrench, Cpu, Cog, Lock } from "lucide-react";

// Corrosion Management images
import imgCpAmc from "@/assets/services/cp-system-amc.jpg";
import imgCipsSurvey from "@/assets/services/cips-dcvg-cat-survey.jpg";
import imgCpDesign from "@/assets/services/cp-system-design.jpg";
import imgIccpRepair from "@/assets/services/iccp-panel-repair.jpg";
import imgStrayCurrentfrom from "@/assets/services/ac-dc-stray-current.jpg";
import imgCuiInspection from "@/assets/services/cui-inspection.jpg";
import imgMarineIccp from "@/assets/services/marine-iccp-retrofit.jpg";
import imgPipelineInhibitor from "@/assets/services/pipeline-inhibitor.jpg";
import imgLeakCoating from "@/assets/services/leak-detection-coating.jpg";
import imgCpElevation from "@/assets/services/cp-elevation-profile.jpg";
import imgTankFarmCp from "@/assets/services/tank-farm-cp.jpg";
import imgFailureAnalysis from "@/assets/services/corrosion-failure-analysis.jpg";
import imgCoatingInspection from "@/assets/services/coating-inspection.jpg";
import imgAnodeBed from "@/assets/services/iccp-anode-bed.jpg";
import imgSubseaAnode from "@/assets/services/subsea-anode-retrofit.jpg";

// Well Integrity images
import imgVelocityString from "@/assets/services/velocity-string-service.jpg";
import imgWellFishing from "@/assets/services/well-fishing-service.jpg";
import imgBridgePlugService from "@/assets/services/bridge-plug-packer-service.jpg";
import imgLinerHangerService from "@/assets/services/liner-hanger-service.jpg";
import imgCtCleanout from "@/assets/services/ct-cleanout-n2-service.jpg";
import imgWellStimulation from "@/assets/services/well-stimulation-service.jpg";
import imgLeakPatch from "@/assets/services/leak-detection-patch-service.jpg";
import imgWellIntegrity from "@/assets/services/well-integrity-assessment-service.jpg";
import imgInflatablePacker from "@/assets/services/inflatable-packer-service.jpg";
import imgPlugAbandonment from "@/assets/services/plug-abandonment-service.jpg";

// Anomaly Detection images
import imgAiCorrosion from "@/assets/services/ai-corrosion-anomaly.jpg";
import imgIotCp from "@/assets/services/iot-cp-monitoring-service.jpg";
import imgPredictive from "@/assets/services/predictive-maintenance-service.jpg";
import imgCvHse from "@/assets/services/cv-hse-monitoring-service.jpg";
import imgDroneInspection from "@/assets/services/drone-inspection-service.jpg";
import imgPipelineLeak from "@/assets/services/pipeline-leak-detection-service.jpg";
import imgCpAnalytics from "@/assets/services/cp-data-analytics-service.jpg";
import imgScada from "@/assets/services/scada-integration-service.jpg";
import imgPpeZone from "@/assets/services/ppe-zone-compliance-service.jpg";
import imgLoneWorker from "@/assets/services/lone-worker-safety-service.jpg";
import imgFireSmoke from "@/assets/services/fire-smoke-spill-service.jpg";
import imgSecurityIntrusion from "@/assets/services/security-intrusion-service.jpg";

// Engineering images
import imgRbi from "@/assets/services/rbi-assessment-service.jpg";
import imgMaterialSelection from "@/assets/services/material-selection-service.jpg";
import imgWellConstruction from "@/assets/services/well-construction-advisory-service.jpg";

export interface ServiceData {
  id: string;
  name: string;
  shortDescription: string;
  features: string[];
  operationalEnvelope: {
    param1Label?: string;
    param1Value?: string;
    param2Label?: string;
    param2Value?: string;
    application?: string;
    limits?: string;
  };
  image: string;
}

export interface ServiceCategoryData {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  count: number;
  services: ServiceData[];
}

// Service ID to image mapping
const serviceImages: Record<string, string> = {
  "cp-system-amc": imgCpAmc,
  "cips-dcvg-cat-survey": imgCipsSurvey,
  "cp-system-design": imgCpDesign,
  "iccp-panel-repair": imgIccpRepair,
  "ac-dc-stray-current": imgStrayCurrentfrom,
  "cui-inspection": imgCuiInspection,
  "marine-iccp-retrofit": imgMarineIccp,
  "pipeline-inhibitor": imgPipelineInhibitor,
  "leak-detection-coating": imgLeakCoating,
  "cp-elevation-profile": imgCpElevation,
  "tank-farm-cp": imgTankFarmCp,
  "corrosion-failure-analysis": imgFailureAnalysis,
  "coating-inspection": imgCoatingInspection,
  "iccp-anode-bed": imgAnodeBed,
  "subsea-anode-retrofit": imgSubseaAnode,
  "velocity-string-service": imgVelocityString,
  "well-fishing-service": imgWellFishing,
  "bridge-plug-packer-service": imgBridgePlugService,
  "liner-hanger-service": imgLinerHangerService,
  "ct-cleanout-n2-service": imgCtCleanout,
  "well-stimulation-service": imgWellStimulation,
  "leak-detection-patch-service": imgLeakPatch,
  "well-integrity-assessment-service": imgWellIntegrity,
  "inflatable-packer-service": imgInflatablePacker,
  "plug-abandonment-service": imgPlugAbandonment,
  "ai-corrosion-anomaly": imgAiCorrosion,
  "iot-cp-monitoring-service": imgIotCp,
  "predictive-maintenance-service": imgPredictive,
  "cv-hse-monitoring-service": imgCvHse,
  "drone-inspection-service": imgDroneInspection,
  "pipeline-leak-detection-service": imgPipelineLeak,
  "cp-data-analytics-service": imgCpAnalytics,
  "scada-integration-service": imgScada,
  "ppe-zone-compliance-service": imgPpeZone,
  "lone-worker-safety-service": imgLoneWorker,
  "fire-smoke-spill-service": imgFireSmoke,
  "security-intrusion-service": imgSecurityIntrusion,
  "rbi-assessment-service": imgRbi,
  "material-selection-service": imgMaterialSelection,
  "well-construction-advisory-service": imgWellConstruction,
  // Reuse similar images for remaining services
  "cp-system-audit-service": imgCpAmc,
  "fitness-for-service": imgRbi,
  "oisd-pngrb-compliance-service": imgWellConstruction,
  "reality-capture-3d-service": imgPredictive,
  "scan-to-model-service": imgPredictive,
  "brownfield-retrofit-service": imgWellConstruction,
  "periodic-digital-twin-service": imgPredictive,
  "shutdown-turnaround-service": imgRbi,
  "muster-accountability-service": imgCvHse,
  "workforce-attendance-service": imgCvHse,
  "vehicle-compliance-service": imgSecurityIntrusion,
  "delivery-verification-service": imgSecurityIntrusion,
  "control-room-monitoring-service": imgScada,
};

export const serviceCategories: ServiceCategoryData[] = [
  {
    id: "corrosion-management",
    name: "Corrosion Management",
    icon: Shield,
    color: "from-green-500 to-green-600",
    description: "Cathodic protection, corrosion monitoring, coating integrity, and asset life extension",
    count: 15,
    services: [
      {
        id: "cp-system-amc",
        name: "CP System Annual Maintenance Contract (AMC)",
        shortDescription: "Comprehensive annual maintenance contract for cathodic protection systems covering inspection, rectifier servicing, potential surveys, and full regulatory compliance reporting for pipeline and tank farm networks.",
        features: ["NACE-certified technicians", "Quarterly & annual CP surveys", "Rectifier calibration & servicing", "CIPS & CAT testing", "AS-found / AS-left compliance reports", "Emergency call-out included"],
        operationalEnvelope: {
          param1Label: "Survey Frequency",
          param1Value: "Quarterly + Annual full survey",
          param2Label: "Pipeline Coverage",
          param2Value: "Up to 500 km per contract cycle",
          application: "Cross-country pipelines, LPG plants, refinery tank farms, city gas networks",
          limits: "Access to all rectifier stations and test posts required; plant shutdowns to be coordinated"
        },
        image: ""
      },
      {
        id: "cips-dcvg-cat-survey",
        name: "CIPS / DCVG / CAT Coating Integrity Survey",
        shortDescription: "Close interval potential survey (CIPS), direct current voltage gradient (DCVG) and current attenuation test (CAT) to map coating defects and CP effectiveness on buried pipelines.",
        features: ["CIPS, DCVG, CAT & ACVG survey methods", "GPS-referenced defect mapping", "Prioritised anomaly report", "NACE SP0502 compliant", "Data export to GIS platforms"],
        operationalEnvelope: {
          param1Label: "Survey Walk Speed",
          param1Value: "1–3 km/hr (GPS-synchronised logging)",
          param2Label: "Measurement Resolution",
          param2Value: "±1 mV potential, ±1 m GPS position",
          application: "Cross-country gas/oil pipelines, CGD networks, refinery site piping",
          limits: "Temporary CP current interruption required; third-party TRU access coordination needed"
        },
        image: ""
      },
      {
        id: "cp-system-design",
        name: "CP System Design, Supply & Installation",
        shortDescription: "End-to-end impressed current and sacrificial anode cathodic protection system design, material supply, installation, and commissioning for pipelines, tanks, and concrete structures.",
        features: ["ICCP & SACP design", "Soil resistivity & environmental surveys", "Detailed engineering drawings", "Anode bed installation", "Commissioning & hand-over documentation", "NACE RP0169 / IS 1554 compliant"],
        operationalEnvelope: {
          param1Label: "Design Current Output",
          param1Value: "5 A – 200 A (system-specific design)",
          param2Label: "System Design Life",
          param2Value: "20–25 years per NACE standards",
          application: "New cross-country pipelines, LPG storage tanks, refinery structures, jetties",
          limits: "Soil resistivity survey and current demand study required before design finalisation"
        },
        image: ""
      },
      {
        id: "iccp-panel-repair",
        name: "ICCP Panel Repair & Serviceability Checks",
        shortDescription: "On-site inspection, fault diagnosis, and repair of impressed current cathodic protection control panels, transformer rectifiers, reference cells, and anode beds on pipelines and naval vessels.",
        features: ["Panel diagnostics", "TRU output calibration", "Reference cell replacement", "Anode bed resistance testing", "Circuit continuity checks", "Commissioning after repair", "NACE-certified team"],
        operationalEnvelope: {
          param1Label: "Output Measurement Accuracy",
          param1Value: "±0.1 V / ±0.1 A panel calibration",
          param2Label: "Serviceability Check Interval",
          param2Value: "Monthly / Quarterly (as-contracted)",
          application: "Naval vessels (INS fleet), pipeline ICCP systems, refinery tank ICCP",
          limits: "System must be de-energised for panel repair; vessel berth/dry-dock access required for marine"
        },
        image: ""
      },
      {
        id: "ac-dc-stray-current",
        name: "AC/DC Stray Current Interference Mitigation",
        shortDescription: "Field measurement, engineering assessment, and mitigation of AC/DC stray current interference on buried pipelines near HV power transmission lines and electrified railway corridors.",
        features: ["24-hr AC/DC field measurement", "Interference source identification", "Polarisation cell & decoupler installation", "Gradient control mat design", "Longitudinal induction modelling", "Final compliance report"],
        operationalEnvelope: {
          param1Label: "AC Interference Level",
          param1Value: "Measured to EN 50443 / NACE SP21424",
          param2Label: "Mitigation Effectiveness",
          param2Value: "Reduce AC current density to <1 A/m²",
          application: "Pipelines parallel to 66 kV–400 kV HV lines or electrified rail corridors",
          limits: "Requires co-operation with power utility / railway authority for source data"
        },
        image: ""
      },
      {
        id: "cui-inspection",
        name: "Corrosion Under Insulation (CUI) Inspection & Remediation",
        shortDescription: "Systematic detection and remediation of corrosion under insulation on process piping and pressure vessels using advanced NDE methods and specialised anti-CUI coating systems.",
        features: ["Pulsed eddy current (PEC) & RT NDE", "Insulation strip, inspect & re-apply", "Anti-CUI coating application", "Risk-based inspection strategy", "Written remediation schedule", "ISO 17484 aligned"],
        operationalEnvelope: {
          param1Label: "Wall Thickness Detection",
          param1Value: "PEC sensitivity: ±1 mm WT change",
          param2Label: "Operating Temperature",
          param2Value: "CUI risk zone: 0°C to 175°C",
          application: "Refineries, petrochemical plants, LNG facilities, offshore process modules",
          limits: "Scaffolding, insulation removal, and hot-work permit coordination required"
        },
        image: ""
      },
      {
        id: "marine-iccp-retrofit",
        name: "Marine ICCP Retrofit, Survey & Commissioning",
        shortDescription: "Cathodic protection survey, impressed current system retrofit, anode replacement, and commissioning for naval vessels, offshore platforms, and marine jetty structures.",
        features: ["Hull potential & current distribution surveys", "ICCP panel & reference electrode retrofit", "Zinc & aluminium anode replacement", "Impressed current system commissioning", "Indian Navy & offshore field experience"],
        operationalEnvelope: {
          param1Label: "Hull Potential Measurement",
          param1Value: "-800 mV to -1,100 mV vs Ag/AgCl (seawater)",
          param2Label: "Seawater Temperature",
          param2Value: "Tropical: 25°C–35°C operating range",
          application: "INS fleet naval vessels, offshore platforms, jetty structures, FPSO hulls",
          limits: "Vessel dry-dock or accessible hull required; diving support for submerged inspection"
        },
        image: ""
      },
      {
        id: "pipeline-inhibitor",
        name: "Pipeline Internal Corrosion Inhibitor Programme",
        shortDescription: "Design, supply, and management of corrosion inhibitor injection programmes for internal pipeline protection against CO₂, H₂S, and chloride-induced corrosion. Proven to reduce corrosion rates by up to 70%.",
        features: ["Inhibitor selection & compatibility testing", "Batch & continuous injection systems", "Corrosion coupon monitoring", "ER probe data analysis", "Monthly performance reports", "NACE MR0175 compliant chemicals"],
        operationalEnvelope: {
          param1Label: "Dosage Rate",
          param1Value: "50–500 ppm (fluid & system specific)",
          param2Label: "Operating Temperature",
          param2Value: "-10°C to 150°C pipeline operating range",
          application: "Gas gathering pipelines, oil flowlines, water injection systems, onshore trunk lines",
          limits: "Fluid composition analysis required; chemical injection pump and dosing point needed"
        },
        image: ""
      },
      {
        id: "leak-detection-coating",
        name: "Leak Detection & Coating Conductance Survey",
        shortDescription: "Surface and above-ground leak detection and coating conductance surveys for underground pipelines and buried storage tanks using DCVG, CAT, and Pearson survey methods.",
        features: ["DCVG, CAT & Pearson survey", "Coating conductance mapping", "GPS-referenced anomaly reports", "Repair prioritisation matrix", "Compliant with NACE SP0502 & IS standards"],
        operationalEnvelope: {
          param1Label: "Anomaly Detection Sensitivity",
          param1Value: "Detects defects from 1 cm² coating holiday",
          param2Label: "Survey Speed",
          param2Value: "1–4 km/hr above-ground walk rate",
          application: "Buried cross-country pipelines, city gas distribution, buried storage tank bottoms",
          limits: "Requires CP current to be active during survey; road crossings need traffic management"
        },
        image: ""
      },
      {
        id: "cp-elevation-profile",
        name: "Cathodic Protection Elevation Profile & Close Interval Survey",
        shortDescription: "Elevation-integrated CIPS for hilly terrain and river-crossing pipelines, providing pipe-to-soil potential profiles correlated with elevation data to identify shielding and coating anomalies.",
        features: ["GPS + elevation-integrated data logging", "River crossing survey capability", "Long-range pipeline coverage", "Slope-corrected PSP readings", "Terrain-adjusted defect reporting"],
        operationalEnvelope: {
          param1Label: "Potential Measurement",
          param1Value: "±1 mV resolution, data logged every 1 m",
          param2Label: "Terrain Coverage",
          param2Value: "Plains, hilly, and river-crossing terrain",
          application: "Hilly terrain pipelines, river crossing segments, mountain section CP verification",
          limits: "Requires current interruption synchronisation across all rectifier stations"
        },
        image: ""
      },
      {
        id: "tank-farm-cp",
        name: "Tank Farm CP System Commissioning & Testing",
        shortDescription: "Commissioning, testing, and optimisation of cathodic protection systems for above-ground storage tank floors and shell walls at refineries and bulk liquid terminals.",
        features: ["Tank floor current distribution testing", "Reference cell calibration", "Anode output balancing", "Interference check with adjacent tanks", "NACE RP0193 & API 651 compliant", "Commissioning report"],
        operationalEnvelope: {
          param1Label: "Tank Floor Protection Potential",
          param1Value: "-850 mV to -1,100 mV vs CSE",
          param2Label: "Tank Diameter Coverage",
          param2Value: "Up to 80 m diameter tank floor",
          application: "Refinery crude tanks, petroleum product terminals, LPG mounded storage",
          limits: "Tank must be out of service or de-sludged for effective floor current distribution"
        },
        image: ""
      },
      {
        id: "corrosion-failure-analysis",
        name: "Corrosion Failure Analysis & Metallurgical Investigation",
        shortDescription: "Forensic corrosion failure analysis of pipelines, pressure vessels, and downhole tubulars including SEM/EDS, pit profiling, and root cause determination with actionable remediation recommendations.",
        features: ["Visual & macro inspection", "SEM/EDS elemental analysis", "Pit depth & morphology profiling", "Root cause determination report", "Remediation & material upgrade recommendations", "NACE TM0169 aligned"],
        operationalEnvelope: {
          param1Label: "SEM Resolution",
          param1Value: "Up to 10 nm imaging resolution (third-party lab)",
          param2Label: "Pit Depth Measurement",
          param2Value: "±0.1 mm UT pit gauge accuracy",
          application: "Failed pipeline sections, corroded pressure vessels, downhole tubular failures",
          limits: "Physical sample or coupon retrieval required; third-party lab involvement for SEM/EDS"
        },
        image: ""
      },
      {
        id: "coating-inspection",
        name: "Coating Inspection, Repair & Anti-Corrosion Application",
        shortDescription: "Field inspection of external pipeline and structural coatings, holiday detection, surface preparation, and application of anti-corrosion coatings including FBE, coal tar enamel, and epoxy systems.",
        features: ["Holiday detection (DC & AC spark test)", "DFT measurement", "Surface prep to Sa 2.5", "FBE, CTE & epoxy coating systems", "Coating repair documentation", "ISO 21809 / NACE SP0188 compliant"],
        operationalEnvelope: {
          param1Label: "Dry Film Thickness (DFT)",
          param1Value: "400 µm – 3,000 µm (system-specific)",
          param2Label: "Holiday Detection Voltage",
          param2Value: "5 V/µm DFT (DC spark test standard)",
          application: "Buried pipelines, refinery piping, marine splash zone structures, jetty piles",
          limits: "Ambient humidity <85% required during application; minimum surface temperature +3°C above dew point"
        },
        image: ""
      },
      {
        id: "iccp-anode-bed",
        name: "Impressed Current Anode Bed Installation & Retrofits",
        shortDescription: "Design and installation of deep-well, distributed, and surface-type ICCP anode beds for new pipeline protection systems and retrofit of ageing systems with MMO or graphite anodes.",
        features: ["MMO tubular & graphite anodes", "Deep-well & distributed anode options", "Coke breeze backfill installation", "Current distribution modelling", "Full commissioning & testing", "NACE RP0169 compliant"],
        operationalEnvelope: {
          param1Label: "Anode Current Output",
          param1Value: "Up to 100 A/m² (MMO tubular)",
          param2Label: "Anode Design Life",
          param2Value: "20–25 years at design current density",
          application: "New pipeline ICCP, ageing anode bed replacement, tank farm CP upgrades",
          limits: "Soil resistivity survey mandatory; deep-well drilling rig required for deep-well configuration"
        },
        image: ""
      },
      {
        id: "subsea-anode-retrofit",
        name: "Subsea & Offshore Anode Retrofit Services",
        shortDescription: "Diver-assisted and ROV-deployed replacement of sacrificial anodes on offshore platforms, subsea pipelines, and FPSO hulls to restore cathodic protection and extend asset life.",
        features: ["Diver & ROV-deployed installation", "Aluminium, zinc & magnesium anodes", "Retrofit bracelet & flush-mount types", "Underwater potential survey pre & post", "DNV-RP-B401 compliant"],
        operationalEnvelope: {
          param1Label: "Water Depth Capability",
          param1Value: "Surface to 200 m (diver) / 3,000 m (ROV)",
          param2Label: "Seawater Temperature",
          param2Value: "4°C – 35°C (tropical to deep water)",
          application: "Offshore jacket platforms, subsea pipelines, FPSO hulls, jetty piles",
          limits: "Diving & ROV mobilisation lead time 4–8 weeks; sea state restrictions apply"
        },
        image: ""
      }
    ]
  },
  {
    id: "well-integrity",
    name: "Well Integrity & Intervention",
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
    description: "Velocity strings, fishing, bridge plugs, stimulation, P&A, and well integrity services",
    count: 10,
    services: [
      {
        id: "velocity-string-service",
        name: "Velocity String Design & Installation",
        shortDescription: "Engineering, supply, and installation of small-diameter velocity strings in liquid-loaded gas wells to eliminate liquid loading and restore production by 20–30% without a workover rig.",
        features: ["No workover rig required", "1\"–2\" OD string options", "Carbon steel & CRA grades", "ONGC Ahmedabad & Rajahmundry field-proven", "Production restoration in <48 hrs", "Full string design & engineering"],
        operationalEnvelope: {
          param1Label: "Wellhead Pressure",
          param1Value: "Up to 5,000 PSI operating pressure",
          param2Label: "Deployment Depth",
          param2Value: "Up to 3,500 m TVD",
          application: "Liquid-loaded mature gas wells, ONGC gas fields, onshore gas producing wells",
          limits: "Minimum tubing ID 2.441\"; H₂S service requires CRA string; downhole gauge preferred"
        },
        image: ""
      },
      {
        id: "well-fishing-service",
        name: "Well Fishing & Remedial Operations",
        shortDescription: "Comprehensive fishing and remedial services for retrieval of stuck pipe, dropped BHA, parted strings, and downhole junk to restore well access and production. 90%+ documented retrieval success rate.",
        features: ["Overshot, spear & junk basket tools", "Mechanical & hydraulic jar deployment", "Impression block fish ID run", "Multi-well contract execution", "ONGC & OIL India field experience"],
        operationalEnvelope: {
          param1Label: "Working Pressure",
          param1Value: "Up to 10,000 PSI wellbore pressure",
          param2Label: "Operating Temperature",
          param2Value: "-20°C to 175°C downhole",
          application: "Stuck pipe, parted tubing, dropped BHA, downhole junk retrieval",
          limits: "Fish OD and condition must be confirmed with impression block run before tool selection"
        },
        image: ""
      },
      {
        id: "bridge-plug-packer-service",
        name: "Thru-Tubing Bridge Plug & Packer Setting Service",
        shortDescription: "E-line, slickline, and CT-deployed bridge plug and packer setting service for zonal isolation, well testing, and abandonment operations without pulling production tubing.",
        features: ["E-line, slickline & CT conveyed", "ISO 14310 rated plugs", "CCL depth correlation", "Single-trip set and test", "Permanent & retrievable options", "Minimal production deferment"],
        operationalEnvelope: {
          param1Label: "Working Pressure",
          param1Value: "Up to 10,000 PSI post-set",
          param2Label: "Depth Setting Accuracy",
          param2Value: "±0.5 m via CCL correlation",
          application: "Zonal isolation, pressure testing, plug & abandonment, workover preparation",
          limits: "Tubing ID restrictions determine tool OD selection; wireline unit mobilisation required"
        },
        image: ""
      },
      {
        id: "liner-hanger-service",
        name: "Liner Hanger System Running & Cementing Service",
        shortDescription: "Engineering and field execution of mechanical and hydraulic liner hanger running, setting, and cementing operations for new well construction and re-completion projects.",
        features: ["Mechanical & hydraulic setting tools", "Stage cementing capability", "Rotating liner option", "Cement evaluation support", "Field engineering supervisor", "ISO 11960 liner specifications"],
        operationalEnvelope: {
          param1Label: "Working Pressure",
          param1Value: "Up to 10,000 PSI setting pressure",
          param2Label: "Operating Temperature",
          param2Value: "Up to 175°C BHT",
          application: "New well liner completion, re-completion, sidetrack liner, horizontal well liner",
          limits: "Requires certified completion engineer on-site; cementing unit and cement supply co-ordination"
        },
        image: ""
      },
      {
        id: "ct-cleanout-n2-service",
        name: "Coiled Tubing Well Cleanout & Nitrogen Lift",
        shortDescription: "Coiled tubing sand, scale, and wax cleanout service combined with nitrogen lift operations to restore production flow in plugged or liquid-loaded wells.",
        features: ["CT jetting & circulation cleanout", "N₂ foam lift", "Scale dissolution chemical pumping", "Sand cleanout to total depth", "Real-time surface monitoring", "ONGC & OIL India field executed"],
        operationalEnvelope: {
          param1Label: "CT Working Pressure",
          param1Value: "Up to 6,000 PSI surface injection",
          param2Label: "N₂ Lift Flow Rate",
          param2Value: "Up to 500 MSCFD nitrogen lift capacity",
          application: "Sand-plugged wells, wax-blocked flowlines, liquid-loaded gas wells requiring N₂ lift",
          limits: "CT unit and N₂ supply mobilisation required; returns management system at wellsite"
        },
        image: ""
      },
      {
        id: "well-stimulation-service",
        name: "Well Stimulation: Acidising & Matrix Treatment",
        shortDescription: "Matrix acidising and acid stimulation services for carbonate and sandstone formations to remove near-wellbore damage and restore reservoir permeability.",
        features: ["HCl, HF & organic acid systems", "Diverter & bullhead techniques", "Real-time pressure monitoring", "Pre & post-treatment injectivity test", "Spent acid disposal management", "Well candidate screening"],
        operationalEnvelope: {
          param1Label: "Injection Pressure",
          param1Value: "Below fracture pressure (matrix treatment)",
          param2Label: "Acid Volume",
          param2Value: "5–50 m³ per treatment (well-specific)",
          application: "Carbonate & sandstone formation damage removal, scale dissolution, matrix permeability restoration",
          limits: "Formation compatibility study and core/fluid sample analysis required pre-treatment"
        },
        image: ""
      },
      {
        id: "leak-detection-patch-service",
        name: "Downhole Leak Detection & Tubing Patch Service",
        shortDescription: "E-line and CT-deployed leak detection, tubing patch, and casing repair services to restore well integrity without expensive full tubing pull and replacement.",
        features: ["Wireline pressure test", "E-line leak localisation", "Inflatable patch & expandable liner", "Casing repair patch deployment", "Cost vs full workover comparison", "Minimal production loss"],
        operationalEnvelope: {
          param1Label: "Patch Working Pressure",
          param1Value: "Up to 5,000 PSI post-patch integrity",
          param2Label: "Operating Temperature",
          param2Value: "Up to 150°C downhole",
          application: "Corroded or split tubing, casing split repair, packer leak bypass, liner top repair",
          limits: "Leak location must be identified via pressure test or spinner survey before patch deployment"
        },
        image: ""
      },
      {
        id: "well-integrity-assessment-service",
        name: "Well Integrity Assessment & Barrier Verification",
        shortDescription: "Comprehensive well integrity assessment including wellhead, tubing, casing, and packer barrier verification per NORSOK D-010, identifying and remedying single and dual barrier failures.",
        features: ["NORSOK D-010 barrier matrix", "Wellhead & tubing pressure test", "Casing inspection log", "Integrity register documentation", "Remediation recommendations", "Well status risk classification"],
        operationalEnvelope: {
          param1Label: "Pressure Test Rating",
          param1Value: "To MAASP or design pressure",
          param2Label: "Well Depth Coverage",
          param2Value: "Surface to TD (all barrier elements)",
          application: "Producing, injecting, suspended, and P&A candidate wells",
          limits: "Access to full well history and schematic required; downhole log data preferred"
        },
        image: ""
      },
      {
        id: "inflatable-packer-service",
        name: "Inflatable Packer Straddle & Zonal Isolation Service",
        shortDescription: "Inflatable packer straddle deployment for targeted zonal isolation, selective injection, and leak remediation in open and cased hole environments without rig workover.",
        features: ["Single & straddle configurations", "Open-hole & cased-hole use", "High-expansion retrieval", "Leak remediation isolation", "Selective injection test", "Field-engineered for well geometry"],
        operationalEnvelope: {
          param1Label: "Seating Pressure",
          param1Value: "Up to 8,000 PSI inflation & seal",
          param2Label: "Operating Temperature",
          param2Value: "Up to 175°C",
          application: "Open-hole zonal test, cased hole leak straddle, selective injection, water shut-off",
          limits: "Inflation medium must be clean filtered fluid; retrieval torque check required pre-deployment"
        },
        image: ""
      },
      {
        id: "plug-abandonment-service",
        name: "Plug & Abandonment (P&A) Services",
        shortDescription: "Full well plug and abandonment services including barrier placement, wellbore decommissioning, and regulatory compliance in line with OISD, NORSOK D-010, and operator requirements.",
        features: ["Mechanical & cement plug placement", "Section milling for annular barriers", "Wellhead removal options", "Regulatory documentation", "P&A programme engineering", "OISD-GDN-188 compliant"],
        operationalEnvelope: {
          param1Label: "Cement Plug Integrity",
          param1Value: "Tagged and pressure-tested to MAASP",
          param2Label: "P&A Depth Coverage",
          param2Value: "Surface to reservoir (all zones isolated)",
          application: "End-of-life well decommissioning, suspended well P&A, regulatory compliance",
          limits: "Full well history and barrier design review required; rig or CT unit mobilisation needed"
        },
        image: ""
      }
    ]
  },
  {
    id: "anomaly-detection",
    name: "AI & Digital Monitoring",
    icon: Cpu,
    color: "from-indigo-500 to-indigo-600",
    description: "AI anomaly detection, IoT monitoring, computer vision safety, drone inspection, and SCADA integration",
    count: 12,
    services: [
      {
        id: "ai-corrosion-anomaly",
        name: "AI-Based Corrosion & Equipment Anomaly Detection",
        shortDescription: "Computer vision and machine learning platform for automated detection, classification, and severity mapping of corrosion, leaks, coating defects, and equipment anomalies from camera or drone feeds.",
        features: ["Real-time & batch image analysis", "≥90% detection accuracy", "Cloud-hosted alert dashboard", "Multi-asset monitoring", "Corrosion severity heatmaps", "Integration with existing CCTV or drone systems"],
        operationalEnvelope: {
          param1Label: "Detection Accuracy",
          param1Value: "≥90% precision on validated field datasets",
          param2Label: "Inference Latency",
          param2Value: "<2 seconds per frame (real-time mode)",
          application: "Refinery asset inspection, pipeline corridor monitoring, offshore platform surveillance",
          limits: "Minimum input image resolution 1080p; camera/drone access and connectivity required"
        },
        image: ""
      },
      {
        id: "iot-cp-monitoring-service",
        name: "IoT Remote Cathodic Protection Monitoring",
        shortDescription: "Continuous remote monitoring of cathodic protection pipe-to-soil potential readings across distributed pipeline networks using IoT data loggers, GSM/GPRS communication, and cloud dashboards.",
        features: ["GSM/GPRS data loggers at test posts", "Cloud-hosted monitoring dashboard", "Auto-alert on CP potential deviation", "ON/OFF potential logging", "Historical trend analysis", "Multi-pipeline portfolio view"],
        operationalEnvelope: {
          param1Label: "Measurement Accuracy",
          param1Value: "±5 mV potential measurement resolution",
          param2Label: "Data Log Interval",
          param2Value: "1 min – 24 hr (configurable per site)",
          application: "Remote CP monitoring for cross-country pipelines, tank farms, city gas networks",
          limits: "GSM signal availability at each monitoring point; SCADA integration requires IT approval"
        },
        image: ""
      },
      {
        id: "predictive-maintenance-service",
        name: "Predictive Maintenance & Digital Twin Platform",
        shortDescription: "AI-driven predictive maintenance service using digital twin simulation of wells, pipelines, and plant assets to predict failures 7–90 days ahead and cut unplanned downtime by up to 30%.",
        features: ["Digital twin modelling", "ML failure prediction engine", "SCADA & DCS data integration", "Asset health scoring", "Maintenance schedule optimisation", "Sustainability & emissions reporting"],
        operationalEnvelope: {
          param1Label: "Prediction Horizon",
          param1Value: "7–90 days advance failure warning",
          param2Label: "Model Update Frequency",
          param2Value: "Real-time streaming or daily batch",
          application: "Oil & gas facilities, pipeline networks, rotating equipment, renewable energy assets",
          limits: "Minimum 12 months historical sensor data required for model training; API access to plant SCADA"
        },
        image: ""
      },
      {
        id: "cv-hse-monitoring-service",
        name: "Computer Vision HSE & PPE Compliance Monitoring",
        shortDescription: "Real-time AI computer vision system for automatic PPE compliance monitoring, lone worker safety, fire & smoke detection, and perimeter intrusion detection at energy facilities.",
        features: ["PPE & permit compliance detection", "Lone worker distress & fall detection", "Fire & smoke hazard alerts", "Intrusion & perimeter security", "Vehicle & traffic violation monitoring", "Camera tamper alerts"],
        operationalEnvelope: {
          param1Label: "Camera Resolution",
          param1Value: "Minimum 2 MP (1080p); 4K recommended",
          param2Label: "Alert Latency",
          param2Value: "<1 second real-time detection & alert",
          application: "Refinery HSE compliance, oil field site security, renewable energy construction sites",
          limits: "Camera placement assessment and network bandwidth assessment required before deployment"
        },
        image: ""
      },
      {
        id: "drone-inspection-service",
        name: "Drone-Based Asset Inspection & Progress Monitoring",
        shortDescription: "UAV-deployed inspection and photogrammetric monitoring of pipeline ROW, refinery structures, flare stacks, and renewable energy construction sites with AI-driven anomaly detection.",
        features: ["Autonomous flight path optimisation", "Photogrammetry & 3D mapping", "AI defect detection on imagery", "Real-time progress dashboard", "DGCA-compliant operations", "Solar & wind farm compatibility"],
        operationalEnvelope: {
          param1Label: "Spatial Resolution (GSD)",
          param1Value: "Up to 1 cm/pixel at 50 m altitude",
          param2Label: "Coverage Rate",
          param2Value: "Up to 200 ha/hr per drone sortie",
          application: "Pipeline ROW monitoring, refinery flare & structure inspection, solar/wind farm survey",
          limits: "DGCA UAV operational approvals required; no-fly zones and weather windows restrict operations"
        },
        image: ""
      },
      {
        id: "pipeline-leak-detection-service",
        name: "Pipeline Leak Detection System (Acoustic & Pressure)",
        shortDescription: "Integrated acoustic emission and pressure gradient-based leak detection service for buried and above-ground pipelines, providing early warning of pinhole to catastrophic leak events.",
        features: ["Acoustic emission sensors", "Pressure wave analysis", "Real-time SCADA alert", "Leak location pinpointing ±50 m", "Flow balance monitoring", "Compatible with HDPE & steel pipelines"],
        operationalEnvelope: {
          param1Label: "Leak Detection Sensitivity",
          param1Value: "Minimum detectable leak: 0.5% of flow rate",
          param2Label: "Leak Location Accuracy",
          param2Value: "±50 m along pipeline route",
          application: "Cross-country gas & liquid pipelines, city gas distribution, refinery transfer lines",
          limits: "Sensor installation access required; background noise calibration needed for each pipeline segment"
        },
        image: ""
      },
      {
        id: "cp-data-analytics-service",
        name: "Automated CP Data Analytics & Reporting Service",
        shortDescription: "Managed analytics service that consolidates raw CP survey data, corrosion monitoring logs, and inspection records into structured dashboards, trend reports, and regulatory-ready compliance documents.",
        features: ["Multi-source data ingestion", "Automated anomaly flagging", "Pipeline GIS integration", "Regulatory compliance reports", "Year-on-year trend analysis", "Cloud or on-premise deployment"],
        operationalEnvelope: {
          param1Label: "Data Processing Volume",
          param1Value: "Up to 1 million data points per survey run",
          param2Label: "Report Turnaround",
          param2Value: "Draft report within 5 working days of survey",
          application: "Pipeline operators needing PNGRB / regulatory CP compliance reporting",
          limits: "Raw survey data must be in compatible format (CSV, Excel, or GIS shapefile)"
        },
        image: ""
      },
      {
        id: "scada-integration-service",
        name: "SCADA Integration & Remote Monitoring Setup",
        shortDescription: "Engineering and commissioning of SCADA integration for CP monitoring systems, IoT sensor networks, and field instruments to enable centralised remote control and data visibility.",
        features: ["Modbus, DNP3 & MQTT protocol support", "CP rectifier remote control", "Data historian setup", "Alarm & event management", "Cybersecurity baseline", "OT/IT network architecture design"],
        operationalEnvelope: {
          param1Label: "Communication Protocol",
          param1Value: "Modbus RTU/TCP, DNP3, MQTT, OPC-UA",
          param2Label: "Data Polling Rate",
          param2Value: "1 second – 15 minutes (configurable)",
          application: "Pipeline SCADA integration, CP remote monitoring, refinery IoT sensor networks",
          limits: "Site network infrastructure and cybersecurity review required before deployment"
        },
        image: ""
      },
      {
        id: "ppe-zone-compliance-service",
        name: "PPE Detection & Permit-to-Work Zone Compliance",
        shortDescription: "Supervisors cannot monitor every work zone simultaneously. This service detects missing PPE and permit-to-work zone violations in real time, generating alerts and evidence clips before incidents occur.",
        features: ["Helmet, vest & glove PPE detection", "Work-zone compliance checks", "Real-time supervisor alerts", "Evidence clip capture", "Daily compliance summary reports", "Rule tuning per zone"],
        operationalEnvelope: {
          param1Label: "PPE Detection Accuracy",
          param1Value: "≥90% precision across standard PPE classes",
          param2Label: "Alert Response Time",
          param2Value: "<3 seconds from violation to supervisor alert",
          application: "Maintenance areas, workshops, tank farms, shutdown activities, and process unit turnarounds",
          limits: "Camera placement must capture helmet and vest; defined work zones required; daily supervisor review recommended"
        },
        image: ""
      },
      {
        id: "lone-worker-safety-service",
        name: "Lone Worker Safety & Person-Down Response",
        shortDescription: "Workers in isolated or remote areas face delayed emergency response if incidents go undetected. This service detects lone worker presence and person-down events, triggering immediate escalation to response teams.",
        features: ["Lone worker zone presence detection", "Person-down & fall detection", "Multi-channel escalation (SMS/email/PA)", "Evidence clip logging", "Response time tracking", "Drill & test mode"],
        operationalEnvelope: {
          param1Label: "Detection Sensitivity",
          param1Value: "Person-down detected within 10 seconds of event",
          param2Label: "Camera Coverage Requirement",
          param2Value: "Minimum 1 camera per 50 m² isolated area",
          application: "Remote corridors, night shift areas, isolated utility yards, and unmanned process areas",
          limits: "No camera blind spots permitted in monitored zones; response SOPs and periodic test drills required"
        },
        image: ""
      },
      {
        id: "fire-smoke-spill-service",
        name: "Fire, Flare, Smoke & Liquid Spill Early Warning",
        shortDescription: "Conventional smoke detectors miss outdoor and open-area fire events. This service combines AI-based fire/flame, smoke, and spill detection from camera feeds to deliver earlier warnings and clearer incident evidence.",
        features: ["Fire/flame & smoke AI detection", "Liquid spill detection", "Optional thermal camera integration", "Multi-channel escalation workflow", "Event timeline & evidence logging", "Seasonal weather tuning"],
        operationalEnvelope: {
          param1Label: "Detection Range",
          param1Value: "Up to 100 m radius per camera (standard lens)",
          param2Label: "False Alarm Rate",
          param2Value: "<5% after site-specific tuning and calibration",
          application: "Tank farms, flare areas, pump rooms, manifolds, loading bays, and open process yards",
          limits: "Camera field of view must cover target zones; severe weather or dense smoke may require thermal cameras"
        },
        image: ""
      },
      {
        id: "security-intrusion-service",
        name: "Security Intrusion & Restricted Zone Protection",
        shortDescription: "Perimeter breaches and unauthorised entry into restricted zones often go undetected until after the event. This service bundles AI intrusion detection with camera tamper alerts for continuous, reliable security coverage.",
        features: ["Person & vehicle intrusion detection", "Configurable restricted zone rules", "Camera tamper & obstruction alerts", "Incident clip review & export", "Daily/weekly security reports", "Scalable multi-site deployment"],
        operationalEnvelope: {
          param1Label: "Intrusion Detection Accuracy",
          param1Value: "≥92% true positive rate after site calibration",
          param2Label: "Zone Response Latency",
          param2Value: "<2 seconds from breach to security alert",
          application: "Perimeter fencing, tank farms, substations, restricted corridors, and hazardous material storage areas",
          limits: "Zones must be clearly defined and camera-mapped; stable network required; periodic zone re-validation needed"
        },
        image: ""
      }
    ]
  },
  {
    id: "engineering-consultation",
    name: "Engineering & Consultation",
    icon: Cog,
    color: "from-blue-500 to-blue-600",
    description: "RBI, FFS, material selection, regulatory compliance, 3D scanning, and digital twin services",
    count: 11,
    services: [
      {
        id: "rbi-assessment-service",
        name: "Risk-Based Inspection (RBI) Assessment",
        shortDescription: "Structured API 581 risk-based inspection assessments for pressure vessels, pipelines, and process piping to prioritise inspection schedules, reduce unplanned downtime by 40%, and optimise maintenance budgets.",
        features: ["API 581 / API RP 580 methodology", "Probability & consequence of failure matrix", "NDT programme development", "Fitness-for-service (FFS) evaluation", "Written inspection strategy", "OIMS aligned deliverables"],
        operationalEnvelope: {
          param1Label: "Asset Coverage",
          param1Value: "Full plant or pipeline segment scope",
          param2Label: "Report Turnaround",
          param2Value: "4–8 weeks from data receipt to RBI report",
          application: "Refineries, gas processing plants, petrochemical units, cross-country pipelines",
          limits: "Plant P&IDs, inspection history, process data, and material specs required as inputs"
        },
        image: ""
      },
      {
        id: "material-selection-service",
        name: "Material Selection & Corrosion Engineering Advisory",
        shortDescription: "Expert corrosion engineering consulting for material selection, alloy specification, failure analysis, and corrosion control strategy development for new and existing oil & gas infrastructure.",
        features: ["Failure root cause investigation", "Material upgrade recommendations", "Corrosion inhibitor screening", "ISO 15156 / NACE MR0175 compliance review", "Technical report with cost-benefit analysis"],
        operationalEnvelope: {
          param1Label: "Scope Coverage",
          param1Value: "Single failure to full asset portfolio",
          param2Label: "Deliverable Turnaround",
          param2Value: "2–4 weeks for standard failure analysis",
          application: "New asset material specification, pipeline upgrade, downhole tubular failure investigations",
          limits: "Physical sample or coupon retrieval required for metallurgical analysis; lab access needed"
        },
        image: ""
      },
      {
        id: "well-construction-advisory-service",
        name: "Well Construction & Drilling Fluids Technical Advisory",
        shortDescription: "Technical advisory for well construction programs including drilling fluid selection, liner hanger design, HPHT wellbore stability, and casing programme optimisation.",
        features: ["Liner hanger programme design", "HPHT fluid & stabiliser selection", "Drilling chemicals specification", "Well integrity sign-off", "Field engineering supervisor", "Lessons-learned documentation"],
        operationalEnvelope: {
          param1Label: "Working Pressure",
          param1Value: "Up to 15,000 PSI HPHT design capability",
          param2Label: "Operating Temperature",
          param2Value: "Up to 200°C BHST (HPHT wells)",
          application: "Onshore & offshore well construction, HPHT re-entry, sidetrack well programmes",
          limits: "Access to well data, formation evaluation reports, and existing BHA configurations required"
        },
        image: ""
      },
      {
        id: "cp-system-audit-service",
        name: "CP System Audit & Performance Review",
        shortDescription: "Independent audit and performance review of existing cathodic protection systems against NACE, ISO, and PNGRB standards, delivering a gap analysis and prioritised improvement roadmap.",
        features: ["NACE SP0169 / ISO 15589 audit checklist", "Rectifier output vs design review", "Survey data analysis", "Anode life expectancy calculation", "Gap report with CAPEX/OPEX recommendations"],
        operationalEnvelope: {
          param1Label: "Audit Scope",
          param1Value: "Single CP system to full pipeline network",
          param2Label: "Report Turnaround",
          param2Value: "3–5 weeks from site audit to final report",
          application: "Existing pipeline CP systems, tank farm CP, PNGRB regulatory compliance audits",
          limits: "Access to existing CP records, TRU logs, survey data, and as-built drawings required"
        },
        image: ""
      },
      {
        id: "fitness-for-service",
        name: "Fitness for Service (FFS) & Remaining Life Assessment",
        shortDescription: "API 579-1 / ASME FFS-1 fitness-for-service assessments for corroded or damaged pipelines, pressure vessels, and process equipment to determine safe operating limits and remaining useful life.",
        features: ["API 579-1 Level 1, 2 & 3 assessments", "UT thickness data integration", "Corrosion rate analysis", "Remaining useful life calculation", "MAWPr determination", "Written FFS report"],
        operationalEnvelope: {
          param1Label: "Design Pressure Coverage",
          param1Value: "Up to MAWP or original design pressure",
          param2Label: "Inspection Data Required",
          param2Value: "UT grid minimum 1 reading per 25 cm²",
          application: "Corroded pipelines, pitted pressure vessels, thinned refinery piping, ageing infrastructure",
          limits: "Adequate UT inspection data mandatory; Level 3 FFS requires specialist FEA software"
        },
        image: ""
      },
      {
        id: "oisd-pngrb-compliance-service",
        name: "OISD / PNGRB Regulatory Compliance Consulting",
        shortDescription: "Technical consulting to help oil & gas operators achieve and maintain compliance with OISD standards, PNGRB pipeline regulations, and statutory inspection requirements.",
        features: ["OISD 141, 144, 189 gap analysis", "PNGRB pipeline integrity regulations", "Compliance documentation", "Statutory inspection scheduling", "Liaison support with regulatory bodies", "Training for operator teams"],
        operationalEnvelope: {
          param1Label: "Regulatory Frameworks",
          param1Value: "OISD, PNGRB, PESO, BIS standards",
          param2Label: "Compliance Report Delivery",
          param2Value: "4–6 weeks for full gap analysis report",
          application: "CGD networks, cross-country pipelines, refinery operators, LPG storage facilities",
          limits: "Current operating licences, inspection records, and P&IDs must be made available"
        },
        image: ""
      },
      {
        id: "reality-capture-3d-service",
        name: "Reality Capture & 3D As-Built Documentation",
        shortDescription: "Outdated or missing as-built drawings create errors and delays in engineering and maintenance. This service captures accurate 3D scans of plants and assets to produce reliable, survey-grade as-built records.",
        features: ["On-site terrestrial 3D laser scanning", "Scan registration & quality validation", "As-built drawing extraction", "Point cloud delivery (RCP/E57/LAS)", "Equipment tagging & asset mapping"],
        operationalEnvelope: {
          param1Label: "Scan Accuracy",
          param1Value: "±2 mm point cloud accuracy (survey grade)",
          param2Label: "Area Coverage Rate",
          param2Value: "Up to 5,000 m² per day (open plant)",
          application: "Process units, tank farms, substations, pipe racks, warehouses, and offshore module skids",
          limits: "Safe line-of-sight access to all assets required; congested areas need additional scan positions"
        },
        image: ""
      },
      {
        id: "scan-to-model-service",
        name: "Scan-to-Model Digital Twin Creation",
        shortDescription: "Raw point clouds alone are not usable by most engineering teams. This service converts 3D scan data into structured, tagged 3D models at an agreed level of detail for design, engineering, and documentation.",
        features: ["Point cloud to 3D model conversion", "Equipment & pipe tagging", "LOD 200–350 delivery", "CAD/BIM-compatible formats (Navisworks, Revit, AutoCAD)", "Review cycles with engineering team", "Handover package"],
        operationalEnvelope: {
          param1Label: "Model Accuracy vs Reality",
          param1Value: "±5 mm model-to-scan deviation at LOD 300",
          param2Label: "Deliverable Turnaround",
          param2Value: "3–6 weeks from scan to model handover",
          application: "Engineering teams undertaking modifications, upgrades, expansions, or new construction in brownfield facilities",
          limits: "Model detail level dependent on drawings available; complex congested areas may require additional site visits"
        },
        image: ""
      },
      {
        id: "brownfield-retrofit-service",
        name: "Brownfield Retrofit Strategy & Clash Detection",
        shortDescription: "Retrofit projects in congested plants suffer expensive rework when new designs clash with existing infrastructure. This service uses 3D scan data to support retrofit design coordination and eliminate on-site clashes before installation.",
        features: ["Existing-condition baseline scans", "Measurement extracts for design", "Design vs. scan clash detection", "Coordination sessions with EPC team", "Deliverables in Navisworks/Revit/AutoCAD", "Change control support"],
        operationalEnvelope: {
          param1Label: "Clash Detection Tolerance",
          param1Value: "Detects clashes ≥10 mm in 3D model space",
          param2Label: "Coordination Cycle Time",
          param2Value: "Clash report within 5 working days of scan",
          application: "Retrofit and re-piping projects in congested process units, pipe racks, compressor halls, and equipment rooms",
          limits: "Coordination with design team tools and agreed deliverable formats required; re-scans needed after major site changes"
        },
        image: ""
      },
      {
        id: "periodic-digital-twin-service",
        name: "Periodic Digital Twin Update & Change Monitoring",
        shortDescription: "Plant configurations change over time, making static 3D models obsolete. This service re-scans critical areas on a scheduled basis and compares changes against the baseline to maintain a living, accurate digital facility record.",
        features: ["Scheduled repeat laser scan visits", "Baseline-to-current change comparison", "Updated point cloud & model delivery", "Change detection report", "Archive & version management", "Consistent reference point network"],
        operationalEnvelope: {
          param1Label: "Change Detection Accuracy",
          param1Value: "Detects physical changes ≥25 mm from baseline",
          param2Label: "Update Schedule",
          param2Value: "Quarterly, bi-annual, or annual (as-contracted)",
          application: "High-change areas including loading bays, tank farms, maintenance zones, and active construction fronts",
          limits: "Fixed scanning schedule and consistent reference point network required; major access restrictions can delay updates"
        },
        image: ""
      },
      {
        id: "shutdown-turnaround-service",
        name: "Shutdown & Turnaround 3D Baseline Capture",
        shortDescription: "Without accurate pre-shutdown baselines, teams cannot efficiently structure work packages or verify post-work conditions. This service provides pre- and post-turnaround 3D scans to support scheduling and final as-built handover.",
        features: ["Pre-shutdown condition scan", "Post-work as-built scan", "Measurement support during execution", "Work-package structuring deliverables", "As-built handover pack", "Area-phased scanning to fit work windows"],
        operationalEnvelope: {
          param1Label: "Scan-to-Handover Time",
          param1Value: "Pre-shutdown scan report within 3 working days",
          param2Label: "Positional Accuracy",
          param2Value: "±3 mm scan accuracy for dimensional verification",
          application: "Shutdown and turnaround projects in refineries, gas plants, petrochemical facilities, and process units",
          limits: "Access windows during shutdown must be co-ordinated in advance; large areas require phased scanning coordination"
        },
        image: ""
      }
    ]
  },
  {
    id: "security-access-control",
    name: "Security & Access Control",
    icon: Lock,
    color: "from-slate-500 to-slate-600",
    description: "Muster point accountability, workforce attendance, vehicle compliance, and control room monitoring",
    count: 5,
    services: [
      {
        id: "muster-accountability-service",
        name: "Muster Point Accountability & Missing Personnel Detection",
        shortDescription: "During drills or live incidents, manual muster checks are slow and error-prone. This service uses crowd counting and face recognition to instantly confirm who has reached the muster point and who is still missing.",
        features: ["Crowd counting & face recognition", "Real-time muster reconciliation", "Missing-person alert list", "Last-seen camera view", "Post-drill audit reports", "Control room dashboard integration"],
        operationalEnvelope: {
          param1Label: "Face Recognition Accuracy",
          param1Value: "≥95% under adequate lighting conditions",
          param2Label: "Alert Latency",
          param2Value: "<5 seconds from camera feed to muster report",
          application: "Muster points, evacuation routes, and assembly areas in refineries, terminals, and depots",
          limits: "Requires face database enrolment; camera coverage on all muster routes; lighting ≥200 lux at key cameras"
        },
        image: ""
      },
      {
        id: "workforce-attendance-service",
        name: "Workforce Attendance, Visitor & Gate Governance",
        shortDescription: "Manual attendance and visitor logs create gaps in access control and audit trails. This service automates attendance, contractor tracking, and gate governance using face recognition and visitor analytics.",
        features: ["Face recognition attendance automation", "Visitor & contractor tracking", "Access monitoring & access-log audit trail", "Shift summary reports", "VMS/HRMS integration ready"],
        operationalEnvelope: {
          param1Label: "Identification Accuracy",
          param1Value: "≥97% face match at entry cameras",
          param2Label: "Processing Speed",
          param2Value: "<2 seconds per person at gate",
          application: "Main gates, control rooms, offices, and restricted entry points in refineries, terminals, and depots",
          limits: "Clear entry camera views required; visitor registration workflow and consent/privacy policy must be in place"
        },
        image: ""
      },
      {
        id: "vehicle-compliance-service",
        name: "Vehicle Compliance Monitoring",
        shortDescription: "Uncontrolled vehicle movement inside terminals and depots creates collision and compliance risks. This service monitors entry/exit, detects overspeed, wrong-way driving, and parking violations for safer internal transport.",
        features: ["Gate entry/exit logging", "Overspeed & wrong-way detection", "Parking violation alerts", "Yard movement dashboard", "Optional weighbridge/dispatch integration", "Lane-wise calibration"],
        operationalEnvelope: {
          param1Label: "Speed Detection Accuracy",
          param1Value: "±2 km/hr at configured speed thresholds",
          param2Label: "Processing Latency",
          param2Value: "<2 seconds from event to yard dashboard alert",
          application: "Dispatch yards, loading gantries, weighbridge approaches, and internal roads in terminals and depots",
          limits: "Lane-wise cameras and speed calibration required; camera angle and clear road markings critical for accuracy"
        },
        image: ""
      },
      {
        id: "delivery-verification-service",
        name: "Authorised Delivery & Dispatch Verification",
        shortDescription: "Unverified deliveries and incorrect bay assignments create operational and security risks. This service uses vehicle monitoring and bay-level checks to confirm the right vehicle is at the right bay at the right time.",
        features: ["Vehicle identification at gate & bay", "Delivery list matching & verification", "Entry/exit timestamped logs", "Evidence clip archive", "Daily dispatch summary reports", "Dispatch system integration ready"],
        operationalEnvelope: {
          param1Label: "Vehicle Match Accuracy",
          param1Value: "≥95% vehicle ID match from gate camera",
          param2Label: "Verification Speed",
          param2Value: "<3 seconds gate-to-bay confirmation",
          application: "Loading bays, weighbridge approaches, and dispatch gates in petroleum terminals, depots, and refineries",
          limits: "Consistent camera angles at gate and bay required; dispatch list sync must be maintained daily"
        },
        image: ""
      },
      {
        id: "control-room-monitoring-service",
        name: "Centralised Control Room Video Monitoring & Alarm Management",
        shortDescription: "Fragmented camera systems and unmanaged alarm floods reduce situational awareness. This service creates a unified control room dashboard for alarm management, camera health monitoring, and multi-zone incident review.",
        features: ["Unified multi-site video dashboard", "Prioritised alarm management", "Evidence clip review & export", "Camera health & uptime monitoring", "Configurable user roles & access", "Video wall & operator console ready"],
        operationalEnvelope: {
          param1Label: "Camera Integration Capacity",
          param1Value: "Up to 500 camera streams per dashboard instance",
          param2Label: "System Uptime",
          param2Value: "≥99.5% availability with UPS and redundancy",
          application: "Control rooms and security operations centres managing refineries, pipelines, terminals, or multi-site portfolios",
          limits: "Integration with existing VMS/camera systems required; staff training and defined alert-handling SOPs essential"
        },
        image: ""
      }
    ]
  }
];

// Apply images to services
serviceCategories.forEach(category => {
  category.services.forEach(service => {
    const img = serviceImages[service.id];
    if (img) {
      service.image = img;
    }
  });
});
