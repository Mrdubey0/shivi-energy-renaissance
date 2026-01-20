import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Package, 
  Wrench, 
  Monitor,
  Cpu,
  Plus,
  ArrowRight,
  Search,
  Eye,
  Gauge,
  Thermometer,
  Activity,
  Check,
  Cog, 
  Shield, 
  Drill, 
  Settings, 
  Lock,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  ChevronUp,
  ShipWheel,
  ShoppingBag,
  ServerCog
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { CartProduct, useCart } from "@/context/CartContext";
import ProductDetailPopup from "./ProductDetailPopup";
import ServiceDetailPopup from "./ServiceDetailPopup";

// Product categories data - Updated from actual documents
const productCategories = [
  {
    id: "thru-tubing-tools",
    name: "Thru-Tubing Tools",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    description: "Efficient well intervention without pulling tubing, reducing downtime and operational costs",
    count: 6,
    products: [
      { 
        id: "retrievable-bridge-plugs", 
        name: "Retrievable Bridge Plugs", 
        description: "Retrievable bridge plugs provide temporary zonal isolation for testing, stimulation or well intervention, and can be retrieved after the operation to reduce drill-out time and cost.",
        price: "Request Technical Evaluation",
        features: ["Retrievable design helps minimize milling/drill-out time", "Reliable sealing element options for different well fluids", "Positive setting and release mechanism", "Suitable for rig or rigless deployment"],
        operationalEnvelope: {
          pressure: "Model- and size-dependent, standard and high differential configurations",
          temperature: "Depends on elastomer and metallurgy selection",
          application: "Temporary abandonment, pressure testing, stimulation, remedial cementing, zonal isolation",
          limits: "Requires clean and gauged casing ID for reliable setting"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "drillable-bridge-plugs", 
        name: "Drillable Bridge Plugs", 
        description: "Drillable bridge plugs deliver dependable isolation and are designed for efficient drill-out after operations. Commonly used where rapid mill-out and minimal debris are required.",
        price: "Request Technical Evaluation",
        features: ["Fast drill-out / mill-out characteristics", "High differential sealing capability", "Designed to minimize debris and reduce NPT", "Field-proven setting and sealing architecture"],
        operationalEnvelope: {
          pressure: "Configuration-dependent, designed for testing and stimulation",
          temperature: "Depends on material and sealing element selection",
          application: "Multistage stimulation, temporary isolation, cementing support, integrity testing",
          limits: "Not retrievable, requires appropriate milling/drilling assembly"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "ct-millable-bridge-plugs", 
        name: "CT Millable Bridge Plugs", 
        description: "CT millable bridge plugs are engineered for efficient mill-out using coiled tubing. The design targets low milling torque and controlled debris generation to reduce intervention time.",
        price: "Request Technical Evaluation",
        features: ["Optimized for low-torque milling with coiled tubing", "Reduced mill-out time for faster stage transitions", "Controlled debris generation materials", "Compatible with rigless intervention workflows"],
        operationalEnvelope: {
          pressure: "Model- and size-dependent for intervention programs",
          temperature: "Depends on material and elastomer selection",
          application: "CT deployment and mill-out, temporary zonal isolation, stimulation support",
          limits: "Requires suitable CT milling BHA and circulation"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "inflatable-bridge-plugs", 
        name: "Inflatable Bridge Plugs", 
        description: "Inflatable bridge plugs use an inflatable sealing element to conform to varying IDs and irregularities, providing reliable isolation in casing, liners and certain open-hole applications.",
        price: "Request Technical Evaluation",
        features: ["Large expansion ratio for variable or irregular IDs", "Conforms to surface imperfections for improved sealing", "Adaptable deployment options", "Effective for challenging wellbore geometries"],
        operationalEnvelope: {
          pressure: "Depends on inflation system and element selection",
          temperature: "Depends on element material selection and fluid compatibility",
          application: "Well testing, temporary isolation, cementing operations, remedial work",
          limits: "Requires controlled inflation procedure and compatible fluids"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "slickline-set-bridge-plugs", 
        name: "Slickline Set Retrievable Bridge Plugs", 
        description: "Slickline set retrievable bridge plugs enable rigless isolation operations. They are set and retrieved using slickline, supporting quick turnaround for testing and intervention activities.",
        price: "Request Technical Evaluation",
        features: ["Rigless deployment for reduced cost and faster execution", "Retrievable design reduces the need for milling", "Efficient setting and release mechanism", "Supports intervention programs with minimal equipment footprint"],
        operationalEnvelope: {
          pressure: "Model- and size-dependent for rigless intervention",
          temperature: "Depends on elastomer selection",
          application: "Temporary isolation, pressure testing, shut-off operations, workover support",
          limits: "Depends on well deviation and conveyance limits"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "downhole-completion",
    name: "Downhole Completion Tools",
    icon: Cog,
    color: "from-green-500 to-green-600",
    description: "Safe, efficient completion and workover operations - engineered for well integrity",
    count: 4,
    products: [
      { 
        id: "toe-sleeves", 
        name: "Toe Sleeves", 
        description: "Toe sleeves provide a controllable flow path at the liner toe to enable circulation, cementing, stimulation, and wellbore cleanout. They can be pressure-activated or mechanically shifted to open and close ports.",
        price: "Request Technical Evaluation",
        features: ["Single-trip circulation and stimulation capability", "Full-bore or high-flow design options", "Reliable open/close mechanisms for multi-stage operations", "Compatible with common liner systems"],
        operationalEnvelope: {
          pressure: "Model- and size-dependent, standard and high-differential service",
          temperature: "Depends on elastomer selection and metallurgy, sour service compatible",
          application: "Toe circulation, post-cement cleanout, annulus-to-bore communication",
          limits: "Activation method must match completion design"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "liner-hangers", 
        name: "Liner Hanger Systems", 
        description: "Liner hangers suspend and seal the liner inside the parent casing, providing mechanical support and zonal isolation for cemented or uncemented liner completions. Hydraulic or mechanical setting systems allow reliable placement in deviated and horizontal wells.",
        price: "Request Technical Evaluation",
        features: ["High load capacity with reliable pack-off sealing", "Hydraulic or mechanical set options", "Rotating/reciprocating capability during cementing", "Tie-back and contingency options available"],
        operationalEnvelope: {
          pressure: "Model-dependent, high-pressure and HPHT-rated configurations",
          temperature: "Options for high-temperature and corrosive environments, H2S/CO2 service",
          application: "Running and setting liners, liner top support, cementing operations",
          limits: "Depends on proper running practices and adequate set-down weight"
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "hydraulic-packers", 
        name: "Hydraulic Packers", 
        description: "Hydraulic packers provide controlled zonal isolation by setting the sealing element using applied tubing pressure. Used in production, testing, injection, and stimulation programs where reliable isolation and repeatable setting are required.",
        price: "Request Technical Evaluation",
        features: ["Controlled hydraulic setting for repeatable deployment", "High sealing reliability with optimized element systems", "Retrievable or permanent configurations", "Compatible with standard completion strings"],
        operationalEnvelope: {
          pressure: "High-differential and high-pressure service configurations",
          temperature: "Options for elevated temperature and HPHT wells",
          application: "Zonal isolation, pressure testing, stimulation/acidizing, injection programs",
          limits: "Requires stable hydraulic pressure and clean setting fluids"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "flow-control-devices", 
        name: "Flow Control Devices", 
        description: "Flow Control Devices (FCDs) regulate and balance fluid inflow or injection along the wellbore. They help manage production profiles, delay water or gas breakthrough, and improve overall reservoir drainage efficiency.",
        price: "Request Technical Evaluation",
        features: ["Controlled and predictable flow regulation", "Improves production and injection profile management", "Reduces early water and gas breakthrough", "Passive or autonomous designs available"],
        operationalEnvelope: {
          pressure: "Model- and size-dependent for production and injection",
          temperature: "Depends on internal flow element design and seal system",
          application: "Production inflow control, injection profile management, reservoir balancing",
          limits: "Requires accurate reservoir characterization"
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
    id: "well-intervention-tools",
    name: "Well Intervention Tools",
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
    description: "Slickline, wireline, and coiled tubing operations for diagnostics, cleanout, and remedial work",
    count: 5,
    products: [
      { 
        id: "pulling-running-tools", 
        name: "Pulling & Running Tools", 
        description: "Pulling and running tools are used to set, retrieve, and service downhole flow-control equipment such as lock mandrels, chokes, standing valves, and other nipple-profile accessories.",
        price: "Request Technical Evaluation",
        features: ["Positive engagement with standard nipple profiles", "Supports faster change-outs and reduced well downtime", "Rigless deployment with slickline or wireline", "Reduces risk of completion damage"],
        operationalEnvelope: {
          pressure: "Model-dependent based on completion design",
          temperature: "Depends on elastomer and metallurgy selection",
          application: "Installation and retrieval of downhole control equipment, routine maintenance",
          limits: "Requires correct profile match and gauge confirmation"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "wellbore-cleanout-tools", 
        name: "Wellbore Cleanout Tools", 
        description: "Cleanout tools including scrapers, brushes, and drift subs remove scale, paraffin, debris, and light restrictions to restore ID and prepare the wellbore for subsequent intervention.",
        price: "Request Technical Evaluation",
        features: ["Restores internal diameter and improves conveyance", "Helps reduce sticking risk for subsequent runs", "Configurable cutting/contact elements based on debris type", "Supports rigless and light-intervention operations"],
        operationalEnvelope: {
          pressure: "Tool and conveyance dependent",
          temperature: "Depends on materials and bristle selection",
          application: "Tubing/casing cleanout, restriction removal, preparation prior to setting",
          limits: "Not intended for severe obstructions without milling assemblies"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "junk-baskets-magnets", 
        name: "Junk Baskets & Magnets", 
        description: "Junk baskets and magnets capture and recover loose debris, metal cuttings, and small parts from the wellbore to improve well integrity and reduce the risk of equipment damage.",
        price: "Request Technical Evaluation",
        features: ["Improves wellbore cleanliness", "Reduces risk of equipment damage", "Supports post-milling and post-intervention cleanout", "Multiple basket/magnet configurations available"],
        operationalEnvelope: {
          pressure: "Configuration dependent for planned circulation",
          temperature: "Depends on materials selection, moderate to high temperature",
          application: "Debris recovery after milling, cleanout prior to completion runs",
          limits: "Recovery efficiency depends on debris type/size and circulation"
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
    id: "coiled-tubing-tools",
    name: "Downhole Coil Tubing Tools",
    icon: ServerCog,
    color: "from-orange-500 to-orange-600",
    description: "Circulation, cleanout, and downhole motor tools for CT operations",
    count: 4,
    products: [
      { 
        id: "ct-circulation-tools", 
        name: "CT Circulation & Cleanout Tools", 
        description: "Circulation and cleanout tools including circulating heads, wash tools, bypass subs, and cleanout assemblies direct and manage flow to improve debris transport and restore internal diameter.",
        price: "Request Technical Evaluation",
        features: ["Improves debris transport", "Restores internal diameter", "Supports controlled circulation", "Prepares wellbore for subsequent operations"],
        operationalEnvelope: {
          pressure: "Configured for planned circulation pressures and flow rates",
          temperature: "Options for elevated temperature and corrosive service",
          application: "Circulation for cleanout, debris transport, pressure equalization, well kill",
          limits: "Selection depends on fluid properties and debris load"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "ct-bumper-subs", 
        name: "Coiled Tubing Bumper Subs", 
        description: "Bumper subs provide axial stroke to enable positive tagging, setting, and shifting operations on CT. They help transfer controlled weight to downhole tools and absorb shock loads.",
        price: "Request Technical Evaluation",
        features: ["Enables positive tagging operations", "Transfers controlled weight to downhole tools", "Absorbs shock loads to protect CT string", "Multiple stroke lengths available"],
        operationalEnvelope: {
          pressure: "Rated for planned CT loads and circulating pressures",
          temperature: "Options for elevated temperature wells and corrosive service",
          application: "Tagging and locating downhole equipment, assisting shifting tools",
          limits: "Configuration based on intervention program requirements"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "ct-downhole-motors", 
        name: "CT Downhole Motors & Milling Tools", 
        description: "Downhole motors and milling tools provide rotary cutting capability for plug/packer drill-out, restriction removal, and remedial milling during coiled tubing interventions.",
        price: "Request Technical Evaluation",
        features: ["Rotary cutting capability for CT interventions", "Multiple motor configurations available", "Optimized cutting structures", "Designed for plug and packer drill-out"],
        operationalEnvelope: {
          pressure: "Configured for planned pump rates and torque requirements",
          temperature: "Depends on motor elastomers and materials selection",
          application: "Milling composite/metallic plugs, removing restrictions, cutting debris",
          limits: "Tool selection depends on restriction type and wellbore limitations"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "fishing-milling",
    name: "Fishing & Milling Tools",
    icon: Drill,
    color: "from-red-500 to-red-600",
    description: "Recover lost equipment and restore wellbore integrity with minimal non-productive time",
    count: 3,
    products: [
      { 
        id: "customized-mills", 
        name: "Customized Mills", 
        description: "Customized mills are engineered and dressed to match the specific restriction, plug, or fish to be milled. We tailor OD, pilot, face profile, gauge protection, and cutting structure to maximize cutting efficiency.",
        price: "Request Technical Evaluation",
        features: ["Mill types: taper, pilot, string, watermelon, junk mills", "Configurable cutting structures (tungsten carbide, PDC)", "Gauge protection and casing-friendly profiles", "Designed to reduce torque/vibration"],
        operationalEnvelope: {
          pressure: "Selected for planned circulation rates and differential pressures",
          temperature: "Options for elevated temperature and corrosive/sour service",
          application: "Mill-out of composite/cast-iron plugs, cement/scale/debris removal",
          limits: "Requires engineered milling plan with adequate stabilization"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "digital-ai-systems",
    name: "Digital Oversight Systems",
    icon: Cpu,
    color: "from-indigo-500 to-indigo-600",
    description: "AI and computer vision systems for safety verification and operational oversight",
    count: 3,
    products: [
      { 
        id: "facial-recognition", 
        name: "Facial Recognition System", 
        description: "AI-powered facial recognition solution for identity verification, secure access control, and attendance/visitor management. Performs fast face detection, matching, and event logging with configurable privacy controls.",
        price: "Request Technical Evaluation",
        features: ["Real-time detection", "99%+ accuracy", "Cloud integration", "Configurable privacy controls"],
        operationalEnvelope: {
          pressure: "N/A – surface system",
          temperature: "32°F to 104°F operating",
          application: "Secure identity verification & facility access monitoring",
          limits: "Works on Linux environment. Requires dedicated GPU for performance"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "digital-twin", 
        name: "Digital Twin System", 
        description: "3D scanning–powered digital twin platform that captures real-world spaces and assets into accurate, measurable 3D models. Enables remote walkthroughs, layout verification, progress tracking, and documentation.",
        price: "Request Technical Evaluation",
        features: ["MM grade preciseness", "Minutes ready data", "Cross application integration", "Cloud integration"],
        operationalEnvelope: {
          pressure: "N/A – terrestrial scanning system",
          temperature: "32°F to 104°F operating",
          application: "Facility mapping, construction progress documentation, asset inventory",
          limits: "Scan range varies from 50m radius to KMs based on scanner model"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "corrosion-protection",
    name: "Corrosion Protection Products",
    icon: Shield,
    color: "from-teal-500 to-teal-600",
    description: "Cathodic protection and corrosion management solutions",
    count: 2,
    products: [
      { 
        id: "zn-ribbon-anode", 
        name: "Zn Ribbon Anode", 
        description: "Zinc ribbon anodes provide distributed cathodic protection without an external power supply. Because it is a continuous ribbon, it gives more uniform current distribution than discrete anodes in short sections or congested areas.",
        price: "Request Technical Evaluation",
        features: ["Good current distribution along its length", "Suitable for moderate-to-low resistivity soil", "No external power supply needed", "Continuous ribbon design"],
        operationalEnvelope: {
          pressure: "N/A – buried installation",
          temperature: "Soil temperature dependent",
          application: "Short pipeline sections, casing protection, repair/retrofit areas",
          limits: "Design depends on soil resistivity, coating condition, and installation geometry"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  }
];

// Service categories data
const serviceCategories = [
  {
    id: "engineering",
    name: "Engineering & Consultation",
    icon: Cog,
    color: "from-blue-500 to-blue-600",
    description: "Field-validated engineering assessments with lifecycle risk modeling",
    count: 5,
    services: [
      {
        id: "well-integrity",
        name: "Well Integrity Assessment",
        shortDescription: "Comprehensive well integrity evaluation with lifecycle risk modeling.",
        riskAddressed: "Unmitigated design flaws leading to operational failures and unplanned interventions.",
        mitigationProtocol: "Field-validated engineering assessments with lifecycle risk modeling.",
        digitalOversight: "Real-time monitoring dashboards with early anomaly detection.",
        lifecycleImpact: "Reduced repeat interventions and extended asset operational life.",
        features: ["Comprehensive well integrity assessment", "Formation evaluation and modeling", "Equipment compatibility analysis", "Risk mitigation strategy development", "Regulatory compliance verification"],
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop"
      },
      {
        id: "formation-evaluation",
        name: "Formation Evaluation",
        shortDescription: "Detailed geological analysis for optimal well planning.",
        riskAddressed: "Poor well placement and production underperformance.",
        mitigationProtocol: "Advanced logging and core analysis with integrated interpretation.",
        digitalOversight: "3D reservoir modeling with real-time data integration.",
        lifecycleImpact: "Optimized well placement and improved recovery factors.",
        features: ["Log analysis and interpretation", "Core analysis coordination", "Reservoir characterization", "Production forecasting", "Completion optimization"],
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop"
      }
    ]
  },
  {
    id: "corrosion-management",
    name: "Corrosion Management",
    icon: Shield,
    color: "from-green-500 to-green-600",
    description: "Cathodic protection systems with continuous condition monitoring",
    count: 4,
    services: [
      {
        id: "cathodic-protection",
        name: "Cathodic Protection Systems",
        shortDescription: "Complete CP design, installation, and monitoring solutions.",
        riskAddressed: "Integrity degradation causing equipment failure, leaks, and environmental exposure.",
        mitigationProtocol: "Cathodic protection systems with continuous condition monitoring.",
        digitalOversight: "AI-powered corrosion rate prediction and automated alert systems.",
        lifecycleImpact: "40% reduction in unplanned maintenance and extended equipment lifespan.",
        features: ["Cathodic protection design and installation", "Corrosion rate monitoring systems", "Protective coating specification", "Chemical treatment programs", "Integrity data management"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop"
      },
      {
        id: "integrity-monitoring",
        name: "Integrity Monitoring Programs",
        shortDescription: "Continuous asset integrity surveillance and reporting.",
        riskAddressed: "Undetected degradation leading to catastrophic failures.",
        mitigationProtocol: "Multi-technique inspection with data trending and analysis.",
        digitalOversight: "Integrated dashboards with predictive failure analytics.",
        lifecycleImpact: "Extended asset life and reduced inspection costs.",
        features: ["Inspection scheduling", "Data trending analysis", "Anomaly detection", "Compliance reporting", "Risk-based prioritization"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop"
      }
    ]
  },
  {
    id: "intervention",
    name: "Rigless Intervention",
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
    description: "Thru-tubing solutions with precision fishing and milling operations",
    count: 5,
    services: [
      {
        id: "slickline-services",
        name: "Slickline & Wireline Services",
        shortDescription: "Comprehensive wireline services for well intervention and data acquisition.",
        riskAddressed: "Well production decline and mechanical obstructions requiring costly rig mobilization.",
        mitigationProtocol: "Thru-tubing solutions with precision fishing and milling operations.",
        digitalOversight: "Downhole sensor integration for real-time intervention verification.",
        lifecycleImpact: "Reduced rig dependency and minimized well downtime exposure.",
        features: ["Slickline and wireline services", "Coiled tubing operations", "Well stimulation treatments", "Fishing and recovery services", "Scale and wax removal"],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop"
      },
      {
        id: "coiled-tubing",
        name: "Coiled Tubing Operations",
        shortDescription: "Advanced CT services for well cleanout, stimulation, and milling.",
        riskAddressed: "Production impairment from wellbore debris and scale buildup.",
        mitigationProtocol: "High-pressure CT with real-time downhole monitoring.",
        digitalOversight: "Surface data acquisition with downhole tool telemetry.",
        lifecycleImpact: "Restored production rates with minimal surface footprint.",
        features: ["Well cleanout", "Nitrogen kickoffs", "Acid stimulation", "Mechanical isolation", "Milling operations"],
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop"
      }
    ]
  },
  {
    id: "mills-solutions",
    name: "Mills & Bits Solutions",
    icon: Drill,
    color: "from-red-500 to-red-600",
    description: "Application-specific milling geometry for defined operational envelopes",
    count: 4,
    services: [
      {
        id: "section-milling",
        name: "Section Milling Operations",
        shortDescription: "Full-bore section milling for casing removal and sidetrack window cutting.",
        riskAddressed: "Wellbore obstructions, cement, and debris preventing operational access.",
        mitigationProtocol: "Application-specific milling geometry for defined operational envelopes.",
        digitalOversight: "Torque and weight-on-bit monitoring for optimized cutting performance.",
        lifecycleImpact: "Improved first-run success rates and reduced intervention cycles.",
        features: ["Section milling systems", "Casing exit windows", "Cement and bridge plug milling", "Junk milling and fishing", "Pilot mills and dress mills"],
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop"
      }
    ]
  },
  {
    id: "rig-support",
    name: "Rig Support",
    icon: Settings,
    color: "from-orange-500 to-orange-600",
    description: "Preventive maintenance protocols with rapid equipment deployment",
    count: 4,
    services: [
      {
        id: "technical-support",
        name: "24/7 Technical Support",
        shortDescription: "Round-the-clock technical assistance and troubleshooting.",
        riskAddressed: "Equipment failures and operational inefficiencies causing drilling delays.",
        mitigationProtocol: "Preventive maintenance protocols with rapid equipment deployment.",
        digitalOversight: "Equipment health monitoring with predictive failure analytics.",
        lifecycleImpact: "Optimized rig performance with reduced non-productive time.",
        features: ["24/7 technical support", "Equipment rental and supply", "Crew training and competency", "Logistics coordination", "Emergency response services"],
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop"
      }
    ]
  },
  {
    id: "abandonment",
    name: "Plug & Abandonment",
    icon: Lock,
    color: "from-slate-500 to-slate-600",
    description: "Bridge plug systems with verified cement integrity and regulatory compliance",
    count: 5,
    services: [
      {
        id: "well-abandonment",
        name: "Well Abandonment Services",
        shortDescription: "Complete P&A solutions with full regulatory compliance.",
        riskAddressed: "Environmental liability from improper well decommissioning and zonal isolation failure.",
        mitigationProtocol: "Bridge plug systems with verified cement integrity and regulatory compliance.",
        digitalOversight: "Pressure monitoring and seal verification throughout abandonment process.",
        lifecycleImpact: "Zero-leakage assurance with complete regulatory documentation.",
        features: ["Well kill and secure operations", "Casing and tubing recovery", "Cement plug placement", "Barrier verification testing", "Environmental compliance documentation"],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
      }
    ]
  }
];

type SolutionMode = "products" | "services";

const SolutionsCatalog = () => {
  const [solutionMode, setSolutionMode] = useState<SolutionMode>("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<CartProduct | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<CartProduct | null>(null);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<{
    riskAddressed?: string;
    mitigationProtocol?: string;
    digitalOversight?: string;
    lifecycleImpact?: string;
  } | null>(null);
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const { toast } = useToast();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const categories = solutionMode === "products" ? productCategories : serviceCategories;

  const allProducts: CartProduct[] = productCategories.flatMap(cat => 
    cat.products.map(product => ({ ...product, category: cat.id, categoryName: cat.name }))
  );

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredServices = serviceCategories.flatMap(cat => 
    cat.services.map(service => ({ ...service, category: cat.id, categoryName: cat.name, categoryIcon: cat.icon, categoryColor: cat.color }))
  ).filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: CartProduct) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
      toast({
        title: "Removed from Cart",
        description: `${product.name} removed from cart.`,
      });
    } else {
      addToCart({ ...product, type: 'product' });
      toast({
        title: "Added to Cart",
        description: `${product.name} added to cart.`,
      });
    }
  };

  const openProductDetail = (product: CartProduct) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const openServiceDetail = (service: CartProduct, details: {
    riskAddressed?: string;
    mitigationProtocol?: string;
    digitalOversight?: string;
    lifecycleImpact?: string;
  }) => {
    setSelectedService(service);
    setSelectedServiceDetails(details);
    setIsServiceDetailOpen(true);
  };

  const handleAddToInquiry = (service: CartProduct) => {
    if (isInCart(service.id)) {
      removeFromCart(service.id);
      toast({
        title: "Removed from Inquiry",
        description: `${service.name} removed from inquiry.`,
      });
    } else {
      // Mark as service for cart separation
      addToCart({ ...service, category: 'service', type: 'service' });
      toast({
        title: "Added to Inquiry",
        description: `${service.name} added to inquiry.`,
      });
    }
  };

  // Reset category when switching modes
  const handleModeChange = (mode: SolutionMode) => {
    setSolutionMode(mode);
    setActiveCategory("all");
    setSearchTerm("");
  };

  // Scroll to top functionality
  const searchSectionRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSearch = () => {
    searchSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContent = () => {
    if (contentSectionRef.current) {
      const yOffset = -100; // Offset to show content with some padding from top
      const element = contentSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Small delay to ensure content is rendered before scrolling
    setTimeout(() => {
      scrollToContent();
    }, 100);
  };

  return (
    <section id="solutions" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal>
          
          <div className="text-center mb-10 md:mb-14">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-primary-glow/30 backdrop-blur-sm mb-6">
              <ServerCog className="h-4 w-4 mr-2 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                Operations Control Platform
              </span>
            </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] bg-clip-text text-transparent pb-10">
                Solutions Catalog
              </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Field-validated equipment, systems, and services with defined operational envelopes. 
              All solutions require technical evaluation for application compatibility.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">API Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Technical Support</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll to Top Arrow */}
        {showScrollTop && (
          <button
            onClick={scrollToSearch}
            className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Scroll to search"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}

        {/* Toggle Button and Search */}
        <ScrollReveal delay={50}>
          <div ref={searchSectionRef} className="flex flex-col items-center gap-4 md:gap-6 mb-12">
            {/* Toggle Label */}
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Browse by Category
              </p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <span className="text-xs text-primary font-semibold bg-primary/10 px-2 md:px-3 py-1 rounded-full">
                  Click to Switch
                </span>
                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
            
            {/* Toggle - Mobile Optimized */}
            <div className="relative bg-card rounded-xl md:rounded-2xl p-1.5 md:p-2 border-2 border-border shadow-xl inline-flex hover:shadow-2xl transition-all duration-300">
              {/* Animated background indicator */}
              <div 
                className={`absolute top-1.5 md:top-2 bottom-1.5 md:bottom-2 w-[calc(50%-6px)] md:w-[calc(50%-4px)] bg-primary rounded-lg md:rounded-xl shadow-lg transition-all duration-300 ease-out ${
                  solutionMode === "products" ? "left-1.5 md:left-2" : "left-[calc(50%+3px)] md:left-[calc(50%+2px)]"
                }`}
              />
              <Button
                variant="ghost"
                className={`relative z-10 rounded-lg md:rounded-xl px-4 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition-all duration-300 hover:bg-transparent min-w-[140px] md:min-w-[180px] ${
                  solutionMode === "products" 
                    ? "text-white" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => handleModeChange("products")}
              >
                <Package className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Products
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "products" 
                    ? "bg-white/25 text-white" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`relative z-10 rounded-lg md:rounded-xl px-4 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition-all duration-300 hover:bg-transparent min-w-[140px] md:min-w-[180px] ${
                  solutionMode === "services" 
                    ? "text-white" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => handleModeChange("services")}
              >
                <Cog className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Services
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "services" 
                    ? "bg-white/25 text-white" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0)}
                </span>
              </Button>
            </div>

            {/* Search and Categories */}
            <div className="w-full max-w-4xl bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={`Search ${solutionMode}, specifications, or applications...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  <Button
                    variant={activeCategory === "all" ? "default" : "outline"}
                    onClick={() => handleCategoryChange("all")}
                    size="sm"
                  >
                    All {solutionMode === "products" ? "Products" : "Services"}
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      onClick={() => handleCategoryChange(category.id)}
                      size="sm"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Products Content */}
        {solutionMode === "products" && (
          <div className="mb-12" ref={contentSectionRef}>
            {activeCategory === "all" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 50}>
                    <ProductCard 
                      product={product} 
                      isInCart={isInCart(product.id)}
                      onAddToCart={() => handleAddToCart(product)}
                      onViewDetails={() => openProductDetail(product)}
                    />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <>
                {productCategories.filter(cat => cat.id === activeCategory).map((category) => (
                  <div key={category.id}>
                    <ScrollReveal>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                            <category.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                            <p className="text-lg text-muted-foreground">{category.description}</p>
                            <Badge variant="secondary" className="mt-2">{category.count} Products Available</Badge>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.products.filter(product => 
                        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((product, index) => {
                        const fullProduct: CartProduct = {...product, categoryName: category.name, category: category.id};
                        return (
                          <ScrollReveal key={product.id} delay={index * 50}>
                            <ProductCard 
                              product={fullProduct} 
                              isInCart={isInCart(product.id)}
                              onAddToCart={() => handleAddToCart(fullProduct)}
                              onViewDetails={() => openProductDetail(fullProduct)}
                            />
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* Services Content */}
        {solutionMode === "services" && (
          <div className="mb-12" ref={contentSectionRef}>
            {activeCategory === "all" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service, index) => {
                  const cartService: CartProduct = {
                    id: service.id,
                    name: service.name,
                    description: service.shortDescription,
                    price: "Request Technical Evaluation",
                    features: service.features,
                    operationalEnvelope: {},
                    image: service.image,
                    inStock: true,
                    category: service.category,
                    categoryName: service.categoryName,
                  };
                  return (
                    <ScrollReveal key={service.id} delay={index * 50}>
                      <ServiceCard 
                        service={service} 
                        isInCart={isInCart(service.id)}
                        onAddToInquiry={() => handleAddToInquiry(cartService)}
                        onViewDetails={() => openServiceDetail(cartService, {
                          riskAddressed: service.riskAddressed,
                          mitigationProtocol: service.mitigationProtocol,
                          digitalOversight: service.digitalOversight,
                          lifecycleImpact: service.lifecycleImpact,
                        })}
                      />
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              <>
                {serviceCategories.filter(cat => cat.id === activeCategory).map((category) => (
                  <div key={category.id}>
                    <ScrollReveal>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                            <category.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                            <p className="text-lg text-muted-foreground">{category.description}</p>
                            <Badge variant="secondary" className="mt-2">{category.count} Services Available</Badge>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.services.filter(service => 
                        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((service, index) => {
                        const fullService = {...service, category: category.id, categoryName: category.name, categoryIcon: category.icon, categoryColor: category.color};
                        const cartService: CartProduct = {
                          id: service.id,
                          name: service.name,
                          description: service.shortDescription,
                          price: "Request Technical Evaluation",
                          features: service.features,
                          operationalEnvelope: {},
                          image: service.image,
                          inStock: true,
                          category: category.id,
                          categoryName: category.name,
                        };
                        return (
                          <ScrollReveal key={service.id} delay={index * 50}>
                            <ServiceCard 
                              service={fullService}
                              isInCart={isInCart(service.id)}
                              onAddToInquiry={() => handleAddToInquiry(cartService)}
                              onViewDetails={() => openServiceDetail(cartService, {
                                riskAddressed: service.riskAddressed,
                                mitigationProtocol: service.mitigationProtocol,
                                digitalOversight: service.digitalOversight,
                                lifecycleImpact: service.lifecycleImpact,
                              })}
                            />
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* No Results */}
        {((solutionMode === "products" && filteredProducts.length === 0) || 
          (solutionMode === "services" && filteredServices.length === 0)) && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No {solutionMode} found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        {/* <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 shadow-xl backdrop-blur-sm">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Custom Technical Requirements?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our engineering team evaluates custom requirements for specific operational 
                envelopes and application conditions not covered by standard {solutionMode}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Submit Technical Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Schedule Engineering Consultation
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal> */}
      </div>

      {/* Product Detail Popup */}
      <ProductDetailPopup
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* Service Detail Popup */}
      <ServiceDetailPopup
        service={selectedService}
        isOpen={isServiceDetailOpen}
        onClose={() => setIsServiceDetailOpen(false)}
        serviceDetails={selectedServiceDetails || undefined}
      />
    </section>
  );
};

// Product Card Component
interface ProductCardProps {
  product: CartProduct;
  isInCart: boolean;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

const ProductCard = ({ product, isInCart, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 border-border/50 overflow-hidden h-full cursor-pointer bg-card" onClick={onViewDetails}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="secondary" className="bg-amber-500/90 text-white border-0">
              Lead Time Required
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md hover:scale-110 transition-transform duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="mb-2">
          <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </CardTitle>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3 leading-relaxed">
          {product.description}
        </CardDescription>

        <div className="flex items-center">
          <Badge variant="outline" className="text-xs font-medium">
            {product.categoryName}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Operational Envelope Preview */}
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold text-foreground mb-2 flex items-center">
            <Activity className="h-3 w-3 mr-1.5 flex-shrink-0" />
            <span>Operational Envelope</span>
          </div>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            {product.operationalEnvelope.pressure && (
              <div className="flex items-start gap-1.5">
                <Gauge className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{product.operationalEnvelope.pressure}</span>
              </div>
            )}
            {product.operationalEnvelope.temperature && (
              <div className="flex items-start gap-1.5">
                <Thermometer className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{product.operationalEnvelope.temperature}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant={isInCart ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                In Cart
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Service Card Component
interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    shortDescription: string;
    riskAddressed: string;
    mitigationProtocol: string;
    digitalOversight: string;
    lifecycleImpact: string;
    features: string[];
    image: string;
    category: string;
    categoryName: string;
    categoryIcon: React.ComponentType<{ className?: string }>;
    categoryColor: string;
  };
  isInCart: boolean;
  onAddToInquiry: () => void;
  onViewDetails: () => void;
}

const ServiceCard = ({ service, isInCart, onAddToInquiry, onViewDetails }: ServiceCardProps) => {
  const IconComponent = service.categoryIcon;
  
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 border-border/50 overflow-hidden h-full cursor-pointer bg-card" onClick={onViewDetails}>
      {/* Service Image */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
          <div className={`w-10 h-10 bg-gradient-to-br ${service.categoryColor} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
            <IconComponent className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md hover:scale-110 transition-transform duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
          {service.name}
        </CardTitle>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-3 leading-relaxed">
          {service.shortDescription}
        </CardDescription>

        <Badge variant="outline" className="text-xs font-medium w-fit">
          {service.categoryName}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant={isInCart ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAddToInquiry();
            }}
          >
            {isInCart ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                In Inquiry
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Add to Inquiry
              </>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionsCatalog;
