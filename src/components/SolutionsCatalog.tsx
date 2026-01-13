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
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { CartProduct, useCart } from "@/context/CartContext";
import ProductDetailPopup from "./ProductDetailPopup";
import ServiceDetailPopup from "./ServiceDetailPopup";

// Product categories data
const productCategories = [
  {
    id: "downhole-tools",
    name: "Downhole Tools",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    description: "Completion tools, liner hangers, and casing accessories for wellbore operations",
    count: 24,
    products: [
      { 
        id: "completion-tools", 
        name: "Completion Tool Systems", 
        description: "Completion solutions with integrated monitoring for defined wellbore conditions. These advanced systems provide reliable performance in challenging environments, featuring modular designs that can be customized for specific well requirements.",
        price: "Request Technical Evaluation",
        features: ["Condition monitoring", "Corrosion resistant alloys", "Modular configuration"],
        operationalEnvelope: {
          pressure: "15,000 PSI max",
          temperature: "-40°F to 350°F",
          application: "Production zone completion",
          limits: "API 5CT Grade compliance"
        },
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "liner-hangers", 
        name: "Liner Hanger Systems", 
        description: "Mechanical and hydraulic liner hangers for complex well architectures. Designed for superior sealing performance and debris tolerance in demanding downhole conditions.",
        price: "Request Technical Evaluation",
        features: ["Superior sealing", "Debris tolerance", "Field-validated design"],
        operationalEnvelope: {
          pressure: "10,000 PSI working",
          temperature: "Up to 400°F",
          application: "Liner installation and isolation",
          limits: "Size range: 4.5\" - 13.375\""
        },
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "casing-accessories", 
        name: "Casing Accessories", 
        description: "Centralizers, float equipment, and accessories for casing installation integrity. Multiple configurations available for various well conditions and requirements.",
        price: "Request Technical Evaluation",
        features: ["Multiple configurations", "Enhanced durability", "Quick deployment"],
        operationalEnvelope: {
          pressure: "Variable by component",
          temperature: "-40°F to 350°F",
          application: "Casing running and cementing",
          limits: "Formation-specific selection required"
        },
        image: "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "swellable-systems", 
        name: "Swellable Packer Systems", 
        description: "Swellable element packers for zonal isolation without setting tools. Water or oil activated for reliable long-term performance.",
        price: "Request Technical Evaluation",
        features: ["Water/oil activated", "No setting tool required", "Long-term reliability"],
        operationalEnvelope: {
          pressure: "5,000 PSI differential",
          temperature: "Up to 300°F",
          application: "Zonal isolation, annular sealing",
          limits: "Activation time: 6-24 hours"
        },
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: false
      }
    ]
  },
  {
    id: "mills-bits",
    name: "Mills & Bits",
    icon: Wrench,
    color: "from-red-500 to-red-600",
    description: "Milling tools and bits for section cutting, obstruction removal, and wellbore access",
    count: 16,
    products: [
      { 
        id: "section-mills", 
        name: "Section Milling Systems", 
        description: "Full-bore section mills for casing removal and window cutting operations. Optimized cutter geometry ensures consistent cutting rates and efficient debris management.",
        price: "Request Technical Evaluation",
        features: ["Optimized cutter geometry", "Debris management", "Consistent cutting rate"],
        operationalEnvelope: {
          pressure: "N/A - mechanical operation",
          temperature: "Up to 400°F",
          application: "Casing section removal, window cutting",
          limits: "RPM: 40-80, WOB: 2,000-6,000 lbs"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "junk-mills", 
        name: "Junk Mills", 
        description: "Concave and flat-bottom mills for debris and obstruction removal. Tungsten carbide inserts provide high impact resistance.",
        price: "Request Technical Evaluation",
        features: ["Tungsten carbide inserts", "Multiple profiles available", "High impact resistance"],
        operationalEnvelope: {
          pressure: "N/A - mechanical operation",
          temperature: "Up to 400°F",
          application: "Obstruction milling, debris cleanup",
          limits: "Formation-dependent parameters"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565087838865-ad5eb48b30d9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "pilot-mills", 
        name: "Pilot Mills", 
        description: "Pilot and taper mills for controlled wellbore access and re-entry. Precision guidance with gradual taper design.",
        price: "Request Technical Evaluation",
        features: ["Precision guidance", "Gradual taper design", "Controlled material removal"],
        operationalEnvelope: {
          pressure: "N/A - mechanical operation",
          temperature: "Up to 400°F",
          application: "Well re-entry, controlled milling",
          limits: "Controlled RPM for accuracy"
        },
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "monitoring-equipment",
    name: "Monitoring Equipment",
    icon: Monitor,
    color: "from-purple-500 to-purple-600",
    description: "Condition monitoring and surveillance systems for operational verification",
    count: 16,
    products: [
      { 
        id: "corrosion-monitors", 
        name: "Corrosion Monitoring Systems", 
        description: "Continuous corrosion rate monitoring with predictive analytics integration. Real-time data transmission enables proactive maintenance planning.",
        price: "Request Technical Evaluation",
        features: ["Real-time data", "AI analytics integration", "Remote monitoring"],
        operationalEnvelope: {
          pressure: "Sensor rated to 5,000 PSI",
          temperature: "Up to 250°F",
          application: "Pipeline and vessel integrity monitoring",
          limits: "Wireless range: 5km, Data logging: 1 year"
        },
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "leak-detection", 
        name: "Leak Detection Systems", 
        description: "Multi-sensor leak detection with precise location identification. Fast response times for critical safety applications.",
        price: "Request Technical Evaluation",
        features: ["Multi-sensor array", "Precise location", "Fast response"],
        operationalEnvelope: {
          pressure: "Ambient to process conditions",
          temperature: "-20°F to 150°F",
          application: "Facility and pipeline leak monitoring",
          limits: "Detection range: 1-1000 ppm"
        },
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop"
        ],
        inStock: true
      }
    ]
  },
  {
    id: "ai-devices",
    name: "Digital Oversight Systems",
    icon: Cpu,
    color: "from-orange-500 to-orange-600",
    description: "AI and computer vision systems for safety verification and operational oversight",
    count: 12,
    products: [
      { 
        id: "ppe-monitoring", 
        name: "PPE Compliance Verification", 
        description: "Computer vision system for automated safety equipment detection and logging. 99%+ accuracy with cloud integration capabilities.",
        price: "Request Technical Evaluation",
        features: ["Real-time detection", "99%+ accuracy", "Cloud integration"],
        operationalEnvelope: {
          pressure: "N/A - surface system",
          temperature: "-20°F to 120°F operating",
          application: "Facility safety compliance monitoring",
          limits: "Coverage: 50m radius per unit"
        },
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop"
        ],
        inStock: true
      },
      { 
        id: "anomaly-detection", 
        name: "Operational Anomaly Detection", 
        description: "Machine learning system for early detection of operational deviations. Customizable thresholds with predictive alerts.",
        price: "Request Technical Evaluation",
        features: ["Pattern recognition", "Predictive alerts", "Customizable thresholds"],
        operationalEnvelope: {
          pressure: "N/A - analytics system",
          temperature: "N/A - analytics system",
          application: "Process optimization and safety",
          limits: "Integration via API/SDK"
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop"
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
      addToCart(product);
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
      addToCart({ ...service, category: 'service' });
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

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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

        {/* Toggle Button and Search */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Toggle Label */}
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Browse by Category
              </p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                  Click to Switch
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
            
            {/* Toggle */}
            <div className="relative bg-gradient-to-r from-primary/10 via-background to-primary/10 rounded-2xl p-2 border-2 border-primary/30 shadow-xl inline-flex hover:border-primary/50 transition-all duration-300">
              {/* Animated background indicator */}
              <div 
                className={`absolute top-2 bottom-2 w-[calc(50%-4px)] bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-lg transition-all duration-300 ease-out ${
                  solutionMode === "products" ? "left-2" : "left-[calc(50%+2px)]"
                }`}
              />
              <Button
                variant="ghost"
                className={`relative z-10 rounded-xl px-8 md:px-12 py-4 text-base md:text-lg font-semibold transition-all duration-300 ${
                  solutionMode === "products" 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => handleModeChange("products")}
              >
                <Package className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                Products
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "products" 
                    ? "bg-white/20 text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`relative z-10 rounded-xl px-8 md:px-12 py-4 text-base md:text-lg font-semibold transition-all duration-300 ${
                  solutionMode === "services" 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => handleModeChange("services")}
              >
                <Cog className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                Services
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-all ${
                  solutionMode === "services" 
                    ? "bg-white/20 text-primary-foreground" 
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
                    onClick={() => setActiveCategory("all")}
                    size="sm"
                  >
                    All {solutionMode === "products" ? "Products" : "Services"}
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      onClick={() => setActiveCategory(category.id)}
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
          <div className="mb-12">
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
          <div className="mb-12">
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
        <ScrollReveal>
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
        </ScrollReveal>
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
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden h-full cursor-pointer" onClick={onViewDetails}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="secondary" className="bg-amber-500/90 text-white border-0">
              Lead Time Required
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md"
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
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </CardTitle>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </CardDescription>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.categoryName}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Operational Envelope Preview */}
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold text-foreground mb-2 flex items-center">
            <Activity className="h-3 w-3 mr-1" />
            Operational Envelope
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {product.operationalEnvelope.pressure && (
              <div className="flex items-center">
                <Gauge className="h-3 w-3 mr-1" />
                {product.operationalEnvelope.pressure}
              </div>
            )}
            {product.operationalEnvelope.temperature && (
              <div className="flex items-center">
                <Thermometer className="h-3 w-3 mr-1" />
                {product.operationalEnvelope.temperature}
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
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden h-full cursor-pointer" onClick={onViewDetails}>
      {/* Service Image */}
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${service.categoryColor} rounded-lg flex items-center justify-center shadow-md`}>
            <IconComponent className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 shadow-md"
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
        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {service.name}
        </CardTitle>
        
        <CardDescription className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {service.shortDescription}
        </CardDescription>

        <Badge variant="outline" className="text-xs w-fit">
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
