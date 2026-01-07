import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ExternalLink, BookOpen, Lightbulb, Globe, TrendingUp } from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  linkedinUrl?: string;
}

interface BlogDetailPopupProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogDetailPopup = ({ post, isOpen, onClose }: BlogDetailPopupProps) => {
  if (!post) return null;

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

  // Default LinkedIn URL - can be customized per post
  const linkedinUrl = post.linkedinUrl || "https://www.linkedin.com/company/your-company";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getCategoryColor(post.category)}>
              {getCategoryIcon(post.category)}
              <span className="ml-1">{post.category}</span>
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold leading-tight">{post.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-4 text-sm pt-2">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
              {post.authorRole && <span className="text-muted-foreground ml-1">• {post.authorRole}</span>}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden my-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* LinkedIn Button */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Read the full article and join the discussion on LinkedIn
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-[#0A66C2] hover:bg-[#004182] text-white"
              onClick={() => window.open(linkedinUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on LinkedIn
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDetailPopup;
