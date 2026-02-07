import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const blogPosts = [
  {
    id: 1,
    slug: "digitalization-reduces-field-emissions",
    title: "How Digitalization Reduces Field Emissions in Energy Operations",
    content: "Digital technologies are transforming how energy companies approach emissions reduction. Through real-time monitoring, predictive analytics, and automated control systems, operators can significantly reduce their environmental footprint while improving operational efficiency.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Digital Innovation",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    slug: "greening-rigless-operations",
    title: "Greening Rigless Operations: Minimizing Environmental Footprint",
    content: "Rigless intervention operations offer significant environmental advantages over traditional rig-based approaches. By reducing equipment mobilization and optimizing intervention procedures, operators can minimize their environmental impact.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop"
  }
];

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title={post.title}
        description={post.content.substring(0, 155)}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            image: post.image,
            publisher: {
              "@type": "Organization",
              name: "Shivi Energy Solutions",
            },
          },
        ]}
      />
      <Header />
      <main className="pt-16">
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center"><User className="h-4 w-4 mr-2" />{post.author}</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{post.date}</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-2" />{post.readTime}</span>
            </div>

            <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-xl mb-8" />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">{post.content}</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
