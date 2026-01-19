import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  User,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Globe
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BlogDetailPopup from "./BlogDetailPopup";
import { useState, useRef } from "react";

export const blogPosts = [
  {
    id: 1,
    slug: "digitalization-reduces-field-emissions",
    title: "How Digitalization Reduces Field Emissions in Energy Operations",
    excerpt: "Exploring the transformative power of digital technologies in achieving operational assurance and reducing carbon footprint in energy operations.",
    content: `
      <p>The energy industry is undergoing a significant transformation as digital technologies reshape how we monitor, manage, and optimize field operations. This shift toward digitalization is not merely about efficiency—it's fundamentally changing our ability to reduce emissions and improve operational safety.</p>
      
      <h2>The Role of Real-Time Monitoring</h2>
      <p>Modern sensor networks provide continuous visibility into equipment performance, enabling operators to detect anomalies before they become critical failures. This proactive approach reduces the need for reactive interventions, which often carry higher environmental costs.</p>
      
      <h2>AI-Powered Predictive Analytics</h2>
      <p>Machine learning algorithms analyze vast amounts of operational data to predict equipment failures and optimize maintenance schedules. By preventing unplanned shutdowns and reducing flaring events, these systems directly contribute to emission reduction targets.</p>
      
      <h2>Digital Twin Technology</h2>
      <p>Virtual replicas of physical assets allow engineers to simulate scenarios and optimize operations without real-world risks. This capability is particularly valuable for testing emission reduction strategies before implementation.</p>
      
      <h2>Measured Outcomes</h2>
      <p>Organizations implementing comprehensive digital solutions have reported 15-30% reductions in operational emissions, alongside improved safety metrics and reduced intervention frequency. The key is integrating these technologies within a structured operational framework that prioritizes measurable outcomes over aspirational goals.</p>
    `,
    author: "Dr. Sarah Chen",
    authorRole: "Digital Systems Director",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Digital Innovation",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    slug: "rigless-operations-environmental-footprint",
    title: "Minimizing Environmental Footprint in Rigless Operations",
    excerpt: "A comprehensive guide to implementing sustainable practices in rigless well intervention operations.",
    content: `
      <p>Rigless intervention represents a significant advancement in well servicing, offering reduced environmental impact compared to traditional rig-based operations. Understanding how to maximize these benefits requires a systematic approach to operational execution.</p>
      
      <h2>Reduced Surface Footprint</h2>
      <p>Coiled tubing and wireline operations require significantly smaller surface footprints than conventional drilling rigs. This reduction directly translates to less habitat disturbance and lower mobilization emissions.</p>
      
      <h2>Operational Efficiency Gains</h2>
      <p>Rigless interventions typically complete 40-60% faster than rig-based alternatives. This time reduction means less fuel consumption, fewer personnel rotations, and reduced exposure hours for field crews.</p>
      
      <h2>Technology Integration</h2>
      <p>Modern rigless units incorporate advanced monitoring systems that optimize operational parameters in real-time. These systems reduce fluid losses, minimize formation damage, and ensure precise tool placement.</p>
      
      <h2>Case Study: Offshore Platform Intervention</h2>
      <p>A recent offshore intervention program demonstrated 35% reduction in operational time and 45% reduction in associated emissions compared to conventional approaches. The key success factor was integrated digital oversight throughout the operation.</p>
    `,
    author: "Michael Rodriguez",
    authorRole: "Field Operations Manager",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    slug: "loca-locus-framework-energy-industry",
    title: "The LOCA-LOCUS Framework: A New Standard for Energy Industry",
    excerpt: "Understanding how Lifecycle Operational Carbon Assessment principles are reshaping energy operations globally.",
    content: `
      <p>The LOCA-LOCUS framework represents a paradigm shift in how the energy industry approaches operational decision-making. Rather than treating environmental considerations as compliance checkboxes, this framework integrates lifecycle assessment into every operational decision.</p>
      
      <h2>Understanding LOCA</h2>
      <p>Lifecycle Operational Carbon Assessment (LOCA) provides a structured methodology for evaluating the total carbon impact of operational decisions. This includes not just direct emissions, but also embedded carbon in materials, transportation, and end-of-life considerations.</p>
      
      <h2>The LOCUS Integration</h2>
      <p>Lifecycle Operational Carbon Unified Scoring (LOCUS) translates LOCA assessments into actionable metrics that operators can use for decision-making. This scoring system enables comparison across different operational approaches and technologies.</p>
      
      <h2>Implementation Considerations</h2>
      <p>Successful implementation requires organizational commitment to data collection and analysis. Companies adopting this framework report that initial setup costs are offset by improved operational efficiency within 12-18 months.</p>
      
      <h2>Industry Adoption</h2>
      <p>Major operators are increasingly incorporating LOCA-LOCUS principles into their operational standards. This industry-wide movement signals a fundamental shift toward accountability-driven execution.</p>
    `,
    author: "Dr. James Liu",
    authorRole: "Sustainability Research Lead",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "LOCA-LOCUS",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    slug: "ai-powered-leak-detection",
    title: "AI-Powered Leak Detection: Safety Verification Systems",
    excerpt: "How artificial intelligence and computer vision are transforming leak detection and safety monitoring in energy facilities.",
    content: `
      <p>Artificial intelligence is revolutionizing how energy facilities approach safety monitoring. Modern AI-powered leak detection systems combine multiple sensor modalities with machine learning to achieve detection rates previously impossible with traditional methods.</p>
      
      <h2>Computer Vision Applications</h2>
      <p>Advanced camera systems equipped with thermal and optical sensors can detect gas leaks invisible to human observers. These systems operate continuously, providing 24/7 surveillance without the fatigue factors that affect human inspectors.</p>
      
      <h2>Machine Learning for Pattern Recognition</h2>
      <p>AI algorithms learn from historical data to distinguish between normal operational variations and genuine leak signatures. This learning capability reduces false positives while maintaining high detection sensitivity.</p>
      
      <h2>Integration with Response Systems</h2>
      <p>Modern detection systems connect directly to emergency response protocols, enabling rapid isolation of affected areas. This integration reduces response times from hours to minutes in many cases.</p>
      
      <h2>Measured Safety Improvements</h2>
      <p>Facilities implementing AI-powered leak detection report 50-70% improvements in detection speed and 40% reductions in leak-related incidents. The human exposure reduction from automated monitoring represents an additional safety benefit.</p>
    `,
    author: "Emma Thompson",
    authorRole: "AI Systems Engineer",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    slug: "corrosion-management-sustainability",
    title: "Corrosion Management in the Age of Operational Assurance",
    excerpt: "Balancing asset integrity with lifecycle impact through innovative corrosion management strategies.",
    content: `
      <p>Corrosion management represents one of the most significant opportunities for reducing operational lifecycle impact in the energy industry. Effective corrosion prevention extends asset life, reduces intervention frequency, and minimizes material consumption over time.</p>
      
      <h2>Predictive Corrosion Monitoring</h2>
      <p>Modern monitoring systems combine electrochemical sensors with AI analytics to predict corrosion progression before visual damage appears. This predictive capability enables proactive intervention rather than reactive replacement.</p>
      
      <h2>Advanced Coating Technologies</h2>
      <p>New coating formulations offer extended protection periods while using less material. Some advanced coatings include self-healing properties that address minor damage before it propagates.</p>
      
      <h2>Cathodic Protection Optimization</h2>
      <p>Intelligent cathodic protection systems adjust output based on real-time environmental conditions. This optimization reduces energy consumption while maintaining effective protection levels.</p>
      
      <h2>Lifecycle Impact Reduction</h2>
      <p>Comprehensive corrosion management programs demonstrate 40-50% reductions in material replacement requirements over asset lifecycle. This reduction directly translates to lower embedded carbon and reduced intervention frequency.</p>
    `,
    author: "Robert Kumar",
    authorRole: "Integrity Management Specialist",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    slug: "case-study-offshore-emission-reduction",
    title: "Case Study: 50% Emission Reduction in Offshore Operations",
    excerpt: "Real-world implementation of operational assurance principles in offshore drilling resulting in significant emission reductions.",
    content: `
      <p>This case study documents the systematic implementation of operational assurance principles across an offshore drilling campaign, resulting in measurable emission reductions and improved operational efficiency.</p>
      
      <h2>Initial Assessment</h2>
      <p>The baseline assessment identified key emission sources including flaring, diesel consumption, and methane slip. Digital monitoring systems were deployed to establish accurate baseline measurements before intervention.</p>
      
      <h2>Intervention Strategy</h2>
      <p>The implementation focused on three primary areas: optimized well design to reduce drilling days, enhanced flare recovery systems, and fuel optimization through dynamic power management.</p>
      
      <h2>Digital Oversight Implementation</h2>
      <p>Real-time monitoring dashboards provided visibility into emission metrics throughout the campaign. This transparency enabled rapid response to anomalies and continuous optimization of operations.</p>
      
      <h2>Measured Outcomes</h2>
      <p>The campaign achieved 52% reduction in CO2-equivalent emissions per well compared to historical averages. Additional benefits included 35% reduction in non-productive time and improved safety performance across all metrics.</p>
      
      <h2>Lessons Learned</h2>
      <p>Key success factors included leadership commitment to measurement-based decision making, integrated digital systems, and structured accountability throughout the operational team.</p>
    `,
    author: "Dr. Sarah Chen",
    authorRole: "Digital Systems Director",
    date: "2024-01-03",
    readTime: "12 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c94a?w=400&h=250&fit=crop"
  }
];

