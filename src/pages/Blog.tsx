import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Blog — Technical Insights & Industry Articles"
        description="Technical articles on corrosion management, rigless intervention, well integrity, AI pipeline monitoring, plug & abandonment, and energy sector digital transformation."
        canonical="/blog"
        keywords="oilfield blog, corrosion management articles, rigless intervention insights, well integrity technical, AI pipeline monitoring, energy digital transformation"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <Header />
      <PageBreadcrumb />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
