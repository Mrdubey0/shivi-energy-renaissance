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
  Globe,
  Wrench,
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BlogDetailPopup from "./BlogDetailPopup";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { useState, useRef, useEffect } from "react";
import { blogPosts, blogCategories } from "@/data/blogs";

export { blogPosts };

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  
  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const totalPages = Math.ceil(remainingPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = remainingPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const scrollToContent = () => {
    setTimeout(() => {
      if (contentSectionRef.current) {
        const headerOffset = 100;
        const element = contentSectionRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
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
      case "AI & Technology":
        return <Lightbulb className="h-4 w-4" />;
      case "Well Operations":
        return <Wrench className="h-4 w-4" />;
      case "Asset Integrity":
        return <Shield className="h-4 w-4" />;
      case "Technical":
        return <BookOpen className="h-4 w-4" />;
      case "Strategy":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Well Operations":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Asset Integrity":
        return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "AI & Technology":
        return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Technical":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Strategy":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <section id="blog" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
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
              <span className="text-xs md:text-sm font-medium text-primary">Thought Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Expert <span className="text-primary">Insights</span>
            </h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto hidden md:block">
              Engineering perspectives on rigless interventions, corrosion management, 
              downhole technologies, AI monitoring & oilfield best practices.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Filter */}
        <ScrollReveal delay={100}>
          <div className="hidden md:flex flex-wrap gap-2 justify-center mb-12">
            {blogCategories.map((category) => (
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
        {featuredPost && (
          <ScrollReveal delay={200}>
            <div className="mb-8 md:mb-16" ref={contentSectionRef}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <ImageWithSkeleton
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-48 object-cover"
                    skeletonClassName="w-full h-48"
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
                  <ImageWithSkeleton
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[300px]"
                    skeletonClassName="h-64 lg:h-auto min-h-[300px]"
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
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <ImageWithSkeleton
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  skeletonClassName="w-full h-48"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); scrollToContent(); }}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => { setCurrentPage(page); scrollToContent(); }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); scrollToContent(); }}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}

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