const categories = [
  { name: "All Posts", count: 24, active: true },
  { name: "LOCA-LOCUS", count: 8 },
  { name: "Sustainability", count: 12 },
  { name: "Digital Innovation", count: 6 },
  { name: "Technical", count: 10 },
  { name: "Case Studies", count: 5 },
  { name: "AI & Technology", count: 7 }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const contentSectionRef = useRef<HTMLDivElement>(null);
  
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const scrollToContent = () => {
    if (contentSectionRef.current) {
      const yOffset = -100;
      const element = contentSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    setTimeout(() => scrollToContent(), 100);
  };

  const handleReadMore = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Digital Innovation":
      case "AI & Technology":
        return <Lightbulb className="h-4 w-4" />;
      case "Sustainability":
      case "LOCA-LOCUS":
        return <Globe className="h-4 w-4" />;
      case "Technical":
        return <BookOpen className="h-4 w-4" />;
      case "Case Study":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "LOCA-LOCUS":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Sustainability":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Digital Innovation":
      case "AI & Technology":
        return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Technical":
        return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "Case Study":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <section id="blog" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
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
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
              <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-primary mr-1.5 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-primary">Knowledge Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto hidden md:block">
              Stay updated with the latest developments in operational assurance, 
              LOCA-LOCUS principles, and innovative technologies shaping the industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Filter - Hidden on mobile */}
        <ScrollReveal delay={100}>
          <div className="hidden md:flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge 
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCategoryChange(category.name)}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Post */}
        <ScrollReveal delay={200}>
          <div className="mb-8 md:mb-16" ref={contentSectionRef}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div 
                  className="h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className={`text-xs ${getCategoryColor(featuredPost.category)}`}>
                      {getCategoryIcon(featuredPost.category)}
                      <span className="ml-1">{featuredPost.category}</span>
                    </Badge>
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button variant="default" size="sm" className="w-full" onClick={() => handleReadMore(featuredPost)}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid lg:grid-cols-2 gap-0">
                <div 
                  className="h-64 lg:h-auto min-h-[300px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge className={`mr-3 ${getCategoryColor(featuredPost.category)}`}>
                      {getCategoryIcon(featuredPost.category)}
                      <span className="ml-1">{featuredPost.category}</span>
                    </Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="default" onClick={() => handleReadMore(featuredPost)}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {getCategoryIcon(post.category)}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      onClick={() => handleReadMore(post)}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More */}
        <ScrollReveal>
          <div className="text-center">
            <Button variant="outline" size="lg" className="mb-12">
              Load More Articles
            </Button>
          </div>
        </ScrollReveal>

        {/* Blog Detail Popup */}
        <BlogDetailPopup
          post={selectedPost}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </section>
  );
};

export default Blog;
