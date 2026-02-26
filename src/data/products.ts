import { Wrench, Shield, Monitor, Cpu, Package, ScanLine } from "lucide-react";

export interface ProductData {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  operationalEnvelope: {
    pressure?: string;
    temperature?: string;
    application?: string;
    limits?: string;
  };
  image: string;
  images?: string[];
  inStock: boolean;
}

export interface CategoryData {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  count: number;
  products: ProductData[];
}

export const categories: CategoryData[] = [
  {
    id: "thru-tubing-tools",
    name: "Thru-Tubing Tools",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    description: "Retrievable and deployable tools for thru-tubing operations without workover",
    count: 5,
    products: [
      {
        id: "retrievable-bridge-plug",
        name: "Retrievable Bridge Plug",
        description: "High-expansion retrievable bridge plug for temporary zonal isolation in oil & gas wells. ISO-certified with field-proven performance across ONGC, IOCL and independent operator wells.",
        price: "Request Technical Evaluation",
        features: ["Slim OD design for thru-tubing deployment", "High expansion ratio", "ISO 14310 certified", "Single-trip set and release", "Rated to 10,000 PSI"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "-20°C to 150°C",
          application: "Temporary zonal isolation, well testing, pressure containment",
          limits: "H₂S/CO₂ environments require CRA material upgrade"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "inflatable-packer-straddle",
        name: "Inflatable Packer & Straddle System",
        description: "Inflatable packer solutions for zonal isolation and leak remediation, deployable thru-tubing without workover. Proven in ONGC and Oil India operations.",
        price: "Request Technical Evaluation",
        features: ["Hydraulic inflation", "High-pressure sealing", "Retrievable or permanent", "Single or dual straddle", "API compliant"],
        operationalEnvelope: {
          pressure: "Up to 8,000 PSI",
          temperature: "-10°C to 175°C",
          application: "Zonal isolation, leak remediation, well stimulation isolation",
          limits: "Inflation medium must be clean filtered fluid"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "velocity-string-assembly",
        name: "Velocity String Assembly",
        description: "Small-diameter tubing string run thru existing production tubing to eliminate liquid loading and restore gas well production. Requires no workover rig.",
        price: "Request Technical Evaluation",
        features: ["1\" to 2\" OD range", "Carbon steel & CRA grades", "Proven uplift 20–30%", "No rig required", "Field-tested in ONGC Ahmedabad & Rajahmundry"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI wellhead",
          temperature: "Up to 3,500 m TVD",
          application: "Liquid unloading, gas well deliquification, mature field production boost",
          limits: "Minimum tubing ID 2.441\"; H₂S service requires CRA string"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "thru-tubing-whipstock",
        name: "Thru-Tubing Whipstock Assembly",
        description: "Single-trip retrievable whipstock system for sidetrack drilling through existing tubing, bypassing downhole obstructions or accessing new reservoir intervals.",
        price: "Request Technical Evaluation",
        features: ["Single-trip retrievable", "Hard-face deflector ramp", "Compatible with standard BHA", "Cased & open-hole versions", "Orientation by gyro or magnetic survey"],
        operationalEnvelope: {
          pressure: "Up to 7,500 PSI",
          temperature: "-20°C to 150°C",
          application: "Sidetrack drilling, re-entry milling, lateral well construction",
          limits: "Requires adequate casing weight; BHA compatibility check mandatory"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "downhole-sand-screen",
        name: "Downhole Sand Screen (Wire-Wrap & Mesh)",
        description: "Wire-wrapped and premium woven mesh sand screens for sand control in unconsolidated formations. Proven in OIL India 2⅜\" applications.",
        price: "Request Technical Evaluation",
        features: ["Wire-wrap & premium mesh options", "2⅜\" to 5½\" OD range", "CRA alloy available", "Gravel-pack compatible", "API 19SS compliant"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI differential",
          temperature: "100 – 500 micron (custom)",
          application: "Sand control in oil/gas wells, gravel pack completions, water injection wells",
          limits: "Screen sizing requires formation particle size analysis (PSD)"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "downhole-completion",
    name: "Downhole Completion Tools",
    icon: Wrench,
    color: "from-indigo-500 to-indigo-600",
    description: "Liner hangers, packers, float equipment, and centralizers for well completion",
    count: 5,
    products: [
      {
        id: "liner-hanger-system",
        name: "Liner Hanger System (Mechanical & Hydraulic)",
        description: "Precision liner hanger systems for cementing and zonal isolation. Advanced liner hanger systems improve cement placement accuracy by up to 25%.",
        price: "Request Technical Evaluation",
        features: ["Mechanical & hydraulic setting", "Cementing head included", "Rotating liner option", "ISO 11960 compatible", "Retrievable setting tool"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "-20°C to 175°C",
          application: "Liner drilling, well completion, sidetrack liner placement",
          limits: "Configuration dependent on casing size and well deviation"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "permanent-retrievable-packers",
        name: "Permanent & Retrievable Packers",
        description: "High-performance production and workover packers for single and dual completions. V0 and H₂S-rated options available for challenging well environments.",
        price: "Request Technical Evaluation",
        features: ["V0 gas-tight seal", "H₂S & CO₂ rated", "Straight-pull or J-latch release", "API 11D1 compliant", "Multiple slip types"],
        operationalEnvelope: {
          pressure: "Up to 15,000 PSI",
          temperature: "-20°C to 175°C",
          application: "Production isolation, ESP completion, gas lift, stimulation squeeze",
          limits: "Elastomer selection dependent on fluid type and temperature"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "float-shoe-collar-guide",
        name: "Float Shoe, Float Collar & Guide Shoe",
        description: "Casing float equipment for efficient casing running and cementing. PDC and ball-drop drillout options available for all casing sizes.",
        price: "Request Technical Evaluation",
        features: ["PDC & ball-drop drillout", "Aluminium & composite insert", "High flow-through ports", "API 10D rated", "Compatible with all major casing ODs"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI float",
          temperature: "Up to 150°C",
          application: "Casing cementing in vertical, directional and horizontal wells",
          limits: "Flow rate limited by port ID; drillout torque to be confirmed"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "casing-centralizers",
        name: "Casing Centralizers & Spiralizers",
        description: "Bow-spring and rigid blade centralizers for optimal casing standoff ensuring superior cement bond and zonal isolation quality.",
        price: "Request Technical Evaluation",
        features: ["Bow-spring & rigid types", "Spiral blade design", "Positive standoff in deviated wells", "API 10D compliant", "Custom OD/ID sizing"],
        operationalEnvelope: {
          pressure: "50 – 2,000 lbf (configurable)",
          temperature: "Up to 175°C",
          application: "Directional and horizontal well casing cementing",
          limits: "Sized to casing OD and open-hole ID; running force to be calculated"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "swellable-packer-systems",
        name: "Swellable Packer Systems",
        description: "Oil-swell and water-swell elastomeric packer systems for open-hole zonal isolation in unconventional wells without mechanical intervention.",
        price: "Request Technical Evaluation",
        features: ["Oil-swell & water-swell variants", "Passive activation – no mechanical setting", "Openhole & cased-hole versions", "Sustained seal integrity"],
        operationalEnvelope: {
          pressure: "Up to 200% radial expansion",
          temperature: "Up to 150°C",
          application: "Open-hole zonal isolation, shale gas, coal-bed methane, horizontal completions",
          limits: "Activation time dependent on formation fluid and temperature"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "well-intervention",
    name: "Well Intervention Tools",
    icon: Wrench,
    color: "from-emerald-500 to-emerald-600",
    description: "Fishing tools, CT motors, bridge plug deployment, chemical injection, and wireline tools",
    count: 5,
    products: [
      {
        id: "fishing-tool-suite",
        name: "Fishing Tool Suite (Overshots, Spears & Junk Baskets)",
        description: "Complete fishing tool portfolio for retrieval of stuck pipe, dropped tools and downhole debris. Field-proven 90%+ retrieval success rate.",
        price: "Request Technical Evaluation",
        features: ["Grapple & bowl overshots", "Internal spears", "Junk baskets & magnets", "Multi-size range", "Rotational release options"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "-20°C to 175°C",
          application: "Stuck pipe retrieval, dropped BHA, downhole debris removal",
          limits: "Fish OD and condition must be confirmed before tool selection"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "ct-downhole-motor",
        name: "Coiled Tubing Downhole Motor & Milling BHA",
        description: "Positive displacement motor (PDM) and milling BHA for CT-deployed scale, cement and gate valve milling operations.",
        price: "Request Technical Evaluation",
        features: ["High-torque PDM", "Tungsten carbide mill inserts", "Vibration dampener", "CT-compatible OD", "Compatible with N₂ and coiled tubing fluids"],
        operationalEnvelope: {
          pressure: "Up to 7,500 PSI",
          temperature: "Up to 150 HP (configurable)",
          application: "Scale/cement milling, gate valve milling, perforation cleanouts",
          limits: "OD matched to CT string and tubing ID; RPM constrained by CT torque"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "bridge-plug-deployment",
        name: "Bridge Plug Deployment (Wireline & E-line)",
        description: "E-line and slickline bridge plug setting service for permanent and retrievable zonal isolation without a workover rig.",
        price: "Request Technical Evaluation",
        features: ["E-line & slickline conveyed", "Setting tool integrated", "Depth control via CCL", "Fast single-trip operation", "ISO 14310 rated plugs"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "±0.5 m via CCL correlation",
          application: "Temporary & permanent zonal isolation, workover, plug & abandonment",
          limits: "Requires wireline unit and CCL log for accurate depth placement"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "chemical-injection-tools",
        name: "Production Enhancement Chemical Injection Tools",
        description: "Downhole chemical injection mandrels and check valves for continuous corrosion inhibitor, scale inhibitor and paraffin dispersant injection.",
        price: "Request Technical Evaluation",
        features: ["Side-pocket mandrel & capillary options", "Positive check valve", "CRA wetted parts", "Surface chemical injection pump compatible"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI",
          temperature: "Up to 130°C",
          application: "Corrosion/scale inhibitor injection, paraffin control, hydrate prevention",
          limits: "Chemical compatibility with elastomers must be confirmed"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "wireline-jar-accelerator",
        name: "Wireline Jar & Accelerator",
        description: "Mechanical and hydraulic jars and accelerators for delivering high-impact jarring force to release stuck wireline tools and BHAs.",
        price: "Request Technical Evaluation",
        features: ["Mechanical & hydraulic action", "Bidirectional jarring", "High-impact energy release", "Slim OD for thru-tubing", "Multiple size range"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "Up to 50,000 lbf (configurable)",
          application: "Stuck tool retrieval, BHA release, junk shot assistance",
          limits: "Tubing ID must accommodate tool OD; jarring force limited by string integrity"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "ct-tools",
    name: "Downhole Coil Tubing Tools",
    icon: Wrench,
    color: "from-teal-500 to-teal-600",
    description: "Capillary strings, jetting assemblies, and BHA connectors for coiled tubing operations",
    count: 3,
    products: [
      {
        id: "capillary-string-system",
        name: "Capillary String & Chemical Injection System",
        description: "Small-bore capillary tubing deployed inside production string for continuous chemical injection to prevent corrosion, scale and hydrates.",
        price: "Request Technical Evaluation",
        features: ["1/4\" to 1/2\" OD capillary", "316 SS & Inconel options", "Continuous or batch injection", "Surface reel deployment", "NACE MR0175 compliant"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI",
          temperature: "Up to 3,000 m (surface-deployed)",
          application: "Corrosion inhibitor, scale inhibitor, methanol injection for hydrate prevention",
          limits: "Chemical compatibility check required; flow rate constrained by capillary ID"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "ct-cleanout-jetting",
        name: "CT Cleanout Tool & Jetting Assembly",
        description: "High-flow coiled tubing jetting assembly for sand, wax and scale cleanouts in production and injection wells.",
        price: "Request Technical Evaluation",
        features: ["Multi-port jetting nozzles", "Rotating or fixed head", "High-impact fluid velocity", "Compatible with N₂ foam", "Debris sub included"],
        operationalEnvelope: {
          pressure: "Up to 6,000 PSI",
          temperature: "0.5 – 4.0 BPM",
          application: "Sand cleanout, wax removal, scale dissolution, kill fluid circulation",
          limits: "Fluid returns management system required at surface"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "ct-bha-connector-kit",
        name: "Coiled Tubing BHA Connector & Check Valve Kit",
        description: "Full set of CT BHA connectors, check valves, knuckle joints and disconnect tools for safe and reliable coiled tubing operations.",
        price: "Request Technical Evaluation",
        features: ["Quick-connect design", "Check valve integrated", "Safety shear sub", "Mechanical disconnect", "Compatible with 1\" to 2⅜\" CT string"],
        operationalEnvelope: {
          pressure: "Up to 10,000 PSI",
          temperature: "Up to 150°C",
          application: "CT nitrogen lift, stimulation, well cleanout, thru-tubing logging",
          limits: "OD selection matched to CT string and tubing ID"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "fishing-milling",
    name: "Fishing & Milling Tools",
    icon: Wrench,
    color: "from-red-500 to-red-600",
    description: "Taper mills, section mills, and impression blocks for fishing and milling operations",
    count: 2,
    products: [
      {
        id: "taper-section-mill",
        name: "Taper Mill & Section Mill",
        description: "Hydraulically-actuated taper and section mills for casing window milling and section removal in plug & abandonment operations.",
        price: "Request Technical Evaluation",
        features: ["Hydraulic actuation", "Replaceable TC-insert blades", "Single-trip window cut", "Cement milling capable", "Custom OD sizing"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI",
          temperature: "0.5 – 3 m/hr (formation dependent)",
          application: "Casing milling, section milling, plug & abandonment, window cut for sidetrack",
          limits: "Adequate WOB and RPM required; mill OD sized to casing ID"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "impression-block-gauge",
        name: "Impression Block & Gauge Ring Set",
        description: "Lead impression blocks and casing gauge rings to identify shape and condition of downhole fish before committing to fishing tool selection.",
        price: "Request Technical Evaluation",
        features: ["Lead-faced impression block", "Multiple OD sizes", "Positive fish profile identification", "Re-usable gauge ring set"],
        operationalEnvelope: {
          pressure: "Up to 5,000 PSI",
          temperature: "±2 mm fish profile resolution",
          application: "Fish identification, casing restriction gauging, pre-fishing diagnostic run",
          limits: "Single use for impression block; requires slow WOB landing for clear impression"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "corrosion-prevention",
    name: "Corrosion Prevention Products",
    icon: Shield,
    color: "from-amber-500 to-amber-600",
    description: "Anodes, rectifiers, reference electrodes, inhibitors, coatings, and CP accessories",
    count: 8,
    products: [
      {
        id: "mmo-anodes",
        name: "MMO Tubular & Canistered Anodes",
        description: "Mixed metal oxide (MMO) coated titanium anodes for impressed current cathodic protection of pipelines, tank floors and offshore structures.",
        price: "Request Technical Evaluation",
        features: ["High current output", "20+ year design life", "Low consumption rate", "Flexible tubular & canistered formats", "DNV-certified"],
        operationalEnvelope: {
          pressure: "Up to 100 A/m² (tubular)",
          temperature: "-20°C to 60°C (soil/immersed)",
          application: "Pipeline ICCP anode beds, tank floor CP, offshore ICCP retrofits",
          limits: "Anode sizing requires soil resistivity and current demand calculations"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "sacrificial-anodes",
        name: "Zinc & Magnesium Sacrificial Anodes",
        description: "High-purity zinc and magnesium sacrificial anodes pre-packaged with activated backfill for buried pipeline and storage tank cathodic protection.",
        price: "Request Technical Evaluation",
        features: ["Zinc & Mg alloy options", "Pre-packaged with backfill", "NACE SP0169 compliant", "Multiple form factors"],
        operationalEnvelope: {
          pressure: "780 A·hr/kg (Zn) | 1,100 A·hr/kg (Mg)",
          temperature: "-20°C to 50°C (buried/immersed)",
          application: "Underground pipeline SACP, water tank protection, LPG plant piping",
          limits: "Current output inversely proportional to soil/electrolyte resistivity"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "transformer-rectifier",
        name: "Transformer Rectifier Unit (ICCP Rectifier)",
        description: "Industrial-grade transformer rectifier units for impressed current cathodic protection of pipelines, tank farms and concrete structures.",
        price: "Request Technical Evaluation",
        features: ["Auto-potential & manual modes", "SCADA/remote monitoring ready", "FLP & weatherproof enclosures", "5A to 100A output range", "3-phase & single-phase input"],
        operationalEnvelope: {
          pressure: "5 A – 100 A DC (configurable)",
          temperature: "0 – 50 V DC (adjustable)",
          application: "ICCP power supply for cross-country pipelines, tank farms, concrete jetties",
          limits: "Mains AC power supply required (or solar for remote sites)"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "reference-electrodes",
        name: "Permanent Reference Electrodes & Test Posts",
        description: "Long-life Cu/CuSO₄ and zinc reference electrodes with test posts for continuous CP potential monitoring at pipeline stations.",
        price: "Request Technical Evaluation",
        features: ["Cu/CuSO₄ & Zn types", "20+ year design life", "Hermetically sealed", "UPVC test post with tamper-proof cap", "Pre-wired terminal block"],
        operationalEnvelope: {
          pressure: "±5 mV vs. CSE",
          temperature: "-20°C to 70°C (buried)",
          application: "CP monitoring stations, ON/OFF PSP surveys, buried pipeline networks",
          limits: "Stable soil contact essential; regular electrolyte replenishment for Cu/CuSO₄"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "ac-decoupler",
        name: "AC Decoupler / Solid-State Polarisation Cell",
        description: "Solid-state polarisation cells and AC/DC decouplers for stray current and AC interference mitigation on buried pipelines near HV power lines.",
        price: "Request Technical Evaluation",
        features: ["ATEX/FLP-rated versions", "Bi-directional", "Zero maintenance", "Blocking voltage up to 5 V DC", "AC pass-through up to 1,000 A fault current"],
        operationalEnvelope: {
          pressure: "Up to 5 V DC blocking",
          temperature: "Up to 1,000 A (1-sec surge)",
          application: "AC interference mitigation on pipelines near HV lines or electrified rail",
          limits: "Fault current rating must exceed site-specific short-circuit analysis"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "junction-boxes",
        name: "Anode Junction Box & Cathode Junction Box (FLP)",
        description: "Flameproof anode and cathode junction boxes for current distribution in ICCP systems installed in Zone 1 and Zone 2 hazardous areas.",
        price: "Request Technical Evaluation",
        features: ["ATEX Zone 1 & 2 certified", "SS316 & GI enclosures", "Tamper-proof design", "Multi-circuit terminal blocks", "IP66 rating"],
        operationalEnvelope: {
          pressure: "Up to 10 anode circuits per box",
          temperature: "-20°C to 60°C ambient",
          application: "ICCP current distribution in refineries, tank farms, hazardous area pipelines",
          limits: "Rated for specific ATEX zone classification; cable gland sizing required"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "corrosion-inhibitor-chemicals",
        name: "Corrosion Inhibitor Chemicals (Film-Forming)",
        description: "Liquid and solid film-forming corrosion inhibitors for internal pipeline and wellbore protection against CO₂, H₂S and chloride corrosion. Reduces corrosion rates by up to 70%.",
        price: "Request Technical Evaluation",
        features: ["Film-forming inhibitor", "Scale & paraffin control", "Batch & continuous dosing", "HPHT rated", "NACE MR0175 compliant", "Biodegradable options"],
        operationalEnvelope: {
          pressure: "50 – 500 ppm (application-specific)",
          temperature: "-10°C to 150°C",
          application: "Oil & gas flowlines, water injection systems, gas gathering pipelines",
          limits: "Fluid compatibility testing and inhibitor screening required per system"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "anti-corrosion-coating",
        name: "Anti-Corrosion Coating System (Pipeline & Structural)",
        description: "High-performance fusion bonded epoxy (FBE) and 3-layer polyethylene coating systems for external pipeline corrosion protection in buried and splash zone environments.",
        price: "Request Technical Evaluation",
        features: ["FBE, 3LPE & 3LPP options", "Holiday detection included", "DFT up to 3 mm", "Marine splash zone rated", "ISO 21809 compliant"],
        operationalEnvelope: {
          pressure: "400 µm – 3,000 µm (system-specific)",
          temperature: "-40°C to 110°C (FBE) / 140°C (3LPP)",
          application: "Buried cross-country pipelines, marine splash zone structures, offshore risers",
          limits: "Surface preparation to Sa 2.5 mandatory; application in controlled conditions"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "well-construction",
    name: "Well Construction Materials",
    icon: Package,
    color: "from-stone-500 to-stone-600",
    description: "Drilling fluid additives and shale stabilizers for HPHT well construction",
    count: 1,
    products: [
      {
        id: "drilling-fluid-additives",
        name: "Drilling Fluid Additives & Shale Stabilizers",
        description: "Specialty drilling fluid loss additives, shale inhibitors and oil-based mud additives for HPHT well construction and wellbore stability in complex formations.",
        price: "Request Technical Evaluation",
        features: ["Fluid loss additives", "Shale stabilizers", "Oil-based mud additives", "Loss circulation materials (LCM)", "HPHT certified", "ONGC & OIL field-tested"],
        operationalEnvelope: {
          pressure: "2 – 10 ppb (product-specific)",
          temperature: "Up to 200°C BHST",
          application: "HPHT well drilling, shale formations, deepwater and directional drilling",
          limits: "Formulation selection requires mud engineer review and rig lab testing"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "digital-oversight",
    name: "Digital Oversight Systems",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
    description: "AI-powered analytics, computer vision safety platforms, IoT monitoring, and video analytics modules",
    count: 18,
    products: [
      {
        id: "ai-pipeline-anomaly",
        name: "AI-Powered Pipeline & Asset Anomaly Detection",
        description: "Machine learning and computer vision platform for automated detection of corrosion, coating defects, leaks and equipment anomalies from camera or drone imagery.",
        price: "Request Technical Evaluation",
        features: ["Real-time & batch analysis", "90%+ detection accuracy", "Cloud alert dashboard", "Multi-asset monitoring", "Integration with existing CCTV/drone feeds"],
        operationalEnvelope: {
          pressure: "≥90% detection accuracy",
          temperature: "<2 seconds per frame",
          application: "Pipeline integrity, refinery inspection, offshore asset surveillance",
          limits: "Minimum image resolution 1080p; camera/drone access required"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "cv-safety-platform",
        name: "Computer Vision Safety & HSE Compliance Platform",
        description: "AI-driven computer vision system for real-time PPE compliance monitoring, lone worker detection, intrusion detection and perimeter security at oil & gas facilities.",
        price: "Request Technical Evaluation",
        features: ["PPE & permit compliance", "Lone worker distress detection", "Intrusion & perimeter alerts", "Vehicle & traffic monitoring", "Camera tamper alerts"],
        operationalEnvelope: {
          pressure: "Minimum 1080p (2MP); 4K supported",
          temperature: "<1 second real-time alert",
          application: "Refinery HSE compliance, oil field security, renewable energy site safety",
          limits: "Camera placement and site network bandwidth assessment required"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "iot-cp-monitoring",
        name: "IoT Remote CP Monitoring Platform",
        description: "Cloud-based SCADA platform for real-time remote monitoring of cathodic protection potential readings across distributed pipeline networks.",
        price: "Request Technical Evaluation",
        features: ["GSM/GPRS data loggers", "Multi-site cloud dashboard", "Auto-alert on CP failure", "Historical trending & reporting", "SCADA integration"],
        operationalEnvelope: {
          pressure: "±5 mV potential measurement",
          temperature: "1 min – 24 hr (configurable)",
          application: "Remote CP monitoring for cross-country pipelines and tank farms",
          limits: "GSM connectivity required at monitoring points; SCADA integration needs IT sign-off"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "predictive-maintenance-twin",
        name: "Predictive Maintenance & Digital Twin Platform",
        description: "AI-driven predictive maintenance platform using digital twins to simulate well and pipeline behaviour, predict equipment failures and cut maintenance costs by 25%.",
        price: "Request Technical Evaluation",
        features: ["Digital twin simulation", "ML failure prediction", "IoT sensor integration", "Custom KPI dashboards", "Sustainability & emissions reporting"],
        operationalEnvelope: {
          pressure: "7 – 90 days advance warning",
          temperature: "Real-time (streaming) or daily batch",
          application: "Well production optimisation, CP system simulation, facility maintenance scheduling",
          limits: "Requires access to historical sensor data and plant SCADA/DCS feeds via API"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "drone-construction-monitoring",
        name: "Drone Progress & Construction Monitoring System",
        description: "AI-powered drone-based monitoring system for real-time progress tracking, inspection, and quality control of pipeline construction and energy infrastructure.",
        price: "Request Technical Evaluation",
        features: ["Automated flight path optimisation", "Photogrammetry & 3D mapping", "Real-time progress dashboards", "Defect detection & reporting", "Solar & wind farm compatible"],
        operationalEnvelope: {
          pressure: "Up to 1 cm/pixel (GSD at 50 m AGL)",
          temperature: "Up to 200 ha/hr per drone flight",
          application: "Pipeline ROW monitoring, solar/wind farm construction, offshore platform inspection",
          limits: "Regulatory DGCA approvals required; no-fly zones restrict some applications"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-frs-attendance",
        name: "Video Analytics – FRS Attendance & Access Control",
        description: "Face recognition software module for automated attendance logging, access monitoring, and watchlist-based alerts at gates and restricted areas.",
        price: "Request Technical Evaluation",
        features: ["Face recognition attendance", "Watchlist & access alerts", "Shift-wise log reports", "Visitor linkage", "VMS/NVR integration", "Audit-ready dashboards"],
        operationalEnvelope: {
          pressure: "≥97% match rate",
          temperature: "<2 seconds per person",
          application: "Gates, control rooms, offices, and restricted areas in refineries, terminals, and depots",
          limits: "Enrolled face database and clear camera view required"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-ppe-compliance",
        name: "Video Analytics – PPE Compliance Detection",
        description: "AI software module detecting helmet, vest, gloves, and other PPE compliance in hazardous zones, generating real-time supervisor alerts and violation snapshots.",
        price: "Request Technical Evaluation",
        features: ["Helmet, vest & glove detection", "Configurable zone rules", "Violation snapshot capture", "Trend & compliance reports", "Multi-PPE class support", "Integration-ready API"],
        operationalEnvelope: {
          pressure: "≥90% precision across PPE classes",
          temperature: "<3 seconds from violation to alert",
          application: "Process units, tank farms, loading bays, maintenance areas, and shutdown work zones",
          limits: "Camera angle must clearly capture head and torso"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-fire-flare-smoke",
        name: "Video Analytics – Fire, Flare & Smoke Detection",
        description: "AI software module providing early warning for visible flame, abnormal flare events, and smoke in outdoor industrial areas, triggering alerts before conventional detectors activate.",
        price: "Request Technical Evaluation",
        features: ["Fire/flame & smoke AI detection", "Flare event monitoring", "False alarm tuning", "Siren/API/SMS trigger integration", "Event timeline & evidence logging", "Thermal camera compatible"],
        operationalEnvelope: {
          pressure: "Up to 100 m radius per camera",
          temperature: "<5% after site-specific calibration",
          application: "Tank farms, flare areas, pump rooms, loading zones, and open process yards",
          limits: "Heavy rain, fog, or night-time may require thermal/hybrid cameras"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-spillage-leakage",
        name: "Video Analytics – Spillage & Leakage Detection",
        description: "AI software module detecting visible oil or chemical spillage on floors and bund areas to reduce slip risk, product loss, and environmental incidents.",
        price: "Request Technical Evaluation",
        features: ["Liquid spill & pool detection", "Configurable area alarms", "Evidence clip capture", "Escalation workflow integration", "Incident reporting"],
        operationalEnvelope: {
          pressure: "~0.1 m² minimum detectable spill",
          temperature: "<5 seconds from spill to alert",
          application: "Pump rooms, manifolds, loading bays, bunded tank areas, and chemical handling zones",
          limits: "Requires clear floor visibility; detects visible surface spills only"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-process-area",
        name: "Video Analytics – Process Area Monitoring",
        description: "AI software module monitoring defined process areas for abnormal visual conditions such as smoke, unusual activity, or unsafe proximity.",
        price: "Request Technical Evaluation",
        features: ["Custom area monitoring rules", "Abnormal activity detection", "Alert routing & escalation", "Event playback", "Central operations dashboard"],
        operationalEnvelope: {
          pressure: "Up to 20 custom rules per camera",
          temperature: "<3 seconds from trigger to alert",
          application: "Critical process zones, utility corridors, compressor areas, and active operating units",
          limits: "Visual monitoring only; does not replace process sensors or SCADA"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-asset-inspection",
        name: "Video Analytics – AI Asset Visual Inspection",
        description: "AI-assisted visual inspection software for machine condition monitoring, corrosion indicators, and equipment anomalies using fixed or mobile cameras.",
        price: "Request Technical Evaluation",
        features: ["Machine condition monitoring", "Corrosion & anomaly flagging", "Trend snapshot history", "Remote review workflow", "Configurable defect classes"],
        operationalEnvelope: {
          pressure: "≥88% on configured defect classes",
          temperature: "Minimum 2 MP input",
          application: "Pumps, valves, heat exchangers, skids, pipelines, and general equipment zones",
          limits: "Best for visible defects; critical findings must be confirmed with NDT"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-corrosion-detection",
        name: "Video Analytics – Corrosion Visual Detection",
        description: "AI software module highlighting visible corrosion, rust, and coating damage on equipment and structures from camera feeds.",
        price: "Request Technical Evaluation",
        features: ["Visible corrosion & rust detection", "Area tagging & severity indication", "Evidence image archive", "Trend tracking over time", "Maintenance workflow integration"],
        operationalEnvelope: {
          pressure: "≥85% on surface corrosion",
          temperature: "~5 cm² visible corrosion patch at 2 m",
          application: "Pipes, tanks, structures, painted surfaces in refineries, plants, and depots",
          limits: "Surface visibility and lighting dependent; internal corrosion requires NDT"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-machine-safety",
        name: "Video Analytics – Machine Condition & Safety Compliance",
        description: "AI software module detecting visible machine hazards — missing guards, open access panels, unsafe proximity to rotating equipment.",
        price: "Request Technical Evaluation",
        features: ["Missing guard & open panel detection", "Unsafe proximity alerts", "Abnormal activity detection", "Evidence clips", "Shift-level compliance reports"],
        operationalEnvelope: {
          pressure: "≥88% for configured hazard classes",
          temperature: "<3 seconds from event to alert",
          application: "Rotating equipment areas, workshops, compressor halls, and mechanical maintenance zones",
          limits: "Camera must clearly see the machine; some faults not detectable visually"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-crowd-muster",
        name: "Video Analytics – Crowd Counting & Muster Point",
        description: "AI software module monitoring crowd density and assembly point occupancy during drills and real incidents, enabling faster headcount.",
        price: "Request Technical Evaluation",
        features: ["Real-time crowd counting", "Density threshold alerts", "Muster point monitoring", "Optional FRS integration", "Drill report generation"],
        operationalEnvelope: {
          pressure: "±5% count error",
          temperature: "Real-time (<1 second per frame)",
          application: "Muster points, assembly areas, canteens, and gate queues at industrial facilities",
          limits: "Dense crowd overlap reduces accuracy; multi-camera recommended"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-visitor-tracking",
        name: "Video Analytics – Visitor Tracking & Zone Access",
        description: "AI software module tracking visitor movement in defined zones and managing authorized access time windows.",
        price: "Request Technical Evaluation",
        features: ["Visitor zone tracking", "Time-window access permissions", "Unauthorised zone alerts", "Timestamped access logs", "Dashboard & reporting"],
        operationalEnvelope: {
          pressure: "≥92% visitor re-identification",
          temperature: "<3 seconds for zone breach",
          application: "Visitor entry points, controlled access corridors, and restricted areas in industrial facilities",
          limits: "Visitor registration workflow required; privacy policy must be in place"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-environment-emissions",
        name: "Video Analytics – Environment & Emissions Monitoring",
        description: "AI software module for environmental monitoring using cameras to detect visible smoke, dust plumes, and abnormal emissions from stacks, vents, and perimeter zones.",
        price: "Request Technical Evaluation",
        features: ["Smoke & dust plume detection", "Visible emission event logging", "Zone-level alerts", "Evidence clip archive", "Reporting for environmental reviews"],
        operationalEnvelope: {
          pressure: "Visible plume from ~10 m distance",
          temperature: "<5 seconds from emission to alert",
          application: "Stack areas, flare vicinity, perimeter zones, and open yards in refineries and terminals",
          limits: "Visual monitoring only; certified gas sensors required for regulatory compliance"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-intrusion-detection",
        name: "Video Analytics – Restricted Zone Intrusion Detection",
        description: "AI software module detecting unauthorised person entry into mapped restricted zones and escalating incidents with timestamped evidence clips.",
        price: "Request Technical Evaluation",
        features: ["Person intrusion detection", "Configurable zone boundary rules", "Alert escalation (SMS/PA/email)", "Timestamped evidence clips", "Night & IR camera compatible"],
        operationalEnvelope: {
          pressure: "≥92% true positive rate",
          temperature: "<2 seconds from zone breach to alert",
          application: "Perimeter fencing, tank farms, substations, hazardous storage, and restricted corridors",
          limits: "Zones must be clearly mapped; night coverage may need IR or thermal support"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "va-lone-worker",
        name: "Video Analytics – Lone Worker & Person-Down Detection",
        description: "AI software module detecting lone worker presence in isolated areas and person-down events, triggering immediate multi-channel escalation.",
        price: "Request Technical Evaluation",
        features: ["Lone worker presence detection", "Person-down & fall detection", "Multi-channel escalation", "Response log & evidence clips", "Drill & test mode"],
        operationalEnvelope: {
          pressure: "Event detected within 10 seconds",
          temperature: "1 camera per 50 m² isolated area",
          application: "Remote corridors, night shift areas, isolated utility yards, and unmanned process zones",
          limits: "No camera blind spots in monitored zone; periodic test drills required"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "survey-instruments",
    name: "Survey Instruments & Equipment",
    icon: Monitor,
    color: "from-cyan-500 to-cyan-600",
    description: "CP survey instruments and professional data logger kits for pipeline surveys",
    count: 1,
    products: [
      {
        id: "cp-survey-kit",
        name: "CP Survey Instruments & Data Logger Kit",
        description: "Professional cathodic protection survey kit including high-impedance voltmeter, data logger, current interrupter and GPS for CIPS, DCVG and CAT surveys.",
        price: "Request Technical Evaluation",
        features: ["High-impedance voltmeter (>1 MΩ)", "GPS-integrated data logger", "Remote current interrupter", "CAT signal generator", "Rechargeable battery powered", "Export to CSV/Excel"],
        operationalEnvelope: {
          pressure: "±1 mV resolution, ±5 mV accuracy",
          temperature: "100,000+ GPS-tagged readings",
          application: "Pipeline CP surveys (CIPS, DCVG, CAT, ACVG), tank floor surveys",
          limits: "Requires coordinated current interruption with pipeline operator"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "3d-scanning",
    name: "3D Scanning & Survey Equipment",
    icon: ScanLine,
    color: "from-rose-500 to-rose-600",
    description: "Trimble 3D laser scanners and scanning total stations for industrial as-built capture",
    count: 4,
    products: [
      {
        id: "trimble-x7",
        name: "Trimble X7 3D Laser Scanner",
        description: "Portable self-calibrating terrestrial laser scanner for fast, accurate as-built capture and digital documentation in industrial plants, skids, and equipment rooms.",
        price: "Request Technical Evaluation",
        features: ["Auto-calibration in field", "In-field scan registration", "Survey-grade point cloud", "Portable lightweight design", "Field verification display", "Trimble Perspective software compatible"],
        operationalEnvelope: {
          pressure: "0.6 – 80 m range; ±2 mm @ 10 m",
          temperature: "-20°C to +50°C",
          application: "Indoor plant rooms, skids, equipment areas, and congested process units",
          limits: "Line-of-sight required; reflective surfaces may need additional scan positions"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "trimble-x9",
        name: "Trimble X9 3D Laser Scanner",
        description: "High-productivity terrestrial laser scanner for medium-to-large refinery and terminal capture programs, combining longer scan range with fast cycle times.",
        price: "Request Technical Evaluation",
        features: ["Fast scan cycle times", "Higher sensitivity & dynamic range", "Long-range capture", "Field workflow integration", "Automatic scan quality check", "Trimble Perspective compatible"],
        operationalEnvelope: {
          pressure: "0.6 – 150 m range; ±2 mm @ 40 m",
          temperature: "-20°C to +50°C",
          application: "Process units, tank farms, utilities, and open plant areas",
          limits: "Dense congested areas require multiple scan stations"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "trimble-x12",
        name: "Trimble X12 High-End 3D Laser Scanner",
        description: "Premium high-speed, high-accuracy laser scanner for complex industrial geometry and large-scale capture programs requiring superior point density.",
        price: "Request Technical Evaluation",
        features: ["High-speed scan output", "Superior point density", "Extended working range", "Integrated imaging", "Industrial workflow optimised", "Survey control & target integration"],
        operationalEnvelope: {
          pressure: "0.3 – 250 m range; ±1.5 mm @ 40 m",
          temperature: "Per OEM spec; designed for industrial field use",
          application: "Complex steel structures, pipe racks, large-scale plant capture, and engineering-grade digital twin programs",
          limits: "Requires trained operators, survey control targets, and high-capacity data processing"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      {
        id: "trimble-sx12",
        name: "Trimble SX12 Scanning Total Station",
        description: "Hybrid instrument combining precise total station survey control with 3D laser scanning point capture for industrial surveys.",
        price: "Request Technical Evaluation",
        features: ["Total station survey control + scanning", "Long-range point capture up to 600 m", "Precision angular measurement", "Integrated imaging", "Trimble survey & scanning workflow"],
        operationalEnvelope: {
          pressure: "Up to 600 m range; 1\" angular accuracy",
          temperature: "-20°C to +50°C",
          application: "Tank farms, long-range pipeline surveys, and projects requiring survey control and scanning in one setup",
          limits: "Not the fastest for dense close-range 3D capture; best for hybrid survey + scan workflows"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  }
];
