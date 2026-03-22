import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { blogPosts } from "@/data/blogs";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title={post.title}
        description={post.excerpt}
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
            author: { "@type": "Organization", name: post.author },
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
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8 flex-wrap">
              <span className="flex items-center"><User className="h-4 w-4 mr-2" />{post.author}</span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{post.date}</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-2" />{post.readTime}</span>
            </div>

            <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-xl mb-8" />

            <div 
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
