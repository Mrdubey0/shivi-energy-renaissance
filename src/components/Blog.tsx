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

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "How Digitalization Reduces Field Emissions in Energy Operations",
    excerpt: "Exploring the transformative power of digital technologies in achieving CO-MBS principles and reducing carbon footprint in energy operations.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Digital Innovation",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Greening Rigless Operations: Minimizing Environmental Footprint",
      excerpt: "A comprehensive guide to implementing sustainable practices in rigless well intervention operations.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "The CO-MBS Framework: A New Standard for Energy Industry",
      excerpt: "Understanding how Carbon and Oxide Must Be Sustainable principles are reshaping energy operations globally.",
      author: "Dr. James Liu",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "CO-MBS",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "AI-Powered Leak Detection: Revolutionary Safety Solutions",
      excerpt: "How artificial intelligence and computer vision are transforming leak detection and safety monitoring in energy facilities.",
      author: "Emma Thompson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Corrosion Management in the Age of Sustainability",
      excerpt: "Balancing asset integrity with environmental responsibility through innovative corrosion management strategies.",
      author: "Robert Kumar",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Case Study: 50% Emission Reduction in Offshore Operations",
      excerpt: "Real-world implementation of CO-MBS principles in offshore drilling operations resulting in significant emission reductions.",
      author: "Dr. Sarah Chen",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c94a?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "CO-MBS", count: 8 },
    { name: "Sustainability", count: 12 },
    { name: "Digital Innovation", count: 6 },
    { name: "Technical", count: 10 },
    { name: "Case Studies", count: 5 },
    { name: "AI & Technology", count: 7 }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Digital Innovation":
      case "AI & Technology":
        return <Lightbulb className="h-4 w-4" />;
      case "Sustainability":
      case "CO-MBS":
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
      case "CO-MBS":
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
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Insights &
            <span className="text-primary"> Industry Trends</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in sustainable energy solutions, 
            CO-MBS principles, and innovative technologies shaping the industry.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge 
              key={category.name}
              variant={category.active ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
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
                  <Button variant="default">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More & Newsletter */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="mb-12">
            Load More Articles
          </Button>
          
          {/* Newsletter Signup */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Energy Insights
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly updates on sustainable energy trends, 
              CO-MBS principles, and industry innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;